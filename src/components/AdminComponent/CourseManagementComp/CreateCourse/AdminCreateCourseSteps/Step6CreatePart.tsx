import React, { useState, useEffect } from 'react';
import LeftPanel from './LeftPanel';
import { ModuleType, Module, Part } from '../../../../../types/course';
import AssignmentModule from './AssignmentModule';
import ExamModule from './ExamModule';
import ChapterModule from './ChapterModule';
import AttachmentModule from './AttachmentModule';
import Loading from '../../../../Loading';
import {useNavigate } from 'react-router-dom';

interface Step6CreatePartProps {
  handleNext: () => void;
}
const Step6CreatePart: React.FC<Step6CreatePartProps> = ({ handleNext }) => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState<boolean>(false); // State to trigger refetch
  const navigate = useNavigate();
  const handleFinish = ()=>{
    handleNext();
  }

  const courseId = localStorage.getItem('courseId');

  // Fetch course parts from the API when the component mounts or when refetch is triggered
  useEffect(() => {
    if (courseId) {
      fetch(`http://localhost:5000/api/courses/${courseId}/getCourseParts`)
        .then(response => response.json())
        .then(data => {
          setParts(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching course parts:', error);
          setLoading(false);
        });
    }
  }, [courseId, refetch]); // Refetch when the `refetch` state changes

  // Fetch module data when the selected module changes
  useEffect(() => {
    if (selectedModule && courseId) {
      const selectedModuleId = selectedModule.id;
      fetch(`http://localhost:5000/api/courses/${courseId}/getModule/${selectedModuleId}`)
        .then(response => response.json())
        .then(data => {
          setSelectedModule(data); // Update the selected module with fresh data
        })
        .catch(error => {
          console.error('Error fetching selected module:', error);
        });
    }
  }, [selectedModule, courseId]);

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module);
  };

  const handleAddPart = (newPart: Part) => {
    setParts([...parts, newPart]);
  };

  const handleAddModule = (partId: string, newModule: Module) => {
    setParts((prevParts) =>
      prevParts.map((part) =>
        part.id === partId
          ? { 
              ...part, 
              modules: part.modules ? [...part.modules, newModule] : [newModule] 
            }
          : part
      )
    );
  };
  

  const handleSaveModule = () => {
    setRefetch(!refetch); // Trigger refetch after saving the assignment
  };

  const renderModuleContent = (module: Module) => {
    switch (module.type) {
      case ModuleType.ASSIGNMENT:
        return <AssignmentModule moduleId={module.id} partId={module.partId} module={module.assignments[0]} onSave={handleSaveModule} />;
      case ModuleType.EXAM:
        return <ExamModule module={module.exams[0]} onSave={handleSaveModule} />;
      case ModuleType.CHAPTER:
        return <ChapterModule chapter={module.chapters[0]} />;
      case ModuleType.ATTACHMENT:
        return <AttachmentModule module={module.attachments[0]} />;
      default:
        return <p>Select a valid module to view details.</p>;
    }
  };

  return (
    <>
    <div className="flex flex-col space-y-4 bg-white rounded-lg lg:space-x-4 lg:flex-row lg:space-y-0">
      {/* Left Panel */}
      <LeftPanel
        parts={parts}
        onModuleSelect={handleModuleSelect}
        selectedModule={selectedModule}
        onAddPart={handleAddPart}
        onAddModule={handleAddModule}
        onSaveModule={handleSaveModule}
      />

      {/* Right Panel: Module Content */}
      <div className="p-4 bg-white border shadow-sm lg:w-2/3">
        <h1 className="mb-4 text-xl font-semibold">Module Details</h1>
        {loading ? (
          <Loading />
        ) : selectedModule ? (
          renderModuleContent(selectedModule)
        ) : (
          <p className="text-gray-500">Select a module to view details.</p>
        )}
      </div>
     
    </div>
     <div className=' flex justify-end'>
      <button onClick={handleFinish} className='px-4 py-2 font-semibold text-white rounded-md bg-primary'>Finish</button>
     </div>
     </>
  );
};

export default Step6CreatePart;

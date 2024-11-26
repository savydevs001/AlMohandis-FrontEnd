import React, { useState, useEffect } from 'react';
import LeftPanel from './LeftPanel';
import { ModuleType, Module, Part } from '../../../../../types/course';
import AssignmentModule from './AssignmentModule';
import ExamModule from './ExamModule';
import ChapterModule from './ChapterModule';
import AttachmentModule from './AttachmentModule';
import Loading from '../../../../Loading';

const Step6CreatePart: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState(true);

  const courseId = localStorage.getItem('courseId'); 

  // Fetch the course parts from the API when the component mounts
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
  }, [courseId]);

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module);
  };

  const handleAddPart = (newPart: Part) => {
    setParts([...parts, newPart]);
  };

  const handleAddModule = (partId: string, newModule: Module) => {
    setParts((prevParts) =>
      prevParts.map((part) =>
        part.id === partId ? { ...part, modules: [...part.modules, newModule] } : part
      )
    );
  };

  const renderModuleContent = (module: Module) => {
    switch (module.type) {
      case ModuleType.ASSIGNMENT:
        return <AssignmentModule module={module.assignments[0]} />;
      case ModuleType.EXAM:
        return <ExamModule module={module.exams[0]} />;
      case ModuleType.CHAPTER:
        return <ChapterModule chapter={module.chapters[0]} />;
      case ModuleType.ATTACHMENT:
        return <AttachmentModule module={module.attachments[0]} />;
      default:
        return <p>Select a valid module to view details.</p>;
    }
  };

  return (
    <div className="flex p-4 space-x-4">
      {/* Left Panel */}
      <LeftPanel
        parts={parts}
        onModuleSelect={handleModuleSelect}
        selectedModule={selectedModule}
        onAddPart={handleAddPart}
        onAddModule={handleAddModule}
      />

      {/* Right Panel: Module Content */}
      <div className="w-2/3">
        <h1 className="text-xl font-bold mb-4">Module Details</h1>
        {loading ? (
          <Loading/>
        ) : selectedModule ? (
          renderModuleContent(selectedModule)
        ) : (
          <p className="text-gray-500">Select a module to view details.</p>
        )}
      </div>
    </div>
  );
};

export default Step6CreatePart;

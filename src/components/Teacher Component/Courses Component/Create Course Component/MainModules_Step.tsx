import { useState } from 'react';
import AudioEditor from './AudioEditor';
import MainModules_Step_RigthModule from './MainModules_Step_RigthModule';
import MainModules_Step_Season1Module from './MainModules_Step_Season1Module';
import AddModulePopUp from './AddAnotherPopUp'; // Import the popup component
import { Modules } from './CreateCourse';
import Assignment_Step from './Assignment_Step';
import Exam_Step from './Exam_Step';

interface MainModules_StepProps {
  handleBack: () => void;
  handleFinish: () => void;
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: Modules[] }[]>>;
  partContainer: { name: string; value: string; modules: Modules[] }[];
}

const MainModules_Step: React.FC<MainModules_StepProps> = ({ handleFinish, setPartContainer, partContainer }) => {
  const [partNumber, setPartNumber] = useState(1);
  const [mediaFile, setmediaFile] = useState<File | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  const [activeModule, setActiveModule] = useState<{ partIndex: number, moduleIndex: number, lessonIndex?: number } | null>({ partIndex: 0, moduleIndex: 0 });

  const handleFileUpload = (file: File | null) => {
    setmediaFile(file);
  };

  const handleNextModule = () => {
    if (!activeModule) return;

    const { partIndex, moduleIndex } = activeModule;
    const currentPart = partContainer[partIndex];

    if (moduleIndex < currentPart.modules.length - 1) {
      // Move to the next module in the current part
      setActiveModule({ partIndex, moduleIndex: moduleIndex + 1 });
    } else if (partIndex < partContainer.length - 1) {
      // Move to the first module of the next part
      setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0 });
    }
  };

  const handleNextLesson = () => {
    if (!activeModule) return;

    const { partIndex, moduleIndex, lessonIndex } = activeModule;
    const currentModule = partContainer[partIndex].modules[moduleIndex];

    if (lessonIndex !== undefined && lessonIndex < currentModule.lessons!.length - 1) {
      // Move to the next lesson in the current module
      setActiveModule({ partIndex, moduleIndex, lessonIndex: lessonIndex + 1 });
    } else {
      // Move to the next module if no more lessons
      handleNextModule();
    }
  };

  const handleAddLesson = (lessonType: string, chapterName: string) => {
    setPartContainer(prevState => {
      const newPartContainer = [...prevState];
      for (const part of newPartContainer) {
        for (const module of part.modules) {
          if (module.name === 'Chapter' && `${module.name} ${module.number}` === chapterName) {
            if (!module.lessons) {
              module.lessons = [];
            }
            const lessonNumber = module.lessons.filter(lesson => lesson.type === lessonType).length + 1;
            module.lessons.push({ type: lessonType, number: lessonNumber });
            setActiveModule({ partIndex: partContainer.indexOf(part), moduleIndex: part.modules.indexOf(module), lessonIndex: module.lessons.length - 1 });
            break;
          }
        }
      }
      return newPartContainer;
    });
  };

  // Extract the type of the currently active module
  const activeModuleType = activeModule ? partContainer[activeModule.partIndex].modules[activeModule.moduleIndex]?.name : null;

  // Determine if the current module is the last module
  const isLastModule = activeModule
    ? activeModule.partIndex === partContainer.length - 1 && activeModule.moduleIndex === partContainer[activeModule.partIndex].modules.length - 1
    : false;

  // Check if the current chapter has lessons
  const currentChapterHasLessons = activeModule
    ? partContainer[activeModule.partIndex].modules[activeModule.moduleIndex]?.lessons?.length > 0
    : false;

  // Check if the current lesson is the last lesson
  const isLastLesson = activeModule && activeModule.lessonIndex !== undefined &&
    partContainer[activeModule.partIndex].modules[activeModule.moduleIndex].lessons &&
    activeModule.lessonIndex === partContainer[activeModule.partIndex].modules[activeModule.moduleIndex].lessons!.length - 1;

  // Check if there is a next lesson
  const hasNextLesson = activeModule && activeModule.lessonIndex !== undefined &&
    partContainer[activeModule.partIndex].modules[activeModule.moduleIndex].lessons &&
    activeModule.lessonIndex < partContainer[activeModule.partIndex].modules[activeModule.moduleIndex].lessons!.length - 1;


  const handleAddAnother = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        {/* Left Section */}
        <div className='w-[30%] bg-cardBg py-4 px-6 border border-neutral-300'>
          <MainModules_Step_Season1Module setPartContainer={setPartContainer} partContainer={partContainer} partNumber={partNumber} setPartNumber={setPartNumber} activeModule={activeModule} handleFinish={handleFinish}
            setActiveModule={setActiveModule} /> {/* Initial left module */}
        </div>

        {/* Right Section */}
        <div className='flex-1 p-4 border border-neutral-300'>
          {/* Conditionally render components based on the first module type */}
          {activeModuleType === 'Chapter' && (
            <>
              {!currentChapterHasLessons && (
                <div className='flex items-center gap-2 mt-4'>
                  <button
                    className='flex items-center gap-2 px-6 py-2 font-semibold text-white border rounded-lg bg-primary'
                    onClick={handleAddAnother} // Open the popup when clicked
                  >
                    Add Lesson
                  </button>
                </div>
              )}
              {currentChapterHasLessons && (
                <>
                  <MainModules_Step_RigthModule title="Description" handleFileUpload={handleFileUpload} />
                  <AudioEditor mediaFile={mediaFile} />
                  <div className='flex items-center gap-2 mt-4'>
                    <button
                      className='flex items-center gap-2 px-6 py-2 font-semibold text-white border rounded-lg bg-primary'
                      onClick={handleAddAnother} // Open the popup when clicked
                    >
                      Add Lesson
                    </button>
                    {hasNextLesson && (
                      <button
                        className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                        onClick={handleNextLesson}
                      >
                        Next Lesson
                      </button>
                    )}
                    {!hasNextLesson && !isLastModule && (
                      <button
                        className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                        onClick={handleNextModule}
                      >
                        Next Module
                      </button>
                    )}
                    {isLastLesson && isLastModule && (
                      <button
                        className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                        onClick={handleFinish}
                      >
                        Finish Module
                      </button>
                    )}
                  </div>
                </>
              )}
            </>
          )}
          {activeModuleType === 'Assignment' && (
            <Assignment_Step handleNextModule={handleNextModule} isLastModule={isLastModule} handleFinish={handleFinish} handleFileUpload={handleFileUpload} />
          )}
          {activeModuleType === 'Exam' && (
            <Exam_Step handleNextModule={handleNextModule} isLastModule={isLastModule} handleFinish={handleFinish} />
          )}
        </div>
      </div>

      {/* Conditionally render the popup */}
      {isPopupOpen && <AddModulePopUp onAddLesson={handleAddLesson}
        availableChapters={partContainer.flatMap(part => part.modules.filter(module => module.name === 'Chapter').map(module => `${module.name} ${module.number}`))} onClose={handleClosePopup} />}
    </div>
  );
};

export default MainModules_Step;

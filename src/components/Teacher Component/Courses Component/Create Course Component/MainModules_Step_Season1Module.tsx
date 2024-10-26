import { RiDeleteBin6Line } from 'react-icons/ri';
import ModulePopUp from './AddModulePopUp';
import SeasonPopUp from './SeasonPopUp';
import { useState } from 'react';
// import Chapter from './ChaptersModule'; // Import the Chapter component
import { Modules } from './CreateCourse';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaAudioDescription, FaVideo } from 'react-icons/fa6';

interface MainModules_Step_Season1ModuleProps {
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: Modules[] }[]>>;
  partContainer: { name: string; value: string; modules: Modules[] }[];
  partNumber: number;
  setPartNumber: React.Dispatch<React.SetStateAction<number>>;
  activeModule: { partIndex: number, moduleIndex: number, lessonIndex?: number } | null;
  setActiveModule: React.Dispatch<React.SetStateAction<{ partIndex: number, moduleIndex: number, lessonIndex?: number } | null>>;
  handleFinish: () => void;
}

const MainModules_Step_Season1Module: React.FC<MainModules_Step_Season1ModuleProps> = ({ setPartContainer, partContainer, partNumber, setPartNumber, activeModule, setActiveModule, handleFinish }) => {
  const [isModulePopUpOpen, setIsModulePopUpOpen] = useState(false);
  const [isSeasonPopUpOpen, setIsSeasonPopUpOpen] = useState(false);
  const [expandedParts, setExpandedParts] = useState<{ [key: string]: boolean }>({});
  const [expandedChapters, setExpandedChapters] = useState<{ [key: string]: boolean }>({});

  const handleOpenModulePopUp = () => setIsModulePopUpOpen(true);
  const handleCloseModulePopUp = () => setIsModulePopUpOpen(false);
  const handleCloseSeasonPopUp = () => setIsSeasonPopUpOpen(false);
  const handleOpenSeasonPopUp = () => setIsSeasonPopUpOpen(true);

  const togglePartExpansion = (partName: string) => {
    setExpandedParts(prevState => ({
      ...prevState,
      [partName]: !prevState[partName]
    }));
  };

  const toggleChapterExpansion = (chapterName: string) => {
    setExpandedChapters(prevState => ({
      ...prevState,
      [chapterName]: !prevState[chapterName]
    }));
  };

  const handleDeleteModule = (partIndex: number, moduleIndex: number) => {
    setPartContainer(prevState => {
      const newPartContainer = prevState.map((part, pIndex) => {
        if (pIndex === partIndex) {
          return {
            ...part,
            modules: part.modules.filter((_, mIndex) => mIndex !== moduleIndex)
          };
        }
        return part;
      });

      // Check if the deleted module affects the activeModule
      if (activeModule?.partIndex === partIndex) {
        // If the deleted module is after the active one, or it's unrelated, no need to update activeModule
        if (moduleIndex === activeModule.moduleIndex) {
          // If the deleted module is the active one
          const remainingModules = newPartContainer[partIndex].modules;
          
          // Remove backward navigation: only move forward if a next module exists
          if (remainingModules && moduleIndex < remainingModules.length) {
            setActiveModule({ partIndex, moduleIndex, lessonIndex: 0 });
          } else if (partIndex < newPartContainer.length - 1) {
            // Move to the next part if available
            setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
          } else {
            // No next module or part: clear activeModule
            setActiveModule(null);
            handleFinish(); // Call handleFinish if no more modules
          }
        }
        // If the deleted module is before the active module, no need to change activeModule
        else if (moduleIndex < activeModule.moduleIndex) {
          // Adjust the activeModule's moduleIndex if the deleted module is before it
          setActiveModule({
            ...activeModule,
            moduleIndex: activeModule.moduleIndex - 1
          });
        }
      }

      return newPartContainer;
    });
};



const handleDeleteLesson = (partIndex: number, moduleIndex: number, lessonIndex: number) => {
  setPartContainer(prevState => {
    const newPartContainer = prevState.map((part, pIndex) => {
      if (pIndex === partIndex) {
        return {
          ...part,
          modules: part.modules.map((module, mIndex) => {
            if (mIndex === moduleIndex) {
              return {
                ...module,
                lessons: module.lessons?.filter((_, lIndex) => lIndex !== lessonIndex)
              };
            }
            return module;
          })
        };
      }
      return part;
    });

    // Check if the deleted lesson affects the activeModule
    if (activeModule?.partIndex === partIndex && activeModule.moduleIndex === moduleIndex) {
      // If the deleted lesson is after the active one, no need to update activeModule
      if (lessonIndex === activeModule.lessonIndex) {
        // If the deleted lesson is the active one
        const remainingLessons = newPartContainer[partIndex].modules[moduleIndex].lessons;
        
        // Remove backward navigation: only move forward if a next lesson exists
        if (remainingLessons && lessonIndex < remainingLessons.length) {
          setActiveModule({ partIndex, moduleIndex, lessonIndex });
        } else if (moduleIndex < newPartContainer[partIndex].modules.length - 1) {
          // Move to the next module if available
          setActiveModule({ partIndex, moduleIndex: moduleIndex + 1, lessonIndex: 0 });
        } else if (partIndex < newPartContainer.length - 1) {
          // Move to the next part if available
          setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
        } else {
          // No next lesson, module, or part: clear activeModule
          setActiveModule(null);
          handleFinish(); // Call handleFinish if no more lessons or modules
        }
      }
      // If the deleted lesson is before the active lesson and lessonIndex is defined
      else if (activeModule.lessonIndex !== undefined && lessonIndex < activeModule.lessonIndex) {
        // Adjust the activeModule's lessonIndex if the deleted lesson is before it
        setActiveModule({
          ...activeModule,
          lessonIndex: activeModule.lessonIndex - 1
        });
      }
    }

    return newPartContainer;
  });
};




  return (
    <div>
      <div>
        {
          partContainer.length > 0 && partContainer.map((part, partIndex) => (
            <div key={partIndex} className='mb-4'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold'>{part.name}</h3>
                <span className='cursor-pointer' onClick={() => togglePartExpansion(part.name)}>
                  {expandedParts[part.name] ? (
                    <IoIosArrowUp className='text-[#7C7C7C] text-lg' />
                  ) : (
                    <IoIosArrowDown className='text-[#7C7C7C] text-lg' />
                  )}
                </span>
                <RiDeleteBin6Line className="p-1 text-2xl text-red-600 border border-red-600 rounded-sm" />
              </div>
              {expandedParts[part.name] && (
                <div className='ml-4'>
                  {part.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex}>
                      <div
                        className={`mb-2 p-2 ${activeModule?.partIndex === partIndex && activeModule?.moduleIndex === moduleIndex ? 'bg-blue-100' : ''}`}
                      >
                        <div className='flex items-center justify-between'>
                          <p>{module.name} {module.number}</p>
                          {module.name === 'Chapter' && (
                            <span className='cursor-pointer' onClick={() => toggleChapterExpansion(`${partIndex}-${moduleIndex}`)}>
                              {expandedChapters[`${partIndex}-${moduleIndex}`] ? (
                                <IoIosArrowUp className='text-[#7C7C7C] text-lg' />
                              ) : (
                                <IoIosArrowDown className='text-[#7C7C7C] text-lg' />
                              )}
                            </span>
                          )}
                          <RiDeleteBin6Line
                            className="p-1 text-2xl text-red-600 border border-red-600 rounded-sm ml-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteModule(partIndex, moduleIndex);
                            }} />
                        </div>
                      </div>
                      {expandedChapters[`${partIndex}-${moduleIndex}`] && module.lessons && (
          <div className='ml-4'>
            {module.lessons.map((lesson, lessonIndex) => (
              <div
                key={lessonIndex}
                className={`mb-2 p-2 cursor-pointer ${activeModule?.partIndex === partIndex && activeModule?.moduleIndex === moduleIndex && activeModule?.lessonIndex === lessonIndex ? 'bg-blue-100' : ''}`}
                onClick={() => setActiveModule({ partIndex, moduleIndex, lessonIndex })}
              >
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    {lesson.type === 'Audio Lesson' && <FaAudioDescription className='mr-2 text-lg' />}
                    {lesson.type === 'Video Lesson' && <FaVideo className='mr-2 text-lg' />}
                    <p>{lesson.type} {lesson.number}</p>
                  </div>
                  <RiDeleteBin6Line
                    className="p-1 text-2xl text-red-600 border border-red-600 rounded-sm ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteLesson(partIndex, moduleIndex, lessonIndex);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        }
        {/* Static Chapter Component */}
        {/* <div>
          <Chapter chapterName="Chapter 1" onRemove={() => { }} />
          <Chapter chapterName="Chapter 2" onRemove={() => { }} />
        </div> */}

        {/* Add Module and Season Buttons */}
        <div className='mt-4 space-y-2'>
          {/* Button for adding a module */}
          <button onClick={handleOpenModulePopUp} className='px-3 py-2 font-semibold border rounded-lg text-md text-primary border-primary'>
            Add Module <span className='px-2 text-md'>+</span>
          </button>
          {/* Button for adding a season */}
          <button onClick={handleOpenSeasonPopUp} className='px-3 py-2 font-semibold text-white border-2 rounded-lg bg-primary'>
            Add Part <span className='px-2 text-lg'>+</span>
          </button>
        </div>
      </div>

      {isModulePopUpOpen && <ModulePopUp partContainer={partContainer} setPartContainer={setPartContainer} onClose={handleCloseModulePopUp} />}
      {isSeasonPopUpOpen && <SeasonPopUp setPartContainer={setPartContainer} onClose={handleCloseSeasonPopUp} partNumber={partNumber} setPartNumber={setPartNumber} />}
    </div>
  );
}

export default MainModules_Step_Season1Module;

import { RiDeleteBin6Line } from 'react-icons/ri';
import ModulePopUp from './AddModulePopUp';
import SeasonPopUp from './SeasonPopUp';
import { useEffect, useState } from 'react';
import { Modules } from './CreateCourse';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
// import { FaAudioDescription, FaVideo } from 'react-icons/fa6';
import { DeleteResponse } from '../../../../types/courses/createCourse';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Clip } from './MainModules_Step';
import { FaAudioDescription, FaVideo } from 'react-icons/fa6';

interface MainModules_Step_Season1ModuleProps {
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: Modules[] }[]>>;
  partContainer: { name: string; value: string; modules: Modules[] }[];
  partNumber: number;
  setPartNumber: React.Dispatch<React.SetStateAction<number>>;
  activeModule: { partIndex: number, moduleIndex: number, lessonIndex?: number };
  setActiveModule: React.Dispatch<React.SetStateAction<{ partIndex: number, moduleIndex: number, lessonIndex?: number }>>;
  setmediaFile: React.Dispatch<React.SetStateAction<File | null>>;
  setLesson: React.Dispatch<React.SetStateAction<{lessonTitle: string; lessonDescription: string; srcUrl: File | null | string; isPromoted: boolean; isFree: boolean, lessonType: string, clips: Clip[]}>>;
}

const MainModules_Step_Season1Module: React.FC<MainModules_Step_Season1ModuleProps> = ({ setPartContainer, partContainer, partNumber, setPartNumber, activeModule,
  setActiveModule,
  setmediaFile,
  setLesson
}) => {
  const [isModulePopUpOpen, setIsModulePopUpOpen] = useState(false);
  const [isSeasonPopUpOpen, setIsSeasonPopUpOpen] = useState(false);
  const [expandedParts, setExpandedParts] = useState<{ [key: string]: boolean }>({});
  const [expandedChapters, setExpandedChapters] = useState<{ [key: string]: boolean }>({});
  const [loading, setloading] = useState<boolean>(false);

  const handleOpenModulePopUp = () => setIsModulePopUpOpen(true);
  const handleCloseModulePopUp = () => {
    setIsModulePopUpOpen(false);

    // Automatically expand the last added module in the current part
    if (partContainer.length > 0) {
      const lastPart = partContainer[partContainer.length - 1];
      const lastModuleIndex = lastPart.modules.length - 1;

      if (lastModuleIndex >= 0) {
        setExpandedParts(prev => ({
          ...prev,
          [lastPart.name]: true // Expand the part containing the new module
        }));
        setExpandedChapters(prev => ({
          ...prev,
          [`${partContainer.length - 1}-${lastModuleIndex}`]: true // Expand the chapter
        }));

        // Check if the newly added module is a Chapter and expand its lessons
        const lastModule = lastPart.modules[lastModuleIndex];
        if (lastModule.name === 'Chapter') {
          setExpandedChapters(prev => ({
            ...prev,
            [`${partContainer.length - 1}-${lastModuleIndex}`]: true // Expand the chapter
          }));
        }
      }
    }
  };
  const handleCloseSeasonPopUp = () => {
    setIsSeasonPopUpOpen(false);

    // Automatically expand the newly added part
    if (partContainer.length > 0) {
      const lastPart = partContainer[partContainer.length - 1];
      setExpandedParts(prev => ({
        ...prev,
        [lastPart.name]: true // Expand the newly added part
      }));
    }
  };

  useEffect(() => {
    // Automatically expand the last added part and module when partContainer changes
    if (partContainer.length > 0) {
      const lastPart = partContainer[partContainer.length - 1];
      const lastModuleIndex = lastPart.modules.length - 1;

      setExpandedParts(prev => ({
        ...prev,
        [lastPart.name]: true // Expand the part containing the new module
      }));

      if (lastModuleIndex >= 0) {
        setExpandedChapters(prev => ({
          ...prev,
          [`${partContainer.length - 1}-${lastModuleIndex}`]: true // Expand the chapter
        }));
      }
    }
  }, [partContainer]);
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

  // const handleModuleClick = (partIndex: number, moduleIndex: number) => {
  //   // const module = partContainer[partIndex].modules[moduleIndex];
  //   // if (module.name !== 'Chapter') {
  //   //   setActiveModule({ partIndex, moduleIndex });
  //   // }
  //   setActiveModule({ partIndex, moduleIndex });
  // };
  const handleModuleClick = async (partIndex: number, moduleIndex: number) => {
    const selectedModule = partContainer[partIndex].modules[moduleIndex];
    if (selectedModule.name === 'Chapter' && selectedModule.lessons && selectedModule.lessons.length > 0) {
      // Highlight the first lesson of the Chapter module
      setActiveModule({ partIndex, moduleIndex, lessonIndex: 0 });
      setmediaFile(null);
    } else {
      // Highlight the module itself
      setActiveModule({ partIndex, moduleIndex });
      setmediaFile(null);
    } 
  };

  const handleLessonClick = (partIndex: number, moduleIndex: number, lessonIndex: number) => {
    setActiveModule({ partIndex, moduleIndex, lessonIndex });
    setLesson({ lessonTitle: '', lessonDescription: '', srcUrl: 'https://example.com/leson1.mp4', isPromoted: false, isFree: false, lessonType: 'AUDIO', clips: [] });
    setmediaFile(null);
  };

  const handleDeleteModule = async (partIndex: number, moduleIndex: number) => {
    const selectedModule = partContainer[partIndex].modules[moduleIndex];
    if (selectedModule.name === 'Exam') {
      const moduleId = localStorage.getItem(`examId_${partIndex}_${moduleIndex}`);
      if (moduleId) {
        const res: DeleteResponse = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/courses/modules/${moduleId}/EXAM`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
        if (res.data.message) {
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
              // If the deleted module is the active one
              if (moduleIndex === activeModule.moduleIndex) {
                const remainingModules = newPartContainer[partIndex].modules;

                // Move to the next part if available, or go back to the previous module
                if (remainingModules && moduleIndex < remainingModules.length) {
                  setActiveModule({ partIndex, moduleIndex, lessonIndex: 0 });
                } else if (partIndex < newPartContainer.length - 1) {
                  setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
                } else if (moduleIndex > 0) {
                  // Move to the previous module if available
                  setActiveModule({ partIndex, moduleIndex: moduleIndex - 1, lessonIndex: 0 });
                } else {
                  // No previous module: clear activeModule
                  setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
                }
              }
              // If the deleted module is before the active module
              else if (moduleIndex < activeModule.moduleIndex) {
                setActiveModule({
                  ...activeModule,
                  moduleIndex: activeModule.moduleIndex - 1
                });
              }
            }

            return newPartContainer;
          });
          localStorage.removeItem(`examId_${partIndex}_${moduleIndex}`);
          const examCount = localStorage.getItem(`examCount`) || '0';
          localStorage.setItem(`examCount`, `${parseInt(examCount) - 1}`);
        }
      } else {
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
            // If the deleted module is the active one
            if (moduleIndex === activeModule.moduleIndex) {
              const remainingModules = newPartContainer[partIndex].modules;
  
              // Move to the next part if available, or go back to the previous module
              if (remainingModules && moduleIndex < remainingModules.length) {
                setActiveModule({ partIndex, moduleIndex, lessonIndex: 0 });
              } else if (partIndex < newPartContainer.length - 1) {
                setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
              } else if (moduleIndex > 0) {
                // Move to the previous module if available
                setActiveModule({ partIndex, moduleIndex: moduleIndex - 1, lessonIndex: 0 });
              } else {
                // No previous module: clear activeModule
                setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
              }
            }
            // If the deleted module is before the active module
            else if (moduleIndex < activeModule.moduleIndex) {
              setActiveModule({
                ...activeModule,
                moduleIndex: activeModule.moduleIndex - 1
              });
            }
          }
  
          return newPartContainer;
        });
      }
    } else if (selectedModule.name === 'Assignment') {
        const moduleId = localStorage.getItem(`assignmentId_${partIndex}_${moduleIndex}`);
        if (moduleId) {
          console.log('Delete Assignment', moduleId);
          
          const res: DeleteResponse = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/courses/modules/${moduleId}/ASSIGNMENT`, {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`
            }
          });
          if (res.data.message) {
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
                // If the deleted module is the active one
                if (moduleIndex === activeModule.moduleIndex) {
                  const remainingModules = newPartContainer[partIndex].modules;

                  // Move to the next part if available, or go back to the previous module
                  if (remainingModules && moduleIndex < remainingModules.length) {
                    setActiveModule({ partIndex, moduleIndex, lessonIndex: 0 });
                  } else if (partIndex < newPartContainer.length - 1) {
                    setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
                  } else if (moduleIndex > 0) {
                    // Move to the previous module if available
                    setActiveModule({ partIndex, moduleIndex: moduleIndex - 1, lessonIndex: 0 });
                  } else {
                    // No previous module: clear activeModule
                    setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
                  }
                }
                // If the deleted module is before the active module
                else if (moduleIndex < activeModule.moduleIndex) {
                  setActiveModule({
                    ...activeModule,
                    moduleIndex: activeModule.moduleIndex - 1
                  });
                }
              }

              return newPartContainer;
            });
            localStorage.removeItem(`assignmentId_${partIndex}_${moduleIndex}`);
            const assignmentCount = localStorage.getItem(`assignmentCount`) || '0';
            localStorage.setItem(`assignmentCount`, `${parseInt(assignmentCount) - 1}`);
          }
        } else {
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
              // If the deleted module is the active one
              if (moduleIndex === activeModule.moduleIndex) {
                const remainingModules = newPartContainer[partIndex].modules;
  
                // Move to the next part if available, or go back to the previous module
                if (remainingModules && moduleIndex < remainingModules.length) {
                  setActiveModule({ partIndex, moduleIndex, lessonIndex: 0 });
                } else if (partIndex < newPartContainer.length - 1) {
                  setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
                } else if (moduleIndex > 0) {
                  // Move to the previous module if available
                  setActiveModule({ partIndex, moduleIndex: moduleIndex - 1, lessonIndex: 0 });
                } else {
                  // No previous module: clear activeModule
                  setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
                }
              }
              // If the deleted module is before the active module
              else if (moduleIndex < activeModule.moduleIndex) {
                setActiveModule({
                  ...activeModule,
                  moduleIndex: activeModule.moduleIndex - 1
                });
              }
            }
  
            return newPartContainer;
          });
        }
    } else {
      const moduleId = localStorage.getItem(`chapterModule_${partIndex}_${moduleIndex}`);
      if (moduleId) {
        console.log('Delete Chapter', moduleId);
        
        const res: DeleteResponse = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/courses/modules/${moduleId}/CHAPTER`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
        if (res.data.message) {
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
              // If the deleted module is the active one
              if (moduleIndex === activeModule.moduleIndex) {
                const remainingModules = newPartContainer[partIndex].modules;

                // Move to the next part if available, or go back to the previous module
                if (remainingModules && moduleIndex < remainingModules.length) {
                  setActiveModule({ partIndex, moduleIndex, lessonIndex: 0 });
                } else if (partIndex < newPartContainer.length - 1) {
                  setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
                } else if (moduleIndex > 0) {
                  // Move to the previous module if available
                  setActiveModule({ partIndex, moduleIndex: moduleIndex - 1, lessonIndex: 0 });
                } else {
                  // No previous module: clear activeModule
                  setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
                }
              }
              // If the deleted module is before the active module
              else if (moduleIndex < activeModule.moduleIndex) {
                setActiveModule({
                  ...activeModule,
                  moduleIndex: activeModule.moduleIndex - 1
                });
              }
            }

            return newPartContainer;
          });
          localStorage.removeItem(`chapterModule_${partIndex}_${moduleIndex}`);
          const moduleCount = localStorage.getItem(`moduleCount`) || '0';
          localStorage.setItem(`moduleCount`, `${parseInt(moduleCount) - 1}`);
        }
      } else {
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
            // If the deleted module is the active one
            if (moduleIndex === activeModule.moduleIndex) {
              const remainingModules = newPartContainer[partIndex].modules;

              // Move to the next part if available, or go back to the previous module
              if (remainingModules && moduleIndex < remainingModules.length) {
                setActiveModule({ partIndex, moduleIndex, lessonIndex: 0 });
              } else if (partIndex < newPartContainer.length - 1) {
                setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
              } else if (moduleIndex > 0) {
                // Move to the previous module if available
                setActiveModule({ partIndex, moduleIndex: moduleIndex - 1, lessonIndex: 0 });
              } else {
                // No previous module: clear activeModule
                setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
              }
            }
            // If the deleted module is before the active module
            else if (moduleIndex < activeModule.moduleIndex) {
              setActiveModule({
                ...activeModule,
                moduleIndex: activeModule.moduleIndex - 1
              });
            }
          }

          return newPartContainer;
        });
      }
    }
  }

  const handleDeleteLesson = async (partIndex: number, moduleIndex: number, lessonIndex: number) => {
      const lessonId = localStorage.getItem(`lessonId_${partIndex}_${moduleIndex}_${lessonIndex}`);
      if (lessonId) {
        const res: DeleteResponse = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/courses/lessons/${lessonId}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
        if (res.data.message) {
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
              // If the deleted lesson is the active one
              if (lessonIndex === activeModule.lessonIndex) {
                const remainingLessons = newPartContainer[partIndex].modules[moduleIndex].lessons;
      
                // Move to the next module if available, or go back to the previous lesson
                if (remainingLessons && lessonIndex < remainingLessons.length) {
                  setActiveModule({ partIndex, moduleIndex, lessonIndex });
                } else if (moduleIndex < newPartContainer[partIndex].modules.length - 1) {
                  setActiveModule({ partIndex, moduleIndex: moduleIndex + 1, lessonIndex: 0 });
                } else if (partIndex < newPartContainer.length - 1) {
                  setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
                } else if (lessonIndex > 0) {
                  // Move to the previous lesson if available
                  setActiveModule({ partIndex, moduleIndex, lessonIndex: lessonIndex - 1 });
                } else {
                  // No previous lesson: clear activeModule
                  setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
                }
              }
              // If the deleted lesson is before the active lesson
              else if (activeModule.lessonIndex !== undefined && lessonIndex < activeModule.lessonIndex) {
                setActiveModule({
                  ...activeModule,
                  lessonIndex: activeModule.lessonIndex - 1
                });
              }
            }
      
            return newPartContainer;
          });
          localStorage.removeItem(`lessonId_${partIndex}_${moduleIndex}_${lessonIndex}`);
          const lessonCount = localStorage.getItem(`lessonCount`) || '0';
          localStorage.setItem(`lessonCount`, `${parseInt(lessonCount) - 1}`);
        }
      } else {
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
            // If the deleted lesson is the active one
            if (lessonIndex === activeModule.lessonIndex) {
              const remainingLessons = newPartContainer[partIndex].modules[moduleIndex].lessons;
    
              // Move to the next module if available, or go back to the previous lesson
              if (remainingLessons && lessonIndex < remainingLessons.length) {
                setActiveModule({ partIndex, moduleIndex, lessonIndex });
              } else if (moduleIndex < newPartContainer[partIndex].modules.length - 1) {
                setActiveModule({ partIndex, moduleIndex: moduleIndex + 1, lessonIndex: 0 });
              } else if (partIndex < newPartContainer.length - 1) {
                setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
              } else if (lessonIndex > 0) {
                // Move to the previous lesson if available
                setActiveModule({ partIndex, moduleIndex, lessonIndex: lessonIndex - 1 });
              } else {
                // No previous lesson: clear activeModule
                setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
              }
            }
            // If the deleted lesson is before the active lesson
            else if (activeModule.lessonIndex !== undefined && lessonIndex < activeModule.lessonIndex) {
              setActiveModule({
                ...activeModule,
                lessonIndex: activeModule.lessonIndex - 1
              });
            }
          }
    
          return newPartContainer;
        });
      }
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
        // If the deleted lesson is the active one
        if (lessonIndex === activeModule.lessonIndex) {
          const remainingLessons = newPartContainer[partIndex].modules[moduleIndex].lessons;

          // Move to the next module if available, or go back to the previous lesson
          if (remainingLessons && lessonIndex < remainingLessons.length) {
            setActiveModule({ partIndex, moduleIndex, lessonIndex });
          } else if (moduleIndex < newPartContainer[partIndex].modules.length - 1) {
            setActiveModule({ partIndex, moduleIndex: moduleIndex + 1, lessonIndex: 0 });
          } else if (partIndex < newPartContainer.length - 1) {
            setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
          } else if (lessonIndex > 0) {
            // Move to the previous lesson if available
            setActiveModule({ partIndex, moduleIndex, lessonIndex: lessonIndex - 1 });
          } else {
            // No previous lesson: clear activeModule
            setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
          }
        }
        // If the deleted lesson is before the active lesson
        else if (activeModule.lessonIndex !== undefined && lessonIndex < activeModule.lessonIndex) {
          setActiveModule({
            ...activeModule,
            lessonIndex: activeModule.lessonIndex - 1
          });
        }
      }

      return newPartContainer;
    });
  };

  const handleDeletePart = async (partIndexToDelete: number) => {
    console.log('Delete Part', partIndexToDelete + 1);

    try {
      setloading(true);
      const courseId = localStorage.getItem('courseId');
      const partId = localStorage.getItem(`Part ${partIndexToDelete + 1}`);
      const res: DeleteResponse = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      console.log(res);
      
      if (res.data.message) {
        const partName = `Part ${partIndexToDelete + 1}`;
        localStorage.removeItem(partName);
        setPartContainer((prev) => prev.filter((_, index) => index !== partIndexToDelete));
        setPartNumber((prev) => prev - 1);
        setPartContainer(prevState => {
          const newPartContainer = prevState.filter((_, partIndex) => partIndex !== partIndexToDelete);

          // Update activeModule if the deleted part was the active one
          if (activeModule && activeModule.partIndex === partIndexToDelete) {
            if (newPartContainer.length > 0) {
              // Move to the next part if available, or to the previous part
              const newPartIndex = partIndexToDelete < newPartContainer.length ? partIndexToDelete : partIndexToDelete - 1;
              setActiveModule({ partIndex: newPartIndex, moduleIndex: 0, lessonIndex: 0 });
            } else {
              // No parts left: clear activeModule
              setActiveModule({ partIndex: 0, moduleIndex: 0, lessonIndex: 0 });
            }
          } else if (activeModule && activeModule.partIndex > partIndexToDelete) {
            // Adjust activeModule partIndex if necessary
            setActiveModule({
              ...activeModule,
              partIndex: activeModule.partIndex - 1
            });
          }

          return newPartContainer;
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
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
               {<button disabled={loading}><RiDeleteBin6Line onClick={() => handleDeletePart(partIndex)} className="p-1 text-2xl text-red-600 border border-red-600 rounded-sm" /></button>}
              </div>
              {expandedParts[part.name] && (
                <div className='ml-4'>
                  {part.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex}>
                      <div
                        className={`mb-2 p-2 cursor-pointer ${activeModule?.partIndex === partIndex && activeModule?.moduleIndex === moduleIndex ? 'bg-blue-100' : ''}`}
                        onClick={() => handleModuleClick(partIndex, moduleIndex)}
                      >
                        <div className='flex items-center justify-between'>
                          <p>{module.name} {module.number}</p>
                          {module.name === 'Chapter' && (
                           <span className='cursor-pointer' onClick={(e) => { e.stopPropagation(); toggleChapterExpansion(`${partIndex}-${moduleIndex}`); }}>
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
                              onClick={() => handleLessonClick(partIndex, moduleIndex, lessonIndex)}
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

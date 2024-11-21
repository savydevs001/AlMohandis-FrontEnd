import { useEffect, useState } from 'react';
// import AudioEditor from './AudioEditor';
import MainModules_Step_RigthModule from './MainModules_Step_RigthModule';
import MainModules_Step_Season1Module from './MainModules_Step_Season1Module';
import AddModulePopUp from './AddAnotherPopUp'; // Import the popup component
import { Modules } from './CreateCourse';
import Assignment_Step from './Assignment_Step';
import Exam_Step from './Exam_Step';
import axios from 'axios';
import { ChapterReturnResponse, ChapterResponse } from '../../../../types/courses/createCourse';
import Cookies from 'js-cookie';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface MainModules_StepProps {
  handleFinish: () => void;
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: Modules[] }[]>>;
  partContainer: { name: string; value: string; modules: Modules[] }[];
}

export interface Clip {
  start: number;
  end: number;
  title: string;
};

export interface LessonType {
  title: string;
  description: string;
  channel: string;
  link: File | null | string;
  isPromotional: boolean;
  isFree: boolean;
  clips: Clip[];
}

const MainModules_Step: React.FC<MainModules_StepProps> = ({ handleFinish, setPartContainer, partContainer }) => {
  const [partNumber, setPartNumber] = useState(1);
  const [checkType, setCheckType] = useState(false);
  const [lessonType, setLessonType] = useState('VIDEO');
  const [lessons, setLessons] = useState<LessonType[]>([{
    title: '',
    description: '',
    link: 'https://example.com/leson1.mp4',
    isPromotional: false,
    isFree: false,
    channel: 'YOUTUBE',
    clips: []
  }]); // Add this state to manage the list of lessons
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  const [activeModule, setActiveModule] = useState<{ partIndex: number, moduleIndex: number, lessonIndex?: number }>({ partIndex: 0, moduleIndex: 0 });
  const [partId, setPartId] = useState<string | null>(null);
  const [chapterId, setChapterId] = useState<string | null>(null);
  const [assignmentId, setAssignmentId] = useState<string | null>(null);
  const [examId, setExamId] = useState<string | null>(null);
  const [lessonId, setLessonId] = useState<string | null>(null);
  const [chapterModule, setChapterModule] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [lessonData, _] = useState<LessonType>({
    title: '',
    description: '',
    link: 'https://example.com/leson1.mp4',
    isPromotional: false,
    isFree: false,
    channel: 'YOUTUBE',
    clips: []
  });

  const handleLessonChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(e.target.name, e.target.value);
    console.log("Name", e.target.name);
    console.log("Value", e.target.value);
        
    const { name, value, type } = e.target;
    setLessons(prevLessons => {
      const updatedLessons = [...prevLessons];
      if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        updatedLessons[index] = {
          ...updatedLessons[index],
          [name]: checked
        };
      } else {
        updatedLessons[index] = {
          ...updatedLessons[index],
          [name]: value
        };
      }
      return updatedLessons;
    });
  };

  useEffect(() => {
    console.log('useEffect');
    console.log(`Module Id: ${chapterModule}`);
    console.log(assignmentId, examId, lessonId);

    const fetchData = async () => {
      await fetchLesson();
    };
    fetchData();
  }, [activeModule]);

  const fetchLesson = async () => {
    const moduleKey = `chapterModule_${activeModule.partIndex}_${activeModule.moduleIndex}`;
    const moduleId = localStorage.getItem(moduleKey);
    console.log(`Module ID: ${moduleId}`);

    if (moduleId) {
      setChapterModule(moduleId);
      console.log('hello');

      const res: ChapterReturnResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/courses/modules/${moduleId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      
      if (res.data.chapters && res.data.chapters.length > 0 && res.data.chapters[0].lessons) {
        const lessonData = res.data.chapters[0].lessons;
        console.log(lessonData);
        const activeLesson = localStorage.getItem(`lessonId_${activeModule.partIndex}_${activeModule.moduleIndex}_${activeModule.lessonIndex}`);
        const mediaSrcArray = lessonData.map((lesson) => lesson.mediaSrc).flat();
        const actualLesson = mediaSrcArray.filter((lesson) => lesson.lessonId === activeLesson);
        console.log("Actual Lesson"  ,actualLesson);
        if (actualLesson.length > 0) {
          setLessons(actualLesson);
        }

      } else {
        console.error("No chapters or lessons found in response");
      }
    }
  };

  // This useEffect runs once when the component mounts
  useEffect(() => {
    if (activeModule) {
      const { partIndex } = activeModule;
      const storedPartId = localStorage.getItem(`Part ${partIndex + 1}`);
      setPartId(storedPartId);
    }
  }, []);

  useEffect(() => {
    if (activeModule) {
      const { partIndex } = activeModule;
      const partId = localStorage.getItem(`Part ${partIndex + 1}`);
      console.log(`Part ID: ${partId}`);
      setPartId(partId);
    }
  }, [activeModule]);

  const handleNextModule = async () => {
    if (!activeModule) return;
    const { partIndex, moduleIndex } = activeModule;
    const currentPart = partContainer[partIndex];
    setPartId(localStorage.getItem(`Part ${partIndex + 1}`));

    if (moduleIndex < currentPart.modules.length - 1) {
      const nextModule = currentPart.modules[moduleIndex + 1];
      if (nextModule.name === 'Chapter' && nextModule.lessons && nextModule.lessons.length > 0) {
        // Move to the first lesson of the next Chapter module
        setActiveModule({ partIndex, moduleIndex: moduleIndex + 1, lessonIndex: 0 });
      } else {
        // Move to the next module in the current part
        setActiveModule({ partIndex, moduleIndex: moduleIndex + 1 });
      }
    } else if (partIndex < partContainer.length - 1) {
      const nextPart = partContainer[partIndex + 1];
      const firstModule = nextPart.modules[0];
      if (firstModule.name === 'Chapter' && firstModule.lessons && firstModule.lessons.length > 0) {
        // Move to the first lesson of the first Chapter module in the next part
        setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0, lessonIndex: 0 });
      } else {
        // Move to the first module of the next part
        setActiveModule({ partIndex: partIndex + 1, moduleIndex: 0 });
      }
    }
  };

  const handleNextLesson = () => {
    if (!activeModule) return;

    const { partIndex, moduleIndex, lessonIndex } = activeModule;
    const currentModule = partContainer[partIndex].modules[moduleIndex];


    setPartId(localStorage.getItem(`Part ${partIndex + 1}`));

    if (lessonIndex !== undefined && lessonIndex < currentModule.lessons!.length - 1) {
      // Move to the next lesson in the current module
      setActiveModule({ partIndex, moduleIndex, lessonIndex: lessonIndex + 1 });
      const newLesson: LessonType = {
        title: '',
        description: '',
        link: 'https://example.com/leson1.mp4',
        isPromotional: false,
        isFree: false,
        channel: 'YOUTUBE',
        clips: []
      };
      setLessons([newLesson]);
      console.log(lessons);
    } else {
      // Move to the next module if no more lessons
      handleNextModule();
    }
  };

  const handleAddLesson = (lessonType: string, chapterName: string) => {
    setCheckType(lessonType === 'Video Lesson');
    const type = lessonType === 'Video Lesson' ? 'VIDEO' : 'AUDIO';
    setLessonType(type);
    setPartContainer(prevState => {
      const newPartContainer = [...prevState];

      // Get the currently active part by partIndex
      const activePart = newPartContainer[activeModule!.partIndex];

      for (const module of activePart.modules) {
        // Ensure the module is a chapter and matches the given chapterName
        if (module.name === 'Chapter' && `${module.name} ${module.number}` === chapterName) {
          if (!module.lessons) {
            module.lessons = [];
          }

          // Add the new lesson only to the active part's chapter
          const lessonNumber = module.lessons.filter(lesson => lesson.type === lessonType).length + 1;
          module.lessons.push({ type: lessonType, number: lessonNumber });

          // Check if the chapter module contains any lessons
          if (module.lessons.length === 1) {
            // Highlight the newly added lesson if it's the first lesson
            setActiveModule({ partIndex: activeModule!.partIndex, moduleIndex: activePart.modules.indexOf(module), lessonIndex: 0 });
          }
          break;
        }
      }

      return newPartContainer;
    });
  };


  // Extract the type of the currently active module
  const activeModuleType = activeModule ? partContainer[activeModule.partIndex].modules[activeModule.moduleIndex]?.name : null;

  // Helper to get the active module safely
  const getActiveModule = () => {
    return activeModule
      ? partContainer[activeModule.partIndex]?.modules[activeModule.moduleIndex]
      : null;
  };

  // Determine if the current module is the last one in its part
  const isLastModule = activeModule
    ? activeModule.partIndex === partContainer.length - 1 &&
    activeModule.moduleIndex === partContainer[activeModule.partIndex].modules.length - 1
    : false;

  // Check if the current chapter has lessons
  const currentChapterHasLessons = Boolean(getActiveModule()?.lessons?.length);

  // Check if the current lesson is the last lesson
  const isLastLesson = activeModule?.lessonIndex !== undefined &&
    getActiveModule()?.lessons &&
    activeModule.lessonIndex === getActiveModule()!.lessons!.length - 1;

  // Check if there is a next lesson
  const hasNextLesson = activeModule?.lessonIndex !== undefined &&
    getActiveModule()?.lessons &&
    activeModule.lessonIndex < getActiveModule()!.lessons!.length - 1;

  // Get active chapters in the part as formatted names
  const activePartChapters = activeModule
    ? partContainer[activeModule.partIndex].modules
      .filter((_, index) => index === activeModule.moduleIndex && getActiveModule()?.name === 'Chapter')
      .map(module => `${module.name} ${module.number}`)
    : [];

  const handleAddVideo = () => {
    setLessons([...lessons, lessonData]);
  };

  const handleDeleteLesson = (index: number) => {
    setLessons((prevLessons) => prevLessons.filter((_, i) => i !== index));
  };

  const createChapter = async (partIndex: number, moduleIndex: number) => {
    try {
      setLoading(true);
      const chapterCount = localStorage.getItem('chapterCount') ? parseInt(localStorage.getItem('chapterCount')!) : 0;
      const moduleCount = localStorage.getItem('moduleCount') ? parseInt(localStorage.getItem('moduleCount')!) : 0;
      const newChapterName = `Chapter ${chapterCount + 1}`;

      const courseId = localStorage.getItem('courseId');

      const res: ChapterResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/chapter`, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.id) {
        console.log(`Created ${newChapterName} with ID: ${res.data.id}`);
        const chapterKey = `chapterId_${partIndex}_${moduleIndex}`;
        const chapModuleKey = `chapterModule_${partIndex}_${moduleIndex}`;
        localStorage.setItem(chapModuleKey, res.data.moduleId);
        localStorage.setItem('moduleCount', (moduleCount + 1).toString());
        localStorage.setItem(chapterKey, res.data.id);
        localStorage.setItem('chapterCount', (chapterCount + 1).toString());
        setChapterId(res.data.id);
        const newLesson: LessonType = {
          title: '',
          description: '',
          link: 'https://example.com/leson1.mp4',
          isPromotional: false,
          isFree: false,
          channel: 'YOUTUBE',
          clips: []
        };
        setLessons([newLesson]);
      } else {
        console.error('Failed to create chapter');
      }
    } catch (error) {
      console.error('Error creating chapter:', error);
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    const { partIndex, moduleIndex } = activeModule
    if (activeModuleType === 'Chapter' && !currentChapterHasLessons) {
      createChapter(partIndex, moduleIndex);
    }
  }, [activeModuleType, currentChapterHasLessons]);

  const setChapterIdForSelectedModule = (partIndex: number, moduleIndex: number, lessonIndex?: number) => {
    const selectedModule = partContainer[partIndex].modules[moduleIndex];
    console.log(`Selected Module: ${selectedModule?.name}, ${selectedModule?.number}`);

    if (selectedModule?.name === 'Chapter') {
      const chapterKey = `chapterId_${partIndex}_${moduleIndex}`;
      const chapterId = localStorage.getItem(chapterKey);
      setChapterId(chapterId);
    } else if (selectedModule?.name === 'Assignment') {
      const assignmentKey = `assignmentId_${partIndex}_${moduleIndex}`;
      const assignmentId = localStorage.getItem(assignmentKey);
      setAssignmentId(assignmentId);
    } else if (selectedModule?.name === 'Exam') {
      const examKey = `examId_${partIndex}_${moduleIndex}`;
      const examId = localStorage.getItem(examKey);
      setExamId(examId);
    } else {
      const lessonKey = `lessonId_${partIndex}_${moduleIndex}_${lessonIndex}`;
      const lessonId = localStorage.getItem(lessonKey);
      setLessonId(lessonId);
    }
  };

  useEffect(() => {
   
    if (activeModule) {
      console.log(`if`);

      const { partIndex, moduleIndex, lessonIndex } = activeModule;
      setChapterIdForSelectedModule(partIndex, moduleIndex, lessonIndex);
    }
  }, [activeModule]);


  const handleSave = async () => {

    console.log(lessonType);
    console.log(lessons);

    try {
      setLoading(true);
      const courseId = localStorage.getItem('courseId');
      const lessonId = localStorage.getItem(`lessonId_${activeModule.partIndex}_${activeModule.moduleIndex}_${activeModule.lessonIndex}`);
      if (lessonId) {
        console.log(lessons);

        await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/courses/lesson/${lessonId}`, {

          mediaSources: lessons
        }, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
      } else {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/chapter/${chapterId}/lesson`, {

          type: lessonType,
          mediaSources: lessons
        }, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });

        if (res.data.id) {
          console.log(`Chapter ID: ${chapterId}. Part Id: ${partId}`);
          const { partIndex, moduleIndex, lessonIndex } = activeModule;
          console.log(`Part Id in Lesson Step: ${partId}`);
          const lessonCount = localStorage.getItem('lessonCount') ? parseInt(localStorage.getItem('lessonCount')!) : 0;
          const newLessonName = `Lesson ${lessonCount + 1}`;
          const lessonKey = `lessonId_${partIndex}_${moduleIndex}_${lessonIndex}`;

          console.log(`Created ${newLessonName} with ID: ${res.data.id}`);
          localStorage.setItem(lessonKey, res.data.id);
          localStorage.setItem('lessonCount', (lessonCount + 1).toString());
          setLessonId(res.data.id);
        } else {
          console.log('Failed to create lesson');
        }
      }
    } catch (error) {
      console.error('Error creating lesson:', error);
    } finally {
      setLoading(false);
    }
    
  }

  const handlefinish = async () => {

    try {
      setLoading(true);
      const courseId = localStorage.getItem('courseId');
      const lessonId = localStorage.getItem(`lessonId_${activeModule.partIndex}_${activeModule.moduleIndex}_${activeModule.lessonIndex}`);
      if (lessonId) {
        await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/courses/lesson/${lessonId}`, {

          mediaSources: lessons
        }, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
      } else {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/chapter/${chapterId}/lesson`, {

          type: lessonType,
          mediaSources: lessons
        }, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });

        if (res.data.id) {
          handleFinish();
        } else {
          console.error('Failed to create lesson');
        }
      }
    } catch (error) {
      console.error('Error creating lesson:', error);
    } finally {
      setLoading(false);
    }
    console.log(chapterId);

  };

  const handleAddAnother = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };
  return (
    <div className='mt-12 h-fit'>
      <div className='flex flex-col max-w-4xl gap-3 mx-auto shadow-2xl lg:flex-row h-fit bg-cardBg'>
        {/* Left Section */}
        <div className='lg:w-[30%] w-full bg-cardBg py-4 px-6 border border-neutral-300'>
          <MainModules_Step_Season1Module setPartContainer={setPartContainer} partContainer={partContainer} partNumber={partNumber} setPartNumber={setPartNumber} activeModule={activeModule}
            setActiveModule={setActiveModule}
            setLessons={setLessons}
          /> {/* Initial left module */}
        </div>

        {/* Right Section */}
        <div className='flex-1 p-4 border border-neutral-300'>
          {/* Conditionally render components based on the first module type */}
          {activeModuleType === 'Chapter' && !loading && (
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
                  {lessons.map((lesson, index) => (
                   <div key={index}>
                   {lessons.length > 1 && (
                     <button
                       disabled={loading}
                       onClick={() => handleDeleteLesson(index)}
                     >
                       <AiOutlineCloseCircle className="text-red-600" />
                     </button>
                   )}
                   <MainModules_Step_RigthModule
                     lesson={lesson}
                     index={index}
                     handleLessonChange={handleLessonChange}
                     setLessons={setLessons}
                     activeModule={activeModule}
                   />
                   {/* <AudioEditor mediaFile={mediaFile} setLesson={setLesson} lessonClips={lesson.clips} /> */}
                 </div>

                  ))}

                  <div className='flex flex-wrap items-center gap-2 mt-4'>
                    <button
                      className='flex items-center gap-2 px-6 py-2 font-semibold text-white border rounded-lg bg-primary'
                      onClick={handleAddAnother} // Open the popup when clicked
                      disabled={loading}
                    >
                      Add Lesson
                    </button>
                    {checkType && <button onClick={handleAddVideo} className='flex items-center gap-2 px-6 py-2 font-semibold text-white border rounded-lg bg-primary'>Add Video</button>}
                    {hasNextLesson && (
                      <>
                        <button
                          className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                          onClick={handleNextLesson}
                          disabled={loading}
                        >
                          Next Lesson
                        </button>
                        <button
                          className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                          onClick={handleSave}
                          disabled={loading}
                        >
                          Save
                        </button>

                      </>
                    )}
                    {!hasNextLesson && !isLastModule && (
                      <>
                        <button
                          className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                          onClick={handleNextModule}
                          disabled={loading}
                        >
                          Next Module
                        </button>
                        <button
                          className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                          onClick={handleSave}
                          disabled={loading}
                        >
                          Save
                        </button>
                      </>
                    )}
                    {isLastLesson && isLastModule && (
                      <>
                        <button
                          className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                          onClick={handlefinish}
                          disabled={loading}
                        >
                          Finish Module
                        </button>
                        <button
                          className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                          onClick={handleSave}
                          disabled={loading}
                        >
                          Save
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
          {activeModuleType === 'Assignment' && (
            <Assignment_Step handleNextModule={handleNextModule} isLastModule={isLastModule} handleFinish={handleFinish} partId={partId} activeModule={activeModule} setAssignmentId={setAssignmentId} />
          )}
          {activeModuleType === 'Exam' && (
            <Exam_Step handleNextModule={handleNextModule} isLastModule={isLastModule} handleFinish={handleFinish} partId={partId} activeModule={activeModule} setExamId={setExamId} />
          )}
        </div>
      </div>

      {/* Conditionally render the popup */}
      {isPopupOpen && <AddModulePopUp onAddLesson={handleAddLesson}
        availableChapters={activePartChapters} onClose={handleClosePopup} />}
    </div>
  );
};

export default MainModules_Step;

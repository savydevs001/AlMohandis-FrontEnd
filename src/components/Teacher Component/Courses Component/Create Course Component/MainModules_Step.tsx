import { useEffect, useState } from 'react';
import AudioEditor from './AudioEditor';
import MainModules_Step_RigthModule from './MainModules_Step_RigthModule';
import MainModules_Step_Season1Module from './MainModules_Step_Season1Module';
import AddModulePopUp from './AddAnotherPopUp'; // Import the popup component
import { Modules } from './CreateCourse';
import Assignment_Step from './Assignment_Step';
import Exam_Step from './Exam_Step';
import axios from 'axios';
import { ChapterResponse } from '../../../../types/courses/createCourse';
import Cookies from 'js-cookie';

interface MainModules_StepProps {
  handleBack: () => void;
  handleFinish: () => void;
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: Modules[] }[]>>;
  partContainer: { name: string; value: string; modules: Modules[] }[];
}

export interface Clip {
  start: number;
  end: number;
  title: string;
};

const MainModules_Step: React.FC<MainModules_StepProps> = ({ handleFinish, setPartContainer, partContainer }) => {
  const [partNumber, setPartNumber] = useState(1);
  const [mediaFile, setmediaFile] = useState<File | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  const [activeModule, setActiveModule] = useState<{ partIndex: number, moduleIndex: number, lessonIndex?: number } | null>({ partIndex: 0, moduleIndex: 0 });
  const [partId, setPartId] = useState<string | null>(null);
  const [chapterId, setChapterId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [lesson, setLesson] = useState<{ lessonTitle: string, lessonDescription: string, srcUrl: File | null | string, isPromoted: boolean, isFree: boolean, lessonType: string, clips: Clip[] }>({
    lessonTitle: '',
    lessonDescription: '',
    srcUrl: 'https://example.com/leson1.mp4',
    isPromoted: false,
    isFree: false,
    lessonType: 'AUDIO',
    clips: [{ start: 0, end: 5, title: 'Clip 1' }]
  });

  const handleLessonChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setLesson(prevLesson => ({
        ...prevLesson,
        [name]: checked
      }));
    } else {
      setLesson(prevLesson => ({
        ...prevLesson,
        [name]: value
      }));
    }
  };

  const handleFileUpload = (file: File | null) => {
    setmediaFile(file);
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

    setLoading(true);
    
    setPartId(localStorage.getItem(`Part ${partIndex + 1}`));

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


    setPartId(localStorage.getItem(`Part ${partIndex + 1}`));

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

          // Update active module to reflect the newly added lesson
          setActiveModule({ partIndex: activeModule!.partIndex, moduleIndex: activePart.modules.indexOf(module), lessonIndex: module.lessons.length - 1 });
          break;
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

  const activePartChapters = activeModule
    ? partContainer[activeModule.partIndex].modules
      .filter((module, index) => index === activeModule.moduleIndex && module.name === 'Chapter')
      .map(module => `${module.name} ${module.number}`)
    : [];

  const createChapter = async () => {
    try {
      setLoading(true);
      const chapterCount = localStorage.getItem('chapterCount') ? parseInt(localStorage.getItem('chapterCount')!) : 0;
      const newChapterName = `Chapter ${chapterCount + 1}`;

      const courseId = localStorage.getItem('courseId');

      const res: ChapterResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/chapter`, {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.id) {
        console.log(`Created ${newChapterName} with ID: ${res.data.id}`);
        localStorage.setItem(`chapterId_${newChapterName}`, res.data.id);
        localStorage.setItem('chapterCount', (chapterCount + 1).toString());
        setChapterId(res.data.id);
        alert('Chapter created successfully');
      } else {
        alert('Failed to create chapter');
      }
    } catch (error) {
      console.error('Error creating chapter:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeModuleType === 'Chapter' && !currentChapterHasLessons) {
      createChapter();
    }
  }, [activeModuleType, currentChapterHasLessons]);

  useEffect(() => {
    if (activeModuleType === 'Chapter') {
      const chapterCount = localStorage.getItem('chapterCount') ? parseInt(localStorage.getItem('chapterCount')!) : 0;
      for (let i = 1; i <= chapterCount; i++) {
        setChapterId(localStorage.getItem(`chapterId_Chapter ${i}`));
        
      }
    }
    console.log(chapterId);
    
  }, [activeModuleType]);

  const validateForm = () => {
    return lesson.lessonTitle.length > 0 && lesson.lessonDescription.length > 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      alert('Please fill all the fields');
      return;
    }
    console.log(chapterId);
    
    try {
      setLoading(true);
      const courseId = localStorage.getItem('courseId');
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/chapter/${chapterId}/lesson`, {
        title: lesson.lessonTitle,
        description: lesson.lessonDescription,
        srcUrl: "https://example.com/leson1.mp4",
        isPromoted: lesson.isPromoted,
        isFree: lesson.isFree,
        type: lesson.lessonType,
        clips: lesson.clips
      }, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });

      if (res.data.id) {
        alert('Lesson created successfully');
        setLesson({
          lessonTitle: '',
          lessonDescription: '',
          srcUrl: null,
          isPromoted: false,
          isFree: false,
          lessonType: 'AUDIO',
          clips: [{ start: 0, end: 5, title: 'Clip 1' }]
        });
      } else {
        alert('Failed to create lesson');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
    
  }

  const handlefinish = async () => {
    if (!validateForm()) {
      alert('Please fill all the fields');
      return;
    }
    try {
      setLoading(true);
      const courseId = localStorage.getItem('courseId');
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/chapter/${chapterId}/lesson`, {
        title: lesson.lessonTitle,
        description: lesson.lessonDescription,
        srcUrl: 'https://example.com/leson1.mp4',
        isPromoted: lesson.isPromoted,
        isFree: lesson.isFree,
        type: lesson.lessonType,
        clips: lesson.clips
      }, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });

      if (res.data.id) {
        alert('Lesson created successfully');
        setLesson({
          lessonTitle: '',
          lessonDescription: '',
          srcUrl: null,
          isPromoted: false,
          isFree: false,
          lessonType: 'AUDIO',
          clips: [{ start: 0, end: 5, title: 'Clip 1' }]
        });
        handleFinish();
      } else {
        alert('Failed to create lesson');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
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
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        {/* Left Section */}
        <div className='w-[30%] bg-cardBg py-4 px-6 border border-neutral-300'>
          <MainModules_Step_Season1Module setPartContainer={setPartContainer} partContainer={partContainer} partNumber={partNumber} setPartNumber={setPartNumber} activeModule={activeModule} 
            // handleFinish={handleFinish}
            // setActiveModule={setActiveModule} 
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
                  <MainModules_Step_RigthModule handleLessonChange={handleLessonChange} lesson={lesson} handleFileUpload={handleFileUpload} />
                  <AudioEditor mediaFile={mediaFile} setLesson={setLesson} />
                  <div className='flex items-center gap-2 mt-4'>
                    <button
                      className='flex items-center gap-2 px-6 py-2 font-semibold text-white border rounded-lg bg-primary'
                      onClick={handleAddAnother} // Open the popup when clicked
                      disabled={loading}
                    >
                      Add Lesson
                    </button>
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
                     </button></>
                    )}
                    {!hasNextLesson && !isLastModule && (
                      <button
                        className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                        onClick={handleNextModule}
                        disabled={loading}
                      >
                        Next Module
                      </button>
                    )}
                    {isLastLesson && isLastModule ? (
                      <button
                        className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                        onClick={handlefinish}
                        disabled={loading}
                      >
                        Finish Module
                      </button>
                    ) : (
                      <button
                        className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                        onClick={handleSave}
                        disabled={loading}
                      >
                        Save
                      </button>
                    )}
                  </div>
                </>
              )}
            </>
          )}
          {activeModuleType === 'Assignment' && (
            <Assignment_Step handleNextModule={handleNextModule} isLastModule={isLastModule} handleFinish={handleFinish} handleFileUpload={handleFileUpload} partId={partId} />
          )}
          {activeModuleType === 'Exam' && (
            <Exam_Step handleNextModule={handleNextModule} isLastModule={isLastModule} handleFinish={handleFinish} partId={partId} />
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

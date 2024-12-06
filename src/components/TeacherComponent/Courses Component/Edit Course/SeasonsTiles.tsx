import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdAudiotrack } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import AssignementsFields from './AssignementsFields';
import { AudioLessonPopup } from './EditCoursePopUps/AudioEditpopUp';
import { VideoLessonPopup } from './EditCoursePopUps/VideoLessonPopUp';
import { Part } from '../../../../types/course';
import axios from 'axios';



function SeasonsTiles({ courseId }: { courseId: string }) {
  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourseParts = async () => {
      try {
        if (!courseId) {
          console.error('Course ID not found');
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/courses/${courseId}/getCourseParts`
        );
        // console.log(response.data);

        setParts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course parts:', error);
        setLoading(false);
      }
    };

    fetchCourseParts();
  }, [courseId]);

  const handleEditClick = (type: string) => {
    setActivePopup(type);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="lg:w-[70%] w-full mt-6 space-y-2">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold">Course</h5>
        <RiDeleteBin6Line className="p-1 text-2xl text-red-600 border border-red-600 rounded-md" />
      </div>

      {parts.map((part) =>
  part.modules
    .filter((module) => module.type === 'CHAPTER') // Filter only CHAPTER modules
    .map((module) =>
      module.chapters.map((chapter, chapterIndex) => (
        <div key={chapter.id} className="space-y-2">
          <div className="flex items-center justify-between px-4 py-2 text-white rounded-md bg-primary">
            <h4>Chapter {chapterIndex + 1}</h4>
            <h4>Total Lessons: {chapter.lessons.length}</h4>
            <RiDeleteBin6Line className="p-1 text-2xl text-red-600 border border-red-600 rounded-md" />
          </div>

          {chapter.lessons.map((lesson, lessonIndex) => (
            <div key={lesson.id} className="space-y-2">
              <div className="flex items-center justify-between px-6">
                <div className="flex items-center gap-2 text-sm">
                  {lesson?.type === 'AUDIO' ? (
                    <MdAudiotrack />
                  ) : (
                    <IoVideocam />
                  )}
                  <p className="text-sm">
                    {lesson?.type === 'AUDIO'
                      ? `Audio Lesson ${lesson.mediaSrc[0]?.title ||""}`
                      : `Video Lesson ${lesson.mediaSrc[0]?.title ||""}`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p
                    className="text-sm bg-[#FF47AC4F] text-[#FF008C] py-1 px-2 rounded-lg cursor-pointer"
                    onClick={() =>
                      handleEditClick(
                        lesson.mediaSrc[0]?.type === 'AUDIO' ? 'audio' : 'video'
                      )
                    }
                  >
                    Edit
                  </p>
                  <IoIosCloseCircleOutline className="text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))
    )
)}


      <AssignementsFields courseId={courseId} />

      {/* Conditionally render popups */}
      {activePopup === 'audio' && <AudioLessonPopup onClose={handleClosePopup} />}
      {activePopup === 'video' && <VideoLessonPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default SeasonsTiles;

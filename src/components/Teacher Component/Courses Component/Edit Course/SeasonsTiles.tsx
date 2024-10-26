import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdAudiotrack } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import AssignementsFields from './AssignementsFields';
import { AudioLessonPopup } from './EditCoursePopUps/AudioEditpopUp';
import { VideoLessonPopup } from './EditCoursePopUps/VideoLessonPopUp';

function SeasonsTiles() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleEditClick = (type: string) => {
    setActivePopup(type);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="lg:w-[70%] w-full mt-6 space-y-2">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold">Season 1 : Season 1 Title</h5>
        <RiDeleteBin6Line className="p-1 text-2xl text-red-600 border border-red-600 rounded-md" />
      </div>
      <div className="flex items-center justify-between px-4 py-2 text-white rounded-md bg-primary">
        <h4>Chapter 1</h4>
        <h4>Lesson 4</h4>
      </div>

      {/* Audio Lesson */}
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-2 text-sm">
          <MdAudiotrack />
          <p className="text-sm">Audio Lesson 1</p>
        </div>
        <div className="flex items-center gap-2">
          <p
            className="text-sm bg-[#FF47AC4F] text-[#FF008C] py-1 px-2 rounded-lg"
            onClick={() => handleEditClick('audio')}
          >
            Edit
          </p>
          <IoIosCloseCircleOutline className="text-red-500" />
        </div>
      </div>

      {/* Video Lesson */}
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-2 text-sm">
          <IoVideocam />
          <p className="text-sm">Video Lesson 1</p>
        </div>
        <div className="flex items-center gap-2">
          <p
            className="text-sm bg-[#FF47AC4F] text-[#FF008C] py-1 px-2 rounded-lg"
            onClick={() => handleEditClick('video')}
          >
            Edit
          </p>
          <IoIosCloseCircleOutline className="text-red-500" />
        </div>
      </div>

      <AssignementsFields />

      {/* Conditionally render popups */}
      {activePopup === 'audio' && <AudioLessonPopup onClose={handleClosePopup} />}
      {activePopup === 'video' && <VideoLessonPopup onClose={handleClosePopup} />}
      {/* Add more conditions for other popups like Assignment, Exam, etc. */}
    </div>
  );
}

export default SeasonsTiles;

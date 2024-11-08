import { useState } from 'react';
import LessonContent from "../Show Content Component/LessonContent";
import VideoPlayer from "./VideoPlayer";

function VideoLessonComponents({ lessonData }: any) {
  console.log(lessonData);
  const [, setSelectedMediaSrc] = useState(null);

  // Function to handle lesson selection
  const handleVideoSelect = (lesson:any) => {
    setSelectedMediaSrc(lesson);
    console.log("Selected mediaSrc ID:", lesson.id); // Log the selected mediaSrc ID
  };

  return (
    <div className="flex flex-col w-full gap-4 mt-7 lg:flex-row">
      <div className="lg:w-[62%] w-full p-2">
        <VideoPlayer 
          lessonData={lessonData} 
          onMediaSrcSelect={handleVideoSelect} // Pass the correct function
        />
      </div>
      <div className="lg:w-[38%] w-full ">
        <LessonContent  /> 
      </div>
    </div>
  );
}

export default VideoLessonComponents;
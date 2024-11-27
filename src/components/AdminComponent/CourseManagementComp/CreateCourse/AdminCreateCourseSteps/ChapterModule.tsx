import React, { useState, useEffect } from "react"; 
import { Chapter, Lesson, LessonType, Clip, MediaSource } from "../../../../../types/course";
import VideoLesson from "./VideoLesson";
import AudioLesson from "./AudioLesson";
import { FaVideo, FaMicrophone } from 'react-icons/fa'; 
import { IoIosCloseCircleOutline } from "react-icons/io";

const ChapterModule: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  console.log(chapter)
  const [lessons, setLessons] = useState<Lesson[]>(chapter.lessons);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0); 

  useEffect(() => {
    setLessons(chapter.lessons); 
    setSelectedLessonIndex(0); 
  }, [chapter]);

  const handleAddLesson = async (type: LessonType) => {
    const newLesson: Lesson = {
      id: `${Date.now()}`, // Unique lesson ID
      type: type,
      chapterId: chapter.id,
      mediaSrc: [] as MediaSource[], // Use MediaSource here
    };

    // API URL
    const url = `http://localhost:5000/api/courses/cm3wz37wt00052mwi62qjxcow/chapter/${chapter.id}/initialize-lesson`;

    // Send POST request to the API to add the lesson
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: type }), // Send the lesson type as JSON
      });

      if (response.ok) {
        // If API call is successful, add the new lesson to the state
        setLessons([...lessons, newLesson]);
      } else {
        console.error("Failed to add lesson");
      }
    } catch (error) {
      console.error("Error while adding lesson:", error);
    }
  };

  const handleLessonChange = (index: number) => {
    setSelectedLessonIndex(index); // Update the selected lesson
  };

  return (
    <div className="mx-auto chapter-container">
      {/* Buttons for adding lessons */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => handleAddLesson(LessonType.VIDEO)}
          className="flex items-center px-5 py-2 text-white transition duration-200 ease-in-out rounded-md font-semibold btn bg-primary hover:bg-[#36857e] text-sm lg:text-md"
        >
          <FaVideo className="mr-2 text-xl" />
          Add Video Lesson
        </button>
        <button
          onClick={() => handleAddLesson(LessonType.AUDIO)}
          className="flex items-center px-5 py-2 text-sm font-semibold transition duration-200 ease-in-out border rounded-lg border-primary btn text-primary lg:text-md"
        >
          <FaMicrophone className="mr-2 text-xl" />
          Add Audio Lesson
        </button>
      </div>

      {/* Lesson Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 space-x-4 lesson-nav">
        {lessons.map((lesson, index) => (
          <button
            key={lesson.id}
            onClick={() => handleLessonChange(index)}
            className={`py-2 px-4 rounded-lg font-medium text-white ${
              selectedLessonIndex === index
                ? "bg-primary shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
            } flex items-center transition duration-200 ease-in-out`}
          >
            {lesson.type === LessonType.VIDEO && <FaVideo className="mr-2 text-lg" />}
            {lesson.type === LessonType.AUDIO && <FaMicrophone className="mr-2 text-lg" />}
            Lesson {index + 1}
          </button>
        ))}
        {/* <IoIosCloseCircleOutline className="ml-2 text-red-500" /> */}
      </div>

      {/* Display selected lesson based on its type */}
      <div className="lesson-container">
        {lessons.length > 0 && (
          <>
            {lessons[selectedLessonIndex].type === LessonType.VIDEO && (
              <VideoLesson lesson={lessons[selectedLessonIndex]} />
            )}
            {lessons[selectedLessonIndex].type === LessonType.AUDIO && (
              <AudioLesson lesson={lessons[selectedLessonIndex]} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChapterModule;

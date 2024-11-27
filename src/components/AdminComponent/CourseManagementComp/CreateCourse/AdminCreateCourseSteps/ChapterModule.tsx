import React, { useState, useEffect } from "react"; 
import { Chapter, Lesson, LessonType, Clip, MediaSource } from "../../../../../types/course";
import VideoLesson from "./VideoLesson";
import AudioLesson from "./AudioLesson";
import { FaVideo, FaMicrophone } from 'react-icons/fa'; 

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
    <div className="chapter-container max-w-4xl mx-auto py-6 px-4 bg-white shadow-lg rounded-lg">
      {/* Buttons for adding lessons */}
      <div className="space-x-4 mb-6 flex justify-center">
        <button
          onClick={() => handleAddLesson(LessonType.VIDEO)}
          className="btn bg-blue-600 text-white py-2 px-5 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out flex items-center"
        >
          <FaVideo className="mr-2 text-xl" />
          Add Video Lesson
        </button>
        <button
          onClick={() => handleAddLesson(LessonType.AUDIO)}
          className="btn bg-green-600 text-white py-2 px-5 rounded-lg shadow-lg hover:bg-green-700 transition duration-200 ease-in-out flex items-center"
        >
          <FaMicrophone className="mr-2 text-xl" />
          Add Audio Lesson
        </button>
      </div>

      {/* Lesson Navigation */}
      <div className="lesson-nav mb-6 flex justify-center space-x-4">
        {lessons.map((lesson, index) => (
          <button
            key={lesson.id}
            onClick={() => handleLessonChange(index)}
            className={`py-2 px-4 rounded-lg font-medium text-white ${
              selectedLessonIndex === index
                ? "bg-blue-600 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400"
            } flex items-center transition duration-200 ease-in-out`}
          >
            {lesson.type === LessonType.VIDEO && <FaVideo className="mr-2 text-lg" />}
            {lesson.type === LessonType.AUDIO && <FaMicrophone className="mr-2 text-lg" />}
            Lesson {index + 1}
          </button>
        ))}
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

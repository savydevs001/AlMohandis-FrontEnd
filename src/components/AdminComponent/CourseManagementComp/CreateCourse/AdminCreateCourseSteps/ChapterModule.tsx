import React, { useState, useEffect } from "react";
import { Chapter, Lesson, LessonType, Clip, Module, MediaSource } from "../../../../../types/course";
import VideoLesson from "./VideoLesson";
import AudioLesson from "./AudioLesson";
import { FaVideo, FaMicrophone } from 'react-icons/fa'; // Import icons for video and audio

const ChapterModule: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [lessons, setLessons] = useState<Lesson[]>(chapter.lessons); // Store lessons of the selected module
  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0); // Track the selected lesson
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [clips, setClips] = useState<Clip[]>([]);

  useEffect(() => {
    setLessons(chapter.lessons); 
    setSelectedLessonIndex(0); 
  }, [chapter]);

  const handleAddLesson = (type: LessonType) => {
    const newLesson: Lesson = {
      id: `${Date.now()}`, // Unique lesson ID
      type: type,
      chapterId: chapter.id,
      mediaSrc: [] as MediaSource[], // Use MediaSource here
    };
    setLessons([...lessons, newLesson]);
  };

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleCreateClip = () => {
    if (videoFile) {
      const newClip: Clip = {
        id: `${Date.now()}`,
        title: `Clip from ${startTime} to ${endTime}`,
        start: startTime,
        end: endTime,
        mediaSrcId: `${Date.now()}`, // Unique clip ID
      };
      setClips([...clips, newClip]);
    }
  };

  const handleVideoTimeUpdate = (
    event: React.ChangeEvent<HTMLInputElement>,
    time: "start" | "end"
  ) => {
    const value = parseFloat(event.target.value);
    if (time === "start") {
      setStartTime(value);
    } else {
      setEndTime(value);
    }
  };

  const handleLessonChange = (index: number) => {
    setSelectedLessonIndex(index); // Update the selected lesson
  };

  return (
    <div className="chapter-container max-w-4xl mx-auto py-6 px-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-6 ">Chapter: {chapter.id}</h2>

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


      {/* Clip Cutting Section */}
      {videoFile && (
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-4 text-gray-700">Clip Editor</h3>
          <div className="mb-4">
            <label className="block text-gray-600">Start Time (seconds):</label>
            <input
              type="number"
              value={startTime}
              onChange={(e) => handleVideoTimeUpdate(e, "start")}
              min="0"
              max={endTime}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">End Time (seconds):</label>
            <input
              type="number"
              value={endTime}
              onChange={(e) => handleVideoTimeUpdate(e, "end")}
              min={startTime}
              max={9999}
              className="border-2 border-gray-300 px-4 py-2 w-full rounded-md"
            />
          </div>
          <button
            onClick={handleCreateClip}
            className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-200 ease-in-out"
          >
            Create Clip
          </button>
        </div>
      )}

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

import React, { useState } from "react";
import {
  Chapter,
  Lesson,
  MediaSource,
  Clip,
  LessonType,
} from "../../../../../types/course";
import VideoLesson from "./VideoLesson"; // Import the video lesson component
import AudioLesson from "./AudioLesson"; // Import the audio lesson component

const ChapterModule: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [lessons, setLessons] = useState<Lesson[]>(chapter.lessons);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [clips, setClips] = useState<Clip[]>([]);

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

  return (
    <div className="chapter-container">
      <h2>Chapter: {chapter.id}</h2>

      {/* Buttons for adding lessons */}
      <button onClick={() => handleAddLesson(LessonType.VIDEO)}>
        Add Video Lesson
      </button>
      <button onClick={() => handleAddLesson(LessonType.AUDIO)}>
        Add Audio Lesson
      </button>

      {/* Video upload input */}
      {lessons.some((lesson) => lesson.type === LessonType.VIDEO) && (
        <div>
          <input type="file" accept="video/*" onChange={handleVideoUpload} />
          {videoFile && <p>Video uploaded: {videoFile.name}</p>}
        </div>
      )}

      {/* Clip Cutting Section */}
      {videoFile && (
        <div>
          <h3>Clip Editor</h3>
          <div>
            <label>Start Time (seconds):</label>
            <input
              type="number"
              value={startTime}
              onChange={(e) => handleVideoTimeUpdate(e, "start")}
              min="0"
              max={endTime}
            />
          </div>
          <div>
            <label>End Time (seconds):</label>
            <input
              type="number"
              value={endTime}
              onChange={(e) => handleVideoTimeUpdate(e, "end")}
              min={startTime}
              max={9999}
            />
          </div>
          <button onClick={handleCreateClip}>Create Clip</button>
        </div>
      )}

      {/* Display lessons based on their type */}
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="lesson-container">
            {lesson.type === LessonType.VIDEO && <VideoLesson lesson={lesson} />}
            {lesson.type === LessonType.AUDIO && <AudioLesson lesson={lesson} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterModule;

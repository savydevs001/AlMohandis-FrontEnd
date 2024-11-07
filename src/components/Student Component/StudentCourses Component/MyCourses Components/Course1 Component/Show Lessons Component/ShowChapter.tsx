import React from 'react';
import { IoVideocam } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ShowLessonHeader from './ShowLessonHeader';

interface ShowChapterProps {
  chapter: {
    id: string;
    name: string; // Chapter name
    lessons: {
      id: string;
      type: 'VIDEO' | 'AUDIO';
      chapterId: string;
      mediaSrc: {
        id: string;
        link: string;
        title: string;
        description: string;
        lessonId: string;
        channel: string;
        isFree: boolean;
        isPromotional: boolean;
      }[];
      duration: string;
    }[];
  };
  currentPart: {
    title: string;
    price: number;
    completionTime: number;
  };
}


const ShowChapter: React.FC<ShowChapterProps> = ({ chapter,currentPart }) => {
  console.log("current chapter");
  console.log(chapter);
  return (
    <div className="p-4 space-y-5 ">
      <ShowLessonHeader head={currentPart.title}/>
      <h2 className="text-xl font-semibold">Chapter Name </h2> 
      {/* Lessons */}
      {chapter.lessons.map((lesson) => (
        <NavLink 
          to={lesson.type === 'VIDEO' ? `/courses/myCourses/videoLesson/${lesson.id}` : `/courses/myCourses/audioLesson/${lesson.id}`} 
          key={lesson.id} 
          className="flex items-center gap-4"
        >
          {lesson.type === 'VIDEO' ? <IoVideocam /> : <IoIosMusicalNotes />}
          <div>
            <h4>{lesson.type === 'VIDEO' ? 'Video Lesson' : 'Audio Lesson'}</h4>
            <p className="flex items-center gap-2 text-xs text-[#7C7C7C]">
              {lesson.type} <li>{lesson.duration}</li>
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ShowChapter;

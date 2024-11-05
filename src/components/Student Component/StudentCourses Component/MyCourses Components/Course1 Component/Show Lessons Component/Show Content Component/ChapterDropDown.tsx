import React, { useState } from 'react';
import { IoVideocam } from "react-icons/io5";

interface Lesson {
  id: number;
  title: string;
  icon: React.ReactNode;
  locked: boolean;
}

const lessons: Lesson[] = [
  { id: 1, title: 'Lesson 1', icon: <IoVideocam />, locked: false },
  { id: 2, title: 'Lesson 2', icon: '🎵', locked: true },
  { id: 3, title: 'Lesson 3', icon: '🎵', locked: true },
];

const ChapterDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md p-4 mx-auto my-4 bg-white shadow-md">
      <div
        className="flex items-center justify-between p-2 text-white bg-teal-500 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">Chapter 1</h2>
        <div className="flex items-center space-x-2">
          <span>{lessons.length} Lessons</span>
          <span>
            {isOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            )}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-3 mt-2">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center p-2 space-x-4 bg-white border divide-gray-200 rounded-lg"
            >
              <span className="mr-2">{lesson.icon}</span>
              <span className="flex-1">{lesson.title}</span>
              {lesson.locked && (
                <span className="text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6-2a4 4 0 100 8h12a4 4 0 100-8h-1m-10 0h1m4 4v-4m0-3a3 3 0 013-3 3 3 0 016 0v3"
                    ></path>
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterDropdown;

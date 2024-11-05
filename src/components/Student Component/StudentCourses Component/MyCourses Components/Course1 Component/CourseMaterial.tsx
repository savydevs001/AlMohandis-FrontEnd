import React, { useState } from 'react';

// Define the type for the active item
type ActiveItem = string | null; // Allow any string for chapters, assignments, etc.

interface CourseMaterialProps {
  course: {
    parts: {
      modules: {
        chapters: {
          id: string;
          type: 'VIDEO' | 'AUDIO';
          duration: string;
          link: string;
          lessons: {
            mediaSrc: string; 
          }[];
        }[];
        assignments: {
          id: string;
          title: string;
          moduleId: string;
          isFree: boolean;
        }[];
        exams: {
          id: string;
          title: string;
        }[];
      }[];
    }[];
  } | null; // Course can be null initially
}

const CourseMaterial: React.FC<CourseMaterialProps> = ({ course }) => {
  const [activeItem, setActiveItem] = useState<ActiveItem>(null); // State to track the active item

  const handleItemClick = (item: ActiveItem) => {
    setActiveItem(item); // Set the clicked item as active
  };

  if (!course) return <div>No course data available.</div>;

  return (
    <div className="flex flex-col items-start w-full p-5 lg:items-center">
      <h1 className="text-start text-xl font-semibold text-[#333333]">Course Material</h1>
      <ul className="text-start text-[#7C7C7C] space-y-3 mt-4 w-[70%] list-disc list-inside">
        {course.parts.map((part) => 
          part.modules.map((module, moduleIndex) => (
            <div key={moduleIndex}>
              {/* Render chapters only if they exist */}
              {module.chapters.length > 0 && (
                <>
                  <h2 className="font-semibold text-lg mt-4">Chapters</h2>
                  {module.chapters.map((chapter, chapterIndex) => (
                    <div key={chapter.id}>
                      {/* Only render chapter if it has lessons */}
                      {chapter.lessons.length > 0 ? (
                        <li
                          className={`w-full cursor-pointer p-2 ${activeItem === `Chapter ${chapterIndex + 1}` ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
                          onClick={() => handleItemClick(`Chapter ${chapterIndex + 1}`)}
                        >
                          Chapter {chapterIndex + 1}
                        </li>
                      ) : (
                        <div className="w-full p-2 text-gray-500">
                          No lessons.
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}
              
              {/* Render assignments only if they exist */}
              {module.assignments.length > 0 && (
                <>
                  <h2 className="font-semibold text-lg mt-4">Assignments</h2>
                  {module.assignments.map((assignment) => (
                    <li
                      key={assignment.id}
                      className={`w-full cursor-pointer p-2 ${activeItem === assignment.title ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
                      onClick={() => handleItemClick(assignment.title)}
                    >
                      {assignment.title.slice(0,20)}.. {assignment.isFree ? "(Free)" : ""}
                    </li>
                  ))}
                </>
              )}

              {/* Render exams only if they exist */}
              {module.exams.length > 0 && (
                <>
                  <h2 className="font-semibold text-lg mt-4">Exams</h2>
                  {module.exams.map((exam, index) => (
                    <li
                      key={`exam-${index}`}
                      className={`w-full cursor-pointer p-2 ${activeItem === exam.title ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
                      onClick={() => handleItemClick(exam.title)}
                    >
                      {exam.title.slice(0, 20)}..
                    </li>
                  ))}
                </>
              )}
            </div>
          ))
        )}
      </ul>
      <div className="flex flex-col items-start justify-center mt-4 space-y-4">
        <div>
          <h1 className="text-xl font-medium text-[#333333]">Assignments</h1>
          <p className="text-xs">Submitted - Reviewed</p>
        </div>
        <h1 className="text-xl font-medium text-[#333333]">Attachment</h1>
        <h1 className="text-xl font-medium text-[#333333]">Grades</h1>
        <h1 className="text-xl font-medium text-[#333333]">Discussion</h1>
      </div>
    </div>
  );
};

export default CourseMaterial;
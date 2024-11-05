import React, { useState } from 'react';

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
  } | null; 
  onItemSelect: (item: string | null, section: string) => void; // Prop for handling chapter selection
  onAssignmentSelect: (assignmentTitle: string) => void; // Prop for handling assignment selection
}

const CourseMaterial: React.FC<CourseMaterialProps> = ({ course, onItemSelect, onAssignmentSelect }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (item: string | null) => {
    setActiveItem(item);
    onItemSelect(item, 'Chapters'); // Notify the parent component about the selected item
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
                  <h2 className="mt-4 text-lg font-semibold">Chapters</h2>
                  {module.chapters.map((chapter, chapterIndex) => (
                    <div key={chapter.id}>
                      {chapter.lessons.length > 0 ? (
                        <li
                          className={`text-xs w-full cursor-pointer p-2 ${activeItem === `Chapter ${chapterIndex + 1}` ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
                          onClick={() => handleItemClick(`Chapter ${chapterIndex + 1}`)}
                          style={{ display: 'block', whiteSpace: 'nowrap' }}
                        >
                          Chapter {chapterIndex + 1}
                        </li>
                      ) : (
                        <div className="w-full p-2 text-gray-500">No lessons.</div>
                      )}
                    </div>
                  ))}
                </>
              )}
              
              {/* Render assignments only if they exist */}
              {module.assignments.length > 0 && (
                <>
                  <h2 className="mt-4 text-lg font-semibold">Assignments</h2>
                  {module.assignments.map((assignment) => (
                    <li
                      key={assignment.id}
                      className={`text-xs w-full cursor-pointer p-2 ${activeItem === assignment.title ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
                      onClick={() => onAssignmentSelect(assignment.title)} // Handle assignment click
                      style={{ display: 'block', whiteSpace: 'nowrap' }}
                    >
                      {assignment.title.slice(0, 20)}.. {assignment.isFree ? "(Free)" : ""}
                    </li>
                  ))}
                </>
              )}

              {/* Render exams only if they exist */}
              {module.exams.length > 0 && (
                <>
                  <h2 className="mt-4 text-lg font-semibold">Exams</h2>
                  {module.exams.map((exam, index) => (
                    <li
                      key={`exam-${index}`}
                      className={`text-xs w-full cursor-pointer p-2 ${activeItem === exam.title ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
                      onClick={() => handleItemClick(exam.title)}
                      style={{ display: 'block', whiteSpace: 'nowrap' }}
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
        
        {course.parts.flatMap(part => part.modules.flatMap(module => module.assignments)).map((assignment) => (
          <div 
            key={assignment.id} 
            className="cursor-pointer" 
            onClick={() => onAssignmentSelect(assignment.title)} // Click handler for bottom assignment section
          >
            <h1 className="text-xl font-medium text-[#333333]">Assignments</h1>
            <p className="text-xs">{assignment.title.slice(0, 20)}.. {assignment.isFree ? "(Free)" : ""}</p>
          </div>
        ))}
        <h1 className="text-xl font-medium text-[#333333]">Attachment</h1>
        <h1 className="text-xl font-medium text-[#333333]">Grades</h1>
        <h1 className="text-xl font-medium text-[#333333]">Discussion</h1>
      </div>
    </div>
  );
};

export default CourseMaterial;

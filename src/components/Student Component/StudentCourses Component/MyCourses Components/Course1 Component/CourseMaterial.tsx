import React, { useState, useEffect } from 'react';
import { Course } from '../../../../../types/course';
interface CourseMaterialProps {
  course: Course | null; 
  onCourseMaterialSelect: (item: string | null) => void; 
}

const CourseMaterial: React.FC<CourseMaterialProps> = ({ course, onCourseMaterialSelect }) => {
  const [activeItem, setActiveItem] = 
  useState<string | null>(null);
  const [chapters, setChapters] = useState<any[]>([]);
  const [assignments, setAssignments] = useState<any[]>([]);
  const [exams, setExams] = useState<any[]>([]);

  const handleItemClick = (item: string | null) => {
    setActiveItem(item);
    onCourseMaterialSelect(item);
  };

  if (!course) return <div>No course data available.</div>;

  useEffect(() => {
    if (course) {
      const filteredChapters = course.parts.flatMap(part => 
        part.modules.filter(module => module.type === 'CHAPTER').flatMap(module => module.chapters)
      );

      const filteredAssignments = course.parts.flatMap(part => 
        part.modules.filter(module => module.type === 'ASSIGNMENT').flatMap(module => module.assignments)
      );

      const filteredExams = course.parts.flatMap(part => 
        part.modules.filter(module => module.type === 'EXAM').flatMap(module => module.exams)
      );

      setChapters(filteredChapters);
      setAssignments(filteredAssignments);
      setExams(filteredExams);
    }
  }, [course]);

  return (
    <div className="flex flex-col items-start w-full p-5 lg:items-center">
      <h1 className="text-start text-xl font-semibold text-[#333333]">Course Material</h1>
      <ul className="text-start text-[#7C7C7C] space-y-3 mt-4 w-[70%] list-disc list-inside">
        <h2 className="mt-4 text-lg font-semibold">Chapters</h2>
        {chapters.map((chapter, index) => (
          <li
            key={chapter.id}
            className={`text-xs w-full cursor-pointer p-2 ${activeItem === `Chapter ${index + 1}` ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
            onClick={() => handleItemClick(`Chapter ${index + 1}`)}
            style={{ display: 'block', whiteSpace: 'nowrap' }}
          >
            Chapter {index + 1}
          </li>
        ))}

        <h2 className="mt-4 text-lg font-semibold">Assignments</h2>
        {assignments.map((assignment) => (
          <li
            key={assignment.id}
            className={`text-xs w-full cursor-pointer p-2 ${activeItem === assignment.title ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
            onClick={() => handleItemClick(assignment.title)}
            style={{ display: 'block', whiteSpace: 'nowrap' }}
          >
            {assignment.title.slice(0, 20)}.. {assignment.isFree ? "(Free)" : ""}
          </li>
        ))}
        <h2 className="mt-4 text-lg font-semibold">Exams</h2>
        {exams.map((exam, index) => (
          <li
            key={`exam-${index}`}
            className={`text-xs w-full cursor-pointer p-2 ${activeItem === exam.title ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
            onClick={() => handleItemClick(exam.title)}
            style={{ display: 'block', whiteSpace: 'nowrap' }}
          >
            {exam.title.slice(0, 20)}..
          </li>
        ))}
      </ul>
      <div className="flex flex-col  items-start justify-center mt-4 space-y-4">
        <h1 className="text-xl font-medium text-[#333333]">Assignments</h1>
        <li
          className="text-xs w-full text-[#333333] cursor-pointer p-2 flex items-center"
          style={{ display: 'block', whiteSpace: 'nowrap' }}
          onClick={() => handleItemClick('View All Assignments')}
        >
          <span className="font-semibold">Submitted</span>
          <span className="mx-1">{'>'}</span> 
          <span className="font-semibold">Review</span>
        </li>
        <h1 className="text-xl font-medium text-[#333333]">Attachment</h1>
        <h1 className="text-xl font-medium text-[#333333]">Grades</h1>
        <h1 className="text-xl font-medium text-[#333333]">Discussion</h1>
      </div>
    </div>
  );
};

export default CourseMaterial;
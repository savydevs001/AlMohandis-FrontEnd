import React, { useState } from 'react';

// Define the type for the active item
type ActiveItem = 'Chapter 1' | 'Chapter 2' | 'Assignment' | 'Chapter 3' | 'Chapter 4' | 'Exam' | null;

const CourseMaterial: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ActiveItem>(null); // State to track the active item

  const handleItemClick = (item: ActiveItem) => {
    setActiveItem(item); // Set the clicked item as active
  };

  return (
    <div className="flex flex-col items-start w-full p-5 lg:items-center">
      <h1 className="text-start text-xl font-semibold text-[#333333]">Course Material</h1>
      <ul className="text-start text-[#7C7C7C] space-y-3 mt-4 w-[70%] list-disc list-inside">
        <li
          className={`w-full p-2 ${activeItem === 'Chapter 1' ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
          onClick={() => handleItemClick('Chapter 1')}
        >
          Chapter 1
        </li>
        <li
          className={`w-full p-2 ${activeItem === 'Chapter 2' ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
          onClick={() => handleItemClick('Chapter 2')}
        >
          Chapter 2
        </li>
        <li
          className={`w-full p-2 ${activeItem === 'Assignment' ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
          onClick={() => handleItemClick('Assignment')}
        >
          Assignment
        </li>
        <li
          className={`w-full p-2 ${activeItem === 'Chapter 3' ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
          onClick={() => handleItemClick('Chapter 3')}
        >
          Chapter 3
        </li>
        <li
          className={`w-full p-2 ${activeItem === 'Chapter 4' ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
          onClick={() => handleItemClick('Chapter 4')}
        >
          Chapter 4
        </li>
        <li
          className={`w-full p-2 ${activeItem === 'Exam' ? 'bg-[#D6D6D654] border-l-4 border-primary' : ''}`}
          onClick={() => handleItemClick('Exam')}
        >
          Exam
        </li>
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

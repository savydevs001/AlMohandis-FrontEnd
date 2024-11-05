import React from 'react';
import ShowAssignment from "./Show Content Component/ShowAssignmentComponent/ShowAssignment";
import ShowChapter from "./ShowChapter";
import ShowLessonHeader from "./ShowLessonHeader";

interface ShowLessonComponentsProps {
  activeSection: string;
}

const ShowLessonComponents: React.FC<ShowLessonComponentsProps> = ({ activeSection }) => {
  return (
    <div className="p-5">
    <ShowLessonHeader />
    {activeSection === "Assignments" ? <ShowAssignment /> : <ShowChapter />} 
  </div>
  );
};

export default ShowLessonComponents;

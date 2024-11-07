import React from 'react';

type CourseObjectivetextProps = {
  text: string;
};

const CourseObjectivetext: React.FC<CourseObjectivetextProps> = ({ text }) => {
  return (
    <div className="flex items-center space-x-4 space-y-5">
      <input type="radio" />
      <p>{text}</p>
    </div>
  );
};

export default CourseObjectivetext;

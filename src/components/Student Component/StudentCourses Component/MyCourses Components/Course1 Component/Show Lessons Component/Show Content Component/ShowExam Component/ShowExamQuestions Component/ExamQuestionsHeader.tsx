import React from 'react';

interface Props {
  title: string;
  remainingTime: string; // Format: "MM:SS"
}

const ExamQuestionsHeader: React.FC<Props> = ({ title, remainingTime }) => {
  return (
    <div className="flex flex-col justify-between space-y-3 lg:items-center lg:flex-row lg:space-y-0">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h5 className="text-xl">
        Remaining Time : <span className="text-2xl text-primary">{remainingTime}</span>
      </h5>
    </div>
  );
}

export default ExamQuestionsHeader;
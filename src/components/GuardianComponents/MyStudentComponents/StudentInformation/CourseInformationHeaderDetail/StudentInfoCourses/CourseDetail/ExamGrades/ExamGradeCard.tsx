import React from 'react';

type Props = {
  onView: () => void; // Add callback prop
};

const ExamGradeCard: React.FC<Props> = ({ onView }) => {
  return (
    <div className="p-4 space-y-1 bg-white shadow-sm w-[100%] rounded-xl">
      <h1 className="text-lg font-semibold">Exam 1</h1>
      <p className="text-pTag">
        Chapter 1 <span>Exam 1</span>
      </p>
      <p className="text-pTag">Submitted on: 10-02-2023</p>
      <h5 className="text-lg text-primary">19/20</h5>
      <button
        className="px-4 py-2 mt-3 font-semibold text-white rounded-md bg-primary"
        onClick={onView} // Trigger the callback
      >
        View
      </button>
    </div>
  );
};

export default ExamGradeCard;



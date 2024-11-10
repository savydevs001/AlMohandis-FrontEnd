// LectureDetailsPopup.tsx
import React from 'react';

type LectureDetailsPopupProps = {
  onClose: () => void;
  data: {
    id: string;
    name: string;
    email: string;
    typeClass: string;
    joiningDate: string;
    coursesEnrolled: number;
  };
};

const LectureDetailsPopup: React.FC<LectureDetailsPopupProps> = ({ onClose, data }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg w-96">
        <h2 className="mb-4 text-xl font-bold">Lecture Details</h2>
        <p><strong>Title:</strong> {data.id}</p>
        <p><strong>Teacher:</strong> {data.name}</p>
        <p><strong>Assistant:</strong> {data.email}</p>
        <p><strong>Date:</strong> {data.typeClass}</p>
        <p><strong>Duration:</strong> {data.joiningDate}</p>
        <p><strong>Attendance:</strong> {data.coursesEnrolled}</p>
        <button
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LectureDetailsPopup;

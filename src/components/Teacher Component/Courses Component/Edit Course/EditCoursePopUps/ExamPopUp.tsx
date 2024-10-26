import React from 'react';

export const ExamPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Edit Exam</h2>
      <p>Edit the details of the exam here...</p>
      <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

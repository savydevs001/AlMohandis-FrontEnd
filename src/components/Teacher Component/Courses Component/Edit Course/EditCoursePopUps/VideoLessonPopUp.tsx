import React from 'react';

export const VideoLessonPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
      <h2 className="mb-4 text-2xl font-semibold">Edit Video Lesson</h2>
      <p className="mb-6 text-gray-600">Here you can edit details about the Video Lesson...</p>
      <button
        className="px-4 py-2 text-white transition rounded bg-primary hover:bg-primary-dark"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

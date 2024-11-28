import React from 'react';

interface DeletePopUpProps {
  onConfirm: () => void; // Function to call when the user confirms the deletion
  onCancel: () => void;  // Function to call when the user cancels the deletion
}

const DeletePopUp: React.FC<DeletePopUpProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-2xl">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">
            Confirm Deletion
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            This action is irreversible. Are you sure you want to delete this course?
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;

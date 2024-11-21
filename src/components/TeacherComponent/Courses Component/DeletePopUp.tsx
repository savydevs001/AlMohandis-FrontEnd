// DeleteConfirmationPopup.tsx
import React from 'react';

interface DeletePopUp {
  onConfirm: () => void; // Function to call when the user confirms the deletion
  onCancel: () => void;  // Function to call when the user cancels the deletion
}

const DeletePopUp: React.FC<DeletePopUp> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-5 space-y-3 bg-white rounded-lg shadow-lg">
        {/* <h2 className="text-lg font-semibold">Are you sure?</h2> */}
        <p className="mt-2 mb-4 text-sm font-semibold">Are You Sure you want to delet the Course?</p>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;

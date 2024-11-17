import React from "react";

interface DeletePopupProps {
  show: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeletePopup: React.FC<DeletePopupProps> = ({ show, onClose, onDelete }) => {
  if (!show) return null; // Don't render if not visible

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="alertdialog"
      aria-labelledby="delete-popup-title"
      aria-describedby="delete-popup-description"
    >
      <div className="p-6 text-center bg-white rounded shadow-md">
     
        <p id="delete-popup-description" className="mb-4">
          Are you sure you want to remove Student?
        </p>
        <div className="space-x-4">
          <button
            onClick={onDelete}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-black bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;

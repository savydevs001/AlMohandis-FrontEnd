// AddStudentPopup.tsx
// import React from 'react';

interface AddStudentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddStudentPopup({ isOpen, onClose }: AddStudentPopupProps) {
  if (!isOpen) return null; // Don't render the popup if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg shadow-lg w-80">
        <h2 className="mb-4 text-lg font-semibold">Add Student</h2>
        
        {/* Add form fields or any content you want here */}
        <input type="text" placeholder="Student Name" className="w-full p-2 mb-4 border rounded" />
        
        <div className="flex justify-end space-x-4">
          <button 
            className="px-4 py-2 font-semibold border rounded-md text-primary border-primary" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 text-white rounded-md bg-primary" 
            onClick={onClose}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddStudentPopup;

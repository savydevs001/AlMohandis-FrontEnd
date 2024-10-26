import React, { useState } from 'react';
import { AddQuestionPopup } from './AddQuestionPopup'; // Import AddQuestionPopup component

export const ExamPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // State to manage visibility of main form or question adding module
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  // Handle showing the question addition module
  const handleAddQuestionClick = () => {
    setShowAddQuestion(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="lg:w-full w-[90%] max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg h-[80%] text-sm">
        {/* Main Form */}
        {!showAddQuestion ? (
          <div>
            <div>
              <input className="w-full py-2 rounded-md" type="text" placeholder="Lesson 1 Title" />
            </div>
            <div className="flex flex-col mt-4 space-y-1">
              <label className="font-semibold" htmlFor="">
                Description
              </label>
              <textarea
                className="rounded-md"
                placeholder="Enter Assignment Description...."
              />
            </div>
            <div>
              <button
                className="px-4 py-2 border rounded-md mt-7 text-primary border-primary"
                onClick={handleAddQuestionClick} // Show the Add Question popup
              >
                Add Question +
              </button>
            </div>
            <div className="space-x-4">
              <button className="px-4 py-2 mt-4 text-white rounded bg-primary" onClick={onClose}>
                Save Changes
              </button>
              <button
                className="px-4 py-2 mt-4 border rounded border-primary text-primary"
                onClick={onClose} // Close the entire form
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          // Show the Add Question module and hide the ExamPopup
          <AddQuestionPopup onClose={onClose} /> // Pass onClose here to close the entire form
        )}
      </div>
    </div>
  );
};

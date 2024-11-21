import React, { useState } from 'react';
import AdminFileInput from '../../../../AdminComponent/Landing/AdminFileInput';

export const AssignmentPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [questions, setQuestions] = useState<{ id: number; question: string }[]>([]); // Array of questions

  const handleAddQuestion = () => {
    const newQuestion = { id: Date.now(), question: '' }; // Create a new question object with a unique ID
    setQuestions([...questions, newQuestion]); // Add the new question to the array
  };

  const handleQuestionChange = (id: number, value: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, question: value } : q // Update the question text for the corresponding ID
      )
    );
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id)); // Remove the question with the specified ID
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center w-full max-w-md gap-4 p-6 bg-white rounded-lg shadow-lg ">

        <div className='w-full'>
          <input type="text" placeholder='Lesson type' className='w-full rounded-md border-slate-300' />
        </div>

        <div className='flex flex-col w-full space-y-1'>
          <label className='font-semibold' htmlFor="">Content Type</label>
          <select className='w-full rounded-md border-slate-300 '>
            <option value="">Assignment</option>
            <option value="">Video Lesson</option>
            <option value="">Attachment</option>
            <option value="">Exam</option>
          </select>
        </div>

        <div className='flex flex-col w-full space-y-1'>
          <label htmlFor="" className='font-semibold'>Total Points</label>
          <input type="text" className='w-[40%] rounded-md border-slate-300' placeholder='Total Points' />
        </div>

        {/* Add Question Section */}
        <div className='flex flex-col w-full space-y-1'>
          <label htmlFor="text" className='font-semibold'>Questions</label>
          {questions.map((q) => (
            <div key={q.id} className="flex items-center gap-3">
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleQuestionChange(q.id, e.target.value)} // Update the question text
                className='w-[60%] rounded-md border-slate-300'
                placeholder='Enter Question'
              />
              <button
                onClick={() => handleRemoveQuestion(q.id)} // Remove the question
                className="px-3 py-2 border rounded text-primary border-primary"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className='px-4 py-3 mt-2 w-[40%] text-white rounded bg-primary'
            onClick={handleAddQuestion} // Add a new question input
          >
            Add Question +
          </button>
        </div>

        <div className='w-full'>
          <AdminFileInput label='' fileText='Assignment File' onChange={() => { }} />
        </div>

        <div className='flex items-center justify-end w-full gap-4'>
          <button className="px-4 py-2 mt-4 text-white rounded bg-primary" onClick={onClose}>
            Save
          </button>
          <button className="px-4 py-2 mt-4 font-semibold border rounded text-primary border-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

import FileUpload from '../../Create Course Component/FileUpload';

interface AssignmentPopupProps {
  handleFileUpload: (file: File | null) => void;
  onClose: () => void; // Add onClose to the props interface
}

export const AssignmentPopup: React.FC<AssignmentPopupProps> = ({ handleFileUpload, onClose }) => {
  // State to manage questions
  const [questions, setQuestions] = useState([{ id: Date.now(), question: '' }]);

  // Handle adding a new question
  const handleAddQuestion = () => {
    setQuestions([...questions, { id: Date.now(), question: '' }]); // Add a new empty question
  };

  // Handle question input change
  const handleQuestionChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions); // Update the questions array with the changed question
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="lg:w-full w-[90%] max-w-lg p-4 bg-white rounded-lg shadow-lg">
        <div className=' h-fit'>
          <div className='flex flex-col gap-3 mx-auto lg:flex-row'>
      
            <div className='flex-1 p-1 '>
              <div>
                <div className='flex flex-col justify-between w-full gap-4'>
                  <div className='space-y-4 w-[100%]'>
                    <div>
                      <input className='w-full py-2 rounded-md' type="text" placeholder='Lesson 1 Title' />
                    </div>
                    <div className='flex flex-col '>
                      <label className='font-semibold' htmlFor="">Description</label>
                      <textarea className='rounded-md ' name="" id="" placeholder='Enter Assignment Description....'></textarea>
                    </div>
                    <div className='flex flex-col'>
                      <label className='font-semibold rounded-md' htmlFor="">Total Point</label>
                      <input className='rounded-md w-[30%]'  type="text" placeholder='10'/>
                    </div>
                  
                    <div className='flex flex-wrap items-center w-full gap-3 space-y-0'>
                      {/* Dynamically render questions */}
                      {questions.map((question, index) => (
                        <div key={question.id} className='flex flex-col gap-1'>
                       
                        <label className='font-semibold'>{`Question ${index + 1}`}</label>
                          <input
                            className='border w-[100%] rounded-md '
                            type="text"
                            placeholder={`Add Question ${index + 1}`}
                            value={question.question}
                            onChange={(e) => handleQuestionChange(index, e.target.value)} // Handle question change
                          />
                        
                           
                        </div>
                      ))}
                     <div className=''>
                           <button
                className='px-4 py-2 border rounded-md mt-7 text-primary border-primary'
                onClick={handleAddQuestion}
              >
                Add Question +
              </button>
                           </div>
                      
                    </div>
                    
                  </div>

                  {/* Lesson File and Attachment Upload Sections */}
                  <div className='space-y-4'>
                    <div className='w-[100%]'>
                      <label className='font-semibold'>Lesson File</label>
                      <div className='w-[90%] border border-dashed border-primary p-2 text-center text-primary space-y-0 flex itemce-center justify-between'>
                        <p>Assignment File</p>
                        <FileUpload onFileSelect={handleFileUpload} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button to add new question */}
             
            </div>
          </div>
        </div>
     <div className='space-x-4'>
     <button className="px-4 py-2 mt-4 text-white rounded bg-primary" onClick={onClose}>
          Save Changes
        </button>
        <button className="px-4 py-2 mt-4 border rounded border-primary text-primary" onClick={onClose}>
          Cancel
        </button>
     </div>
      </div>
    </div>
  );
};

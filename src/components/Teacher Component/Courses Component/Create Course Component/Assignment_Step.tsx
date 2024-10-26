import React, { useState } from 'react';
import FileUpload from './FileUpload';

interface Assignment_StepProps {
  // formData: any; // Define your FormData type if needed
  // handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNextModule: () => void;
  handleFinish: () => void;
  isLastModule: boolean;
  handleFileUpload?: (file: File | null) => void;
}

const Assignment_Step: React.FC<Assignment_StepProps> = ({ handleNextModule, isLastModule, handleFinish, handleFileUpload }) => {
  // State to manage questions
  const [questions, setQuestions] = useState([{ id: Date.now(), question: '' }]);

  // Function to handle adding a new question
  const handleAddQuestion = () => {
    setQuestions([...questions, { id: Date.now(), question: '' }]); // Add a new empty question
  };

  // Function to handle change in question input
  const handleQuestionChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value; // Update the specific question's value
    setQuestions(updatedQuestions);
  };

  const handleNext = () => {
    handleNextModule(); // Call the handleNext prop to move to the next step
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        <div className='flex-1 p-4 border border-neutral-300'>
          <div>
            <div className='flex justify-between w-full gap-4'>
              <div className='space-y-4 w-[90%]'>
                <div>
                  <label className="font-semibold">Title</label>
                  <input className='w-full py-2 rounded-md' type="text" placeholder='Lesson 1 Title' />
                </div>

                <div className='space-y-4'>
                  {/* Dynamically render questions */}
                  {questions.map((question, index) => (
                    <div key={question.id} className='flex flex-col gap-1'>
                      <label>{`Question ${index + 1}`}</label>
                      <input
                        className='w-full border rounded-md'
                        type="text"
                        placeholder={`Add Question ${index + 1}`}
                        value={question.question}
                        onChange={(e) => handleQuestionChange(index, e.target.value)} // Handle question change
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Lesson File and Attachment Upload Sections */}
              <div className='space-y-4'>
                <div className='w-[100%]'>
                  <label className='font-semibold'>Lesson File</label>
                  <div className='w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4'>
                    <p>Browse and choose the files you want to upload from your computer</p>
                    <FileUpload onFileSelect={handleFileUpload} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button to add new question */}
          <button
            className='px-4 py-2 mt-3 border rounded-md text-primary border-primary'
            onClick={handleAddQuestion}
          >
            Add Question +
          </button>

          {/* Button to go to next module */}
          <div className='flex items-center gap-2 mt-4'>
            {!isLastModule && (
              <button
                className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                onClick={handleNext}
              >
                Next Module
              </button>
            )}
            {isLastModule && (
              <button
                className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                onClick={handleFinish}
              >
                Finish Module
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment_Step;

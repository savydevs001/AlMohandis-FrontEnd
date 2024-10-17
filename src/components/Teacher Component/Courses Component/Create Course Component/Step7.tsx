import React, { useState } from 'react';
import Step7Season1Module from './MainModules_Step_Season1Module';

interface Step7Props {
  formData: any; // Define your FormData type if needed
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
}

const Step7: React.FC<Step7Props> = ({ handleNext }) => {
  // State to manage options for answers
  const [options, setOptions] = useState([{ id: Date.now(), value: '' }]);

  // State to manage questions
  const [questions, setQuestions] = useState([{ id: Date.now(), title: '', description: '' }]);

  // State to manage selected answer type
  const [selectedAnswerType, setSelectedAnswerType] = useState<string>('MCQS');

  // Function to handle adding a new question
  const handleAddQuestion = () => {
    setQuestions([...questions, { id: Date.now(), title: '', description: '' }]); // Add a new empty question
  };

  // Function to handle change in question input
  const handleQuestionChange = (index: number, field: string, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value }; // Update the specific field of the question (title/description)
    setQuestions(updatedQuestions);
  };

  // Function to handle adding a new option for answers
  const handleAddOption = () => {
    setOptions([...options, { id: Date.now(), value: '' }]); // Add a new empty option
  };

  const handleNextModule = () => {
    handleNext(); // Call the handleNext prop to move to the next step
  };

  
  // Function to handle change in option input
  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index].value = value; // Update the specific option's value
    setOptions(updatedOptions);
  };

  // Function to handle change in selected answer type
  const handleAnswerTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAnswerType(e.target.value); // Update the selected answer type
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        <div className='w-[30%] bg-cardBg py-4 px-6 border border-neutral-300'>
          <Step7Season1Module />
        </div>
        <div className='flex-1 p-4 border border-neutral-300'>
          <div className="space-y-1">
            <label className="font-semibold" htmlFor="">Title</label>
            <input className='w-full py-2 rounded-md' type="text" placeholder='Exam 1' />
          </div>
          <div className='mt-4 space-y-4'>

            {/* Conditionally render questions only if answer type is NOT MCQS */}
            {selectedAnswerType !== 'MCQS' && selectedAnswerType !== 'True & False' && (
              questions.map((question, index) => (
                <div key={question.id} className='flex flex-col gap-1'>
                  <div className='flex items-center gap-4'>
                    <div className="space-y-1">
                      <label className="font-semibold" htmlFor="">{`Question ${index + 1}`}</label>
                      <input
                        className='w-full py-2 rounded-md'
                        type="text"
                        placeholder={`Write Question ${index + 1} Statement`}
                        value={question.title}
                        onChange={(e) => handleQuestionChange(index, 'title', e.target.value)} // Handle question title change
                      />
                    </div>

                    {/* Conditionally render description based on selected answer type */}
                    {selectedAnswerType === 'Short Question' && (
                      <div className="mt-0 space-y-1">
                        <label className="font-semibold" htmlFor="">{`Question ${index + 1} Description`}</label>
                        <input
                          className='w-full py-2 rounded-md'
                          type="text"
                          placeholder={`Write short description for Question ${index + 1}`}
                          value={question.description}
                          onChange={(e) => handleQuestionChange(index, 'description', e.target.value)} // Handle question description change
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            <div className='mt-2 space-y-1'>
              <h5>Answer type</h5>
              <select
                className='w-full border-none rounded-md outline-none'
                value={selectedAnswerType}
                onChange={handleAnswerTypeChange} // Handle answer type change
              >
                <option value="MCQS">MCQS</option>
                <option value="True & False">True & False</option>
                <option value="Short Question">Short Question</option>
              </select>
            </div>

            {/* Conditionally render options for MCQs and True & False */}
            {(selectedAnswerType === 'MCQS' || selectedAnswerType === 'True & False') && (
              <div className='flex items-center'>
                <div className='flex flex-wrap gap-2'>
                  {options.map((option, index) => (
                    <div className='flex gap-2' key={option.id}>
                      <input
                        className='w-[70%] rounded-md outline-none bg-cardBg'
                        type="text"
                        placeholder={`Enter Option ${index + 1}`}
                        value={option.value}
                        onChange={(e) => handleOptionChange(index, e.target.value)} // Handle option change
                      />
                    </div>
                  ))}
                </div>

                <button className='px-2 py-0 mt-3 text-2xl font-semibold text-white border rounded-md bg-primary' onClick={handleAddOption}>
                  +
                </button>
              </div>
            )}

            {selectedAnswerType === 'MCQS' && (
              <div>
                <input className='w-[25%] rounded-md outline-none bg-cardBg' type="text" placeholder='Correct Option' />
              </div>
            )}
          </div>

          <button className='px-4 py-2 mt-3 border rounded-md text-primary border-primary' onClick={handleAddQuestion}>
            Add Question +
          </button>

          <div className='flex items-center gap-2 mt-4'>
            <button
              className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
              onClick={handleNextModule}
            >
              Finish Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step7;

import React, { useState } from 'react';
import Step7Season1Module from './Step7Season1Module';

interface Step9Props {
  formData: any; // Define your FormData type if needed
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: () => void; // Assuming the last step will submit the form
}

const Step7: React.FC<Step9Props> = ({ handleSubmit }) => {
  // State to manage options
  const [options, setOptions] = useState([{ id: Date.now(), value: '' }]); // Start with one option

  // Function to handle adding a new option
  const handleAddOption = () => {
    setOptions([...options, { id: Date.now(), value: '' }]); // Add a new empty option
  };

  // Function to handle change in option input
  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index].value = value; // Update the specific option's value
    setOptions(updatedOptions);
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
          <div className='space-y-4'>
            <div className='mt-3 space-y-2'>
          
              <div className='flex items-center gap-3'>
                <input className='w-3 h-3 rounded-sm text-primary' type="checkBox" />
                <p className='text-sm text-[#7C7C7C]'>Available for Free</p>
              </div>
            </div>
            {/* <div className='space-y-1'>
              <h5>Content type</h5>
              <select className='w-full border-none rounded-md outline-none' name="" id="">
                <option value="">Audio Lesson</option>
                <option value="">Video Lesson</option>
                <option value="">Assignment</option>
                <option value="">Attachment</option>
              </select>
            </div> */}
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-4'>
                <div className="space-y-1">
                  <label className="font-semibold" htmlFor="">Question 1</label>
                  <input className='w-full py-2 rounded-md' type="text" placeholder='Write Question 1 Statement' />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold" htmlFor="">Question 1 description</label>
                  <input className='w-full py-2 rounded-md' type="text" placeholder='Write short question description' />
                </div>
              </div>
            </div>
            <div className='mt-2 space-y-1'>
              <h5>Answer type</h5>
              <select className='w-full border-none rounded-md outline-none' name="" id="">
                <option value="">MCQS</option>
                <option value="">True & False</option>
                <option value="">Short Question</option>
              </select>
            </div>

            {/* Dynamic options rendering */}
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
          </div>
          <button className='px-4 py-2 mt-3 border rounded-md text-primary border-primary'>Add Question +</button>
          <div>
          </div>
          <div className='flex items-center gap-2 mt-4'>
            <button
              className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
              onClick={handleSubmit}
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

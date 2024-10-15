// Step8.tsx
import React from 'react';
import Step7Season1Module from './Step7Season1Module';
import Step7RigthModule from './Step7RigthModule';

interface Step6Props {
  formData: any; // Define your FormData type if needed
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
//   handleBack: () => void;
}

const Step6: React.FC<Step6Props> = ({ handleNext }) => {
  const handleNextModule = () => {
    handleNext(); // Call the handleNext prop to move to the next step
  };
  
  return (
    <div className='h-screen mt-12'>
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        <div className='w-[30%] bg-cardBg py-4 px-6 border border-neutral-300'>
          <Step7Season1Module />
        </div>
        <div className='flex-1 p-4 border border-neutral-300'>
          <Step7RigthModule title="Question" />
          <button className='px-4 py-2 mt-3 border rounded-md text-primary border-primary'>Add Question +</button>
          <div>
          </div>
          <div className='flex items-center gap-2 mt-4'>         
            <button
              className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
              onClick={handleNextModule}
            >
              Next Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;

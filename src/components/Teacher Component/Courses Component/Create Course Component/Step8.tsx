// Step8.tsx
import React from 'react';
import MainModules_Step_Season1Module from './MainModules_Step_Season1Module';
import MainModules_Step_RigthModule from './MainModules_Step_RigthModule';

interface Step8Props {
  formData: any; // Define your FormData type if needed
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
}

const Step8: React.FC<Step8Props> = ({ handleNext }) => {
  const handleNextModule = () => {
    handleNext(); // Call the handleNext prop to move to the next step
  };
  
  return (
    <div className='h-screen mt-12'>
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        <div className='w-[30%] bg-cardBg py-4 px-6 border border-neutral-300'>
          <MainModules_Step_Season1Module />
        </div>
        <div className='flex-1 p-4 border border-neutral-300'>
          <MainModules_Step_RigthModule title="Question" />
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

export default Step8;

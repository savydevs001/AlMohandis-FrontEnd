import React, { useState } from 'react';
import AudioEditor from './AudioEditor';
import Step7RightModule from './Step7RigthModule';
import Step7Season1Module from './Step7Season1Module';
import video from '../../../../assets/dumyVideo.mp4'
// import NewModule from './NewModule'; // The new module component to show full screen
// import Step7RigthModule from './Step7RigthModule';

interface Step7Props {
  handleBack: () => void;
  handleNext: () => void;
}

const Step7: React.FC<Step7Props> = ({ handleNext }) => {
  // State to track the active step, this will switch between the initial and new components
  const [activeStep, setActiveStep] = useState<'initial' | 'new'>('initial');

  const handleNextModule = () => {
    handleNext();
  };

  // Function to switch to new content when "Add Another" is clicked
  const handleAddAnother = () => {
    setActiveStep('new'); // Switch to the new components, full page
  };

  // Function to switch back to the initial content
  const handleBackToInitial = () => {
    setActiveStep('initial'); // Switch back to the initial components
  };

  return (
    <div className='h-screen mt-12'>
      {activeStep === 'initial' ? (
        <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
          {/* Left Section */}
          <div className='w-[30%] bg-cardBg py-4 px-6 border border-neutral-300'>
            <Step7Season1Module /> {/* Initial left module */}
          </div>

          {/* Right Section */}
          <div className='flex-1 p-4 border border-neutral-300'>
            {/* Initial right modules */}
            <Step7RightModule title="Description" />
            <AudioEditor />

            {/* Buttons */}
            <div className='flex items-center gap-2 mt-4'>
              <button
                className='flex items-center gap-2 px-6 py-2 font-semibold text-white border rounded-lg bg-primary'
                onClick={handleAddAnother} // Switch to new content
              >
                Add Another +
              </button>
              <button
                className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                onClick={handleNextModule}
              >
                Next Module
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Full page content for the new module
        <div className='flex flex-col justify-center p-4 bg-gray-100'>
        {/* <NewModule /> Full page content */}
        <div className='flex gap-4'><Step7Season1Module/>
        <div>
        <Step7RightModule title="Description" />
<div className='mt-3 w-[70%] h-[30%] rounded-2xl overflow-hidden'>
  <h5 className='mb-3 font-semibold'>Clip</h5>
<video controls  className='overflow-hidden rounded-md h-fit w-fit' src={video}></video>
</div>

        <button className='px-4 py-2 mt-4 font-semibold border rounded-md text-primary w-fit border-primary'>Add Video</button>
        </div>
        </div>
        <button
          className='px-4 py-2 mt-4 text-white rounded-md w-fit bg-primary'
          onClick={handleBackToInitial} // Go back to initial content
        >
          Back
        </button>
      </div>
      )}
    </div>
  );
};

export default Step7;

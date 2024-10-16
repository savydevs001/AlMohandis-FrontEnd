import { useState } from 'react';
import AudioEditor from './AudioEditor';
import MainModules_Step_RigthModule from './MainModules_Step_RigthModule';
import MainModules_Step_Season1Module from './MainModules_Step_Season1Module';

interface MainModules_StepProps {
  handleBack: () => void;
  handleNext: () => void;
}

const MainModules_Step: React.FC<MainModules_StepProps> = ({ handleNext }) => {

  const [mediaFile, setmediaFile] = useState<File | null>(null);

  const handleFileUpload = (file: File | null) => {
    setmediaFile(file);
  };

  const handleNextModule = () => {
    handleNext();
  };
  return (
    <div className='mt-12 h-fit'>
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        {/* Left Section */}
        <div className='w-[30%] bg-cardBg py-4 px-6 border border-neutral-300'>
          <MainModules_Step_Season1Module /> {/* Initial left module */}
        </div>

        {/* Right Section */}
        <div className='flex-1 p-4 border border-neutral-300'>
          {/* Initial right modules */}
          <MainModules_Step_RigthModule title="Description" handleFileUpload={handleFileUpload} />
          <AudioEditor mediaFile={mediaFile} />

          {/* Buttons */}
          <div className='flex items-center gap-2 mt-4'>
            <button
              className='flex items-center gap-2 px-6 py-2 font-semibold text-white border rounded-lg bg-primary'
            // Switch to new content
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

    </div>
  );
};

export default MainModules_Step;

// MainModules_Step.js
import { useState } from 'react';
import AudioEditor from './AudioEditor';
import MainModules_Step_RigthModule from './MainModules_Step_RigthModule';
import MainModules_Step_Season1Module from './MainModules_Step_Season1Module';
import AddModulePopUp from './AddAnotherPopUp'; // Import the popup component

interface MainModules_StepProps {
  handleBack: () => void;
  handleNext: () => void;
}

const MainModules_Step: React.FC<MainModules_StepProps> = ({ handleNext }) => {
  const [mediaFile, setmediaFile] = useState<File | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleFileUpload = (file: File | null) => {
    setmediaFile(file);
  };

  const handleNextModule = () => {
    handleNext();
  };

  const handleAddAnother = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='flex flex-col max-w-4xl gap-8 mx-auto shadow-2xl lg:gap-3 lg:flex-row h-fit bg-cardBg'>
        {/* Left Section */}
        <div className='lg:w-[30%] w-full bg-cardBg py-4 px-6 border border-neutral-300'>
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
              onClick={handleAddAnother} // Open the popup when clicked
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

      {/* Conditionally render the popup */}
      {isPopupOpen && <AddModulePopUp onClose={handleClosePopup} />}
    </div>
  );
};

export default MainModules_Step;

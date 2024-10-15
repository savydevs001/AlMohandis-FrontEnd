
import AudioEditor from './AudioEditor';
import Step7RightModule from './Step7RigthModule';
import Step7Season1Module from './Step7Season1Module';

// import NewModule from './NewModule'; // The new module component to show full screen
// import Step7RigthModule from './Step7RigthModule';

interface Step7Props {
  handleBack: () => void;
  handleNext: () => void;
}

const Step7: React.FC<Step7Props> = ({ handleNext }) => {



  const handleNextModule = () => {
    handleNext();
  };

  // Function to switch to new content when "Add Another" is clicked


  // Function to switch back to the initial content


  return (
    <div className='mt-12 '>
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

export default Step7;

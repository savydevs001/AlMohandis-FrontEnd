import { RiDeleteBin6Line } from 'react-icons/ri';
import ModulePopUp from './AddModulePopUp';
import SeasonPopUp from './SeasonPopUp';
import { useState } from 'react';
import Chapter from './ChaptersModule'; // Import the Chapter component

const MainModules_Step_Season1Module = () => {
  const [isModulePopUpOpen, setIsModulePopUpOpen] = useState(false);
  const [isSeasonPopUpOpen, setIsSeasonPopUpOpen] = useState(false);

  const handleOpenModulePopUp = () => setIsModulePopUpOpen(true);
  const handleCloseModulePopUp = () => setIsModulePopUpOpen(false);
  const handleCloseSeasonPopUp = () => setIsSeasonPopUpOpen(false);
  const handleOpenSeasonPopUp = () => setIsSeasonPopUpOpen(true);

  return (
    <div>
      <div className=''>
        {/* Left section: Season and Chapters */}
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-semibold'>Season 1</h3>
          <RiDeleteBin6Line className="p-1 text-2xl text-red-600 border border-red-600 rounded-sm" />
        </div>

        {/* Static Chapter Component */}
        <div>
          <Chapter chapterName="Chapter 1" onRemove={() => {}} />
          <Chapter chapterName="Chapter 2" onRemove={() => {}} />
        </div>

        {/* Add Module and Season Buttons */}
        <div className='mt-4 space-y-2'>
          {/* Button for adding a module */}
          <button onClick={handleOpenModulePopUp} className='px-3 py-2 font-semibold border rounded-lg text-md text-primary border-primary'>
            Add Module <span className='px-2 text-md'>+</span>
          </button>
          {/* Button for adding a season */}
          <button onClick={handleOpenSeasonPopUp} className='px-3 py-2 font-semibold text-white border-2 rounded-lg bg-primary'>
            Add Season <span className='px-2 text-lg'>+</span>
          </button>
        </div>
      </div>

      {isModulePopUpOpen && <ModulePopUp onClose={handleCloseModulePopUp} />}
      {isSeasonPopUpOpen && <SeasonPopUp onClose={handleCloseSeasonPopUp} />}
    </div>
  );
}

export default MainModules_Step_Season1Module;

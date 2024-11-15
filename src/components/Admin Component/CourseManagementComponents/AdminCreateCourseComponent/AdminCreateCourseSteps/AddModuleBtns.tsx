import { useState } from 'react'; // Import the popup component
import AddModulePopup from './ModuleBtnsPopUp/AddModulePopUp';
import AddSeasonsPopUp from './ModuleBtnsPopUp/AddSeasonsPopUp';
// Import the AddSeasonsPopUp component

function AddModuleBtns() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false); // State to control module popup visibility
  const [isSeasonPopupOpen, setIsSeasonPopupOpen] = useState<boolean>(false); // State to control season popup visibility
  const [partContainer, setPartContainer] = useState<{ name: string; value: string; modules: any[] }[]>([]); // State to manage partContainer
  const [partNumber, setPartNumber] = useState<number>(0); // State to manage part number

  const handleOpenPopup = () => {
    setIsPopupOpen(true); // Open module popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close module popup
  };

  const handleOpenSeasonPopup = () => {
    setIsSeasonPopupOpen(true); // Open season popup
  };

  const handleCloseSeasonPopup = () => {
    setIsSeasonPopupOpen(false); // Close season popup
  };

  return (
    <div className="px-5 space-y-3">
      <button 
        className="px-3 py-2 font-semibold border-2 rounded-lg text-primary border-primary"
        onClick={handleOpenPopup}
      >
        Add Module <span className="text-xl">+</span>
      </button>
      <button 
        className="px-3 py-2 font-semibold text-white border-2 rounded-lg bg-primary"
        onClick={handleOpenSeasonPopup} // Open the Add Season popup
      >
        Add Season
      </button>

      {/* Conditionally render the AddModulePopup */}
      {isPopupOpen && 
        <AddModulePopup
          onClose={handleClosePopup}
          partContainer={partContainer}
          setPartContainer={setPartContainer}
        />
      }

      {/* Conditionally render the AddSeasonsPopUp */}
      {isSeasonPopupOpen && 
        <AddSeasonsPopUp
          onClose={handleCloseSeasonPopup}
          setPartContainer={setPartContainer}
          partNumber={partNumber}
          setPartNumber={setPartNumber}
        />
      }
    </div>
  );
}

export default AddModuleBtns;

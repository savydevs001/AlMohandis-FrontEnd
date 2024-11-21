import { useEffect, useState } from 'react'; 
import AddModulePopup from './ModuleBtnsPopUp/AddModulePopUp';
import AddSeasonsPopUp from './ModuleBtnsPopUp/AddSeasonsPopUp';

function AddModuleBtns() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isSeasonPopupOpen, setIsSeasonPopupOpen] = useState<boolean>(false);
  const [partContainer, setPartContainer] = useState<{ name: string; value: string; modules: any[] }[]>(() => {
    const savedParts = localStorage.getItem('partContainer');
    return savedParts ? JSON.parse(savedParts) : [];
  });
  const [partNumber, setPartNumber] = useState<number>(partContainer.length);

  useEffect(() => {
    localStorage.setItem('partContainer', JSON.stringify(partContainer));
  }, [partContainer]);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOpenSeasonPopup = () => {
    setIsSeasonPopupOpen(true);
  };

  const handleCloseSeasonPopup = () => {
    setIsSeasonPopupOpen(false);
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
        onClick={handleOpenSeasonPopup}
      >
        Add Season
      </button>

      {isPopupOpen && 
        <AddModulePopup
          onClose={handleClosePopup}
          partContainer={partContainer}
          setPartContainer={setPartContainer}
        />
      }

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
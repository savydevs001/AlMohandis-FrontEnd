import React, { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import UploadPopup from './UploadPopup'; // Import the UploadPopup component

const FileUpload: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Toggle popup visibility
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("Selected file:", file);
  };

  // Trigger file input click inside the popup
  const handleNewUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      {/* Button to open the popup */}
      <div className='flex items-center justify-center'>
        <button
          className='rounded-md bg-primary'
          onClick={openPopup}
          style={{
            padding: '5px 7px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaPlus />
        </button>
      </div>

      {/* Render UploadPopup with props */}
      {isPopupOpen && (
        <UploadPopup
          onClose={closePopup}
          onNewUploadClick={handleNewUploadClick} // Trigger file selection
        />
      )}
      {/* Hidden file input */}
      <input
        type="file"
        accept="audio/*,video/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FileUpload;

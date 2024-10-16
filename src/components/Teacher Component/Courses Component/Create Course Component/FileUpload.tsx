import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect,}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileSelect(file); // Pass the selected file back to the parent component
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
  <div className='flex items-end justify-end bg-red-800'>
      <div className='flex items-end justify-end w-[30%] bg-red-200 '>
      <input
        type="file"
        accept="audio/*,video/*" // Accept both audio and video files
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button
        className='rounded-md bg-primary'
        onClick={handleButtonClick}
        style={{
          padding: '5px 7px',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaPlus style={{ marginRight: '0px' }} />
      </button>
    </div>
  </div>
  );
};

export default FileUpload;

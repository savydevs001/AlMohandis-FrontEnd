// FileUpload.tsx
import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon

interface FileUploadProps {
  onFileSelect: (file: File | null) => void; // Function to pass the selected file back to the parent
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the file input

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileSelect(file); // Pass the selected file back to the parent component
  };

  // Function to trigger the file input click
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className='absolute top-[37%] left-[82%]' style={{ marginBottom: '20px' }}>
      {/* <label style={{ display: 'block', marginBottom: '5px' }}>Lesson File</label> */}
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }} // Hide the default file input
      />
      <button
      className='rounded-md bg-primary'
        onClick={handleButtonClick} // Trigger the file input click
        style={{
          padding: '5px 7px',
      //     backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
      //     borderRadius: '5px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaPlus style={{ marginRight: '0px' }} />
      </button>
    </div>
  );
};

export default FileUpload;

import axios from 'axios';
import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

interface FileUploadProps {
  onFileSelect?: (file: File | null) => void;
  partId: string | null;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, partId }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = React.useState<string | null>(null);

  // Handle file selection
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    console.log("Selected file:", file);

    // Determine the file type
    let fileType = '';
    if (file.type === 'application/pdf') {
      fileType = 'PDF';
    } else if (file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      fileType = 'WORD';
    } else {
      console.error("Unsupported file type:", file.type);
      return;
    }

    // Create a FormData object to send the file
    const description = '';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileType', fileType);
    formData.append('description', description);

    try {
      // Upload the file to the backend
      const courseId = localStorage.getItem('courseId');
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/attachment`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Upload response:", response);

      // Call the onFileSelect function with the file
      if (onFileSelect) {
        onFileSelect(file);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      // Optionally, you can call onFileSelect with null to indicate an error
      if (onFileSelect) {
        onFileSelect(null);
      }
    }
  };

  // Trigger file input click
  const handlePlusClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      {/* Button to open the file selector */}
      <div className='flex items-center justify-center'>
        <button
          className='rounded-md bg-primary'
          style={{
            padding: '5px 7px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={handlePlusClick}
        >
          <FaPlus />
        </button>
      </div>
        <span className='ml-2'>{fileName || 'No file selected'}</span>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FileUpload;
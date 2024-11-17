import React, { useState } from 'react';
import { LiaEdit } from "react-icons/lia";
import { TbCircleMinus } from "react-icons/tb";

interface FileInputProps {
  label: string;
  width?: string; // Optional prop to specify the width of the component
  fileText?: string; // Optional prop to customize the text
}

const AdminFileInput: React.FC<FileInputProps> = ({ label, width = '100%', fileText = 'Img' }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
  };

  return (
    <div className="space-y-2" style={{ width }}>
      <label className="font-semibold text-gray-800">{label}</label>
      <div className="flex items-center p-2 border border-dashed rounded-md border-primary">
        <div className="flex items-center space-x-2">
          <div className="text-green-500">📁</div>
          <span className="text-sm text-gray-700">{fileName || fileText}</span> {/* Display custom text or default text */}
        </div>
        
        <input
          type="file"
          className="hidden"
          id="file-input"
          onChange={handleFileChange}
        />
        
        <div className="flex-grow"></div>

        <label htmlFor="file-input" className="text-gray-500 cursor-pointer hover:text-gray-700">
          <LiaEdit className='text-2xl' />
        </label>

        <button
          type="button"
          className="ml-2 text-red-500 hover:text-red-700"
          onClick={handleRemoveFile}
        >
          <TbCircleMinus className='text-2xl' />
        </button>
      </div>
    </div>
  );
};

export default AdminFileInput;

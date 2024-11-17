import { useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import { TbCircleMinus } from "react-icons/tb";

interface AdminFileInputProps {
  label: string;
  fileText?: string; // Optional custom text when no file is selected
  width?: string;    // Optional width of the component
  onChange: (fileName: string) => void; // Function to handle file name change
}

const AdminFileInput: React.FC<AdminFileInputProps> = ({ label, fileText, onChange }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFileName = e.target.files[0].name;
      setFileName(newFileName);
      onChange(newFileName); // Pass the file name to the parent
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
    onChange(''); // Reset the file name in the parent
  };

  return (
    <div className="space-y-1">
      <label className="font-semibold text-gray-800">{label}</label>
      <div className="flex items-center p-2 border border-dashed rounded-md border-primary">
        <div className="flex items-center space-x-2">
          <div className="text-green-500">📁</div>
          <span className="text-gray-700">{fileName || fileText || 'No file selected'}</span>
        </div>
        
        <input
          type="file"
          className="hidden"
          id="file-input"
          onChange={handleFileChange}
        />
        
        <div className="flex-grow"></div>

        <label htmlFor="file-input" className="text-gray-500 cursor-pointer hover:text-gray-700">
          <LuClipboardEdit className="text-2xl" />
        </label>

        <button
          type="button"
          className="ml-2 text-red-500 hover:text-red-700"
          onClick={handleRemoveFile}
        >
          <TbCircleMinus className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default AdminFileInput;

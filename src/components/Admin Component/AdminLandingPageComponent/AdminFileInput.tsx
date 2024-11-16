import React from 'react';

interface AdminFileInputProps {
  label: string;
  onChange: (value: string) => void;
}

const AdminFileInput: React.FC<AdminFileInputProps> = ({ label, onChange }) => {
  return (
    <div className="space-y-1">
      <label className="font-semibold text-gray-800">{label}</label>
      <input
        type="file"
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const fileUrl = URL.createObjectURL(e.target.files[0]);
            onChange(fileUrl);
          }
        }}
      />
    </div>
  );
}

export default AdminFileInput;
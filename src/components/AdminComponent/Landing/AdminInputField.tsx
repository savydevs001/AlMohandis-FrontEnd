import React from 'react';

interface AdminInputFieldProps {
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const AdminInputField: React.FC<AdminInputFieldProps> = ({ label, placeholder, onChange }) => {
  return (
    <div className="w-full space-y-1">
      <label className="font-semibold text-gray-800">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default AdminInputField;
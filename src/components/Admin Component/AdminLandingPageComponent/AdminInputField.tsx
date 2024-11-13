import React from 'react';

interface AdminInputFieldProps {
  label: string;
  placeholder: string;
  width?: string; // Optional prop for custom width
}

const AdminInputField: React.FC<AdminInputFieldProps> = ({ label, placeholder, width = '100%' }) => {
  return (
    <div className="space-y-2" style={{ width }}>
      <label className="font-medium" htmlFor="inputField">{label}</label>
      <input
        id="inputField"
        className="w-full rounded-md border-[#979595A8] focus-within:ring-0 bg-transparent"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default AdminInputField;

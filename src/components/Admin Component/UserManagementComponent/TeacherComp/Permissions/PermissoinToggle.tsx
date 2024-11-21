import React, { useState } from 'react';

type Option = {
  id: number;
  label: string;
  enabled: boolean;
};

const optionsData: Option[] = [
  { id: 1, label: 'Create New Course', enabled: false },
  { id: 2, label: 'Remove Course Students', enabled: false },
  { id: 3, label: 'Freeze Course Students', enabled: false },
  { id: 4, label: 'Start Live Lectures', enabled: false },
  { id: 5, label: 'Assign Assistant', enabled: false },
  { id: 6, label: 'Manage permissions of the Assistant', enabled: false },
  { id: 7, label: 'Create New Subject', enabled: false },
  { id: 8, label: 'Add Students in registered subject', enabled: false },
  { id: 9, label: 'Edit Course', enabled: false },
];

const AdminPermissoinToggle: React.FC = () => {
  const [options, setOptions] = useState(optionsData);

  const handleToggle = (id: number) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, enabled: !option.enabled } : option
      )
    );
  };

  return (
    <div className="p-5 space-y-4 ">
      {options.map(option => (
        <div key={option.id} className="flex items-center justify-between">
          <span className="text-gray-700">{option.label}</span>
          <button
            onClick={() => handleToggle(option.id)}
            className={`relative inline-flex h-3 w-8 items-center rounded-full transition-colors ${
              option.enabled ? 'bg-teal-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`${
                option.enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-2 w-2 transform rounded-full bg-white transition-transform`}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminPermissoinToggle;





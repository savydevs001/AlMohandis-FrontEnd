import React, { useState } from 'react';

type Option = {
  id: number;
  label: string;
  enabled: boolean;
};

const optionsData: Option[] = [
  { id: 1, label: 'Chat with External students', enabled: false },
  { id: 2, label: 'Chat with External student’s Guardian', enabled: false },
  { id: 3, label: 'Chat with Internal students', enabled: false },
  { id: 4, label: 'Chat with Internal student’s Guardian', enabled: false },
  { id: 5, label: 'Upload Courses', enabled: false },
  { id: 6, label: 'Get all new courses', enabled: false },
  { id: 7, label: 'Get all new Subjects', enabled: false },
];

const GeneralSetting: React.FC = () => {
  const [options, setOptions] = useState(optionsData);

  const handleToggle = (id: number) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, enabled: !option.enabled } : option
      )
    );
  };

  return (
    <div className="w-full space-y-3">
      {options.map(option => (
        <div key={option.id} className="flex items-center justify-between w-[100%]">
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

export default GeneralSetting;

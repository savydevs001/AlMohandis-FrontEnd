import React, { useState } from 'react';

type Option = {
  id: number;
  label: string;
  enabled: boolean;
};

const optionsData: Option[] = [
  { id: 1, label: 'View Attendance', enabled: false },
  { id: 2, label: 'Mark Attendance', enabled: false },
  { id: 3, label: 'View Students', enabled: false },
  { id: 4, label: 'Add Students', enabled: false },
  { id: 5, label: 'Remove Students', enabled: false },
];

const optionsData2: Option[] = [
  { id: 1, label: 'Freeze Students', enabled: false },
  { id: 2, label: 'Chat in Subject Group', enabled: false },
  { id: 3, label: 'Chat with Guardian', enabled: false },
  { id: 4, label: 'Chat with Students', enabled: false },
];

const SubjectPermission: React.FC = () => {
  const [options, setOptions] = useState(optionsData);
  const [options2, setOptions2] = useState(optionsData2);

  const handleToggle = (id: number) => {
    setOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, enabled: !option.enabled } : option
      )
    );
  };

  const handleToggle2 = (id: number) => {
    setOptions2(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? { ...option, enabled: !option.enabled } : option
      )
    );
  };

  return (
    <div className="flex flex-col justify-center w-full gap-6 mx-auto lg:p-6 lg:flex-row">
      <div className="p-5 space-y-4 lg:w-[50%] border w-full">
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
      <div className="p-5 space-y-4 lg:w-[50%] border w-full">
        {options2.map(option => (
          <div key={option.id} className="flex items-center justify-between w-[100%]">
            <span className="text-gray-700">{option.label}</span>
            <button
              onClick={() => handleToggle2(option.id)}
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
    </div>
  );
};

export default SubjectPermission;




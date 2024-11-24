import React from 'react';
import { Part, Module } from '../../../../../types/course'; // Import the necessary types
interface LeftPanelProps {
  parts: Part[]; 
  onModuleSelect: (module: Module) => void; 
}

const LeftPanel: React.FC<LeftPanelProps> = ({ parts, onModuleSelect }) => {
  return (
    <div className="w-1/3 border-r pr-4">
      <h1 className="text-xl font-bold mb-4">Parts and Modules</h1>
      {parts.map((part) => (
        <div key={part.id} className="mb-4">
          <h2 className="font-semibold text-lg">{part.title}</h2>
          <ul className="space-y-2">
            {part.modules.map((module:Module) => (
              <li
                key={module.id}
                className="cursor-pointer p-2 border rounded-md hover:bg-gray-100"
                onClick={() => onModuleSelect(module)}
              >
                ({module.type})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;

import React from 'react';
import { Part, Module,ModuleType } from '../../../../../types/course'; // Import the necessary types

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
            {part.modules.map((module: Module) => {
              let moduleTitle = '';

              // Check the module type and get the title of the first item in the respective array
              if (module.type === ModuleType.ASSIGNMENT && module.assignments.length > 0) {
                moduleTitle = module.assignments[0].title;
              } else if (module.type === ModuleType.EXAM && module.exams.length > 0) {
                moduleTitle = module.exams[0].title;
              } else if (module.type === ModuleType.CHAPTER && module.chapters.length > 0) {
                moduleTitle = module.chapters[0].id;  // Assuming you want the chapter ID here for demonstration
              } else if (module.type === ModuleType.ATTACHMENT && module.attachments.length > 0) {
                moduleTitle = 'Attachment Module';  // You can adjust this based on your needs
              }

              return (
                <li
                  key={module.id}
                  className="cursor-pointer p-2 border rounded-md hover:bg-gray-100"
                  onClick={() => onModuleSelect(module)}
                >
                  {/* Display the module title */}
                  <span className="font-bold">{moduleTitle}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;

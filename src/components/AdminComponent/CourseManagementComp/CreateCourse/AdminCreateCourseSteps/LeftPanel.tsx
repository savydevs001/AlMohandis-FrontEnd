import React, { useState } from "react";
import { Part, Module, ModuleType } from "../../../../../types/course"; // Import the necessary types

interface LeftPanelProps {
  parts: Part[];
  onModuleSelect: (module: Module) => void;
  selectedModule: Module | null; // Track the currently selected module
  onAddPart: (newPart: Part) => void;
  onAddModule: (partId: string, newModule: Module) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ parts, onModuleSelect, selectedModule, onAddPart, onAddModule }) => {
  const [showAddPartModal, setShowAddPartModal] = useState(false);
  const [showAddModuleModal, setShowAddModuleModal] = useState(false);
  const [selectedPartId, setSelectedPartId] = useState<string>("");

  const handlePartSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPartId(e.target.value);
  };

  return (
    <div className="w-1/3 border-r pr-4">
      <h1 className="text-xl font-bold mb-4">Parts and Modules</h1>
      


      {/* List Parts and Modules */}
      {parts.map((part) => (
        <div key={part.id} className="mb-4">
          <h2 className="font-semibold text-lg">{part.title}</h2>
          <ul className="space-y-2">
            {part.modules.map((module: Module) => {
              let moduleTitle = "";

              // Check the module type and get the title of the first item in the respective array
              if (module.type === ModuleType.ASSIGNMENT && module.assignments.length > 0) {
                moduleTitle = module.assignments[0].title;
              } else if (module.type === ModuleType.EXAM && module.exams.length > 0) {
                moduleTitle = module.exams[0].title;
              } else if (module.type === ModuleType.CHAPTER && module.chapters.length > 0) {
                moduleTitle = ` Chapter ${module.chapters[0].id}`; 
              } else if (module.type === ModuleType.ATTACHMENT && module.attachments.length > 0) {
                moduleTitle = "Attachment Module"; // You can adjust this based on your needs
              }

              const isSelected = selectedModule?.id === module.id; // Check if the module is selected

              return (
                <li
                  key={module.id}
                  className={`cursor-pointer p-2 border rounded-md ${isSelected ? "bg-blue-100 border-blue-500 font-semibold" : "hover:bg-gray-100"}`}
                  onClick={() => onModuleSelect(module)}
                >
                  <span>{moduleTitle}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

            {/* Buttons for adding part and module */}
            <div className="flex gap-3 mb-4">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setShowAddPartModal(true)}
        >
          Add Part
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => setShowAddModuleModal(true)}
        >
          Add Module
        </button>
      </div>

      {/* Add Part Modal */}
      {showAddPartModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h3 className="text-xl font-bold mb-4">Add Part</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newPart: Part = {
                  id: Date.now().toString(),
                  title: e.target.title.value,
                  price: parseFloat(e.target.price.value),
                  completionTime: parseInt(e.target.completionTime.value),
                  openingDate: new Date(e.target.openingDate.value),
                  courseId: "1", // You can dynamically handle course ID
                  modules: [],
                };
                onAddPart(newPart);
                setShowAddPartModal(false);
              }}
            >
              <div>
                <label className="block mb-2">Title</label>
                <input type="text" name="title" required className="border p-2 w-full mb-4" />
              </div>
              <div>
                <label className="block mb-2">Price</label>
                <input type="number" name="price" required className="border p-2 w-full mb-4" />
              </div>
              <div>
                <label className="block mb-2">Completion Time (in minutes)</label>
                <input type="number" name="completionTime" required className="border p-2 w-full mb-4" />
              </div>
              <div>
                <label className="block mb-2">Opening Date</label>
                <input type="date" name="openingDate" required className="border p-2 w-full mb-4" />
              </div>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Add Part</button>
            </form>
          </div>
        </div>
      )}

      {/* Add Module Modal */}
      {showAddModuleModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h3 className="text-xl font-bold mb-4">Add Module</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newModule: Module = {
                  id: Date.now().toString(),
                  type: e.target.moduleType.value,
                  partId: selectedPartId, // Use selected part ID here
                  courseId: "1", // You can dynamically handle course ID
                  isPromoted: false,
                  isPromotional: false,
                  attachments: [],
                  chapters: [],
                  assignments: [],
                  exams: [],
                };
                if (selectedPartId) {
                  onAddModule(selectedPartId, newModule); // Add to the selected part
                }
                setShowAddModuleModal(false);
              }}
            >
              <div>
                <label className="block mb-2">Select Part</label>
                <select
                  name="partId"
                  value={selectedPartId}
                  onChange={handlePartSelection}
                  required
                  className="border p-2 w-full mb-4"
                >
                  <option value="">Select a Part</option>
                  {parts.map((part) => (
                    <option key={part.id} value={part.id}>
                      {part.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2">Module Type</label>
                <select name="moduleType" required className="border p-2 w-full mb-4">
                  <option value={ModuleType.ASSIGNMENT}>Assignment</option>
                  <option value={ModuleType.EXAM}>Exam</option>
                  <option value={ModuleType.CHAPTER}>Chapter</option>
                  <option value={ModuleType.ATTACHMENT}>Attachment</option>
                </select>
              </div>
              <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">Add Module</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;

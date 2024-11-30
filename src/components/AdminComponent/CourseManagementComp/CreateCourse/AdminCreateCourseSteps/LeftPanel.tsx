import React, { useState } from "react";
import { Part, Module, ModuleType } from "../../../../../types/course"; // Import the necessary types
import axios from "axios";
import Loading from "../../../../Loading";

interface LeftPanelProps {
  parts: Part[];
  onModuleSelect: (module: Module) => void;
  selectedModule: Module | null; // Track the currently selected module
  onAddPart: (newPart: Part) => void;
  onAddModule: (partId: string, newModule: Module) => void;
  onSaveModule: () => void; 
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  parts,
  onModuleSelect,
  selectedModule,
  onAddPart,
  onAddModule,
  onSaveModule,
}) => {
  const [showAddPartModal, setShowAddPartModal] = useState(false);
  const [showAddModuleModal, setShowAddModuleModal] = useState(false);
  const [selectedPartId, setSelectedPartId] = useState<string>("");
  const [loading, setLoading] = useState(false); // Track loading state for Add Module button
  const [newPart, setNewPart] = useState({ title: "", price: 0, completionTime: 0, openingDate: "" });

  const handlePartSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPartId(e.target.value);
  };

  const onClose = () => {
    setShowAddPartModal(false);
    setShowAddModuleModal(false);
  };

  const handleAddPartSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/courses/${localStorage.getItem('courseId')}/createPart`,
        newPart
      );

      if (response.status === 201) {
        onAddPart(response.data); // Update the UI with the new part
        setShowAddPartModal(false); // Close the modal
        onClose();
      }
    } catch (error) {
      console.error("Error adding part:", error);
      alert("Failed to add the part. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after the request is complete
    }
  };

  const handleDeleteModule = async(
    moduleId:string
  )=>{
    const confirmed = window.confirm("Are you sure you want to delete this part?");
    if (!confirmed) return;
  
    try {
      const apiUrl = `http://localhost:5000/api/courses/modules/${moduleId}/CHAPTER`;
      await axios.delete(apiUrl);

    } catch (error) {
      console.error("Error deleting part:", error);
      alert("Failed to delete the part. Please try again.");
    }
  }
  const handleDeletePart = async (
    partId: string
  ) => {
    const confirmed = window.confirm("Are you sure you want to delete this part?");
    if (!confirmed) return;
  
    try {
      const apiUrl = `http://localhost:5000/api/courses/${localStorage.getItem('courseId')}/parts/${partId}`;
      await axios.delete(apiUrl);
      
    } catch (error) {
      console.error("Error deleting part:", error);
      alert("Failed to delete the part. Please try again.");
    }
  };
  

  const handleAddModuleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPartId) {
      alert("Please select a part first.");
      return;
    }

    setLoading(true); // Set loading state to true when starting the request

    try {
      const newModule: Module = {
        id: Date.now().toString(),
        type: e.target.moduleType.value,
        partId: selectedPartId,
        courseId: "1", // Handle course ID dynamically as needed
        isPromoted: false,
        isPromotional: false,
        attachments: [],
        chapters: [],
        assignments: [],
        exams: [],
      };

      // Handle Assignment Module
      if (newModule.type === ModuleType.ASSIGNMENT) {
        const response = await axios.post(
          `http://localhost:5000/api/courses/${localStorage.getItem(
            "courseId"
          )}/parts/${selectedPartId}/initialize-assignment`,
          {}
        );

        if (response.status === 201) {
          onAddModule(selectedPartId, newModule); // Update the UI after adding the module
          onSaveModule(); // Trigger refetch in parent to update data
          setShowAddModuleModal(false); // Close the modal
          onClose();
        }
      }

      // Handle Exam Module
      if (newModule.type === ModuleType.EXAM) {
        const response = await axios.post(
          `http://localhost:5000/api/courses/${localStorage.getItem(
            "courseId"
          )}/parts/${selectedPartId}/initialize-exam`,
          {}
        );

        if (response.status === 201) {
          onAddModule(selectedPartId, newModule); // Update the UI after adding the module
          onSaveModule(); // Trigger refetch in parent to update data
          setShowAddModuleModal(false); // Close the modal
          onClose();
        }
      }

      // Handle Chapter Module
      if (newModule.type === ModuleType.CHAPTER) {
        const response = await axios.post(
          `http://localhost:5000/api/courses/${localStorage.getItem(
            "courseId"
          )}/parts/${selectedPartId }/modules/chapter`
        );

        if (response.status === 201) {
          onAddModule(selectedPartId, newModule); // Update the UI after adding the module
          onSaveModule(); // Trigger refetch in parent to update data
          setShowAddModuleModal(false); // Close the modal
          onClose();
        }
      }

      // Handle Attachment and other modules if needed...
    } catch (error) {
      console.error("Error adding module:", error);
      alert("Failed to add the module. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after the request is complete
    }
  };

  return (
    <div className="p-4 pr-4 bg-white border border-r lg:w-1/3">
      <h1 className="mb-4 text-xl font-semibold">Parts and Modules</h1>
      {/* List Parts and Modules */}
      {parts &&
  parts.map((part) => (
    <div key={part.id} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{part.title}</h2>
        <button
          className="text-red-500 hover:text-red-700 border border-red-500 rounded px-3 py-1"
          onClick={() =>{handleDeletePart(part.id)        
    }}
        >
          Delete
        </button>
      </div>

      <ul className="space-y-2">
        {part.modules &&
          part.modules.map((module: Module, index) => {
            let moduleTitle = "";

            // Check the module type and get the title of the first item in the respective array
            if (
              module.type === ModuleType.ASSIGNMENT &&
              module.assignments.length > 0
            ) {
              moduleTitle = module.assignments[0].title;
            } else if (
              module.type === ModuleType.EXAM &&
              module.exams.length > 0
            ) {
              moduleTitle = module.exams[0].title;
            } else if (
              module.type === ModuleType.CHAPTER &&
              module.chapters.length > 0
            ) {
              moduleTitle = ` Chapter ${index + 1}`;
            } else if (
              module.type === ModuleType.ATTACHMENT &&
              module.attachments.length > 0
            ) {
              moduleTitle = "Attachment Module";
            }

            const isSelected = selectedModule?.id === module.id;

            return (
              <>
              <li
                key={module.id}
                className={`cursor-pointer p-2 border rounded-md ${
                  isSelected
                    ? "bg-blue-100 border-blue-500 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => onModuleSelect(module)}
              >
                <span>{moduleTitle}</span>
              </li>
              <button
          className="text-red-500 hover:text-red-700 border border-red-500 rounded px-3 py-1"
          onClick={() =>{handleDeleteModule(module.id)        
    }}
        >
          Delete
        </button>


              
              
              </>
            );
          })}
      </ul>
    </div>
  ))}


      {/* Add Part and Module Buttons */}
      <div className="flex gap-3 mb-4">
        <button
          className="p-2 text-white rounded bg-primary"
          onClick={() => setShowAddPartModal(true)}
        >
          Add Part
        </button>
        <button
          className={`p-2 rounded ${
            loading
              ? "bg-primary text white cursor-not-allowed"
              : "border border-primary text-primary font-semibold"
          }`}
          onClick={() => setShowAddModuleModal(true)}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Module"}
        </button>
      </div>

      {/* Add Part Modal */}
      {showAddPartModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="w-1/3 p-6 bg-white rounded-md shadow-md">
            <h3 className="mb-4 text-xl font-bold">Add Part</h3>
            <form onSubmit={handleAddPartSubmit}>
              <div>
                <label className="block mb-2 font-semibold">Title</label>
                <input
                  type="text"
                  placeholder="Enter Title..."
                  value={newPart.title}
                  onChange={(e) => setNewPart({ ...newPart, title: e.target.value })}
                  required
                  className="w-full p-2 mb-4 rounded-md border-slate-300"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Price</label>
                <input
                  type="number"
                  value={newPart.price}
                  placeholder="Enter Price..."
                  onChange={(e) => setNewPart({ ...newPart, price: Number(e.target.value) })}
                  required
                  className="w-full p-2 mb-4 rounded-md border-slate-300"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Completion Time (hours)</label>
                <input
                  type="number"
                  value={newPart.completionTime}
                  onChange={(e) => setNewPart({ ...newPart, completionTime: Number(e.target.value ) })}
                  required
                  className="w-full p-2 mb-4 rounded-md border-slate-300"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Opening Date</label>
                <input
                  type="date"
                  value={newPart.openingDate}
                  onChange={(e) => setNewPart({ ...newPart, openingDate: e.target.value })}
                  required
                  className="w-full p-2 mb-4 rounded-md border-slate-300"
                />
              </div>
              <button
                type="submit"
                className={`w-full p-2 rounded ${
                  loading
                    ? "bg-primary cursor-not-allowed"
                    : "bg-primary  text-white "
                }`}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Part"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add Module Modal */}
      {showAddModuleModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="w-1/3 p-6 bg-white rounded-md shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Add Module</h3>
            <form onSubmit={handleAddModuleSubmit}>
              <div>
                <label className="block mb-2 font-semibold">Select Part</label>
                <select
                  name="partId"
                  value={selectedPartId}
                  onChange={handlePartSelection}
                  required
                  className="w-full p-2 mb-4 rounded-md border-slate-300"
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
                <label className="block mb-2 font-semibold">Module Type</label>
                <select name="moduleType" required className="w-full p-2 mb-4 rounded-md border-slate-300">
                  <option value={ModuleType.ASSIGNMENT}>Assignment</option>
                  <option value={ModuleType.EXAM}>Exam</option>
                  <option value={ModuleType.CHAPTER}>Chapter</option>
                  <option value={ModuleType.ATTACHMENT}>Attachment</option>
                </select>
              </div>
              <button
                type="submit"
                className={`w-full p-2 rounded ${
                  loading
                    ? "bg-primary text-white cursor-not-allowed"
                    : "bg-primary text-white "
                }`}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Module"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
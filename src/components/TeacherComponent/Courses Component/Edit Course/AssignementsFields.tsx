import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AssignmentPopup } from "./EditCoursePopUps/AssignmentPopUp";
import { ExamPopup } from "./EditCoursePopUps/ExamPopUp";
import { AttachmentPopup } from "./EditCoursePopUps/AttachmentPopUp";
import axios from "axios";
import { Part ,Module} from "../../../../types/course";

function AssignmentsFields({ courseId }: { courseId: string }) {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module>(null);
  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteModule, setDeleteModule] = useState<any>(null);
  const [deletePart, setDeletePart] = useState<any>(null);
  const [showAddModuleModal, setShowAddModuleModal] = useState<boolean>(false);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [moduleType, setModuleType] = useState<string>("");
 

  useEffect(() => {
    const fetchCourseParts = async () => {
      try {
        if (!courseId) {
          console.error("Course ID not found");
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/courses/${courseId}/getCourseParts`
        );
 
       
        setParts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course parts:", error);
        setLoading(false);
      }
    };

    fetchCourseParts();
  }, [courseId]);

  const handleAddModule = async () => {
    if (!selectedPartId || !moduleType) {
      alert("Please select a part and a module type.");
      return;
    }

    try {
      const urlMap = {
        ASSIGNMENT: `http://localhost:5000/api/courses/${courseId}/parts/${selectedPartId}/initialize-assignment`,
        EXAM: `http://localhost:5000/api/courses/${courseId}/parts/${selectedPartId}/initialize-exam`,
        CHAPTER: `http://localhost:5000/api/courses/${courseId}/parts/${selectedPartId}/modules/chapter`,
      };

      if (!urlMap[moduleType]) {
        console.error("Invalid module type.");
        return;
      }

      await axios.post(urlMap[moduleType],{});

      
      
      alert(`${moduleType} initialized successfully!`);
      setShowAddModuleModal(false);
    } catch (error) {
      console.error("Error initializing module:", error);
    }
  };

  const handleModuleSelect = (module: any) => {
    setSelectedModule(module);
    setActivePopup(module.type.toLowerCase());
  };

  const closePopup = () => {
    
    setActivePopup(null);
  };

  const handleDeleteModule = async () => {
    if (!deleteModule) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/courses/modules/${deleteModule.id}/CHAPTER`
      );
      setDeleteModule(null);
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const cancelDeleteModule = () => {
    setDeleteModule(null);
  };

  const handleDeletePart = async () => {
    if (!deletePart) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/courses/${courseId}/parts/${deletePart.id}`
      );
      setDeletePart(null);
    } catch (error) {
      console.error("Error deleting part:", error);
    }
  };

  const cancelDeletePart = () => {
    setDeletePart(null);
  };

  return (
    <div className="space-y-3">
      {loading ? (
        <p>Loading parts and modules...</p>
      ) : (
        parts.map((part) => (
          <div key={part.id} className="space-y-3">
            {/* Part Title with Delete Icon */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{part.title}</h3>
              <IoIosCloseCircleOutline
                className="text-red-500 cursor-pointer"
                onClick={() => setDeletePart(part)}
              />
            </div>

            {/* Modules in the Part */}
            {part.modules.map((module: any) => (
  module.type !== "CHAPTER" && ( // Only render if the type is not "CHAPTER"
    <div
      key={module.id}
      className="flex items-center justify-between px-4 py-2 text-black border rounded-md border-primary"
    >
      <h4>
  {module.exams?.[0]?.title 
    ? module.exams[0].title 
    :module.attachments?.[0]?.title 
    ? module.attachments.title
    : module.assignments?.[0]?.title 
      ? module.assignments[0].title
      : module.type}
</h4>

      <div className="flex items-center gap-2">
        <p
          className="text-sm bg-[#FF47AC4F] text-[#FF008C] py-1 px-2 rounded-lg cursor-pointer"
          onClick={() => { handleModuleSelect(module); }}
        >
          Edit
        </p>
        <IoIosCloseCircleOutline
          className="text-red-500 cursor-pointer"
          onClick={() => setDeleteModule(module)}
        />
      </div>
    </div>
  )
))}

          </div>
        ))
      )}

      {/* Add Module Button */}
      <button
        className="px-4 py-2 mt-3 font-semibold border rounded-md text-primary border-primary"
        onClick={() => {setShowAddModuleModal(true)   }}
      >
        Add Module +
      </button>

      {/* Delete Confirmation for Module */}
      {deleteModule && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Confirm Deletion</h3>
            <p>Are you sure you want to delete this module?</p>
            <div className="flex justify-end mt-4 gap-4">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-lg"
                onClick={handleDeleteModule}
              >
                Yes, Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={cancelDeleteModule}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}



        {/* Delete Confirmation for Part */}
        {deletePart && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Confirm Deletion</h3>
            <p>Are you sure you want to delete this part and all its modules?</p>
            <div className="flex justify-end mt-4 gap-4">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-lg"
                onClick={handleDeletePart}
              >
                Yes, Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={cancelDeletePart}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}







      {/* Popups */}
      {showAddModuleModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
            <h3 className="text-lg font-bold">Add Module</h3>
            <select
              value={selectedPartId || ""}
              onChange={(e) => setSelectedPartId(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="" disabled>
                Select Part
              </option>
              {parts.map((part) => (
                <option key={part.id} value={part.id}>
                  {part.title}
                </option>
              ))}
            </select>

            <select
              value={moduleType}
              onChange={(e) => setModuleType(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="" disabled>
                Select Module Type
              </option>
              <option value="ASSIGNMENT">Assignment</option>
              <option value="EXAM">Exam</option>
              <option value="CHAPTER">Chapter</option>
            </select>

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
                onClick={handleAddModule}
              >
                Add
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={() => setShowAddModuleModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

{activePopup === "assignment" && selectedModule && (
        <AssignmentPopup courseId={courseId}
          moduleId={selectedModule.assignments[0]['id']}
          onClose={closePopup}
        />
      )}

      {/* Exam Popup */}
      {activePopup === "exam" && selectedModule && (
        
        <ExamPopup
          courseId={courseId}
          moduleId={selectedModule.exams[0]['id']}
          partId={selectedModule.partId}
          onClose={closePopup}
        />
      )}

      {/* Attachment Popup */}
      {activePopup === "attachment" && selectedModule && (
        <AttachmentPopup
          courseId={courseId}
          moduleId={selectedModule.id}
          partId={selectedModule.partId}
          onClose={closePopup}
        />
      )}




    </div>
  );
}

export default AssignmentsFields;

import { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AssignmentPopup } from './EditCoursePopUps/AssignmentPopUp';
import { ExamPopup } from './EditCoursePopUps/ExamPopUp';
import { AttachmentPopup } from './EditCoursePopUps/AttachmentPopUp';
import axios from 'axios';




function AssignmentsFields({courseId}) {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<any>(null);
  const [parts, setParts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteModule, setDeleteModule] = useState<any>(null); // State to track deletion

  useEffect(() => {
    const fetchCourseParts = async () => {
      try {
        
        if (!courseId) {
          console.error("Course ID not found in localStorage");
          return;
        }
        // console.log(courseId)
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}/getCourseParts`);

        setParts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course parts:", error);
        setLoading(false);
      }
    };

    fetchCourseParts();
  }, []);

  const handleModuleSelect = (module: any) => {
    setSelectedModule(module);
    setActivePopup(module.type.toLowerCase());
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const handleDeleteConfirmation = (module: any) => {
    setDeleteModule(module); // Set the module to be deleted
  };

  const handleDelete = async () => {
    if (!deleteModule) return;

    try {
      await axios.delete(`http://localhost:5000/api/courses/modules/${deleteModule.id}/CHAPTER`);
      // Remove the module from the UI
      setParts((prevParts) =>
        prevParts.map((part) =>
          part.id === deleteModule.partId
            ? {
                ...part,
                modules: part.modules.filter((module: any) => module.id !== deleteModule.id),
              }
            : part
        )
      );
      setDeleteModule(null); // Close the delete confirmation popup
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const cancelDelete = () => {
    setDeleteModule(null); // Close the delete confirmation popup
  };

  return (
    <div className="space-y-3">
      {loading ? (
        <p>Loading parts and modules...</p>
      ) : (
        parts.map((part) => (
          <div key={part.id} className="space-y-3">
            {/* Part Title */}
            <h3 className="text-lg font-bold">{part.title}</h3>

            {part.modules.map((module: any) => (
              <div
                key={module.id}
                className="flex items-center justify-between px-4 py-2 text-black border rounded-md border-primary"
              >
                {/* Module Type and Details */}
                <h4>
                  {module.type}{" "}
                  {module.type === "ASSIGNMENT" && module.assignments.length > 0
                    ? `(${module.assignments[0].title})`
                    : ""}
                </h4>

                <div className="flex items-center gap-2">
                  <p
                    className="text-sm bg-[#FF47AC4F] text-[#FF008C] py-1 px-2 rounded-lg cursor-pointer"
                    onClick={() => handleModuleSelect(module)}
                  >
                    Edit
                  </p>
                  <IoIosCloseCircleOutline
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDeleteConfirmation(module)}
                  />
                </div>
              </div>
            ))}
          </div>
        ))
      )}

      <button className="px-4 py-2 mt-3 font-semibold border rounded-md text-primary border-primary">
        Add Module +
      </button>

      {/* Popups */}
      {activePopup === "assignment" && selectedModule && (
        <AssignmentPopup
          moduleId={selectedModule.id}
          partId={selectedModule.partId}
          onClose={closePopup}
        />
      )}
      {activePopup === "exam" && selectedModule && (
        <ExamPopup
          moduleId={selectedModule.id}
          partId={selectedModule.partId}
          onClose={closePopup}
        />
      )}
      {activePopup === "attachment" && selectedModule && (
        <AttachmentPopup
          moduleId={selectedModule.id}
          partId={selectedModule.partId}
          onClose={closePopup}
        />
      )}

      {/* Delete Confirmation Popup */}
      {deleteModule && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Confirm Deletion</h3>
            <p>Are you sure you want to delete this module?</p>
            <div className="flex justify-end mt-4 gap-4">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-lg"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentsFields;

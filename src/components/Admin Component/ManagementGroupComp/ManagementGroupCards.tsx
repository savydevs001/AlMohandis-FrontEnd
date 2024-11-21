import { useState } from "react";
import img from "../../../../src/assets/book.webp";
import GradesPopup from "../../Student Component/RegisteredSubject/GradesPopup";
import DeletePopup from "../Communication/Messages/DeletePopup";
import { NavLink } from "react-router-dom";


function ManagementGroupCards() {
  const [showGradesPopup, setShowGradesPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const handleCloseGradesPopup = () => setShowGradesPopup(false);

  const handleOpenDeletePopup = () => setShowDeletePopup(true);
  const handleCloseDeletePopup = () => setShowDeletePopup(false);

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Student deleted");
    setShowDeletePopup(false); // Close the popup after delete
  };

  return (
    <div className="flex flex-col items-start justify-between p-3 space-y-6 bg-white border shadow-sm lg:items-center rounded-xl lg:flex-row lg:space-y-0">
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <div className="lg:w-[12%] w-[80%]">
          <img className="rounded-lg" src={img} alt="Group" />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Group Title</h1>
        </div>
      </div>
      <div className="flex flex-col lg:w-[12%] w-[100%] items-start gap-2 lg:border-l-4 border-BgColor px-4">
        
        <NavLink className='w-full' to='CreateManagementGroup'>
        <button
          className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary"
        >
          Edit
        </button>
        </NavLink>
        <button
          className="w-full px-4 py-2 text-sm font-semibold text-white bg-red-700 rounded-lg"
          onClick={handleOpenDeletePopup}
        >
          Delete
        </button>
      </div>

      {/* Popups */}
      {showGradesPopup && <GradesPopup onClose={handleCloseGradesPopup} />}
      {showDeletePopup && (
        <DeletePopup
          show={showDeletePopup}
          onClose={handleCloseDeletePopup}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default ManagementGroupCards;

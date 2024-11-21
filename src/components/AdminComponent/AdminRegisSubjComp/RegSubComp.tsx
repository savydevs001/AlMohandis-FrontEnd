import { useState } from "react";
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import AdminRegisteredSubCard from "./RegisteredCard";
import RegSubCreateNowPopUp from "./RegSubPopUp";
// Import the popup component

function AdminRegSubShowAllComp() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Registered Subjects" />
      <div className="flex items-center justify-end">
        <button
          className="px-4 py-2 text-white rounded-md bg-primary"
          onClick={handleOpenPopup}
        >
          Create Now +
        </button>
      </div>
      <div>
        <AdminRegisteredSubCard />
      </div>

      {/* Popup */}
      {showPopup && <RegSubCreateNowPopUp show={showPopup} onClose={handleClosePopup} />}
    </div>
  );
}

export default AdminRegSubShowAllComp;

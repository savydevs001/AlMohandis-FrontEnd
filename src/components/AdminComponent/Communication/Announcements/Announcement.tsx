import React, { useState } from "react";
import UserManagementHeader from "../../UserManagementComponent/UserManagementHeader";
import CommunicationMessageDropDown from "../Messages/CommuMesgDropDown";
// import MessagesList from "../Messages/MessagesList";
import SendNowPopup from "../Messages/SendNowPopup";
import AnnouncementList from "./AnnouncementList";


const Announcement: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Announcements" />
      <CommunicationMessageDropDown />
      <div className="flex items-center justify-end">
        <button
          className="px-4 py-2 text-white rounded-md bg-primary"
          onClick={handleOpenPopup}
        >
          Create Now +
        </button>
      </div>
      <AnnouncementList />
      <SendNowPopup show={showPopup} onClose={handleClosePopup} />
    </div>
  );
};

export default Announcement;
 



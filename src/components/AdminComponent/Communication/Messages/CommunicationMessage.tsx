import React, { useState } from "react";
import UserManagementHeader from "../../UserManagementComponent/UserManagementHeader";
import CommunicationMessageDropDown from "./CommuMesgDropDown";
import MessagesList from "./MessagesList";
import SendNowPopup from "./SendNowPopup";

const CommunicationMessage: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Messages" />
      <CommunicationMessageDropDown />
      <div className="flex items-center justify-end">
        <button
          className="px-4 py-2 text-white rounded-md bg-primary"
          onClick={handleOpenPopup}
        >
          Send Now +
        </button>
      </div>
      <MessagesList />
      <SendNowPopup show={showPopup} onClose={handleClosePopup} />
    </div>
  );
};

export default CommunicationMessage;

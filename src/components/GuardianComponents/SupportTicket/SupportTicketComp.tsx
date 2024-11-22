import React, { useState } from 'react';
import UserManagementHeader from "../../AdminComponent/UserManagementComponent/UserManagementHeader";
import TicketInformation from "./TicketInformation";
import CreateTicketPopup from './CreateTicketPopup';

const SupportTicketComp: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Support Ticket" />
      <div className="flex items-center justify-end">
        <button
          className="px-4 py-2 font-semibold text-white rounded-md bg-primary"
          onClick={handleOpenPopup}
        >
          Create New +
        </button>
      </div>
      <TicketInformation />
      {/* Render the popup conditionally */}
      {isPopupOpen && <CreateTicketPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default SupportTicketComp;

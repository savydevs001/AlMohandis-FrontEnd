// import React from 'react'

import { useState } from "react";
import ExportPopup from "../../Finanace/ExportPopUp";
import { PiExportLight } from "react-icons/pi";
import MessagesTable from "./MessagesTable";

function MessagesList() {
      const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleExportClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div className="lg:w-[100%] w-full space-y-3">
      <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Course Completion Rate</h1>
            <button
          onClick={handleExportClick} className="flex items-center gap-2 font-semibold text-primary"
        >
          <PiExportLight className="text-xl rotate-180 text-primary" />
          Export
        </button>
      </div>
      <MessagesTable/>
      {isPopupVisible && <ExportPopup onClose={handleClosePopup} />}
    </div>
  )
}

export default MessagesList
















// import React from 'react'

import { useState } from "react";
import ExportPopup from "../../AdminFinanManag/ExportPopUp";
import { PiExportLight } from "react-icons/pi";
import LogsAuditsTable from "./LogsAuditsTable";

function LogsAudtishowTable() {
      const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleExportClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div className="w-full p-3 space-y-3 rounded-md ">
      <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Logs & Audits</h1>
            <button
          onClick={handleExportClick} className="flex items-center gap-2 font-semibold text-primary"
        >
          <PiExportLight className="text-xl rotate-180 text-primary" />
          Export
        </button>
      </div>
     <LogsAuditsTable/>
      {isPopupVisible && <ExportPopup onClose={handleClosePopup} />}
    </div>
  )
}

export default LogsAudtishowTable




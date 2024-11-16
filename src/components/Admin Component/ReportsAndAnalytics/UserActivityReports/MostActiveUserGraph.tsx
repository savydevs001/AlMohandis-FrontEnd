// import React from 'react'

import { useState } from "react";
import ExportPopup from "../../AdminFinancialManagement/ExportPopUp";
import { PiExportLight } from "react-icons/pi";
import BarCharts from "./BarChart";

function MostActiveUserGraph() {
      const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleExportClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div className="lg:w-[50%] w-full p-3 bg-white rounded-md shadow-sm space-y-3">
      <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Most Active Users</h1>
            <button
          onClick={handleExportClick} className="flex items-center gap-2 font-semibold text-primary"
        >
          <PiExportLight className="text-xl rotate-180 text-primary" />
          Export
        </button>
      </div>
      <BarCharts/>
      {isPopupVisible && <ExportPopup onClose={handleClosePopup} />}
    </div>
  )
}

export default MostActiveUserGraph





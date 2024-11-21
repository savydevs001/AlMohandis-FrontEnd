import { useState } from "react";
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import { PiExportLight } from "react-icons/pi";
import FinancialManagementDropDown from "./FinancialManagDrop";
import FinancialManagemetnTable from "./FinancialMangTabl";
import ExportPopup from "./ExportPopUp";
// Import the popup component

function FinalcialManagementShowAllComp() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleExportClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title={"Financial Management"} />
      <div className="flex items-center justify-end">
        <button
          onClick={handleExportClick}
          className="flex items-center gap-2 px-4 py-2 text-lg text-white rounded-md bg-primary"
        >
          Export
          <PiExportLight className="text-xl rotate-180" />
        </button>
      </div>
      <div className="space-y-6">
        <FinancialManagementDropDown />
        <FinancialManagemetnTable />
      </div>
      {isPopupVisible && <ExportPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default FinalcialManagementShowAllComp;

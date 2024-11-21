import React, { useState } from "react";
import AdminFileInput from "../../AdminLandingCom/AdminFileInput";



interface TicketViewPopUPProps {
  show: boolean;
  onClose: () => void;
  content: string | null; // Content of the selected row to display
}
const TicketViewPopUP: React.FC<TicketViewPopUPProps> = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    status: "",
    userName: "",
    email: "",
    userRole: "",
    issueType: "",
    description: "",
    comments: "",
    heroImg: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="lg:w-[70%] w-[90%] p-8 bg-white rounded shadow-md space-y-4 custom-scrollbar">
        <div className="flex flex-col space-y-1">
          <label className="font-semibold" htmlFor="recipient-group">
            Status
          </label>
          <select
            className="rounded-md lg:w-[25%] w-[60%] border-slate-300"
            id="recipient-group"
            value={formData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
          >
            <option value="all">All</option>
            <option value="guardians">Guardians</option>
            <option value="students">Students</option>
            <option value="teachers">Teachers</option>
            <option value="admins">Admins</option>
            <option value="assistants">Assistants</option>
          </select>
        </div>
        {/* Repeat similar structure for other fields */}
        <AdminFileInput
          label="ScreenShot of Issue"
          onChange={(value) => handleInputChange("heroImg", value)}
        />
        <div className="flex items-center gap-5">
          <button onClick={onClose} className="px-4 py-2 mt-4 text-white rounded bg-primary">
            Confirm
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 mt-4 border rounded text-primary border-primary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketViewPopUP;

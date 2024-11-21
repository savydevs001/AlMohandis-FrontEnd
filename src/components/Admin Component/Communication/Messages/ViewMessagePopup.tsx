import React, { useState } from "react";
import AdminFileInput from "../../Landing/AdminFileInput";

interface ViewPopupProps {
  show: boolean;
  onClose: () => void;
  content: string | null; // Content of the selected row to display
}

const ViewMessagesPopup: React.FC<ViewPopupProps> = ({ show, onClose }) => {
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="view-popup-title"
      aria-describedby="view-popup-description"
    >
      <div className="lg:w-[70%]  w-[90%] p-8  bg-white rounded shadow-md space-y-4">
        <div className="flex flex-col space-y-1">
          <label className="font-semibold" htmlFor="recipient-group">
            Recipient Group
          </label>
          <select 
          value={formData.status}
          className="rounded-md lg:w-[25%] w-[60%] border-slate-300" id="recipient-group">
            <option value="all">All</option>
            <option value="guardians">Guardians</option>
            <option value="students">Students</option>
            <option value="teachers">Teachers</option>
            <option value="admins">Admins</option>
            <option value="assistants">Assistants</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">Subject</label>
            <input className="rounded-md border-slate-300" type="text" placeholder="Parent teacher Meetup" />
        </div>
        <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">Message Box</label>
          <textarea placeholder="Message Box...." className="rounded-md border-slate-300" name="" id=""></textarea>
        </div>
        <div className="flex flex-col gap-5 lg:items-center lg:flex-row">
            <h5 className="font-semibold">Send As</h5>
            <div className="flex items-center gap-2">
                  <input type="radio" />
                  <p>Both (Email & Push Notification)</p>
            </div>
        </div>
        <div className="flex flex-col space-y-1">
        <AdminFileInput
          label="ScreenShot of Issue"
          onChange={(value) => handleInputChange("heroImg", value)}
        />
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 mt-4 text-white rounded bg-primary "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ViewMessagesPopup;

import React, { useState } from "react";

import AdminFileInput from "../../Landing/AdminFileInput";
import ReciptSettingPopUp from "../../Communication/Messages/ReciptSettingPopUp";

interface SendNowPopupProps {
  show: boolean; // Controls the popup visibility
  onClose: () => void; // Callback for closing the popup
}

const AdminLiveLectureAttachmentPopUp: React.FC<SendNowPopupProps> = ({ show, onClose }) => {
  const [step, setStep] = useState(1); // State to track current step
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
  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data:", formData); // Check form data here
    setStep(2);
  };
  const handlePrevious = () => {
    setStep(1); // Go back to the first step
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="send-now-popup-title"
      aria-describedby="send-now-popup-description"
    >
      <div className="p-6 bg-white rounded shadow-md w-[90%] max-w-md custom-scrollbar"
      style={{
        maxHeight: 'calc(100vh - 20px)', // Dynamically adjust based on screen height
        overflowY: 'auto', // Enable scrolling only if content overflows
      }}>
      
        {step === 1 ? (
          <>
            <form className="space-y-4 " onSubmit={handleNext}>
              <div className="space-y-1">
                <input
                  type="text"
                  id="message-title"
                  className="w-full rounded-md border-slate-300"
                  placeholder="Basic of Science"
                />
              </div>
              <div className="flex items-center gap-3">
             <div className="space-y-1">   
                  <label htmlFor="message-content" className="block text-sm font-medium">
                  Teacher
                </label>
                <input
                  type="text"
                  id="message-title"
                  className="w-full rounded-md border-slate-300"
                  placeholder="Elliot John"
                /></div>
             <div className="space-y-1">   <label htmlFor="message-content" className="block text-sm font-medium">
                  Department
                </label>
                <input
                  type="text"
                  id="message-title"
                  className="w-full rounded-md border-slate-300"
                  placeholder="Basic Science"
                /></div>
              </div>

              <div className="space-y-1 ">
              <label htmlFor="message-content" className="block text-sm font-medium">
                  Date and Time
                </label>
                <input
                  type="date"
                  id="message-title"
                  className="w-full rounded-md border-slate-300"
                  placeholder=""
                />
              </div>

              <div className="space-y-2">
              <AdminFileInput
          label="Attachment"
          onChange={(value) => handleInputChange("heroImg", value)}
        />
                <AdminFileInput
          label=""
          onChange={(value) => handleInputChange("heroImg", value)}
        />
              </div>

              <button className="font-semibold border-b text-primary border-primary">Recipient Setting</button>
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border rounded text-primary border-primary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <ReciptSettingPopUp onClose={onClose} onPrevious={handlePrevious} />
        )}
      </div>
    </div>
  );
};

export default AdminLiveLectureAttachmentPopUp;



;

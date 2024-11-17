import React, { useState } from "react";
import ReciptSettingPopUp from "./ReciptSettingPopUp";
import AdminFileInput from "../../AdminLandingPageComponent/AdminFileInput";

interface SendNowPopupProps {
  show: boolean; // Controls the popup visibility
  onClose: () => void; // Callback for closing the popup
}

const SendNowPopup: React.FC<SendNowPopupProps> = ({ show, onClose }) => {
  const [step, setStep] = useState(1); // State to track current step

  if (!show) return null;

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    setStep(2); // Move to the next step
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
                <label htmlFor="message-title" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="message-title"
                  className="w-full rounded-md border-slate-300"
                  placeholder="Exam Reminder"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message-content" className="block text-sm font-medium">
                  Message
                </label>
                <input
                  type="text"
                  id="message-title"
                  className="w-full rounded-md border-slate-300"
                  placeholder="Body of the Message"
                />
              </div>

              <div className="space-y-1 ">
                <label className="font-semibold" htmlFor="">Send As</label>
              <div className="flex flex-wrap items-center justify-center gap-6 p-4">
              <div className="flex items-center space-x-2">
                  <input type="radio" className="w-3 h-3 text-primary" />
                  <p className="">Email</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" className="w-3 h-3 text-primary" />
                  <p className="">Push Notification</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" className="w-3 h-3 text-primary" />
                  <p className="">Whatsapp</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" className="w-3 h-3 text-primary" />
                  <p className="">SMS</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" className="w-3 h-3 text-primary" />
                  <p className="">All</p>
                </div>
              </div>
              </div>

              <div>
                <AdminFileInput label="Attachment" fileText="Assignment File"/>
                <AdminFileInput label="" fileText="Assignment File"/>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" className="w-3 h-3 text-primary" />
                <p className="text-lg font-semibold">Schedule for later</p>
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

export default SendNowPopup;

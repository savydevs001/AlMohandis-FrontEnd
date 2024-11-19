// ViewDetailsPopup.tsx
import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

interface ViewDetailsPopupProps {
  isVisible: boolean;
  onClose: () => void;
  details: {
    id: string;
    name: string;
    email: string;
    typeClass: string;
    joiningDate: string;
  } | null;
}

const LogAuditsViewPopUp: React.FC<ViewDetailsPopupProps> = ({
  isVisible,
  onClose,
  details,
}) => {
  if (!isVisible || !details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-5 bg-white rounded-lg shadow-lg w-[90%] lg:w-[38%] space-y-4">
        {/* Scrollable container with custom scroll bar */}
        <div
          className="max-h-[90vh] overflow-y-auto space-y-4 w-full"
          style={{
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "rgba(0, 0, 0, 0.2) transparent", // For Firefox
          }}
        >
          {/* Custom Scroll Bar for Webkit browsers */}
          <style>
            {`
              ::-webkit-scrollbar {
                width: 4px;
              }
              ::-webkit-scrollbar-track {
                background: transparent;
              }
              ::-webkit-scrollbar-thumb {
                background: rgba(0, 0, 0, 0.2);
                border-radius: 10px;
              }
              ::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 0, 0, 0.4);
              }
            `}
          </style>
          {/* Event Details Section */}
          <div className="flex flex-col items-center w-full gap-3 lg:flex-row">
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                Event Id
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="EVT-101"
              />
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                Action
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="New Course Created"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                User
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                Date
              </label>
              <input
                className="w-full py-1 border rounded-md lg:py-2 border-slate-300"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                IP Address
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="192.168.1.10"
              />
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                Status
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="Success"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-semibold text-md" htmlFor="">
              Action Description
            </label>
            <textarea
              className="py-1 border rounded-md lg:py-4 border-slate-300"
              placeholder="Description"
            />
          </div>
          {/* Course Details Section */}
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold">Course Detail</h1>
            <HiArrowTopRightOnSquare className="text-lg text-primary" />
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                Name
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="Advanced Mathematics"
              />
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                ID
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="CR-234"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                Associated Teacher
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col w-full space-y-1">
              <label className="font-semibold text-md" htmlFor="">
                Duration
              </label>
              <input
                className="py-1 border rounded-md lg:py-2 border-slate-300"
                type="text"
                placeholder="3 Months"
              />
            </div>
          </div>
        </div>
        {/* Footer with Close Button */}
        <div className="flex justify-end gap-4">
          <button
            className="px-6 py-2 font-semibold text-white rounded-md text-md bg-primary"
            onClick={onClose}
          >
            Save
          </button>
          <button
            className="px-4 py-2 font-semibold border rounded-md text-md border-primary text-primary"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogAuditsViewPopUp;

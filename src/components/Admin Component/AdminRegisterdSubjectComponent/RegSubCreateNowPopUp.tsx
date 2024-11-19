import React from "react";
import SearchableDropdown from "../Communication/Messages/SearchableDropdown";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface CreatePopupProps {
  show: boolean;
  onClose: () => void;
}

const RegSubCreateNowPopUp: React.FC<CreatePopupProps> = ({ show, onClose }) => {
  if (!show) return null; // Don't render if not visible

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="create-popup-title"
      aria-describedby="create-popup-description"
    >
      <div className="p-6 bg-white rounded shadow-lg lg:w-[30%] w-[90%]">
        <form>
          <div className="mb-2">
            <label
              htmlFor="subjectName"
              className="block mb-2 font-medium text-md"
            >
              Title
            </label>
            <input
              type="text"
              id="subjectName"
              className="w-full px-4 py-2 rounded-md border-slate-300"
              placeholder="Subject name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subjectName"
              className="block mb-2 font-medium text-md"
            >
              Schedule Time
            </label>
           <div className="flex items-center gap-4">
           <input
              type="text"
              id="subjectName"
              className="w-full px-4 py-2 rounded-md border-slate-300"
              placeholder="Day"
            />
           <input
              type="text"
              id="subjectName"
              className="w-full px-4 py-2 rounded-md border-slate-300"
              placeholder="00:00 - 00:00"
            />
           </div>
           <div>
<SearchableDropdown label="Select Class" placeholder="Select Class" options={["Class 1", "Class 2", "Class 3"]} onSelect={() => {}} />
      {/* <input type="text"/> */}
           </div>
           
           <div className="flex items-center justify-between px-6 mt-2 text-red-600">
            <p className="text-md text-pTag">Student 1 Name</p>
            <IoIosCloseCircleOutline />

           </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-primary border-primary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegSubCreateNowPopUp;





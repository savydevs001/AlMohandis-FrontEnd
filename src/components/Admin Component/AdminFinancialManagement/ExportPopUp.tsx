import React from "react";

interface ExportPopupProps {
  onClose: () => void;
}

const ExportPopup: React.FC<ExportPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-md shadow-lg w-[90%] sm:w-[400px] space-y-3">
      <div className="flex items-center justify-end">
            <input type="date" className="rounded-lg border-slate-300" />
      </div>
      <div className="flex flex-col space-y-1">
            <label className="text-lg font-semibold" htmlFor="">User Role</label>
            <select className="rounded-md" name="" id="">
                  <option value="">All</option>
                  <option value="">Student</option>
                  <option value="">Guardian</option>
                  <option value="">Teacher</option>
                  <option value="">Admin</option>
                  <option value=""></option>
            </select>
      </div>
      <div className="flex flex-col space-y-1">
            <label className="text-lg font-semibold" htmlFor="">Select Category</label>
            <select className="rounded-md" name="" id="">
                  <option value="">Select Category</option>
                  <option value="">Category 1</option>
                  <option value="">Category 2</option>
                  <option value="">Category 3</option>
                  <option value="">Category 4</option>
                  <option value="">Category 5</option>
            </select>
      </div>
      <div className="flex flex-col space-y-1">
            <label className="text-lg font-semibold" htmlFor="">Select Teacher</label>
            <select className="rounded-md" name="" id="">
                  <option value="">All</option>
                  <option value="">Teacher Name</option>
                  <option value="">Teacher Name</option>
                  <option value="">Teacher Name</option>
                  <option value="">Teacher Name</option>
                  <option value="">Teacher Name</option>
            </select>
      </div>
      <div className="flex flex-col space-y-1">
            <label className="text-lg font-semibold" htmlFor="">Select Course</label>
            <select className="rounded-md" name="" id="">
                  <option value="">All</option>
                  <option value="">Course Name</option>
                  <option value="">Course Name</option>
                  <option value="">Course Name</option>
                  <option value="">Course Name</option>
                  <option value="">Course Name</option>
            </select>
      </div>
      <div className="flex flex-col space-y-1">
            <label className="text-lg font-semibold" htmlFor="">Status</label>
            <select className="rounded-md" name="" id="">
                  <option value="">All</option>
                  <option value="">Course Creation</option>
                  <option value="">Course Creation</option>
                  <option value="">Course Creation</option>
                  <option value="">Course Creation</option>
                  <option value="">Course Creation</option>
            </select>
      </div>
       
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white rounded-md bg-primary hover:bg-primary-dark"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-white rounded-md bg-primary hover:bg-primary-dark">
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportPopup;

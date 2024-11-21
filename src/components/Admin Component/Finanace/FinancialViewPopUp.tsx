import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

// Define the type for the `row` prop
interface RowData {
  id: string;
  name: string;
  assistant: string | number; // Use appropriate type based on your data
  startDate: string; // Assuming date is a string
  status: string;
}

// Define the props for the component
interface FinancialViewPopupProps {
  row: RowData;
  onClose: () => void;
}

const FinancialViewPopup: React.FC<FinancialViewPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[90%] sm:w-[38%] p-6 bg-white rounded-lg shadow-md lg:space-y-3 space-y-2">
        <div className="flex flex-col space-y-1">
            <label className="font-semibold text-md" htmlFor="">Invoice Number</label>
            <input className="rounded-md w-[100%] py-1 lg:py-2" type="text" placeholder="INV-101" />
        </div>
        <div className="flex flex-col w-full gap-2 lg:gap-6 lg:flex-row item-s-center">
        <div className="flex flex-col space-y-1">
            <label className="font-semibold text-md" htmlFor="">Student Name</label>
            <input className="py-1 rounded-md lg:py-2" type="text" placeholder="John Dow" />
        </div>
        <div className="flex flex-col space-y-1">
            <label className="font-semibold text-md" htmlFor="">Course Name</label>
            <input className="py-1 rounded-md lg:py-2" type="text" placeholder="Math-101" />
        </div>
        </div>
        <div className="flex flex-col items-center w-full gap-6 lg:flex-row">
        <div className="flex flex-col w-full space-y-1">
            <label className="font-semibold text-md" htmlFor="">Amount</label>
            <input className="w-full py-1 rounded-md lg:py-2" type="text" placeholder="$75.00" />
        </div>
        <div className="flex flex-col w-full space-y-1">
            <label className="font-semibold text-md" htmlFor="">Date of Payment</label>
            <input className="py-1 rounded-md lg:py-2" type="text" placeholder="20-09-01" />
        </div>
        </div>
        <div className="flex flex-col space-y-1">
            <label className="font-semibold text-md" htmlFor="">Mode of Payment</label>
            <input className="rounded-md w-[100%] py-1 lg:py-2" type="text" placeholder="Visa Card" />
        </div>
        <div className="flex flex-col items-center w-full gap-6 lg:flex-row">
        <div className="flex flex-col w-full space-y-1">
            <label className="font-semibold text-md" htmlFor="">Card No.</label>
            <input className="py-1 rounded-md lg:py-2" type="text" placeholder="0551" />
        </div>
        <div className="flex flex-col w-full space-y-1">
            <label className="font-semibold text-md" htmlFor="">Card Holder</label>
            <input className="py-1 rounded-md lg:py-2" type="text" placeholder="Elizabeth" />
        </div>
        </div>
        <div className="flex justify-start mt-4 space-x-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-primary border-primary">
            <IoCloudDownloadOutline />

                  Download</button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-white rounded-md bg-primary"
          >Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialViewPopup;

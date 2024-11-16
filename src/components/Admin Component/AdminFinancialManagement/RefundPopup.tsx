import React from "react";

interface RefundPopupProps {
  row: { id: string; name: string; assistant: string; startDate: string; status: string };
  onClose: () => void;
}

const RefundPopup: React.FC<RefundPopupProps> = ({ row, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[90%] p-6 space-y-3 bg-white rounded shadow-lg lg:w-1/3">
        <div className="flex items-center space-x-2 ">
            <input className="text-primary" type="radio" name="" id="" />
            <p className="font-semibold">Complete Refund</p>
        </div>
        <div className="flex items-center space-x-2 ">
            <input className="text-primary" type="radio" name="" id="" />
            <p className="font-semibold">Refund Some Amount</p>
        </div>
            <input type="text" placeholder="Enter Amount" className="w-full rounded-md border-slate-300" />
        <div className="font-semibold text-center">
            <h4>Are you sure you wat to refund the Selected Payement?</h4>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-1 border rounded text-primary border-primary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white rounded bg-primary "
            onClick={() => {
              console.log(`Refund initiated for ${row.id}`);
              onClose();
            }}
          >
            Refund
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundPopup;

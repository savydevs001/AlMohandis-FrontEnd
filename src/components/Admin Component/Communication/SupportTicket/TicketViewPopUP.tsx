import React from "react";
import AdminFileInput from "../../AdminLandingPageComponent/AdminFileInput";

interface ViewPopupProps {
  show: boolean;
  onClose: () => void;
  content: string | null; // Content of the selected row to display
}

const TicketViewPopUP: React.FC<ViewPopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="view-popup-title"
      aria-describedby="view-popup-description"
    >
      <div className="lg:w-[70%] w-[90%] p-8 bg-white rounded shadow-md space-y-4 custom-scrollbar "
      style={{
            maxHeight: 'calc(100vh - 20px)', // Dynamically adjust based on screen height
            overflowY: 'auto', // Enable scrolling only if content overflows
          }}>
        <div className="flex flex-col space-y-1">
          <label className="font-semibold" htmlFor="recipient-group">
             Status
          </label>
          <select  className="rounded-md lg:w-[25%] w-[60%] border-slate-300" id="recipient-group">
            <option value="all">All</option>
            <option value="guardians">Guardians</option>
            <option value="students">Students</option>
            <option value="teachers">Teachers</option>
            <option value="admins">Admins</option>
            <option value="assistants">Assistants</option>
          </select>
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
        <div className="flex flex-col space-y-1 lg:w-[33%] w-full">
            <label className="font-semibold" htmlFor="">User Name</label>
            <input className="rounded-md border-slate-300 w-[100%]" type="text" placeholder="Sarah Smith" />
        </div>
        <div className="flex flex-col space-y-1 lg:w-[33%] w-full">
            <label className="font-semibold" htmlFor="">Email</label>
            <input className="rounded-md border-slate-300" type="text" placeholder="hello2@gmail.com" />
        </div>
        <div className="flex flex-col space-y-1 lg:w-[33%] w-full">
            <label className="font-semibold" htmlFor="">User Role</label>
            <input className="rounded-md border-slate-300" type="text" placeholder="Student" />
        </div>
        </div>
        <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">Issue Type</label>
            <input className="rounded-md border-slate-300 w-[100%]" type="text" placeholder="Login Issue" />
        </div>
        <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">Description</label>
            <input className="rounded-md border-slate-300 w-[100%]" type="text" placeholder="" />
        </div>
        <div className="flex flex-col space-y-1">
          <AdminFileInput label="Attachment" fileText="ScreenShot of Issue" />
        </div>
        <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">Comments/Updates</label>
            <input className="rounded-md border-slate-300 w-[100%]" type="text" placeholder="Login Issue" />
        </div>
       <div className="flex items-center gap-5">
       <button
          onClick={onClose}
          className="px-4 py-2 mt-4 text-white rounded bg-primary "
        >
          Confirm
        </button>
       <button
          onClick={onClose}
          className="px-4 py-2 mt-4 border rounded text-primary border-primary "
        >
          Cancel
        </button>
       </div>
      </div>
    </div>
  );
};

export default TicketViewPopUP;





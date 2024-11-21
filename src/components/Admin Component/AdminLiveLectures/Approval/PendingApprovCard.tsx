import { useState } from "react";
import book from "../../../../assets/book.webp";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";// Import the new component
import AdminLiveLectureAttachmentPopUp from "./AttachmentPopUp";

function AdminPendingApprovalCard() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isArrowPopupVisible, setIsArrowPopupVisible] = useState(false);

  const handleRejectClick = () => {
    setIsPopupVisible(true);
  };

  const handleCloseRejectPopup = () => {
    setIsPopupVisible(false);
  };

  const handleArrowClick = () => {
    setIsArrowPopupVisible(true);
  };

  const handleCloseArrowPopup = () => {
    setIsArrowPopupVisible(false);
  };

  return (
    <div className="p-2">
      <div className="w-full p-5 mt-2 lg:w-[100%] transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg">
        <img className="rounded-lg" src={book} alt="Book" />
        <div className="flex items-center justify-end mt-2">
          <HiArrowTopRightOnSquare
            className="cursor-pointer text-primary"
            onClick={handleArrowClick}
          />
        </div>
        <h1 className="mt-2 mb-1 text-2xl font-semibold">Name</h1>
        <p className="text-sm text-[#666]">Teacher Name</p>
        <div className="flex items-center gap-2 mt-2">
          <button className="px-6 py-2 text-sm text-white rounded-md bg-primary">
            Accept
          </button>
          <button
            className="px-6 py-2 text-sm text-white bg-red-600 rounded-md"
            onClick={handleRejectClick}
          >
            Reject
          </button>
        </div>
      </div>

      {/* Reject Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-5 bg-white rounded-lg shadow-lg w-[90%] max-w-md space-y-6">
            <div className="flex flex-col w-full space-y-3">
              <label htmlFor="">Reason of Rejection</label>
              <input
                className="py-6 rounded-md"
                type="text"
                placeholder="Write..."
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 font-semibold border rounded-md text-md border-primary text-primary"
                onClick={handleCloseRejectPopup}
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-white bg-red-600 rounded-md text-md">
                Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Arrow Popup */}
      {isArrowPopupVisible && <AdminLiveLectureAttachmentPopUp onClose={handleCloseArrowPopup} show  />}
    </div>
  );
}

export default AdminPendingApprovalCard;

import { useState } from "react";
import book from "../../../../assets/book.webp";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";// Import the new component
import AdminLiveLectureAttachmentPopUp from "../AdminPendingApprovalComp/AdminLiveLectureAttachmentPopUp";

function LiveLectureRejectedCards() {
  const [isArrowPopupVisible, setIsArrowPopupVisible] = useState(false);





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
        <p className="text-sm text-[#666]">Reason of Rejection</p>

      </div>



      {/* Arrow Popup */}
      {isArrowPopupVisible && <AdminLiveLectureAttachmentPopUp onClose={handleCloseArrowPopup} show  />}
    </div>
  );
}

export default LiveLectureRejectedCards;




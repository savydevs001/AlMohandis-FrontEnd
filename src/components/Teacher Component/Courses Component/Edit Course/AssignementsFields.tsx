import { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AssignmentPopup } from './EditCoursePopUps/AssignmentPopUp';
import { ExamPopup } from './EditCoursePopUps/ExamPopUp';
import { AttachmentPopup } from './EditCoursePopUps/AttachmentPopUp';

function AssignementsFields() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="space-y-3">
      {/* Assignment Section */}
      <div className="flex items-center justify-between px-4 py-2 text-black border rounded-md border-primary">
        <h4>Assignment 1</h4>
        <div className="flex items-center gap-2">
          <p
            className="text-sm bg-[#FF47AC4F] text-[#FF008C] py-1 px-2 rounded-lg cursor-pointer"
            onClick={() => setActivePopup('assignment')}
          >
            Edit
          </p>
          <IoIosCloseCircleOutline className="text-red-500" />
        </div>
      </div>

      {/* Exam Section */}
      <div className="flex items-center justify-between px-4 py-2 text-black border rounded-md border-primary">
        <h4>Exam 1</h4>
        <div className="flex items-center gap-2">
          <p
            className="text-sm bg-[#FF47AC4F] text-[#FF008C] py-1 px-2 rounded-lg cursor-pointer"
            onClick={() => setActivePopup('exam')}
          >
            Edit
          </p>
          <IoIosCloseCircleOutline className="text-red-500" />
        </div>
      </div>

      {/* Attachment Section */}
      <div className="flex items-center justify-between px-4 py-2 text-black border rounded-md border-primary">
        <h4>Attachment 1</h4>
        <div className="flex items-center gap-2">
          <p
            className="text-sm bg-[#FF47AC4F] text-[#FF008C] py-1 px-2 rounded-lg cursor-pointer"
            onClick={() => setActivePopup('attachment')}
          >
            Edit
          </p>
          <IoIosCloseCircleOutline className="text-red-500" />
        </div>
      </div>

      <button className="px-4 py-2 mt-3 font-semibold border rounded-md text-primary border-primary">
        Add Module +
      </button>

      {/* Popups */}
      {activePopup === 'assignment' && <AssignmentPopup onClose={closePopup} />}
      {activePopup === 'exam' && <ExamPopup onClose={closePopup} />}
      {activePopup === 'attachment' && <AttachmentPopup onClose={closePopup} />}
    </div>
  );
}

export default AssignementsFields;

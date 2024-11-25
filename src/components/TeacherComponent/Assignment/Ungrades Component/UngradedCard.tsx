// import { FaRegPenToSquare } from "react-icons/fa6";
import { AssignmentPopup } from '../../Courses Component/Edit Course/EditCoursePopUps/AssignmentPopUp';
import { useState } from "react";

interface UngradedAssignmentCardProps {
  assignment: {
    submissionId: string;
    assignmentTitle: string;
    courseName: string;
    submissionDate: string;
    work: string;
  };
}

function UngradedAssignmentCard({ assignment }: UngradedAssignmentCardProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const currentDate = new Date(assignment.submissionDate).toLocaleDateString();

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div>
      <div className="flex justify-between w-full px-4 py-4 space-y-1 bg-white border rounded-lg shadow-sm border-neutral-200">
        <div className="space-y-1">
          <h3 className="font-semibold">{assignment.assignmentTitle}</h3>
          <p className="text-[#7C7C7C]">
            Posted on <span className="font-medium text-black">{currentDate}</span>
          </p>
          <p className="font-medium">{assignment.courseName}</p>
          <button className="px-3 py-2 font-medium text-white rounded-md bg-primary">
            Grade Now
          </button>
        </div>
        {/* <div>
          <FaRegPenToSquare
            onClick={() => setActivePopup('assignment')}
            className="text-xl font-thin cursor-pointer"
          />
        </div> */}
      </div>

      {activePopup === 'assignment' && (
        <AssignmentPopup onClose={closePopup} />
      )}
    </div>
  );
}

export default UngradedAssignmentCard;

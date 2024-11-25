import { FaRegPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import { AssignmentPopup } from '../../Courses Component/Edit Course/EditCoursePopUps/AssignmentPopUp';

interface GradesAssignmentCardProps {
  assignment: {
    submissionId: string;
    assignmentTitle: string;
    courseName: string;
    submissionDate: string;
    grade: string | null;
    work: string;
  };
}

function GradesAssignmentCard({ assignment }: GradesAssignmentCardProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const currentDate = new Date(assignment.submissionDate).toLocaleDateString();

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="flex justify-between w-full px-4 py-4 space-y-1 bg-white border rounded-lg shadow-sm border-neutral-200">
      <div className="space-y-1">
        <h3 className="font-semibold">{assignment.assignmentTitle}</h3>
        <p className="text-[#7C7C7C]">
          Submitted on <span className="font-medium text-black">{currentDate}</span>
        </p>
        <p className="font-medium">{assignment.courseName}</p>
        <p className="font-medium text-primary">Grade: {assignment.grade || "Not Graded Yet"}</p>
      </div>
      <div>
        <FaRegPenToSquare
          onClick={() => setActivePopup('assignment')}
          className="text-xl font-thin cursor-pointer"
        />
      </div>
      {activePopup === 'assignment' && (
        <AssignmentPopup onClose={closePopup} />
      )}
    </div>
  );
}

export default GradesAssignmentCard;

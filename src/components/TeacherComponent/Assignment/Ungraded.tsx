import UngradedAssignmentCard from "./Ungrades Component/UngradedCard";

interface Assignment {
  submissionId: string;
  studentId: string;
  assignmentId: string;
  submissionDate: string;
  grade: any;
  isGraded: boolean;
  submitted: boolean;
  work: string;
  comment: any;
  assignmentTitle: string;
  courseName: string;
}

interface UngradedProps {
  assignments: Assignment[];
}

function Ungraded({ assignments }: UngradedProps) {
  return (
    <div className="p-2 lg:p-0">
      <div className="space-y-3">
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <UngradedAssignmentCard key={assignment.submissionId} assignment={assignment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ungraded;

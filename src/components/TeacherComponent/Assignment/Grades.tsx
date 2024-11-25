import GradesAssignmentCard from "./Grades Component/GradesCard";

interface GradesProps {
  assignments: any[];
}

function Grades({ assignments }: GradesProps) {
  return (
    <div className="p-2 lg:p-0">
      <div className="space-y-3">
        <div className="space-y-6">
          {assignments.map((assignment) => (
            <GradesAssignmentCard key={assignment.submissionId} assignment={assignment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grades;

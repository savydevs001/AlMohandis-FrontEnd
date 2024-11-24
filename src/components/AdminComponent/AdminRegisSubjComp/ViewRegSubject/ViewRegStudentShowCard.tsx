import Loading from "../../../Loading";
import ViewRegSubCard from "./ViewRegSubCard";

interface ViewRegStudentShowCardProps {
  students: {
    fullName: string;
    email: string;
    regNo: string;
    department: string;
    guardianNo: string;
    class:string
  }[];
  loading: boolean;
  error: string | null;
}

function ViewRegStudentShowCard({
  students,
  loading,
  error,
}: ViewRegStudentShowCardProps) {
  if (loading) return <Loading/>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (students.length === 0) return <p>No students available.</p>;

  return (
    <div className="space-y-3">
      {students.map((student, index) => (
        <ViewRegSubCard key={index} student={student} />
      ))}
    </div>
  );
}

export default ViewRegStudentShowCard;

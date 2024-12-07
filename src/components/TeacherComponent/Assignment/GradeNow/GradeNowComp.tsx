import { useEffect, useState } from "react";
import GradeNowCard from "./GradeNowCard";
import GradeNowShowPdf from "./GradeNowShowPdf";
import axios from "axios";

interface GradeNowShowCompProps {
  subId: string;
}

const GradeNowShowComp: React.FC<GradeNowShowCompProps> = ({ subId }) => {
  const [assignments, setAssignments] = useState<any[]>([]); // State to store fetched assignments
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading state
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!subId) {
        console.log("subId is not available yet.");
        return; // Do not proceed with the request if subId is invalid
      }

      console.log("Fetching assignments for subId:", subId);
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/admin/assignments/cm4cse9ta0002sjhjaw3yxgqx/submissions`
        );
        console.log(response.data);
        setAssignments(response.data); // Update the state with the response data
        setError(null); // Clear any previous errors
      } catch (err: any) {
        console.error("Error fetching assignments:", err);
        setError(err.message || "Failed to fetch assignments");
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchAssignments(); // Call the async function
  }, [subId]); // Fetch data only when subId changes

  return (
    <div className="flex-1 space-y-10">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-[60%] ">
          <GradeNowShowPdf />
        </div>
        <div className="lg:w-[40%] space-y-4">
          {loading ? (
            <div>Loading assignments...</div>
          ) : error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            assignments.map((assignment, index) => (
              <GradeNowCard key={index} data={assignment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GradeNowShowComp;

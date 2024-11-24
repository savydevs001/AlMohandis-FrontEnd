import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get group ID from params
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie for token
import ViewRegStudentShowCard from "./ViewRegStudentShowCard";
import ViewRegSubGrade from "./ViewRegSubGrades/ViewRegSubGrade";
import StudentAddPopup from "./StudentAddPopup";
import GradesAddPopup from "./ViewRegSubGrades/GradesAddPopup";

type Tab = "information" | "course";

function ViewRegSubHeader() {
  const [activeTab, setActiveTab] = useState<Tab>("information");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showStudentPopup, setShowStudentPopup] = useState(false);
  const [showGradesPopup, setShowGradesPopup] = useState(false);

  const { id } = useParams<{ id: string }>(); // Get group ID from params

  // Fetch students from the API
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError(null);

      const token = Cookies.get("token"); // Get token from cookies
      if (!token) {
        setError("Authentication token is missing.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/admin/groups/${id}/students`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add Bearer token
            },
          }
        );
        setStudents(response.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch students.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [id]);

  const handleAddClick = () => {
    if (activeTab === "information") {
      setShowStudentPopup(true);
    } else if (activeTab === "course") {
      setShowGradesPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowStudentPopup(false);
    setShowGradesPopup(false);
  };

  return (
    <div className="">
      <div className="w-full space-y-3">
        {/* Tabs Header */}
        <div className="flex flex-col justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0">
          <div className="flex space-x-6">
            <button
              className={`px-2 py-2 text-md ${
                activeTab === "information"
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("information")}
            >
              Students
            </button>
            <button
              className={`lg:px-4 px-2 py-2 text-sm font-semibold ${
                activeTab === "course"
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("course")}
            >
              Grades
            </button>
          </div>
          <div>
            <button
              onClick={handleAddClick}
              className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-md bg-primary"
            >
              Add +
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-4 ">
          {activeTab === "information" ? (
            <ViewRegStudentShowCard
              students={students}
              loading={loading}
              error={error}
            />
          ) : (
            <ViewRegSubGrade />
          )}
        </div>
      </div>

      {/* Popups */}
      {showStudentPopup && (
        <StudentAddPopup show={showStudentPopup} groupId={id} onClose={handleClosePopup} />
      )}
      {showGradesPopup && (
        <GradesAddPopup show={showGradesPopup} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default ViewRegSubHeader;

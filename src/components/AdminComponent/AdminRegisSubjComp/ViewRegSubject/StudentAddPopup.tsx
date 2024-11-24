import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie"; 
import { useParams } from "react-router-dom"; // To get group ID from params

interface StudentAddPopupProps {
  show: boolean;
  onClose: () => void;
  groupId: string | undefined;
}

const StudentAddPopup: React.FC<StudentAddPopupProps> = ({ show, onClose, groupId }) => {
  const [students, setStudents] = useState<any[]>([]); // Store students data
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null); // Track selected student
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch all students when the component mounts
    const fetchStudents = async () => {
      const token = Cookies.get("token");
      if (!token) {
        setError("Authentication token is missing.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/open/getAllStudents", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStudents(response.data || []);
      } catch (err) {
        setError("Failed to fetch students.");
      }
    };

    fetchStudents();
  }, []);

  const handleAddStudent = async () => {
    if (!selectedStudent) {
      setError("Please select a student.");
      return;
    }

    setLoading(true);
    const token = Cookies.get("token");
    if (!token) {
      setError("Authentication token is missing.");
      setLoading(false);
      return;
    }

    try {
      // Use the groupId from the props
      const response = await axios.post(
        `http://localhost:5000/api/admin/groups/${groupId}/addStudent`,
        { studentId: selectedStudent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);  
      // Handle success
      alert("Student added successfully");
      onClose(); // Close the popup
    } catch (err) {
      setError("Failed to add student.");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null; // Don't render if not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white shadow-lg w-[90%] lg:w-[30%] rounded-lg space-y-4">
        <form>
          {/* Dropdown to select student */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Select Student</label>
            <select
              className="w-full p-2 border rounded-md mt-2"
              value={selectedStudent || ""}
              onChange={(e) => setSelectedStudent(e.target.value)}
            >
              <option value="">Select a student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.fullName}
                </option>
              ))}
            </select>
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Add Button */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-semibold border text-primary border-primary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddStudent}
              className="px-4 py-2 text-white rounded-md bg-primary"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Wrap the StudentAddPopup component in a parent component to pass groupId

export const ParentComponent = () => {
  const { id } = useParams<{ id: string }>(); // Get group ID from params

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleShowPopup}>Add Student</button>
      <StudentAddPopup
        show={showPopup}
        onClose={handleClosePopup}
        groupId={id} // Pass the groupId to the popup
      />
    </div>
  );
};

export default StudentAddPopup;

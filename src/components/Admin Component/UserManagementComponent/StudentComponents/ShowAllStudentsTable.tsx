import  { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack"; 
import Loading from "../../../Loading"

interface Student {
  id: string;
  fullName: string;
  email: string | null;
  phone: string;
  dateOfBirth: string;
  enrollmentDate: string;
  department: string;
  program: string;
  studentRole: string;
  isFreeze: boolean;
  enrolledCoursesCount: number;
  class: string | null;
}

function ShowAllStudentsTable() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [studentToDelete, setStudentToDelete] = useState<string | null>(null); // to store the student id to delete

  const { enqueueSnackbar } = useSnackbar(); // Use notistack hook for showing notifications

  useEffect(() => {
    // Get the token from cookies
    const token = Cookies.get("token");

    if (!token) {
      setError("Authentication token missing");
      setLoading(false);
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/getAllStudents`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        const formattedStudents = data.map((student: any) => ({
          id: student.id,
          fullName: student.fullName,
          email: student.email || "N/A", // Handle null emails
          phone: student.phone || "N/A", // Handle missing phone number
          dateOfBirth: new Date(student.dateOfBirth).toLocaleDateString(),
          enrollmentDate: new Date(student.enrollmentDate).toLocaleDateString(),
          department: student.department || "N/A", // Handle missing department
          program: student.program || "N/A", // Handle missing program
          studentRole: student.studentRole || "N/A", // Handle missing student role
          isFreeze: student.isFreeze ? "Yes" : "No", // Display Yes/No for freeze status
          enrolledCoursesCount: student.enrolledCoursesCount || 0,
          class: student.class || "N/A", // Handle missing class
        }));
        setStudents(formattedStudents);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch students: " + err.message);
        setLoading(false);
      });
  }, []);

  // Delete Student API call
  const handleDelete = (studentId: string) => {
    const token = Cookies.get("token");

    if (!token) {
      enqueueSnackbar("Authentication token missing", { variant: "error" });
      return;
    }

    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/deleteStudent/${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        // Remove the deleted student from the state
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== studentId)
        );
        setShowDeleteModal(false); // Close the modal after deletion
        enqueueSnackbar("Student deleted successfully", { variant: "success" }); // Success notification
      })
      .catch((err) => {
        enqueueSnackbar("Failed to delete student: " + err.message, { variant: "error" });
      });
  };

  const openDeleteModal = (studentId: string) => {
    setStudentToDelete(studentId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setStudentToDelete(null);
  };

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <div>
        <table className="w-full text-center border-collapse shadow-md rounded-lg bg-white">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Student ID</th>
              <th className="px-4 py-2 border border-black">Student Name</th>
              <th className="px-4 py-2 border border-black">Email</th>
              <th className="px-4 py-2 border border-black">Enrollment Date</th>
              <th className="px-4 py-2 border border-black">Type/Class</th>
              <th className="px-4 py-2 border border-black">Courses Enrolled</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {students.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id.slice(0, 10)}</td>
                <td className="px-4 py-2 border border-black">{row.fullName}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.enrollmentDate}</td>
                <td className="px-4 py-2 border border-black">{row.class == "null" ? row.studentRole:row.class}</td>
                <td className="px-4 py-2 border border-black">{row.enrolledCoursesCount}</td>
                <td className="px-4 py-2 border border-black">
                  <NavLink to={`/UserManagement/student/view/${row.id}`} className="text-blue-500 cursor-pointer">
                    View
                  </NavLink>{" "}
                  |{" "}
                  <span
                    className="text-red-600 cursor-pointer"
                    onClick={() => openDeleteModal(row.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showDeleteModal && studentToDelete && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Are you sure you want to delete this student?</h3>
            <div className="flex justify-between">
              <button
                onClick={() => handleDelete(studentToDelete)}
                className="bg-red-500 text-white py-2 px-4 rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={closeDeleteModal}
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowAllStudentsTable;

import { useEffect, useState } from "react";
import img from "../../../../../../assets/book.webp";
import Cookies from "js-cookie"; // Import js-cookie
import { useSnackbar } from 'notistack'; // Import Notistack

interface GeneralInformationProps {
  Id: string | undefined;
}

interface StudentData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  enrollmentDate: string;
  department: string;
  program: string;
  studentRole: string;
  studentId?: string; // Add studentId to the StudentData interface
}

function GeneralInformationForm({ Id }: GeneralInformationProps) {
  const { enqueueSnackbar } = useSnackbar(); // Initialize Notistack
  const [studentData, setStudentData] = useState<StudentData>({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    enrollmentDate: "",
    department: "",
    program: "",
    studentRole: "",
  });

  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // State to manage edit mode

  const studentId = Id;
  const token = Cookies.get("token"); // Retrieve the token from cookies

  // Fetch student details on component mount
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/admin/getStudentDetail/${studentId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Add token in the Authorization header
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setStudentData({
          fullName: data.fullName || "",
          email: data.email || "",
          phone: data.phone || "",
          dateOfBirth: data.dateOfBirth
            ? new Date(data.dateOfBirth).toISOString().split("T")[0]
            : "",
          enrollmentDate: data.enrollmentDate
            ? new Date(data.enrollmentDate).toISOString().split("T")[0]
            : "",
          department: data.department || "",
          program: data.program || "",
          studentRole: data.studentRole || "",
        });
      } catch (error) {
        console.error("Error fetching student details:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchStudentDetails();
  }, [studentId, token]);
  

  const handleSavePassword = async () => {
    if (!newPassword.trim()) {
      enqueueSnackbar("Please enter a new password!", { variant: "warning" });
      return;
    }

    try {
      setIsSaving(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/updateStudentPassword/${studentId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add token in the Authorization header
          },
          body: JSON.stringify({ newPassword }),
        }
      );

      if (response.ok) {
        enqueueSnackbar("Password updated successfully!", { variant: "success" });
        setNewPassword("");
      } else {
        const error = await response.json();
        enqueueSnackbar(`Failed to update password: ${error.message}`, { variant: "error" });
      }
    } catch (error) {
      console.error("Error updating password:", error);
      enqueueSnackbar("An error occurred while updating the password.", { variant: "error" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/editStudent/${studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add token in the Authorization header
          },
          body: JSON.stringify(studentData),
        }
      );

      if (response.ok) {
        enqueueSnackbar("Profile updated successfully!", { variant: "success" });
        setIsEditing(false);
      } else {
        const error = await response.json();
        enqueueSnackbar(`Failed to update profile: ${error.message}`, { variant: "error" });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      enqueueSnackbar("An error occurred while updating the profile.", { variant: "error" });
    }
  };

  const handleFreezeStudent = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/freezeStudent/${studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add token in the Authorization header
          },
        }
      );

      if (response.ok) {
        enqueueSnackbar("Student frozen successfully!", { variant: "success" });
      } else {
        const error = await response.json();
        enqueueSnackbar(`Failed to freeze student: ${error.message}`, { variant: "error" });
      }
    } catch (error) {
      console.error("Error freezing student:", error);
      enqueueSnackbar("An error occurred while freezing the student.", { variant: "error" });
    }
  };

  const handleRemoveStudent = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/deleteStudent/${studentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add token in the Authorization header
          },
        }
      );

      if (response.ok) {
        enqueueSnackbar("Student removed successfully!", { variant: "success" });
      } else {
        const error = await response.json();
        enqueueSnackbar(`Failed to remove student: ${error .message}`, { variant: "error" });
      }
    } catch (error) {
      console.error("Error removing student:", error);
      enqueueSnackbar("An error occurred while removing the student.", { variant: "error" });
    }
  };

  const fields: { label: string; key: keyof StudentData }[] = [
    { label: "Name", key: "fullName" },
    { label: "ID", key: "studentId" },
    { label: "Type", key: "studentRole" },
    { label: "Department", key: "department" },
    { label: "Program", key: "program" },
    { label: "Email", key: "email" },
    { label: "Date of Birth", key: "dateOfBirth" },
    { label: "Phone", key: "phone" },
    { label: "Enrollment Date", key: "enrollmentDate" },
  ];

  return (
    <div className="p-3 space-y-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <span
            className="px-2 py-1 text-xs text-[#FF008C] bg-[#FF47AC4F] rounded-lg cursor-pointer"
            onClick={handleEditToggle}
          >
            {isEditing ? "Cancel" : "Edit"}
          </span>
          <div className="flex items-center justify-between">
            <div className="w-20 h-20 bg-red-400 rounded-full">
              <img className="w-full h-full rounded-full" src={img} alt="" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <button
                className="px-4 py-1 font-semibold border rounded-md border-primary text-primary"
                onClick={handleRemoveStudent}
              >
                Remove
              </button>
              <button
                className="px-4 py-1 font-semibold border rounded-md border-primary text-primary"
                onClick={handleFreezeStudent}
              >
                Freeze
              </button>
            </div>
          </div>
          <div>
            <span className="px-2 py-1 text-xs text-[#098E02] bg-[#098E0221] rounded-lg">
              {studentData.studentRole}
            </span>
          </div>
          <div className="space-y-2">
            <h6>University of Engineering and Technology</h6>
            <form className="flex flex-col space-y-3">
              {fields.map((field, index) => (
                <div
                  className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8"
                  key={index}
                >
                  <label
                    className="font-semibold text-[#333] lg:w-[15%] w-full"
                    htmlFor={field.label}
                  >
                    {field.label}
                  </label>
                  <input
                    className="lg:w-[50%] w-full max-w-md py-2 border rounded-lg border-slate-300"
                    type="text"
                    value={isEditing ? studentData[field.key] : studentData[field.key]}
                    readOnly={!isEditing}
                    onChange={isEditing ? (e) => setStudentData({ ...studentData, [field.key]: e.target.value }) : undefined}
                  />
                </div>
              ))}
            </form>
            {isEditing && (
              <button
                className="px-4 py-2 text-white bg-teal-600 rounded-lg"
                onClick={handleSaveProfile}
              >
                Save Profile
              </button>
            )}
          </div>

          {/* Change Password Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <input
                className="lg:w-[50%] w-full max-w-md py-2 border rounded-lg border-slate-300"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button
                className={`px-4 py-2 text-white rounded-lg ${
                  isSaving ? "bg-gray-500" : "bg-teal-600"
                }`}
                onClick={handleSavePassword}
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default GeneralInformationForm;
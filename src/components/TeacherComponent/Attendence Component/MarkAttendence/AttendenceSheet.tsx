import React, { useState } from "react";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";

interface AttendanceSheetProps {
  student: any;
  groupId: string;
  date: string;
}

const AttendanceSheet: React.FC<AttendanceSheetProps> = ({
  student,
  groupId,
  date,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [status, setStatus] = useState<"present" | "absent" | null>(null);

  const handleMarkAttendance = async () => {
    if (status === null) {
      enqueueSnackbar("Please select attendance status", { variant: "warning" });
      return;
    }

    // Get token from cookies
    const token = Cookies.get("token");
    if (!token) {
      enqueueSnackbar("Authorization token is missing", { variant: "error" });
      return;
    }

    const attendanceData = {
      attendanceData: [
        {
          studentId: student.id,
          attended: status === "present",
        },
      ],
      date,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/attendance/group/${groupId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Pass the token here
          },
          body: JSON.stringify(attendanceData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        enqueueSnackbar("Attendance marked successfully!", { variant: "success" });
      } else {
        enqueueSnackbar(data.message || "Failed to mark attendance", {
          variant: "error",
        });
      }
    } catch (error) {
      console.error("Error marking attendance:", error);
      enqueueSnackbar("Something went wrong!", { variant: "error" });
    }
  };

  return (
    <div className="flex items-center justify-between bg-white border shadow-sm border-[#99999949] rounded-md p-3">
      <div className="text-[#777] font-semibold text-lg">{student.fullName}</div>
      <div className="flex gap-8">
        <div className="flex items-center gap-2 text-white">
          <p
            className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
              status === "present" ? "bg-[#11C111]" : "bg-[#AFAFAF]"
            }`}
            onClick={() => setStatus("present")}
          >
            P
          </p>
          <p
            className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
              status === "absent" ? "bg-[#FF0000]" : "bg-[#AFAFAF]"
            }`}
            onClick={() => setStatus("absent")}
          >
            A
          </p>
        </div>
        <button
          onClick={handleMarkAttendance}
          className="p-2 bg-primary text-white rounded-md"
        >
          {"✓"}
        </button>
      </div>
    </div>
  );
};

export default AttendanceSheet;

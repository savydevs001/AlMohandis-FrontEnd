import  { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

interface ViewAttendenceSheetProps {
  name: string;
  present: number;
  total: number;
}

const ViewAttendenceSheet = ({ name, present, total }: ViewAttendenceSheetProps) => {
  const absent = total - present;

  return (
    <div className="flex items-center justify-between bg-white border shadow-sm border-[#99999949] rounded-md p-3">
      <div>
        <h5 className="text-[#888] font-medium">{name}</h5>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-[#11C111]">
          Present : <span className="text-black">{present}</span>
        </p>
        <span className="text-[#AFAFAF]">|</span>
        <p className="text-[#FF0000]">
          Absent : <span className="text-black">{absent}</span>
        </p>
      </div>
    </div>
  );
};

const AdminViewAttendance = () => {
  const [subjects, setSubjects] = useState<any[]>([]);  // List of subjects
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);  // Selected subject
  const [groups, setGroups] = useState<any[]>([]);  // List of groups based on selected subject
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);  // Selected group
  const [attendanceData, setAttendanceData] = useState<any[]>([]);  // Attendance data for the selected group
  const [loading, setLoading] = useState<boolean>(false);  // Loading state for fetching data
  const { enqueueSnackbar } = useSnackbar();

  // Fetch subjects on component mount
  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/open/getAllSubjects");
        const data = await response.json();
        setSubjects(data);  // Set subjects data
      } catch (error) {
        enqueueSnackbar("Failed to fetch subjects", { variant: "error" });
      } finally {
        setLoading(false);
      }
    };
    fetchSubjects();
  }, []);

  // Fetch groups when a subject is selected
  useEffect(() => {
    if (selectedSubject) {
      const fetchGroups = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:5000/api/open/getSubjectsGroups/${selectedSubject}`);
          const data = await response.json();
          setGroups(data.groups);  // Set groups data
        } catch (error) {
          enqueueSnackbar("Failed to fetch groups", { variant: "error" });
        } finally {
          setLoading(false);
        }
      };
      fetchGroups();
    }
  }, [selectedSubject]);

  // Fetch attendance data when a group is selected
  useEffect(() => {
    if (selectedGroup) {
      const fetchAttendanceData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:5000/api/admin/attendance/${selectedGroup}`);
          const data = await response.json();
          setAttendanceData(data);  // Set attendance data
        } catch (error) {
          enqueueSnackbar("Failed to fetch attendance data", { variant: "error" });
        } finally {
          setLoading(false);
        }
      };
      fetchAttendanceData();
    }
  }, [selectedGroup]);

  return (
    <div className="p-4 space-y-3">
      {/* Heading */}
      <h2 className="text-xl font-semibold">View Attendance</h2>
      
      {/* Show loading state */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Subject Dropdown */}
          <select
            className="p-2 border rounded"
            onChange={(e) => setSelectedSubject(e.target.value)}
            value={selectedSubject || ""}
          >
            <option value="" disabled>
              Select Subject
            </option>
            {subjects.length > 0 ? (
              subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))
            ) : (
              <option disabled>No subjects available</option>
            )}
          </select>

          {/* Group Dropdown */}
          {selectedSubject && (
            <select
              className="p-2 border rounded"
              onChange={(e) => setSelectedGroup(e.target.value)}
              value={selectedGroup || ""}
            >
              <option value="" disabled>
                Select Group
              </option>
              {groups.length > 0 ? (
                groups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.title}
                  </option>
                ))
              ) : (
                <option disabled>No groups available</option>
              )}
            </select>
          )}

          {/* Attendance Data Display */}
          {selectedGroup && (
            <div className="space-y-3 mt-4">
              {attendanceData.length > 0 ? (
                attendanceData.map((student) => {
                  const present = Object.keys(student.attendanceByDay).reduce((acc, day) => {
                    return acc + student.attendanceByDay[day].attended;
                  }, 0);

                  const total = Object.keys(student.attendanceByDay).reduce((acc, day) => {
                    return acc + student.attendanceByDay[day].total;
                  }, 0);

                  return (
                    <ViewAttendenceSheet
                      key={student.studentId}
                      name={student.fullName}
                      present={present}
                      total={total}
                    />
                  );
                })
              ) : (
                <p>No attendance data available</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminViewAttendance;

import { useState, useEffect } from 'react';
import AdminSidebar from "../../AdminSidebar";
import AdminMarkAttendanceShowComp from "./MarkAttendComp";
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';

const AdminMarkAttendance = () => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [groups, setGroups] = useState<any[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [students, setStudents] = useState<any[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  // Fetch subjects on component mount
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/open/getAllSubjects');
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        enqueueSnackbar('Failed to fetch subjects', { variant: 'error' });
      }
    };
    fetchSubjects();
  }, []);

  // Fetch groups when a subject is selected
  useEffect(() => {
    if (selectedSubject) {
      const fetchGroups = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/open/getSubjectsGroups/${selectedSubject}`);
          const data = await response.json();
          setGroups(data.groups);
        } catch (error) {
          enqueueSnackbar('Failed to fetch groups', { variant: 'error' });
        }
      };
      fetchGroups();
    }
  }, [selectedSubject]);

  // Fetch students when a group is selected
  useEffect(() => {
    if (selectedGroup) {
      const fetchStudents = async () => {
        // Get the token from cookies
        const token = Cookies.get('token');
        if (!token) {
          enqueueSnackbar('Authorization token is missing', { variant: 'error' });
          return;
        }

        try {
          const response = await fetch(`http://localhost:5000/api/admin/groups/${selectedGroup}/students`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`, // Pass the token here
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            const data = await response.json();
            enqueueSnackbar(data.message || 'Failed to fetch students', { variant: 'error' });
            return;
          }

          const data = await response.json();
          setStudents(data); // Set students data to state
        } catch (error) {
          enqueueSnackbar('Failed to fetch students', { variant: 'error' });
        }
      };

      fetchStudents();
    }
  }, [selectedGroup, enqueueSnackbar]); // Add enqueueSnackbar as dependency for useEffect


  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <AdminSidebar />

      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <AdminMarkAttendanceShowComp
          subjects={subjects}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          groups={groups}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
          students={students}
        />
      </div>
    </div>
  );
};

export default AdminMarkAttendance;

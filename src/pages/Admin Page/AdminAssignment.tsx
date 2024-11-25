import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import DashBoardHeader from "../../components/TeacherComponent/DashboardComponent/DashBoardHeader";
import Ungraded from "../../components/TeacherComponent/Assignment/Ungraded";
import Grades from "../../components/TeacherComponent/Assignment/Grades";
import axios from 'axios';
import Cookies from 'js-cookie'; 

function AdminAssignment() {
  const [assignments, setAssignments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCourse, setSelectedCourse] = useState<string>(''); // State for selected course
  const [courseNames, setCourseNames] = useState<string[]>([]); // State for course names

  useEffect(() => {
    // Get the token from cookies
    const token = Cookies.get('token');

    if (token) {
      // Fetch data from API
      axios.get('http://localhost:5000/api/admin/getAllAssignmentSubmissions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const data = response.data;
        setAssignments(data);

        // Extract unique course names from the assignments
        const courses = Array.from(new Set(data.map((assignment: any) => assignment.courseName)));
        setCourseNames(courses);

        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error("Error fetching assignment data", error);
        setLoading(false); // Set loading to false in case of error
      });
    } else {
      console.error("No token found in cookies");
      setLoading(false);
    }
  }, []);

  const ungradedAssignments = assignments.filter(assignment => !assignment.isGraded && 
    (selectedCourse ? assignment.courseName === selectedCourse : true));
  const gradedAssignments = assignments.filter(assignment => assignment.isGraded && 
    (selectedCourse ? assignment.courseName === selectedCourse : true));

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <div>
        <AdminSidebar />
      </div>

      <div className="flex-col w-full mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
        <div className="w-full p-2 mx-auto mt-3 lg:p-0 lg:flex bg-gray-50 lg:mt-0">
          <div className="w-full">
            <div className="flex items-center justify-between w-full gap-4 p-2">
              <h1 className="text-2xl font-bold">Assignments</h1>
              <DashBoardHeader />
            </div>
            <nav className="flex items-center gap-12 mt-8">
              <li className="list-none text-tertiary">
                <NavLink 
                  to="/AdminAssignment" 
                  end
                  className={({ isActive }) => isActive 
                    ? 'text-tertiary border-b border-primary font-semibold flex items-center gap-4' 
                    : 'text-tertiary flex items-center gap-4'}>
                  Ungraded
                </NavLink>
              </li>
              <li className="list-none">
                <NavLink 
                  to="grades" 
                  className={({ isActive }) => isActive 
                    ? 'text-tertiary border-b border-primary font-semibold flex items-center gap-4' 
                    : 'text-tertiary flex items-center gap-4'}>
                  Graded
                </NavLink>
              </li>
            </nav>

            <div className="flex flex-col py-6 space-y-1">
              <label className="font-semibold" htmlFor="course-select">Select Course</label>
              {loading ? (
                <div className="text-center">Loading...</div> 
              ) : (
                <select 
                  id="course-select" 
                  className="w-full lg:w-[30%] rounded-md"
                  value={selectedCourse}
                  onChange={handleCourseChange}
                >
                  <option value="">All</option>
                  {courseNames.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Ungraded assignments={ungradedAssignments} />} />
          <Route path="grades" element={<Grades assignments={gradedAssignments} />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminAssignment;

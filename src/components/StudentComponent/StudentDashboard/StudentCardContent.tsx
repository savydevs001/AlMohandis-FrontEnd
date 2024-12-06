import { GiGraduateCap } from "react-icons/gi";
// import { FcApproval } from "react-icons/fc";
import { MdAssignment } from "react-icons/md";
// import { FaEnvelope } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import StudentCard from "./StudentCard";
import CourseCard from "../StudentCourses/CourseCard";
import img from '../../../assets/book.webp'
import { FaCalendarCheck } from "react-icons/fa6"
import { PiExamFill } from "react-icons/pi";
import DashBoardHeader from "../../TeacherComponent/DashboardComponent/DashBoardHeader";
import { useEffect,useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";


interface Course {
  courseId: string;
  courseTitle: string;
  instructorName: string;
  progress: number;
  imageSrc?: string; // Optional if not always provided
}

function StudentCardContent() {

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>(`${import.meta.env.VITE_BACKEND_URL}/api/student/getMyCourses`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}` 
          },
        });
        setCourses(response.data); 
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between gap-2 lg:gap-0'>
        <h1 className="text-xl font-bold lg:text-2xl">Dashboard</h1>
        <DashBoardHeader />
      </div>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-4 mt-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <NavLink to='/myCourses'>
          <StudentCard 
            icon={<GiGraduateCap />} 
            title="Courses Progress" 
            description="7 Lessons Active" 
            progress={75}
            showProgress={true} // Show progress
          />
        </NavLink>
        <NavLink to='/StudentAttendance'>
          <StudentCard 
            icon={<FaCalendarCheck />} 
            title="Attendance" 
            description="3 Lesson Approvals pending" 
            progress={50}
            showProgress={true} // Show progress
          />
        </NavLink>
        <NavLink to='/myassignments'>
        <StudentCard 
          icon={<MdAssignment />} 
          title="Assignment Due" 
          description="2 Assignments to grade" 
          progress={30}
          showProgress={true} // Show progress
        />
        </NavLink>
        <StudentCard 
          icon={<PiExamFill />} 
          title="Upcoming Exams" 
          description="3 Unread Messages" 
          showProgress={false} // Only show text instead of progress bar
        />
      </div>

      {/* Courses Table Section */}
      <h2 className="mt-6 mb-4 text-2xl font-bold">Courses</h2>
      <div className="space-y-6">
      <div className="flex items-center justify-end">
        <button className="px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary">Add New +</button>
      </div>
      <div className="space-y-4">
        {courses.length > 0 ? (
          courses.map(course => (
            <CourseCard 
              key={course.courseId} // Ensure each key is unique
              img={img} // Use course-specific images if available
              courseTitle={course.courseTitle}
              instructorName={course.instructorName || "Instructor Name"} // Default if instructor is not available
              courseId={course.courseId}
              progress={course.progress} // Assuming progress is part of the course object
            />
          ))
        ) : (
          <div>No courses found.</div>
        )}
      </div>
    </div>
    </div>
  );
}

export default StudentCardContent;

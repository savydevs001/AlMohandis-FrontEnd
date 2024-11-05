import { GiGraduateCap } from "react-icons/gi";
// import { FcApproval } from "react-icons/fc";
import { MdAssignment } from "react-icons/md";
// import { FaEnvelope } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import DashBoardHeader from '../../Teacher Component/Dashboard Component/DashBoardHeader';
import StudentCard from "./StudentCard";
import CourseCard from "../StudentCourses Component/CourseCard";
import img from '../../../assets/book.webp'
import { FaCalendarCheck } from "react-icons/fa6"
import { PiExamFill } from "react-icons/pi";
function StudentCardContent() {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-between gap-2 lg:gap-0'>
        <h1 className="text-xl font-bold lg:text-2xl">Dashboard</h1>
        <DashBoardHeader />
      </div>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-4 mt-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <NavLink to={'/courses'}>
          <StudentCard 
            icon={<GiGraduateCap />} 
            title="Courses Progress" 
            description="7 Lessons Active" 
            progress={75}
            showProgress={true} // Show progress
          />
        </NavLink>
        <NavLink to={'/pending'}>
          <StudentCard 
            icon={<FaCalendarCheck />} 
            title="Attendance" 
            description="3 Lesson Approvals pending" 
            progress={50}
            showProgress={true} // Show progress
          />
        </NavLink>
        <StudentCard 
          icon={<MdAssignment />} 
          title="Assignment Due" 
          description="2 Assignments to grade" 
          progress={30}
          showProgress={true} // Show progress
        />
        <StudentCard 
          icon={<PiExamFill />} 
          title="Upcoming Exams" 
          description="3 Unread Messages" 
          showProgress={false} // Only show text instead of progress bar
        />
      </div>

      {/* Courses Table Section */}
      <h2 className="mt-6 mb-4 text-2xl font-bold">Courses</h2>
    <div className="space-y-4">
    <CourseCard 
        img={img}
        courseTitle="Course 1"
        instructorName="Instructor 1"
        progress={75}
      />
      <CourseCard 
        img={img}
        courseTitle="Course 2"
        instructorName="Instructor 2"
        progress={60}
      />
      <CourseCard 
        img={img}
        courseTitle="Course 3"
        instructorName="Instructor 3"
        progress={50}
      />
    </div>
    </div>
  );
}

export default StudentCardContent;

// import React from 'react'; // Not needed in modern React
import Card from './Card';  // Import the Card component
import { GiGraduateCap } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { MdAssignment } from "react-icons/md";

import { FaMessage } from "react-icons/fa6";
import CoursesTable from './CoursesTable'; // Assuming this is your custom table component
import DashBoardHeader from './DashBoardHeader';

function CardContent() {
  return (
    <div>
     <div className='flex items-center justify-between gap-2 lg:gap-0'>
     <h1 className="text-xl font-bold lg:text-2xl ">Dashboard</h1>
     <DashBoardHeader/>
     </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-4 mt-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <Card icon={<GiGraduateCap />} title="Active Courses" description="7 Lessons Active" />
        <Card icon={<FcApproval />} title="Course Approval" description="3 Lesson Approvals pending" />
        <Card icon={<MdAssignment />} title="Ungraded Assignments" description="2 Assignments to grade" />
        <Card icon={<FaMessage />} title="Unread Messages" description="3 Unread Messages" />
      </div>

      {/* Courses Table Section */}
      <h2 className="mt-6 mb-4 text-2xl font-bold">Courses</h2>
      <CoursesTable /> {/* Assuming this is defined and displays course data */}
    </div>
  );
}

export default CardContent;

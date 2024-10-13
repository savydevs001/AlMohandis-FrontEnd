import React from 'react';
import CoursesByMeCard from "../../components/Teacher Component/Dashboard Component/CoursesByMeCard";
import DashBoardHeader from "../../components/Teacher Component/Dashboard Component/DashBoardHeader";
import DashboardNav from "../../components/Teacher Component/Dashboard Component/DashboardNav";
import Sidebar from "../../components/Teacher Component/Sidebar";

const Courses: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <Sidebar />
      <div className="items-start justify-between flex-1 p-6">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Courses</h1>
          <DashBoardHeader />
        </div>
        <DashboardNav />

        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-primary">Course By Me</h1>
          <div className="max-w-[74vw] overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-5">
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-primary">Teacher 1 Name</h1>
          <div className="max-w-[74vw] overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-5">
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold text-primary">Teacher 2 Name</h1>
          <div className="max-w-[74vw] overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-5">
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
              <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

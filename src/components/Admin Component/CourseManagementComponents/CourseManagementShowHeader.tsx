// import React from 'react'
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ActiveCourseShowComp from './ActiveCoursesComponent/ActiveCourseShowComp';
import AdminPendingCourses from './AdminPendingCourses/AdminPendingCourses';
import AdminDraftCourses from './AdminDraftCourses/AdminDraftCourses';


type Tab = 'information' | 'course' | 'lecturesAttended' | 'registeredStudents';

function CourseManagementShowHeader() {
  const [activeTab, setActiveTab] = useState<Tab>('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <ActiveCourseShowComp/>
      case 'course':
        return  <AdminPendingCourses/>
      
      case 'lecturesAttended':
        return <h1>Archived</h1>
      case 'registeredStudents':
        return <AdminDraftCourses/>
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="w-full space-y-3 ">
        {/* Tabs Header */}
     <div className='flex items-center justify-between'>
     <div className="flex space-x-6">
          <button
            className={`px-2 py-2 text-md  ${activeTab === 'information' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('information')}
          >
            Active
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('course')}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${activeTab === 'lecturesAttended' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('lecturesAttended')}
          >
            Archived
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${activeTab === 'registeredStudents' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('registeredStudents')}
          >
            Draft
          </button>
        </div>
        <div>
          <NavLink className='px-4 py-3 font-semibold text-white rounded-md bg-primary' to='AdminCreateCourse/step1'>Create New Course <span className='text-2xl'>+</span></NavLink>
          </div>
     </div>

        {/* Content Section */}
        <div className="py-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default CourseManagementShowHeader;




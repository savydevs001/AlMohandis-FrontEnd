// import React from 'react'
import  { useState } from 'react';
import NotificationShowCard from './NotificationShowCard';




type Tab = 'information' | 'course' | 'lecturesAttended' | 'Professors' | 'Warnings';

function NotificationHeader
() {
  const [activeTab, setActiveTab] = useState<Tab>('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <NotificationShowCard/>
      case 'course':
        return <NotificationShowCard/>
      
      case 'lecturesAttended':
        return <NotificationShowCard/>
      case 'Professors':
        return <NotificationShowCard/>
      case 'Warnings':
        return <NotificationShowCard/>
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="w-full space-y-3 ">
        {/* Tabs Header */}
     <div className='flex flex-col justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0'>
     <div className="flex flex-wrap space-x-4 lg:space-x-6">
          <button
            className={`px-2 py-2 text-md  ${activeTab === 'information' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('information')}
          >
            All
          </button>
          <button
            className={`lg:px-3 px-2 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('course')}
          >
            Administrative
          </button>
          <button
            className={`px-3 py-2 text-sm font-semibold ${activeTab === 'lecturesAttended' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('lecturesAttended')}
          >
            Exam
          </button>
          <button
            className={`px-3 py-2 text-sm font-semibold ${activeTab === 'Professors' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('Professors')}
          >
            Courses
          </button>
          <button
            className={`px-3 py-2 text-sm font-semibold ${activeTab === 'Warnings' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('Warnings')}
          >
            Warnings
          </button>
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

export default NotificationHeader;








;



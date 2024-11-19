// import React from 'react'
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminLiveLectureTable from './AdminLiveLectureTableComp/AdminLiveLectureTable';
import AdminPendingApprobal from './AdminPendingApprovalComp/AdminPendingApprobal';
import LiveLectureRejected from './AdminLiveLecRejectedComp/LiveLectureRejected';
import { RiWirelessChargingFill } from "react-icons/ri";


type Tab = 'information' | 'course' | 'lecturesAttended' | 'registeredStudents';

function AdminLiveLectureHeader
() {
  const [activeTab, setActiveTab] = useState<Tab>('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <AdminLiveLectureTable/>
      case 'course':
        return <AdminPendingApprobal/>
      
      case 'lecturesAttended':
        return <LiveLectureRejected/>
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="w-full space-y-3 ">
        {/* Tabs Header */}
     <div className='flex flex-col justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0'>
     <div className="flex space-x-6">
          <button
            className={`px-2 py-2 text-md  ${activeTab === 'information' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('information')}
          >
            Successful
          </button>
          <button
            className={`lg:px-4 px-2 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('course')}
          >
            Pending Approval
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${activeTab === 'lecturesAttended' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('lecturesAttended')}
          >
            Rejected
          </button>
        </div>
        <div>
          <NavLink className='flex items-center gap-2 px-4 py-3 font-semibold text-white rounded-md bg-primary' to=''>Start Live <span className='text-2xl'><RiWirelessChargingFill />
          </span></NavLink>
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

export default AdminLiveLectureHeader
;





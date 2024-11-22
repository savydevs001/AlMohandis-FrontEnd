// import React from 'react'
import  { useState } from 'react';

import { AiOutlineScan } from "react-icons/ai";
import LiveLectureShowCard from './LiveLectureShowCard';
import SaveLiveLecture from './SaveLiveLecture';




type Tab = 'information' | 'course';

function LiveLectureHeader
() {
  const [activeTab, setActiveTab] = useState<Tab>('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <LiveLectureShowCard/>
      case 'course':
        return <SaveLiveLecture/>
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="w-full space-y-3 ">
        {/* Tabs Header */}
     <div className='flex flex-col justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0'>
  <div className='flex '>
  <div className="flex flex-wrap space-x-4 lg:space-x-6">
          <button
            className={`px-2 py-2 text-md  ${activeTab === 'information' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('information')}
          >
            Live Now
          </button>
          <button
            className={`lg:px-3 px-2 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('course')}
          >
            Saved
          </button>
          
          
          
        </div>
     </div>
   <div>
      <button className='flex items-center gap-3 px-4 py-2 font-semibold text-white rounded-md bg-primary'>Join Live
      <AiOutlineScan  className='text-lg'/>

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

export default LiveLectureHeader;








;





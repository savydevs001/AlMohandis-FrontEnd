import  { useState } from 'react';
import GaurdianStudentInfo from './GaurdianStudent/GaurdianStudentInfo';
import GaurdianGeneralInformation from './GaurdianGnralInfo';



type Tab = 'information' | 'course' | 'lecturesAttended' | 'registeredStudents';

function GaurdianGeneralInfo() {
  const [activeTab, setActiveTab] = useState<Tab>('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <GaurdianGeneralInformation />;
      case 'course':
        return  <GaurdianStudentInfo/>
      default:
        return null;
    }
  };

  return (
    <div className="mt-4 space-y-12">

      <div className="w-full p-2 space-y-3 ">
        {/* Tabs Header */}
        <div className="flex space-x-6">
          <button
            className={`px-4 py-2 text-sm font-semibold ${activeTab === 'information' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('information')}
          >
            Information
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('course')}
          >
            Student
          </button>

        </div>

        {/* Content Section */}
        <div className="">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default GaurdianGeneralInfo;





import { useState } from 'react';
import AssistantInfo from './AssistantInfo';
import CoursePermission from './CoursePermissions/CoursePermission';
import AssistantSubject from './AssistantSubject/AssistantSubject';



type Tab = 'information' | 'course' | 'lecturesAttended' | 'registeredStudents' | 'permissions' | 'assistants';

function ManageAssistantHeader() {
  const [activeTab, setActiveTab] = useState<Tab>('information');
  const [showPermissions, setShowPermissions] = useState<boolean>(false);

  // Define the function to handle view click, set `showPermissions` state

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <AssistantInfo/>
      case 'course':
        // Pass the handleViewClick function to AssistantInfoCoursesTable
        return <CoursePermission/>;

      case 'lecturesAttended':
        return <AssistantSubject/>;
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 space-y-12">
      <div className="w-full p-2 space-y-3 ">
        <div className="flex flex-wrap items-start space-x-6 ">
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'information' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => { setActiveTab('information'); setShowPermissions(false); }}
          >
            Information
          </button>
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => { setActiveTab('course'); setShowPermissions(false); }}
          >
            Courses
          </button>
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'lecturesAttended' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => { setActiveTab('lecturesAttended'); setShowPermissions(false); }}
          >
            Registered Subject
          </button>
        </div>

        <div>
          {renderContent()}
          {showPermissions && <></>}
        </div>
      </div>
    </div>
  );
}

export default ManageAssistantHeader;



import { useState } from 'react';
import TeacherGeneralInformationSect from '../../TeacherInformatioComponents/TeacherGeneralInformationSect';
import AssistantSubject from './AssistantSubject';
import AssistantInfoCoursesTable from './AssistantInfoCoursesTable';
import CoursesPermissions from './CoursesPermissions';

type Tab = 'information' | 'course' | 'lecturesAttended' | 'registeredStudents' | 'permissions' | 'assistants';

function AssistantInfomationShowTables() {
  const [activeTab, setActiveTab] = useState<Tab>('information');
  const [showPermissions, setShowPermissions] = useState<boolean>(false);

  // Define the function to be passed to the child component


  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <TeacherGeneralInformationSect />;
      case 'course':
        // Pass the handleViewClick function to the child component
        return <AssistantInfoCoursesTable />;
      case 'lecturesAttended':
        return <AssistantSubject />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-8 space-y-12">
      <div className="w-full p-2 space-y-3 bg-white shadow-sm">
        {/* Tabs Header */}
        <div className="flex flex-wrap items-start space-x-6 border-b">
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
            Course
          </button>
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'lecturesAttended' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => { setActiveTab('lecturesAttended'); setShowPermissions(false); }}
          >
            Subjects
          </button>
        </div>

        {/* Content Section */}
        <div>
          {renderContent()}

          {/* Show permissions content when View button is clicked */}
          {showPermissions && <CoursesPermissions />}
        </div>
      </div>
    </div>
  );
}

export default AssistantInfomationShowTables;

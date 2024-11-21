import  { useState } from 'react';
import TeacherGeneralInformationSect from './TeachGeneralInfoSect';
import TeacherCourseSect from './TeacherCourses/TeacherCourseSect';
import AdminRegisteredSubjects from './RegisteredSubject/RegisteredSubjects';
import TeacherLiveLecture from './TeachersLiveLecture/TeacherLiveLecture';
import AdminPermissionSect from '../Permissions/AdminPermissionSect';
import AdminAssistant from '../Assistant/AdminAssistant';



type Tab = 'information' | 'course' | 'lecturesAttended' | 'registeredStudents' | 'permissions' | 'assistants';

function TeacherGeneralInfo() {
  const [activeTab, setActiveTab] = useState<Tab>('information');

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <TeacherGeneralInformationSect />;
      case 'course':
        return  <TeacherCourseSect/>
      
      case 'lecturesAttended':
        return <TeacherLiveLecture/>
      case 'registeredStudents':
        return <AdminRegisteredSubjects/>
      case 'permissions':
        return <AdminPermissionSect/>
      case 'assistants':
        return <AdminAssistant/>
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
            onClick={() => setActiveTab('information')}
          >
            Information
          </button>
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('course')}
          >
            Course
          </button>
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'registeredStudents' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('registeredStudents')}
          >
            Registered Students
          </button>
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'lecturesAttended' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('lecturesAttended')}
          >
             Live Lecture
          </button>
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'permissions' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('permissions')}
          >
             Permissions
          </button>
          <button
            className={`lg:px-4 py-2 text-sm font-semibold ${activeTab === 'assistants' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('assistants')}
          >
             Assistants
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

export default TeacherGeneralInfo;





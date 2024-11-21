import { useState } from 'react';
import CreateTeacherToggleTable from './TeacherToggleTable';

type Tab = 'Teacher' | 'Student' | 'Guardians' | 'Assistants' | 'Admins' | 'Courses' | 'Subjects';

function CreateManagementGroupHeader() {
  const [activeTab, setActiveTab] = useState<Tab>('Teacher');


  const renderContent = () => {
    switch (activeTab) {
      case 'Teacher':
        return<CreateTeacherToggleTable
        unselectedItems={['Teacher 1', 'Teacher 2',]}
        selectedItems={['Teacher 1', 'Teacher 2']}
      />
      ;
      case 'Student':
        return <CreateTeacherToggleTable
        unselectedItems={['Student 1', 'Student 2',]}
        selectedItems={['Student 1', 'Student 2']}
      />
      case 'Guardians':
        return <CreateTeacherToggleTable
        unselectedItems={['Guardian 1', 'Guardian 2',]}
        selectedItems={['Guardian 1', 'Guardian 2']}
      />;
      case 'Assistants':
        return <CreateTeacherToggleTable
        unselectedItems={['Assistant 1', 'Assistant 2',]}
        selectedItems={['Assistant 1', 'Assistant 2']}
      />;
      case 'Admins':
        return <CreateTeacherToggleTable
        unselectedItems={['Admins 1', 'Admins 2',]}
        selectedItems={['Admins 1', 'Admins 2']}
      />;
      case 'Courses':
        return <CreateTeacherToggleTable
        unselectedItems={['Courses 1', 'Courses 2',]}
        selectedItems={['Courses 1', 'Courses 2']}
      />;
      case 'Subjects':
        return <CreateTeacherToggleTable
        unselectedItems={['Subjects 1', 'Subjects 2',]}
        selectedItems={['Subjects 1', 'Subjects 2']}
      />;
      default:
        return null;
    }
  };

  return (
    <div className="w-[100%] bg-white">
      <div className="w-full space-y-3">
        {/* Tabs Header */}
        <div className="flex flex-col flex-wrap justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0">
          <div className="flex flex-wrap lg:space-x-3">
            <button
              className={`px-2 py-2 text-md ${activeTab === 'Teacher' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Teacher')}
            >
              Teacher
            </button>
            <button
              className={`px-2 py-2 text-md ${activeTab === 'Student' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Student')}
            >
              Student
            </button>
            <button
              className={`px-2 py-2 text-md ${activeTab === 'Guardians' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Guardians')}
            >
              Guardians
            </button>
            <button
              className={`px-2 py-2 text-md ${activeTab === 'Assistants' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Assistants')}
            >
              Assistants
            </button>
            <button
              className={`px-2 py-2 text-md ${activeTab === 'Admins' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Admins')}
            >
              Admins
            </button>
            <button
              className={`px-2 py-2 text-md ${activeTab === 'Courses' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Courses')}
            >
              Courses
            </button>
            <button
              className={`px-2 py-2 text-md ${activeTab === 'Subjects' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Subjects')}
            >
              Subjects
            </button>
            
          </div>
          <div>
          
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

export default CreateManagementGroupHeader;

import { useState } from 'react';
import ViewRegStudentShowCard from './ViewRegStudentShowCard';
import ViewRegSubGrade from './ViewRegSubGrades/ViewRegSubGrade';
import StudentAddPopup from './StudentAddPopup';
import GradesAddPopup from './ViewRegSubGrades/GradesAddPopup';
 // Import the Grades popup

type Tab = 'information' | 'course' | 'lecturesAttended' | 'registeredStudents';

function ViewRegSubHeader() {
  const [activeTab, setActiveTab] = useState<Tab>('information');
  const [showStudentPopup, setShowStudentPopup] = useState(false);
  const [showGradesPopup, setShowGradesPopup] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <ViewRegStudentShowCard />;
      case 'course':
        return <ViewRegSubGrade />;
      default:
        return null;
    }
  };

  const handleAddClick = () => {
    if (activeTab === 'information') {
      setShowStudentPopup(true);
    } else if (activeTab === 'course') {
      setShowGradesPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowStudentPopup(false);
    setShowGradesPopup(false);
  };

  return (
    <div className="">
      <div className="w-full space-y-3">
        {/* Tabs Header */}
        <div className='flex flex-col justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0'>
          <div className="flex space-x-6">
            <button
              className={`px-2 py-2 text-md  ${activeTab === 'information' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('information')}
            >
              Students
            </button>
            <button
              className={`lg:px-4 px-2 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`}
              onClick={() => setActiveTab('course')}
            >
              Grades
            </button>
          </div>
          <div>
            <button
              onClick={handleAddClick}
              className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-md bg-primary"
            >
              Add +
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-4">
          {renderContent()}
        </div>
      </div>

      {/* Show Popups */}
      {showStudentPopup && <StudentAddPopup show={showStudentPopup} onClose={handleClosePopup} />}
      {showGradesPopup && <GradesAddPopup show={showGradesPopup} onClose={handleClosePopup} />}
    </div>
  );
}

export default ViewRegSubHeader;

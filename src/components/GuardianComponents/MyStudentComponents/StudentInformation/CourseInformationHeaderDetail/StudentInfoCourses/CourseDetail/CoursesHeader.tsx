import  { useState } from 'react';
import AssignmentGrades from './AssignmentGrade/AssignmentGrades';
import ViewAssignment from './AssignmentGrade/ViewAssignment';
import ExamGrade from './ExamGrades/ExamGrade';
import UpComingAssignment from './UpComingAssignment/UpComingAssignment';
import UpComingExam from './UpComingExam/UpComingExam';
import ProgressTable from './ProgressTable';
// import AssignmentCard from './AssignmentCard';

type Tab = 'information' | 'course' | 'lecturesAttended' | 'Professors' | 'Progress';

function CoursesHeader() {
  const [activeTab, setActiveTab] = useState<Tab>('information');
  const [showViewAssignment, setShowViewAssignment] = useState(false); // State to toggle ViewAssignment

  const handleViewButtonClick = () => {
    setShowViewAssignment(true); // Show ViewAssignment component
  };

  const renderContent = () => {
    if (showViewAssignment) {
      return <ViewAssignment />; // Show ViewAssignment when state is true
    }

    switch (activeTab) {
      case 'information':
        return <AssignmentGrades onView={handleViewButtonClick} />; // Pass callback to AssignmentGrades
      case 'course':
        return <ExamGrade/>
      case 'lecturesAttended':
        return <UpComingAssignment />
      case 'Professors':
        return <UpComingExam/>;
      case 'Progress':
        return <ProgressTable/>
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="w-full space-y-3 ">
        {/* Tabs Header */}
        <div className="flex flex-col justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0">
          <div className="flex flex-wrap space-x-4 lg:space-x-4">
            <button
              className={`px-2 py-2 text-md ${
                activeTab === 'information'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('information')}
            >
              Assignment Grades
            </button>
            <button
              className={`lg:px-2 px-2 py-2 text-sm font-semibold ${
                activeTab === 'course'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('course')}
            >
              Exam Grades
            </button>
            <button
              className={`lg:px-2 py-2 text-sm font-semibold ${
                activeTab === 'lecturesAttended'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('lecturesAttended')}
            >
              Upcoming Assignments
            </button>
            <button
              className={`px-2 py-2 text-sm font-semibold ${
                activeTab === 'Professors'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('Professors')}
            >
              Upcoming Exams
            </button>
            <button
              className={`px-2 py-2 text-sm font-semibold ${
                activeTab === 'Progress'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('Progress')}
            >
              Progress
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-4">{renderContent()}</div>
      </div>
    </div>
  );
}

export default CoursesHeader;

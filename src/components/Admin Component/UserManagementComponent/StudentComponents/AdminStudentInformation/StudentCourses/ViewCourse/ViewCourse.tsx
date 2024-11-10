import React, { useState } from 'react';
import Lessonoverview from './Lessonoverview';
import AssignmentTable from './AssignmentTable';
import ExamTable from './ExamTable';
import ActivityTimeLineTable from './ActivityTimeLineTable';

type Tab = 'lessonOverview' | 'assignments' | 'exams' | 'activityTimeline';

const ViewCourse: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('lessonOverview');

  const renderContent = () => {
    switch (activeTab) {
      case 'lessonOverview':
        return <div className="p-4">
          <Lessonoverview/>
        </div>;
      case 'assignments':
        return <div className="p-4">
          <AssignmentTable/>
        </div>;
      case 'exams':
        return <div className="p-4">
          <ExamTable/>
        </div>;
      case 'activityTimeline':
        return <div className="p-4">
          <ActivityTimeLineTable/>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Tab Navigation */}
        <div className="flex border-b">
          <button
            className={`px-4 py-2 text-xs lg:text-sm font-semibold ${
              activeTab === 'lessonOverview' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('lessonOverview')}
          >
            Lesson Overview
          </button>
          <button
            className={`px-4 py-2 text-xs lg:text-sm font-semibold ${
              activeTab === 'assignments' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('assignments')}
          >
            Assignments
          </button>
          <button
            className={`px-4 py-2 text-xs lg:text-sm font-semibold ${
              activeTab === 'exams' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('exams')}
          >
            Exams
          </button>
          <button
            className={`px-4 py-2 text-xs lg:text-sm font-semibold ${
              activeTab === 'activityTimeline' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('activityTimeline')}
          >
            Activity Timeline
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;

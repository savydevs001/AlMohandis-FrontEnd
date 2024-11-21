import React from 'react';
// import ShowLessonHeader from '../../ShowLessonHeader';
import AssignmentHeader from './AssignmentHeader';
import AssignmentCard from './AssignmentCard';
import ShowLessonHeader from '../../ShowLessonHeader';

const ShowAssignments: React.FC = () => {
  return (
    <div className="p-4">
      <ShowLessonHeader/>
    <AssignmentHeader/>

    <div className='space-y-4'>
      <AssignmentCard/>
      <AssignmentCard/>
      <AssignmentCard/>
      <AssignmentCard/>
    </div>
    </div>
  );
};

export default ShowAssignments;

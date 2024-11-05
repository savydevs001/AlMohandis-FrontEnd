import React from 'react';
// import ShowLessonHeader from '../../ShowLessonHeader';
import AssignmentHeader from './AssignmentHeader';
import AssignmentCard from './AssignmentCard';

const ShowAssignment: React.FC = () => {
  return (
    <div className="">
    {/* <ShowLessonHeader/> */}
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

export default ShowAssignment;

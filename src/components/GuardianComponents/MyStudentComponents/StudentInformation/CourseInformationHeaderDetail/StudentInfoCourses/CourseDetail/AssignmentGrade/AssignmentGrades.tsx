import React from 'react';
import AssignmentCard from './AssignmentCard';

type Props = {
  onView: () => void; // Add callback prop
};

const AssignmentGrades: React.FC<Props> = ({ onView }) => {
  return (
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
      <AssignmentCard onView={onView} />    
      <AssignmentCard onView={onView} />    
      <AssignmentCard onView={onView} />    
      <AssignmentCard onView={onView} />    
      </div>
  );
};

export default AssignmentGrades;

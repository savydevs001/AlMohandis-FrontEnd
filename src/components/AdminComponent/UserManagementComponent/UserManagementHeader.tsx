import React from 'react';
import DashBoardHeader from '../../TeacherComponent/DashboardComponent/DashBoardHeader';


// Define props type for the component
interface UserManagementComponentPagesProps {
  title: string;
}

const UserManagementHeader: React.FC<UserManagementComponentPagesProps> = ({ title }) => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold lg:text-2xl text-md">{title}</h1>
        <DashBoardHeader />
      </div>
    </div>
  );
};

export default UserManagementHeader;

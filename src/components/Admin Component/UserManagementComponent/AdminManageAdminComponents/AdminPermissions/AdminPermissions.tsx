import React, { useState, useEffect } from 'react';
import PermissionsList from './PermissionsList';
import PermissionsTabNavigation from './PermissionsTabNavigation';
import PermissionSidebar from './PermissionsSidebar';

type Permission = {
  id: string;
  label: string;
  enabled: boolean;
};

const AdminPermissions: React.FC<{ permissions: any }> = ({ permissions }) => {
  const [selectedTab, setSelectedTab] = useState<string>('General');
  const [permissionsData, setPermissionsData] = useState<Permission[]>([]);

  useEffect(() => {
    if (permissions) {
      const newPermissionsData: Permission[] = [];
      if (permissions.studentPermissions) {
        newPermissionsData.push({ id: 'student', label: 'Student Permissions', enabled: permissions.studentPermissions.viewStudent });
      }
      if (permissions.teacherPermissions) {
        newPermissionsData.push({ id: 'teacher', label: 'Teacher Permissions', enabled: permissions.teacherPermissions.viewTeacher });
      }
      if (permissions.coursePermissions) {
        newPermissionsData.push({ id: 'course', label: 'Course Permissions', enabled: permissions.coursePermissions.viewCourse });
      }
      if (permissions.subjectPermissions) {
        newPermissionsData.push({ id: 'subject', label: 'Subject Permissions', enabled: permissions.subjectPermissions.viewSubjects });
      }
      setPermissionsData(newPermissionsData);
    }
  }, [permissions]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleToggle = (id: string) => {
    setPermissionsData((prevPermissions) =>
      prevPermissions.map((perm) =>
        perm.id === id ? { ...perm, enabled: !perm.enabled } : perm
      )
    );
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <PermissionSidebar />
      <div className="flex-1 lg:p-6 w-[90%]">
        <PermissionsTabNavigation selectedTab={selectedTab} onTabClick={handleTabClick} />
        <PermissionsList permissions={permissionsData} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default AdminPermissions;
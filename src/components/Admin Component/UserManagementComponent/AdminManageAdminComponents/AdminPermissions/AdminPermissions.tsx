import React, { useState } from 'react';

import PermissionsList from './PermissionsList';
import PermissionsTabNavigation from './PermissionsTabNavigation';
import PermissionSidebar from './PermissionsSidebar';

type Permission = {
  id: number;
  label: string;
  enabled: boolean;
};

const permissionsData: { [key: string]: Permission[] } = {
  General: [
    { id: 1, label: 'Edit item', enabled: false },
    { id: 2, label: 'Remove item', enabled: false },
    { id: 3, label: 'Add item', enabled: false },
    { id: 4, label: 'Freeze items', enabled: false },
  ],
  Courses: [
    { id: 1, label: 'All Course Permissions', enabled: false },
    { id: 2, label: 'Add Student to Course', enabled: false },
    { id: 3, label: 'View Courses', enabled: false },
    { id: 4, label: 'Activate Courses', enabled: false },
    { id: 5, label: 'Archive Courses', enabled: false },
    { id: 6, label: 'Add Course', enabled: false },
    { id: 7, label: 'Edit Course', enabled: false },
    { id: 8, label: 'Add Student to Course', enabled: false },
  ],
  Teachers: [
    { id: 1, label: 'View Teacher', enabled: false },
    { id: 2, label: 'Edit Teacher', enabled: false },
    { id: 3, label: 'Add Teachers', enabled: false },
    { id: 4, label: 'Remove Teachers', enabled: false },
    { id: 5, label: 'Assign Subject to Teacher', enabled: false },
  ],
  Students: [
    { id: 1, label: 'View Students', enabled: false },
    { id: 2, label: 'Edit Student', enabled: false },
    { id: 3, label: 'Add Student', enabled: false },
    { id: 4, label: 'Remove Student', enabled: false },
    { id: 5, label: 'Freeze Student', enabled: false },
    { id: 6, label: 'Add Student to Course', enabled: false },
  ],
  Guardians: [
    { id: 1, label: 'View Guardian', enabled: false },
    { id: 2, label: 'Edit Guardian', enabled: false },
    { id: 3, label: 'Unlink Guardian', enabled: false },
    { id: 4, label: 'Link Guardian', enabled: false },
  ],
  Subjects: [
    { id: 1, label: 'View Subjects', enabled: false },
    { id: 2, label: 'Register Student to subjects', enabled: false },
    { id: 3, label: 'Assign subject to teacher', enabled: false },
    { id: 4, label: 'Manage Subject Groups', enabled: false },
    { id: 5, label: 'Take Attendance', enabled: false },
    { id: 6, label: 'View Attendance', enabled: false },
  ],
  Admins: [
    { id: 1, label: 'View Assistant', enabled: false },
    { id: 2, label: 'Edit Assistant', enabled: false },
    { id: 3, label: 'Add Assistant', enabled: false },
    { id: 4, label: 'Remove Assistant', enabled: false },
    { id: 5, label: 'Assign Subject to Assistant', enabled: false },
    { id: 6, label: 'Manage Permissions of Assistant', enabled: false },
  ],
  Assistants: [
    { id: 1, label: 'View Assistant', enabled: false },
    { id: 2, label: 'Edit Assistant', enabled: false },
    { id: 3, label: 'Add Assistant', enabled: false },
    { id: 4, label: 'Remove Assistant', enabled: false },
    { id: 5, label: 'Assign Subject to Assistant', enabled: false },
    { id: 6, label: 'Manage Permissions of Assistant', enabled: false },
  ],
  // Add more tabs as needed...
};

const AdminPermissions: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('General');
  const [permissions, setPermissions] = useState<Permission[]>(permissionsData[selectedTab]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setPermissions(permissionsData[tab] || []);
  };

  const handleToggle = (id: number) => {
    setPermissions((prevPermissions) =>
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
        <PermissionsList permissions={permissions} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default AdminPermissions;

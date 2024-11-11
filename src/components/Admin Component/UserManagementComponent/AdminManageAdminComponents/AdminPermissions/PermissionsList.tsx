// PermissionsList.tsx
import React from 'react';

type Permission = {
  id: number;
  label: string;
  enabled: boolean;
};

type PermissionsListProps = {
  permissions: Permission[];
  onToggle: (id: number) => void;
};

const PermissionsList: React.FC<PermissionsListProps> = ({ permissions, onToggle }) => {
  return (
    <div className="border lg:w-[40%] w-full mt-2">
      {permissions.map((permission) => (
        <div key={permission.id} className="flex items-center justify-between p-2 rounded">
          <span>{permission.label}</span>
          <button
            onClick={() => onToggle(permission.id)}
            className={`relative inline-flex h-4 w-10 items-center rounded-full transition-colors ${
              permission.enabled ? 'bg-teal-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`${
                permission.enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-3 w-3 transform bg-white rounded-full transition-transform`}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PermissionsList;

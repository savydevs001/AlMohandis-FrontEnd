import React from 'react';
import AdminPermissions from './AdminPermissions';

type PermissionsPopupProps = {
  onClose: () => void;
  permissions: any; // Adjust the type according to your permissions structure
};

const PermissionsPopup: React.FC<PermissionsPopupProps> = ({ onClose, permissions }) => {
  console.log(permissions)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded-lg w-[95%] h-[100%]">
        <div className="flex bg-gray-50 h-[90%]">
          <AdminPermissions permissions={permissions} />
        </div>
        <div className='flex items-center justify-end'>
          <button onClick={onClose} className="px-4 py-2 mt-4 text-white rounded-lg bg-primary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsPopup;
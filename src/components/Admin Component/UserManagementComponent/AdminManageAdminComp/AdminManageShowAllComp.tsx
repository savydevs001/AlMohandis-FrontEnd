import  { useState } from 'react';
import UserManagementHeader from '../UserManagementHeader';
import AdminManagementTable from './AdminManagTable';
import AddAdminPopup from './AddAdminPopup';

function AdminManageShowAllComp() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Admin Management" />
      <div className="space-y-6">
        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-lg text-white rounded-md bg-primary"
            onClick={() => setIsPopupOpen(true)}
          >
            Add +
          </button>
        </div>
        <AdminManagementTable />
      </div>
      {isPopupOpen && <AddAdminPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}

export default AdminManageShowAllComp;

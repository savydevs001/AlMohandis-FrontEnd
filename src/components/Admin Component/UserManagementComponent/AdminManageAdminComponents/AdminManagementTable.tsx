import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';
import PermissionsPopup from './AdminPermissions/PermissionsPopup';

interface Permission {
  id: string;
  adminId: string;
  studentPermissionsId: string;
  teacherPermissionsId: string;
  coursePermissionsId: string;
  subjectPermissionsId: string;
  studentPermissions: {
    viewStudent: boolean;
    editStudent: boolean;
    addStudent: boolean;
    removeStudent: boolean;
    freezeStudent: boolean;
    addToCourse: boolean;
  };
  teacherPermissions: {
    viewTeacher: boolean;
    editTeacher: boolean;
    addTeacher: boolean;
    removeTeacher: boolean;
    assignSubject: boolean;
    assignAssistant: boolean;
  };
  coursePermissions: {
    viewCourse: boolean;
    addCourse: boolean;
    editCourse: boolean;
    activateCourse: boolean;
    archiveCourse: boolean;
    addToCourse: boolean;
  };
  subjectPermissions: {
    viewSubjects: boolean;
    registerStudent: boolean;
    assignSubjectToTeacher: boolean;
    manageSubjectGroups: boolean;
    takeAttendance: boolean;
    viewAttendance: boolean;
  };
}

interface Admin {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  permissions?: Permission[];
}

function AdminManagementTable() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [selectedPermissions, setSelectedPermissions] = useState<Permission | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (permissions: Permission | null) => {
    setSelectedPermissions(permissions);
    setIsPopupOpen(true);
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPermissions(null);
  };

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) {
          console.error("Authorization token not found in cookies");
          return;
        }

        const response = await fetch('http://localhost:5000/api/admin/admins', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch admins");
        }

        const data: Admin[] = await response.json();
        const filteredAdmins = data.filter(admin => admin.role !== 'SUPER_ADMIN');
        setAdmins(filteredAdmins);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div>
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">ID</th>
              <th className="px-4 py-2 border border-black">Name</th>
              <th className="px-4 py-2 border border-black">Email</th>
              <th className="px-4 py-2 border border-black">Phone</th>
              <th className="px-4 py-2 border border-black">Role</th>
              <th className="px-4 py-2 border border-black">Permissions</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {admins.map((admin, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{admin.id.slice(0, 10)}</td>
                <td className="px-4 py-2 border border-black">{admin.fullName}</td>
                <td className="px-4 py-2 border border-black">{admin.email}</td>
                <td className="px-4 py-2 border border-black">{admin.phone}</td>
                <td className="px-4 py-2 border border-black">{admin.role}</td>
                <td className="px-4 py-2 border border-black">
                <span
                    onClick={() => openPopup(admin.permissions && admin.permissions.length > 0 ? admin.permissions[0] : null)}
                    className="text-pink-500 border-b border-pink-500 cursor-pointer"
                  >
                    View
                  </span>

                </td>
                <td className="px-4 py-2 border border-black">
                  <NavLink to='/AdminInformation' className="text-pink-500 border-b border-pink-500 cursor-pointer">View</NavLink> | 
                  <span className="text-red-600 border-b border-red-600 cursor-pointer">Delete</span> |
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && <PermissionsPopup onClose={closePopup} permissions={selectedPermissions} />}
    </div>
  );
}

export default AdminManagementTable;

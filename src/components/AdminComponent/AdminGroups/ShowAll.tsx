import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import AdminRegisteredSubCard from "./GroupCard";
import GroupCreatePopup from "./CreateGroupPop"; // import the popup component

interface Group {
  groupId: string;
  title: string;
  description: string;
  teacherId: string;
  duration: number;
  groups: { id: string; title: string }[];
  teacherName: string;
}

function AdminRegSubShowAllComp() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showCreatePopup, setShowCreatePopup] = useState<boolean>(false); // State for managing popup visibility

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  // Fetch subjects from the API
  useEffect(() => {
    const fetchGroups = async () => {
      setLoading(true);
      const token = Cookies.get("token");
      if (!token) {
        setError("Authentication token not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/admin/getAllgroups", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubjects(response.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load groups.");
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  // Toggle the popup visibility
  const handleAddGroupClick = () => {
    setShowCreatePopup(true);
  };

  const handlePopupClose = () => {
    setShowCreatePopup(false);
  };

  return (
    <div className="flex-1 space-y-6 ">
      <UserManagementHeader title="Registered Groups" />
      <div className="flex justify-end">
          <button
            onClick={handleAddGroupClick}
            className="px-4 py-2 text-white rounded-md bg-primary hover:bg-primary"
          >
            Create {"+"}
          </button>
        </div>
      <div className="space-y-4">
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : groups.length === 0 ? (
          <p>No groups available.</p>
        ) : (
          subjects.map((subject) => (
            <AdminRegisteredSubCard key={subject.id} subject={subject} />
          ))
        )}
        {/* Button to trigger popup */}
     
      </div>

      {/* Conditionally render the GroupCreatePopup */}
      <GroupCreatePopup show={showCreatePopup} onClose={handlePopupClose} />
    </div>
  );
}

export default AdminRegSubShowAllComp;

import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import AdminRegisteredSubCard from "./GroupCard";
import GroupCreatePopup from "./CreateGroupPop";

interface Group {
  id: string;
  title: string;
  duration: string;  // Ensure this matches GroupCard
  teacher: string;
  schedules?: { duration: number }[]; 
}

interface Subject {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  duration: number;
  groups: Group[];
  teacherName: string;
}

function ShowAll() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      const token = Cookies.get("token");
      if (!token) {
        setError("Authentication token not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/admin/getAllsubjects", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Validate and set subjects
        setSubjects(Array.isArray(response.data) ? response.data : []);
        console.log(subjects);
      } catch (err) {
        console.error(err);
        setError("Failed to load subjects.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Registered Subjects" />
      <div className="flex items-center justify-end">
        <button
          className="px-4 py-2 text-white rounded-md bg-primary"
          onClick={handleOpenPopup}
        >
          Create Now +
        </button>
      </div>
      <div className="space-y-4">
        {loading ? (
          <p>Loading subjects...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : subjects.length === 0 ? (
          <p>No subjects available.</p>
        ) : (
          subjects.map((subject) =>
            subject.groups.map((group) => (
              <AdminRegisteredSubCard
                key={group.id}
                group={{
                  ...group,
                  duration: group?.schedules?.length
                    ? group.schedules[0].duration.toString() 
                    : "120", 
                  teacher: subject.teacherName,
                }}
              />

            ))
          )
        )}
      </div>

      {/* Render the popup when showPopup is true */}
      <GroupCreatePopup show={showPopup} onClose={handleClosePopup} />
    </div>
  );
}

export default ShowAll;

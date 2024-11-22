import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function EditSubjectModal({ subject, onClose, onUpdate }: any) {
  const [formData, setFormData] = useState({
    title: subject.title,
    duration: subject.duration,
    teacherId: subject.teacherId, // Use teacher ID for API
  });
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetchingTeachers, setIsFetchingTeachers] = useState(true);

  // Get token from cookies
  const token = Cookies.get("authToken"); // Replace 'authToken' with your cookie name

  // Fetch teachers on component mount
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/open/teachers");
        if (response.status === 200 && response.data.success) {
          setTeachers(response.data.data);
        }
      } catch (error:any) {
        console.error("Error fetching teachers:", error.message);
        alert("Failed to fetch teachers. Please try again.");
      } finally {
        setIsFetchingTeachers(false);
      }
    };

    fetchTeachers();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubject = async () => {
    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/subjects/edit/${subject.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in headers
          },
        }
      );
      if (response.status === 200) {
        alert("Subject updated successfully!");
        onUpdate();
        onClose();
      }
    } catch (error: any) {
      console.error("Error updating subject:", error.message);
      alert("Failed to update subject. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Edit Subject</h2>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Duration Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Duration (weeks)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Teacher Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Teacher</label>
          {isFetchingTeachers ? (
            <p className="text-gray-500">Loading teachers...</p>
          ) : (
            <select
              name="teacherId"
              value={formData.teacherId}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            >
              <option value="" disabled>
                Select a teacher
              </option>
              {teachers.map((teacher: any) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.fullName}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleEditSubject}
            disabled={loading || isFetchingTeachers}
            className={`px-4 py-2 rounded-md text-white ${
              loading || isFetchingTeachers
                ? "bg-primary cursor-not-allowed"
                : "bg-primary hover:bg-primary"
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditSubjectModal;

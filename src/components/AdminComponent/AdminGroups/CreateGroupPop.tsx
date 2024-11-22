import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";

interface CreatePopupProps {
  show: boolean;
  onClose: () => void;
}

interface FormData {
  title: string;
  subjectId: string;
  studentIds: string[];
  days: string[];
  startTime: string;
  endTime: string;
  duration: number;
}

interface Subject {
  id: string;
  title: string;
}

interface Student {
  id: string;
  fullName: string;
}

const GroupCreatePopup: React.FC<CreatePopupProps> = ({ show, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    subjectId: "",
    studentIds: [],
    days: [],
    startTime: "",
    endTime: "",
    duration: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      const token = Cookies.get("token");
      Promise.all([
        axios.get("http://localhost:5000/api/open/getAllSubjects"),
        axios.get("http://localhost:5000/api/open/getAllStudents"),
      ])
        .then(([subjectRes, studentRes]) => {
          setSubjects(subjectRes.data || []);
          setStudents(studentRes.data || []);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to load subjects or students.");
        });
    }
  }, [show]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle multi-select for students
  const handleStudentSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      studentIds: Array.from(e.target.selectedOptions, (option) => option.value),
    }));
  };

  // Handle multi-select for days
  const handleDaySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      days: Array.from(e.target.selectedOptions, (option) => option.value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const token = Cookies.get("token");
    axios
      .post(
        "http://localhost:5000/api/admin/groups/create",
        { ...formData, duration: parseInt(formData.duration.toString()) },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Group created successfully!", { variant: "success" });
        onClose();
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to create the group.");
        enqueueSnackbar("Failed to create the group.", { variant: "error" });
        setLoading(false);
      });
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
    >
      <div className="w-[90%] lg:w-[50%] max-w-lg p-6 bg-white rounded-lg shadow-xl overflow-hidden">
        <h2 className="text-2xl font-semibold text-center mb-6">Create New Group</h2>
        <form onSubmit={handleSubmit}>
          {/* Group Title */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              placeholder="Enter group title"
              required
            />
          </div>

          {/* Subject Selection */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
            <select
              name="subjectId"
              value={formData.subjectId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                Select a subject
              </option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))}
            </select>
          </div>

          {/* Students Selection */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Students</label>
            <select
              multiple
              value={formData.studentIds}
              onChange={handleStudentSelect}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              required
            >
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.fullName}
                </option>
              ))}
            </select>
          </div>

          {/* Days Selection */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Days</label>
            <select
              multiple
              value={formData.days}
              onChange={handleDaySelect}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              required
            >
              <option value="MONDAY">Monday</option>
              <option value="TUESDAY">Tuesday</option>
              <option value="WEDNESDAY">Wednesday</option>
              <option value="THURSDAY">Thursday</option>
              <option value="FRIDAY">Friday</option>
              <option value="SATURDAY">Saturday</option>
              <option value="SUNDAY">Sunday</option>
            </select>
          </div>

          {/* Start Time */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Start Time</label>
            <input
              type="datetime-local"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* End Time */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">End Time</label>
            <input
              type="datetime-local"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Duration */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Duration (minutes)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              placeholder="Enter duration"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 text-sm font-medium border rounded-md border-gray-300 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupCreatePopup;

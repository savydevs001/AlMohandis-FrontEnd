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
  const [availableDays, setAvailableDays] = useState<string[]>([]); // Days fetched from API
  const [formData, setFormData] = useState<FormData>({
    title: "",
    subjectId: "",
    studentIds: [],
    days: [],
    startTime: "",
    duration: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      const token = Cookies.get("token");
      Promise.all([
        axios.get("http://localhost:5000/api/open/getAllSubjects", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:5000/api/open/getAllStudents", {
          headers: { Authorization: `Bearer ${token}` },
        }),
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

  // Fetch available days when a subject is selected
  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subjectId = e.target.value;
    setFormData((prev) => ({ ...prev, subjectId, days: [] })); // Reset days when subject changes
    setAvailableDays([]); // Reset available days

    if (subjectId) {
      const token = Cookies.get("token");
      axios
        .get(`http://localhost:5000/api/open/getSubjectsDays/${subjectId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setAvailableDays(res.data.days || []);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to load available days for the selected subject.");
        });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStudentSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prev) => ({
      ...prev,
      studentIds: [...new Set([...prev.studentIds, ...selectedIds])], // Prevent duplicates
    }));
  };

  const handleRemoveStudent = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      studentIds: prev.studentIds.filter((studentId) => studentId !== id),
    }));
  };

  const handleDayAdd = (day: string) => {
    if (!formData.days.includes(day)) {
      setFormData((prev) => ({
        ...prev,
        days: [...prev.days, day],
      }));
    }
  };

  const handleRemoveDay = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      days: prev.days.filter((d) => d !== day),
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
        { ...formData, duration: Number(formData.duration) },
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
      <div className="w-[90%] lg:w-[50%] max-w-lg max-h-[95vh] p-6 bg-white rounded-lg shadow-xl overflow-y-auto custom-scrollbar">
        <h2 className="mb-6 text-2xl font-semibold text-center">Create New Group</h2>
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
              onChange={handleSubjectChange}
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

          {/* Selected Students */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Selected Students
            </label>
            <div className="flex flex-wrap gap-2">
              {formData.studentIds.map((id) => {
                const student = students.find((student) => student.id === id);
                return (
                  <span
                    key={id}
                    className="flex items-center px-3 py-1 text-xs text-blue-700 bg-blue-100 rounded-full"
                  >
                    {student?.fullName}
                    <button
                      type="button"
                      className="ml-2 text-red-500"
                      onClick={() => handleRemoveStudent(id)}
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Students Selection */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Add Student</label>
            <select
              onChange={handleStudentSelect}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>
                Select a student to add
              </option>
              {students
                .filter((student) => !formData.studentIds.includes(student.id)) // Exclude already selected students
                .map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.fullName}
                  </option>
                ))}
            </select>
          </div>

          {/* Days Selection */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-700">Selected Days</label>
            <div className="flex flex-wrap gap-2">
              {formData.days.map((day) => (
                <span
                  key={day}
                  className="flex items-center px-3 py-1 text-xs text-blue-700 bg-blue-100 rounded-full"
                >
                  {day}
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => handleRemoveDay(day)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Days Dropdown */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Add Day</label>
            <select
              onChange={(e) => {
                handleDayAdd(e.target.value);
                e.target.value = ""; // Reset the dropdown
              }}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              disabled={!formData.subjectId || availableDays.length === 0}
            >
              <option value="" disabled>
                {availableDays.length > 0 ? "Select a day" : "No available days"}
              </option>
              {availableDays.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          {/* Start Time and Duration */}
          <div className="mb-6">
  <label className="block mb-2 text-sm font-medium text-gray-700">Start Time</label>
  <input
    type="datetime-local" // Ensuring correct input type
    name="startTime"
    value={formData.startTime} // Bind it to state
    onChange={handleInputChange} // Handle changes
    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
    required
  />
</div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Duration (minutes)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <div className="flex justify-between">
          <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-md"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Group"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupCreatePopup;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";

interface CreatePopupProps {
  show: boolean;
  onClose: () => void;
}

const RegSubCreateNowPopUp: React.FC<CreatePopupProps> = ({ show, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [teachers, setTeachers] = useState<{ id: string; fullName: string }[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    teacherId: "",
    duration: "",
    days: [] as string[],
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const allDays = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

  // Fetch teachers from API
  useEffect(() => {
    if (show) {
      const token = Cookies.get("token");
      axios
        .get("http://localhost:5000/api/open/teachers", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.success) {
            setTeachers(response.data.data);
          } else {
            setError("Failed to load teachers.");
          }
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to load teachers.");
        });
    }
  }, [show]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle teacher selection
  const handleTeacherSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, teacherId: e.target.value }));
  };

  // Handle adding a day
  const handleDayAdd = (day: string) => {
    if (!formData.days.includes(day)) {
      setFormData((prev) => ({
        ...prev,
        days: [...prev.days, day],
      }));
    }
  };

  // Handle removing a day
  const handleRemoveDay = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      days: prev.days.filter((d) => d !== day),
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const token = Cookies.get("token");
    axios
      .post(
        "http://localhost:5000/api/admin/subjects/create",
        { ...formData, duration: parseInt(formData.duration) },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Subject created successfully!", { variant: "success" });
        onClose();
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to create the subject.");
        enqueueSnackbar("Failed to create the subject.", { variant: "error" });
        setLoading(false);
      });
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
    >
      <div className="p-6 bg-white rounded shadow-lg lg:w-[30%] w-[90%]">
        <h2 className="mb-4 text-lg font-bold">Create New Subject</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-md">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border-slate-300"
              placeholder="Enter subject title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium text-md">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border-slate-300"
              placeholder="Enter subject description"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium text-md">Teacher</label>
            <select
              name="teacherId"
              value={formData.teacherId}
              onChange={handleTeacherSelect}
              className="w-full px-4 py-2 rounded-md border-slate-300"
              required
            >
              <option value="" disabled>
                Select a teacher
              </option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.fullName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium text-md">Duration (weeks)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border-slate-300"
              placeholder="Enter duration"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium text-md">Selected Days</label>
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

          <div className="mb-4">
            <label className="block mb-2 font-medium text-md">Add Day</label>
            <select
              onChange={(e) => {
                handleDayAdd(e.target.value);
                e.target.value = ""; // Reset selection
              }}
              className="w-full px-4 py-2 rounded-md border-slate-300"
            >
              <option value="" disabled>
                Select a day
              </option>
              {allDays
                .filter((day) => !formData.days.includes(day)) // Exclude already selected days
                .map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
            </select>
          </div>

          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-primary border-primary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md bg-primary"
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

export default RegSubCreateNowPopUp;

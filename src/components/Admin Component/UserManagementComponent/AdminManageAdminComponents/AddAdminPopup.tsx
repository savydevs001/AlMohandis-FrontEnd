import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie'; // Import js-cookies

interface AddAdminPopupProps {
  onClose: () => void;
}

const AddAdminPopup: React.FC<AddAdminPopupProps> = ({ onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    gender: 'MALE',
    designation: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = Cookies.get('token'); // Retrieve the token

    try {
      await axios.post(
        'http://localhost:5000/api/admin/createAdmin',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );
      enqueueSnackbar('Admin created successfully!', { variant: 'success' });
      onClose(); // Close the popup
    } catch (error) {
      enqueueSnackbar('Failed to create admin. Please try again.', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md lg:w-[35%] w-[90%]">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <label className="w-[30%] font-semibold" htmlFor="fullName">Full Name</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[30%] font-semibold" htmlFor="email">Email</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[30%] font-semibold" htmlFor="password">Password</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[30%] font-semibold" htmlFor="phone">Phone</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1234567890"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[30%] font-semibold" htmlFor="gender">Gender</label>
            <select
              className="w-[70%] rounded-md py-1 border-slate-300"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-[30%] font-semibold" htmlFor="designation">Designation</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Software Engineer"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[30%] font-semibold" htmlFor="experience">Experience</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="3 years"
              required
            />
          </div>
          <div className="flex justify-between pt-3">
            <button
              type="button"
              className="px-4 py-1 bg-gray-300 rounded-md w-[48%]"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className={`px-4 py-1 rounded-md w-[48%] ${loading ? 'bg-gray-300' : 'bg-primary text-white'}`}
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdminPopup;

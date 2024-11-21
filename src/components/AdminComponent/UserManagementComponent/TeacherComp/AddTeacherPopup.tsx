import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

interface AddTeacherPopupProps {
  onClose: () => void; // Prop to handle closing the popup
}

const AddTeacherPopup: React.FC<AddTeacherPopupProps> = ({ onClose }) => {
  const { enqueueSnackbar } = useSnackbar(); // Initialize notistack
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'MALE', // Default value
    joiningDate: '',
    email: '',
    password: '',
    dateOfBirth: '',
    phone: '',
    department: 'COMPUTER_SCIENCE', // Default value
    level: 0,
    experience: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = Cookies.get('token');

    // Format dates to ISO string
    const formattedData = {
      ...formData,
      joiningDate: new Date(formData.joiningDate).toISOString(),
      dateOfBirth: new Date(formData.dateOfBirth).toISOString(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/admin/teacher/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Failed to add teacher');
      }

      // Show success notification
      enqueueSnackbar('Teacher added successfully!', { variant: 'success' });

      onClose(); 
    } catch (error:any) {
      console.error('Error adding teacher:', error);
      enqueueSnackbar('Error adding teacher: ' + error.message, { variant: 'error' });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md lg:w-[35%] w-[90%]">
        <form className='space-y-2' onSubmit={handleSubmit}>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="fullName">Full Name</label>
            <input
              className='w-[70%] rounded-md py-1 border-slate-300'
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder='John Daniel'
              required
            />
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="gender">Gender</label>
            <select
              className='w-[70%] rounded-md py-1 border-slate-300'
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="joiningDate">Joining Date</label>
            <input
              className='w-[70%] rounded-md py-1 border-slate-300'
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="email">Email</label>
            <input
              className='w-[70%] rounded-md py-1 border-slate-300'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='hello@gmail.com'
              required
            />
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="password">Password</label>
            <input
              className='w-[70%] rounded-md py-1 border-slate-300'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="dateOfBirth">Date of Birth</label>
            <input
              className='w-[70%] rounded-md py-1 border-slate-300'
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="phone">Phone</label>
            <input
              className='w-[70%] rounded-md py-1 border-slate-300'
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='+923897902'
              required
            />
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="department">Department</label>
            <select
              className='w-[70%] rounded-md py-1 border-slate-300'
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="COMPUTER_SCIENCE">Computer Science</option>
              <option value="AEROSPACE">Aerospace</option>
            </select>
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="level">Level</label>
            <input
              className='w-[70%] rounded-md py-1 border-slate-300'
              type="number"
              name="level"
              value={formData.level}
              onChange={handleChange}
              placeholder='3'
              required
            />
          </div>
          <div className='flex items-center'>
            <label className='w-[25%] font-semibold' htmlFor="experience">Experience</label>
            <input
              className='w-[70%] rounded-md py-1 border-slate-300'
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder='8'
              required
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose} // Close the popup
              className="px-4 py-2 text-white rounded-md bg-primary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherPopup;

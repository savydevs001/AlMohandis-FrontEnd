import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';

interface AddStudentPopUpProps {
  onClose: () => void;
}

// Define departments interface (Enum-like structure)
interface Departments {
  COMPUTER_SCIENCE: 'COMPUTER_SCIENCE';
  AEROSPACE: 'AEROSPACE';
}

const departments: Departments = {
  COMPUTER_SCIENCE: 'COMPUTER_SCIENCE',
  AEROSPACE: 'AEROSPACE',
};

const AddStudentPopUp: React.FC<AddStudentPopUpProps> = ({ onClose }) => {
  const { enqueueSnackbar } = useSnackbar();

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '', // Ideally, this should be hashed before sending to the API
    dateOfBirth: '',
    enrollmentDate: '',
    department: departments.COMPUTER_SCIENCE, // Default department
    program: '',
    studentClass: '',
  });

  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<'MALE' | 'FEMALE'>('FEMALE');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set loading state to true to disable submit button while API request is in progress
    setLoading(true);

    // Get the token from cookies
    const token = Cookies.get('token');
    if (!token) {
      enqueueSnackbar('Authentication failed. Token missing.', { variant: 'error' });
      setLoading(false);
      return;
    }

    // Prepare the data for the API request
    const requestBody = {
      id: `student_${Date.now()}`, // Generate a unique student ID
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password, // Ensure the password is hashed before sending to the API
      dateOfBirth: formData.dateOfBirth,
      enrollmentDate: formData.enrollmentDate,
      department: formData.department, // Pass the exact department enum value
      program: formData.program,
      class: formData.studentClass,
      studentRole: 'INTERNAL', // Assuming the role is internal by default
      isFreeze: false, // Assuming the student is not frozen by default
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/createStudent`, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)

      // Handle success
      enqueueSnackbar('Student added successfully!', { variant: 'success' });
      setLoading(false);
      onClose(); // Close the popup
    } catch (error) {
      // Handle error
      enqueueSnackbar('Failed to add student. Please try again.', { variant: 'error' });
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md lg:w-[35%] w-[90%]">
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <label className="w-[25%] font-semibold" htmlFor="fullName">Full Name</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Daniel"
              required
            />
          </div>
          <div className="flex items-center cursor-pointer">
            <label className="w-[25%] font-semibold" htmlFor="gender">
              Gender
            </label>
            <div className="flex items-center gap-4">
              <p
                className={`px-3 py-1 text-white rounded-full ${gender === 'FEMALE' ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setGender('FEMALE')}
              >
                FEMALE
              </p>
              <p
                className={`px-3 py-1 text-white rounded-full ${gender === 'MALE' ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setGender('MALE')}
              >
                MALE
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <label className="w-[25%] font-semibold" htmlFor="department">Department</label>
            <select
              className="w-[70%] rounded-md py-1 border-slate-300"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              {Object.entries(departments).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-[25%] font-semibold" htmlFor="enrollmentDate">Enrollment</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="date"
              id="enrollmentDate"
              name="enrollmentDate"
              value={formData.enrollmentDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[25%] font-semibold" htmlFor="email">Email</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@gmail.com"
              required
            />
          </div>
          <div className="flex items-center">
            <div className="w-[25%]">
              <label className="w-[100%] font-semibold" htmlFor="password">Password</label>
              <p className="text-pTag">(auto)</p>
            </div>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="1896587"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[25%] font-semibold" htmlFor="dateOfBirth">Date of Birth</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[25%] font-semibold" htmlFor="phone">Phone</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+923897902"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[25%] font-semibold" htmlFor="program">Program</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="text"
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              placeholder="BS Information Technology"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-[25%] font-semibold" htmlFor="studentClass">Class</label>
            <input
              className="w-[70%] rounded-md py-1 border-slate-300"
              type="text"
              id="studentClass"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              placeholder="1st Year"
              required
            />
          </div>
          <div className="flex justify-between pt-3">
            <button
              className="px-4 py-1 bg-primary rounded-md text-white w-[48%] hover:bg-blue-700"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-1 rounded-md w-[48%] ${loading ? 'bg-gray-300' : 'bg-primary text-white'}`}
            >
              {loading ? 'Adding...' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentPopUp;

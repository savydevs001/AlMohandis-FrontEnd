import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiContractLeftLine } from "react-icons/ri";
import Cookies from 'js-cookie';

interface BasicInfo_StepProps {
  handleNext: () => void;
}

const Step1BasicInfo: React.FC<BasicInfo_StepProps> = ({ handleNext }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedCourseId = localStorage.getItem('courseId');
    const userType = Cookies.get('userType');
    if (storedCourseId) {
      setCourseId(storedCourseId);
      fetchCourseDetails(storedCourseId);
    }
    if (userType === 'admin' || userType === 'SUPER_ADMIN') {
      setIsAdmin(true);
    }
  }, []);

  const fetchCourseDetails = async (id: string) => {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch course details');
      }

      const data = await response.json();
      setTitle(data.title);
      setDescription(data.description);
      setFile(data.file); // Assuming file is included in the response
    } catch (error) {
      console.error('Error fetching course details:', error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (file) {
      formData.append('file', file);
    }

    const token = Cookies.get('token');
    const apiUrl = isAdmin
      ? 'http://localhost:5000/api/admin/course/create'
      : 'http://localhost:5000/api/courses/create';
    const method = courseId ? 'PATCH' : 'POST';
    const url = courseId ? `http://localhost:5000/api/courses/${courseId}` : apiUrl;

    try {
      const response = await fetch(url, {
        method,
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to create or update course');
      }

      const data = await response.json();
      console.log('Course created/updated successfully:', data);
      if (!courseId) {
        localStorage.setItem('courseId', data.id);
        setCourseId(data.id);
      }
      handleNext();
    } catch (error) {
      console.error('Error creating/updating course:', error);
    }
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl shadow-2xl p-8 space-y-6 h-[80%] mx-auto bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Basic Information</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex flex-col'>
            <label className='font-medium rounded-md' htmlFor="title">Course Title</label>
            <input
              type="text"
              className='rounded-md bg-cardBg border-[#6666]'
              name="title"
              placeholder="Enter your Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              cols={400}
              rows={5}
              className='rounded-md bg-cardBg border-[#6666]'
              placeholder="Write a short Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="relative cursor-pointer">
              <input 
                type="file" 
                className="absolute w-full h-full opacity-0 cursor-pointer" 
                onChange={handleFileChange}
              />
              <div className="px-4 py-2 text-gray-700 bg-white border-2 border-gray-400">
                {file ? file.name : 'Upload a file'}
              </div>
            </label>
          </div>
        
          <div className='flex items-center gap-2'>
            <NavLink className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary' to={'/courses'}>
              <RiContractLeftLine />
              Back
            </NavLink>
            <button 
              type="submit"
              className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1BasicInfo;

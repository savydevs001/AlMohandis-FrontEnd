import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiContractLeftLine } from "react-icons/ri";
import axios from 'axios';
import { CreateCourseResponse } from '../../../../types/courses/createCourse';
import Cookies from 'js-cookie';

interface BasicInfo_StepProps {
  handleNext: () => void;
}

const BasicInfo_Step: React.FC<BasicInfo_StepProps> = ({ handleNext }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null); // State to hold the uploaded file

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // Set the selected file
    }
  };

  const validate = () => {
    return title !== "" && description !== "" && file !== null; // Ensure file is also selected
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }
  
    setLoading(true);
    const token = Cookies.get('token');
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    
    // Check if file is not null before appending
    if (file) {
      formData.append('file', file); // Append the file to the FormData
    } else {
      console.error("No file selected");
      setLoading(false);
      return; // Exit if no file is selected
    }
  
    try {
      const res: CreateCourseResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });
      
      if (res.data.id) {
        localStorage.setItem("courseId", res.data.id);
        handleNext();
      } else {
        console.error("Failed to create course");
      }
    } catch (error) {
      console.error("Failed to create course", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl shadow-2xl p-8 space-y-6 h-[80%] mx-auto bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Basic Information</h2>
        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="">Course Title</label>
          <input
            type="text"
            className='rounded-md bg-cardBg border-[#6666]'
            name="title"
            placeholder="Enter your Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            cols={400}
            rows={5}
            className='rounded-md bg-cardBg border-[#6666]'
            placeholder="Write a short Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="relative cursor-pointer">
            <input 
              type="file" 
              className="absolute w-full h-full opacity-0 cursor-pointer" 
              onChange={handleFileChange} // Handle file change
            />
            <div className="px-4 py-2 text-gray-700 bg-white border-2 border-gray-400 border-dotted rounded-md hover:bg-gray-100">
              {file ? file.name : "Choose File"}
            </div>
          </label>
        </div>
      
        <div className='flex items-center gap-2'>
          <NavLink className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary' to={'/courses'}>
            <RiContractLeftLine />
            Back
          </NavLink>
          <button 
 className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' 
            disabled={loading} 
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo_Step;
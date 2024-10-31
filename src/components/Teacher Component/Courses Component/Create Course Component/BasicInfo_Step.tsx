import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiContractLeftLine } from "react-icons/ri";
import axios from 'axios';
import { CreateCourseResponse } from '../../../../types/courses/createCourse';
import Cookies from 'js-cookie';
// import { RxPinRight } from "react-icons/rx";

interface BasicInfo_StepProps {
  // formData: { title: string; description: string };
  // handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
}

const BasicInfo_Step: React.FC<BasicInfo_StepProps> = ({ handleNext }) => {

  const [title, settitle] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  // const [imageSrc, setimageSrc] = useState<string>('dsdsdsd');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setdescription(e.target.value);
  };

  const validate = () => {
    if (title === "" || description === "") {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }
    // make the api call here
    setloading(true);
    const token = Cookies.get('token');
    console.log(token);
    
    try {
      const res : CreateCourseResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/create`, {
        title,
        description,
        imageSrc: 'dadasdasd'
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (res.data.id) {
        console.log(res.data.id);

        localStorage.setItem("courseId", res.data.id);
        handleNext();
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error("Failed to create course");
    } finally {
      setloading(false);
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
        <div className='flex flex-col'>
          <input type="file" />
        </div>
        <div className='flex items-center gap-2'>
          <NavLink className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary' to={'/courses'}>
            <RiContractLeftLine />
            Back</NavLink>
          <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' disabled={loading} onClick={handleSubmit}>Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo_Step;

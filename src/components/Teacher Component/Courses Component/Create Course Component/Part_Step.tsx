import axios from 'axios';
import React, { useState } from 'react';
import { RiContractLeftLine } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";
import Cookies from 'js-cookie';
import { CreatePartResponse } from '../../../../types/courses/createCourse';

interface Part_StepProps {
  // formData: {
  //   title: string;
  //   description: string;
  //   accessibility: string;
  //   additionalField1: string;
  //   additionalField2: string; // Example field
  // };
  // handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const Part_Step: React.FC<Part_StepProps> = ({ handleNext, handleBack }) => {

  const [title, setPartTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [openingDate, setOpeningDate] = useState<string>("");
  const [completionTime, setCourseCompletionTime] = useState<number>(0);
  const [loading, setloading] = useState<boolean>(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartTitle(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpeningDate(e.target.value);
  };

  const handleCompletionTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourseCompletionTime(parseInt(e.target.value));
  };

  const validateForm = () => {
    return title.length > 0 && price > 0 && openingDate.length > 0 && completionTime > 0;
  };

  const handleSubmit = async () => {
    console.log(title, price, openingDate, completionTime);
    if (!validateForm()) {
      alert('Please fill all the fields');
      return;
    }
    try {
      setloading(true);
      const courseId = localStorage.getItem('courseId');
      const res: CreatePartResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/createPart`, {
        title,
        price,
        openingDate,
        completionTime
      }, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      if (res.data.id) {
        alert('Part created successfully');
        const partName = 'Part 1';
        localStorage.setItem(partName, res.data.id);

        handleNext();
      } else {
        alert('Failed to create part');
      }
    } catch (error) {
      alert('Failed to create part');
    } finally {
      setloading(false);
    }
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl p-8 mx-auto space-y-6 shadow-2xl h-fit bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Part 1</h2>
        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="">Title</label>
          <input
            type="text"
            className='rounded-md bg-cardBg border-[#6666]'
            name="title"
            placeholder="Enter your Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className='flex flex-col justify-between w-full lg:flex-row gap-14'>
          <div className='w-full space-y-4 lg:w-1/2'>
            <div className='flex flex-col gap-1'>
              <label className='font-medium rounded-md' htmlFor="">Price</label>
              <input
                type="text"
                className='rounded-md bg-cardBg border-[#6666]'
                name="title"
                placeholder="$99.00"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-medium rounded-md' htmlFor="">Opening Date</label>
              <input
                type="Date"
                className='rounded-md bg-cardBg border-[#6666]'
                name="title"
                placeholder="$99.00"
                value={openingDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className='w-full space-y-4 lg:w-1/2'>
            <div className='space-y-4'>
              <div className='flex flex-col gap-1'>
                <label className='font-medium rounded-md' htmlFor="">Course Completion time</label>
                <input
                  type="text"
                  className='rounded-md bg-cardBg border-[#6666]'
                  name="title"
                  placeholder="4 days"
                  value={completionTime}
                  onChange={handleCompletionTimeChange}
                />
              </div>
            </div>
            <div className='flex items-center justify-end'>
              {/* <button className='px-3 py-2 font-semibold border-2 rounded-lg text-primary border-primary'>Add Season <span className='px-2 text-lg'>+</span></button> */}
            </div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <button className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary' onClick={handleBack}>
            <RiContractLeftLine />
            Back
          </button>
          <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' disabled={loading} onClick={handleSubmit}>Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part_Step;

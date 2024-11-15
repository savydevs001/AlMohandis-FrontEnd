import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import axios from 'axios';
import Cookies from 'js-cookie';
import { Modules } from '../../../../../Teacher Component/Courses Component/Create Course Component/CreateCourse';
import { CreatePartResponse } from '../../../../../../types/courses/createCourse';

interface SeasonPopUpProps {
  onClose: () => void;
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: Modules[] }[]>>;
  partNumber: number;
  setPartNumber: React.Dispatch<React.SetStateAction<number>>;
}

const AddSeasonsPopUp: React.FC<SeasonPopUpProps> = ({ onClose, setPartContainer, partNumber, setPartNumber }) => {

  const [title, setPartTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [openingDate, setOpeningDate] = useState<string>("");
  const [completionTime, setCourseCompletionTime] = useState<number>(0);
  const [loading, setloading] = useState<boolean>(false);

  const validateForm = () => {
    return title.length > 0 && price > 0 && openingDate.length > 0 && completionTime > 0;
  };

  const handleAdd = async () => {
    if (!validateForm()) {
      return;
    }
    //MAKE API CALL HERE
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
        const partName = `Part ${partNumber + 1}`;
        localStorage.setItem(partName, res.data.id);
        setPartContainer((prev) => [
          ...prev,
          {
            name: partName,
            value: title,
            modules: [],
          },
        ]);
        setPartNumber((prev) => prev + 1);
        onClose();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[90%] p-8 bg-white rounded-lg lg:w-1/3">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Add Part</h3>
          <button disabled={loading} onClick={onClose}>
          <AiOutlineCloseCircle className="text-2xl text-red-500 cursor-pointer" />
          </button>
        </div>
        <div className="space-y-4">
          <div className='space-y-1'>
            <label htmlFor="">Part Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setPartTitle(e.target.value)}
              placeholder="Enter your title"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor="">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              placeholder="Price"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor="">Opening Date</label>
            <input
              type="date"
              value={openingDate}
              onChange={(e) => setOpeningDate(e.target.value)}
              placeholder="Opening Date"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor="">Expected Course Completion Time</label>
            <input
              type="text"
              value={completionTime}
              onChange={(e) => setCourseCompletionTime(parseInt(e.target.value))}
              placeholder="Expected Course Completion Time"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
          <div className="flex justify-start space-x-2">
            <button onClick={onClose} disabled={loading} className="px-4 py-2 text-white rounded bg-primary">Cancel</button>
            <button onClick={handleAdd} disabled={loading} className="px-4 py-2 text-white rounded bg-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSeasonsPopUp;





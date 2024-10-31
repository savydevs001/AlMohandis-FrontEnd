import axios from 'axios';
import React, { useState } from 'react';
// import { RiContractLeftLine } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";
import { CreateCourseResponse } from '../../../../types/courses/createCourse';

interface ObjectivesGoals_StepProps {
  // formData: { 
  //   title: string; 
  //   description: string; 
  //   accessibility: string; 
  //   additionalField1: string; // Add new fields as needed
  //   additionalField2: string;
  //   finalComments: string; 
  // };
  // handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  // handleBack: () => void;
  handleNext: () => void; // Add handleNext prop
}

const ObjectivesGoals_Step: React.FC<ObjectivesGoals_StepProps> = ({ handleNext }) => {

  const [Objectives, setObjectives] = useState<string>("");
  const [StudentLearning, setStudentLearning] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleObjectives = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObjectives(e.target.value);
  };

  const handleLearning = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStudentLearning(e.target.value);
  };

  const validateFields = () => {
    if (Objectives === "" || StudentLearning === "") {
      return false;
    }
    return true;
  }
  const handleSubmit = async () => {
    if (!validateFields()) {
      return;
    }
    setLoading(true);
   try {
    const courseId = localStorage.getItem("courseId");
     const res : CreateCourseResponse = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/objectives`, {
       objectives: Objectives,
       whatYouWillLearn: StudentLearning
     })
     if (res.data.id) {
       handleNext();
     } else {
        console.log('Error');
     }  
   } catch (error) {
      console.error(error);
   } finally {
     setLoading(false);
    }
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl p-8 mx-auto space-y-6 shadow-2xl h-fit bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Objectives and Goals</h2>
        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="courseObjectives">Course Objectives</label>
          <textarea
            id="courseObjectives"
            name="description" // Make sure to differentiate if needed
            cols={400}
            rows={5}
            className='rounded-md bg-cardBg border-[#6666]'
            placeholder="Write a short Description"
          value={Objectives}
          onChange={handleObjectives} // Ensure change handler is set
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="studentLearning">What will Student learn?</label>
          <textarea
            id="studentLearning"
            name="additionalField1" // Update to match your data structure
            cols={400}
            rows={5}
            className='rounded-md bg-cardBg border-[#6666]'
            placeholder="Write a short Description"
          value={StudentLearning} // Ensure correct value is set
          onChange={handleLearning} // Ensure change handler is set
          />
        </div>
        <div className='flex items-center gap-2'>
          {/* <button className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary' onClick={handleBack}>
            <RiContractLeftLine />
            Back
          </button> */}
          <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' disabled={loading} onClick={handleSubmit}>Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesGoals_Step;

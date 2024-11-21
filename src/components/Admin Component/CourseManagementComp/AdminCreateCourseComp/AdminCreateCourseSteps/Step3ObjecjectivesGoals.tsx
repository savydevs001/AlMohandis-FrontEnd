import { RxPinRight } from "react-icons/rx";
import React, { useState, useEffect } from 'react';

// Interface for the request body to be sent to the API
interface CourseObjectivesRequest {
  objectives: string;
  whatYouWillLearn: string;
}

interface ObjectivesGoals_StepProps {
  handleNext: () => void;
}

const Step3ObjecjectivesGoals: React.FC<ObjectivesGoals_StepProps> = ({ handleNext }) => {
  const [courseObjectives, setCourseObjectives] = useState<string>('');
  const [whatStudentWillLearn, setWhatStudentWillLearn] = useState<string>('');

  // Retrieve data from localStorage if available
  useEffect(() => {
    const savedObjectives = localStorage.getItem('courseObjectives');
    const savedLearning = localStorage.getItem('whatStudentWillLearn');

    if (savedObjectives) {
      setCourseObjectives(savedObjectives);
    }
    if (savedLearning) {
      setWhatStudentWillLearn(savedLearning);
    }
  }, []);

  // Handle form field changes
  const handleCourseObjectivesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCourseObjectives(e.target.value);
    localStorage.setItem('courseObjectives', e.target.value); // Save the updated value to localStorage
  };

  const handleWhatStudentWillLearnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWhatStudentWillLearn(e.target.value);
    localStorage.setItem('whatStudentWillLearn', e.target.value); // Save the updated value to localStorage
  };

  const handleFormSubmit = async () => {
    const courseId = localStorage.getItem('courseId'); // Assuming courseId is saved in localStorage

    const requestBody: CourseObjectivesRequest = {
      objectives: courseObjectives,
      whatYouWillLearn: whatStudentWillLearn,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/courses/${courseId}/objectives`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Course objectives updated:', data);
        handleNext(); // Call the handleNext function to move to the next step
      } else {
        console.error('Failed to update course objectives', data);
      }
    } catch (error) {
      console.error('Error during API request', error);
    }
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl p-8 mx-auto space-y-6 shadow-2xl h-fit bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Objectives and Goals</h2>

        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="courseObjectives">
            Course Objectives
          </label>
          <textarea
            id="courseObjectives"
            name="description"
            cols={400}
            rows={5}
            className='rounded-md bg-cardBg border-[#6666]'
            placeholder="Write a short Description"
            value={courseObjectives}
            onChange={handleCourseObjectivesChange}
          />
        </div>

        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="studentLearning">
            What will Student learn?
          </label>
          <textarea
            id="studentLearning"
            name="additionalField1"
            cols={400}
            rows={5}
            className='rounded-md bg-cardBg border-[#6666]'
            placeholder="Write a short Description"
            value={whatStudentWillLearn}
            onChange={handleWhatStudentWillLearnChange}
          />
        </div>

        <div className='flex items-center gap-2'>
          <button
            className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
            onClick={handleFormSubmit}
          >
            Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3ObjecjectivesGoals;

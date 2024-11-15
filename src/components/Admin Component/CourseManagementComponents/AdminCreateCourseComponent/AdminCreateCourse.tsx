import React, { useState, useEffect } from 'react';
import UserManagementHeader from '../../UserManagementComponent/UserManagementHeader';
import Step1BasicInfo from './AdminCreateCourseSteps/Step1BasicInfo';
import Step2AccessibilitySettings from './AdminCreateCourseSteps/Step2AccessibilitySettings';

import Step4AddInstructor from './AdminCreateCourseSteps/Step4AddInstructor';
import Step5CreatePart from './AdminCreateCourseSteps/Step5CreatePart';
import Step6CreatePart from './AdminCreateCourseSteps/Step6CreatePart';
import Step3ObjecjectivesGoals from './AdminCreateCourseSteps/Step3ObjecjectivesGoals';
// import Part1Assignment from './AdminCreateCourseSteps/AssignmetnModule/Part1Assignment';
import Part1ExamModule from './AdminCreateCourseSteps/ExamModule/Part1ExamModule';


const AdminCreateCourse: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) setStep(parseInt(savedStep, 10));
  }, []);

  useEffect(() => {
    localStorage.setItem('currentStep', step.toString());
  }, [step]);

  const handleNext = () => setStep(step + 1);
  const handleFinish = () => alert('Course creation finished!');

  return (
    <div className='flex flex-col flex-1 min-h-screen lg:flex-row'>
      <div className='flex-1 w-full p-2 mx-auto lg:w-full lg:p-6'>
        <UserManagementHeader title='New Course' />

        {/* Render the component based on the current step */}
        {step === 1 && <Step1BasicInfo handleNext={handleNext} />}
        {step === 2 && <Step2AccessibilitySettings handleNext={handleNext} />}
        {step === 3 && <Step3ObjecjectivesGoals handleNext={handleNext} />}
        {step === 4 && <Step4AddInstructor handleNext={handleNext} />}
        {step === 5 && <Step5CreatePart handleNext={handleNext} />}
        {step === 6 && <Step6CreatePart handleNext={handleNext} />}
        {/* {step === 7 && <RightAudioMudule title='Right Audio Module'   handleNext={handleNext} />} */}
        {step === 7 && (
          <Part1ExamModule
            
            handleNextModule={handleNext}
            isLastModule={true}  // Adjust based on whether it's the last module
            handleFinish={handleFinish}
          />
        )}
      </div>
    </div>
  );
};

export default AdminCreateCourse;

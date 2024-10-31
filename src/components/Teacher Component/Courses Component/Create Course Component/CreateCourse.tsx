import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar';
import BasicInfo_Step from './BasicInfo_Step';
import AccessibilitySettings_Step from './AccessibilitySettings_Step';
import ObjectivesGoals_Step from './ObjectivesGoals_Step';
import Part_Step from './Part_Step';
import MainModules_Step from './MainModules_Step';
import DashBoardHeader from '../../Dashboard Component/DashBoardHeader';
import Step8 from './Step8';

interface Lesson {
  type: string;
  number: number;
}

export interface Modules {
  name: string;
  number: number;
  lessons: Lesson[];
}

const CreateCourse: React.FC = () => {
  
  const [step, setStep] = useState<number>(1);
  const [partContainer, setPartContainer] = useState<{ name: string, value: string, modules: Modules[] }[]>([{
    name: 'Part 1',
    value: 'Chapter 1',
    modules: [],
  }]); // State to store the parts

  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
      const stepNumber = parseInt(savedStep, 10);
      if (stepNumber === 5) {
        console.log('Clearing local storage');
        
        localStorage.clear();
      } else {
        console.log('Setting step');
        
        setStep(stepNumber);
      }
    }
  }, []);

  useEffect(() => {
    if (step !== 6) {
      localStorage.setItem('currentStep', step.toString());
    }
  }, [step]);


  const handleNext = () => {
    if (step < 9) {
      setStep((prevStep) => prevStep + 1);
    }
    console.log(step);
    
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleFinish = () => {
    setStep(8);
  };

  return (
    <div className='flex flex-col min-h-screen lg:flex-row'>
      <Sidebar />
      <div className='flex-1 w-full p-2 mx-auto lg:w-full lg:p-6'>
        <div>
          <div className="flex items-center justify-between gap-1">
            <h1 className="text-sm font-bold lg:text-2xl">New Courses</h1>
            <DashBoardHeader />
          </div>
        </div>
        {step === 1 && (
          <BasicInfo_Step
            // formData={formData}
            // handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <AccessibilitySettings_Step
            // formData={formData}
            // handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 3 && (
          <ObjectivesGoals_Step
            // formData={formData}
            // handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 4 && (
          <Part_Step
            // formData={formData}
            // handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 5 && (
          <MainModules_Step
            handleFinish={handleFinish}
            handleBack={handleBack}
            setPartContainer={setPartContainer}
            partContainer={partContainer}
          />
        )}
        {/* {step === 6 && (
          <Step6
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )} */}
        {/* {step === 7 && (
          <Step7
            formData={formData}
            handleInputChange={handleInputChange}
            // handleSubmit={handleSubmit}
            handleNext={handleNext} // Pass handleNext to Step 7
          />
        )} */}
        {step === 8 && (
          <Step8
            handleNext={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default CreateCourse;

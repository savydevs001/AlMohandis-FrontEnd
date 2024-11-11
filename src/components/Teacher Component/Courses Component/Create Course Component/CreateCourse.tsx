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
      setStep(stepNumber);
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
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <AccessibilitySettings_Step
            handleNext={handleNext}
          />
        )}
        {step === 3 && (
          <ObjectivesGoals_Step
            handleNext={handleNext}
          />
        )}
        {step === 4 && (
          <Part_Step
            handleNext={handleNext}
          />
        )}
        {step === 5 && (
          <MainModules_Step
            handleFinish={handleFinish}
            setPartContainer={setPartContainer}
            partContainer={partContainer}
          />
        )}
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
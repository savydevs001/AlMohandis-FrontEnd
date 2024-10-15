import React, { useState } from 'react';
import Sidebar from '../../Sidebar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7'; // Import Step7
// import Step8 from './Step8'; // Import Step8
// import Step9 from './Step9';
import DashBoardHeader from '../../Dashboard Component/DashBoardHeader';

interface FormData {
  title: string;
  description: string;
  accessibility: string;
  additionalField1: string;
  additionalField2: string;
  additionalField3: string; // New field for Step 8
  finalComments: string;
}

const CreateCourse: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    accessibility: '',
    additionalField1: '',
    additionalField2: '',
    additionalField3: '', // Initialize new field
    finalComments: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step < 9) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = () => {
    // Submit logic here
    console.log('Submitting form data:', formData);
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
          <Step1
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 4 && (
          <Step4
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 5 && (
          <Step5
            // formData={formData}
            // handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
        {step === 6 && (
          <Step6
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            // handleBack={handleBack}
          />
        )}
        {step === 7 && (
          <Step7
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            // handleNext={handleNext}
            // handleBack={handleBack}
          />
        )}
        {/* {step === 8 && (
          <Step8
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            // handleBack={handleBack}
          />
        )} */}
        {/* {step === 9 && (
          <Step9
            formData={formData}
            handleInputChange={handleInputChange}
            // handleBack={handleBack}
            handleSubmit={handleSubmit}
          />
        )} */}
      </div>
    </div>
  );
};

export default CreateCourse;

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserManagementHeader from '../../UserManagementComponent/UserManagementHeader';
import Step1BasicInfo from './AdminCreateCourseSteps/Step1BasicInfo';
import Step2AccessibilitySettings from './AdminCreateCourseSteps/Step2AccessibilitySettings';
import Step3ObjecjectivesGoals from './AdminCreateCourseSteps/Step3ObjecjectivesGoals';
import Step4AddInstructor from './AdminCreateCourseSteps/Step4AddInstructor';
import Step5CreatePart from './AdminCreateCourseSteps/Step5CreatePart';
import Step6CreatePart from './AdminCreateCourseSteps/Step6CreatePart';
import SendForReview from './AdminCreateCourseSteps/SendForReview';

const AdminCreateCourse: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = (nextStep: string) => navigate(nextStep);

  return (
    <div className="flex flex-col flex-1 min-h-screen lg:flex-row">
      <div className="flex-1 w-full p-2 mx-auto space-y-12 lg:w-full ">
        <UserManagementHeader title="New Course" />
        <Routes>
          <Route
            path="step1"
            element={<Step1BasicInfo handleNext={() => handleNext('step2')} />}
          />
          <Route
            path="step2"
            element={<Step2AccessibilitySettings handleNext={() => handleNext('step3')} />}
          />
          <Route
            path="step3"
            element={<Step3ObjecjectivesGoals handleNext={() => handleNext('step4')} />}
          />
          <Route
            path="step4"
            element={<Step4AddInstructor handleNext={() => handleNext('step5')} />}
          />
          <Route
            path="step5"
            element={<Step5CreatePart handleNext={() => handleNext('step6')} />}
          />
          <Route
            path="step6"
            element={<Step6CreatePart handleNext={()=>handleNext('step7')}/>}
          />
          <Route
            path="step7"
            element={
            <SendForReview/>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminCreateCourse;

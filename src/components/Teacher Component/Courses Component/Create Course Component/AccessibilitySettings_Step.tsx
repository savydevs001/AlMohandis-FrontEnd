import axios from 'axios';
import React, { useState } from 'react';
import { RiContractLeftLine } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";
import { AccessibilitySettingsResponse } from '../../../../types/courses/createCourse';

interface AccessibilitySettings_StepProps {
  // formData: { accessibility: string };
  // handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const AccessibilitySettings_Step: React.FC<AccessibilitySettings_StepProps> = ({ handleNext, handleBack }) => {
  const [isFree, setIsFree] = useState(false);
  const [boughtFromAnotherTeacher, setBoughtFromAnotherTeacher] = useState(false);
  const [canAccessOtherCourse, setcanAccessOtherCourse] = useState(false);

  // State to track selected types
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  // State to track selected academic stages
  const [selectedStages, setSelectedStages] = useState<number[]>([]);

  const [selectedTeacher, setSelectedTeacher] = useState<string>('');

  const [loading, setloading] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsFree((prev) => !prev);
  };

  const handleBoughtFromAnotherTeacherChange = () => {
    setBoughtFromAnotherTeacher((prev) => !prev);
  };

  const handlecanAccessOtherCourse = () => {
    setcanAccessOtherCourse((prev) => !prev);
  };

  // Function to handle type selection
  const handleTypeSelection = (type: 'internal' | 'external') => {
    setSelectedTypes((prev) => {
      if (prev.includes(type.toUpperCase())) {
        return prev.filter((prevType) => prevType !== type.toUpperCase());
      } else {
        return [...prev, type.toUpperCase()];
      }
    });
  };

  // Function to handle stage selection
  const handleStageSelection = (stage: number) => {
    setSelectedStages((prev) => {
      if (prev.includes(stage)) {
        return prev.filter((prevStage) => prevStage !== stage);
      } else {
        return [...prev, stage];
      }
    });
  };

  const handleTeacherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeacher(e.target.value);
  };

  const handleSubmit = async () => {

    if (isFree && (selectedTypes.length === 0 || selectedStages.length === 0)) {
      alert("Please fill Types And Stages fields");
      return;
    }
    if (boughtFromAnotherTeacher && selectedTeacher === '') {
      alert("Please fill the Teacher field");
      return;
    }
    if (isFree){
    setloading(true);
    try {
      const token = localStorage.getItem("token") as string;
      const courseId = localStorage.getItem("courseId") as string;

      const res : AccessibilitySettingsResponse = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/accessibility`, {
        isFree,
        studentAccessType: selectedTypes,
        academicStage: selectedStages,
        canAccessIfPurchased: canAccessOtherCourse,
        // broughtFromTeacherId: selectedTeacher
        broughtFromTeacherId: "cm2q2kd6w0000ublh9k8fr2qt"
      }, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      if (res.data.id) {
        alert("Succesfull");
        handleNext();
      } else {
        alert("Failed");
      }
    } catch (error) {
      alert("Failed");
    }
  } else {
    handleNext();
  }
  };

  return (
    <div className='mt-12'>
      <div className='max-w-4xl p-8 mx-auto space-y-3 shadow-2xl h-fit bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Accessibility Settings</h2>
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center gap-4'>
            <input
              className='w-3 h-3 text-primary'
              type="checkbox"
              checked={isFree}
              onChange={handleCheckboxChange}
            />
            <p className='text-[#555]'>Free</p>
          </div>

          {isFree && (
            <>
              <div className='flex items-center gap-10 lg:gap-36'>
                <h5 className='font-semibold'>Type</h5>
                <div className='flex items-center gap-2'>
                  <p
                    onClick={() => handleTypeSelection('internal')}
                    className={`px-4 py-1 text-sm text-white rounded-full ${selectedTypes.includes('INTERNAL') ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}
                  >
                    Internal
                  </p>
                  <p
                    onClick={() => handleTypeSelection('external')}
                    className={`px-4 py-1 text-sm text-white rounded-full ${selectedTypes.includes('EXTERNAL') ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}
                  >
                    External
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-10 lg:gap-16'>
                <h5 className='font-semibold'>Academic Stage</h5>
                <div className='flex flex-wrap items-center gap-1'>
                  {[1, 2, 3, 4].map((stage) => (
                    <p
                      key={stage}
                      onClick={() => handleStageSelection(stage)}
                      className={`px-4 py-1 text-sm text-white rounded-full ${selectedStages.includes(stage) ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}
                    >
                      Stage {stage}
                    </p>
                  ))}
                </div>
              </div>

              <div className='space-y-3'>
                <h5 className='font-semibold'>Buying Status</h5>
                <div className='flex items-center gap-4 px-5'>
                  <input
                    className='w-3 h-3 text-primary'
                    type="checkbox"
                    checked={boughtFromAnotherTeacher}
                    onChange={handleBoughtFromAnotherTeacherChange}
                  />
                  <p className='text-[#555] text-sm'>Bought From Another Teacher</p>
                </div>
                {boughtFromAnotherTeacher && (
                  <select className='py-1 lg:mx-16 rounded-xl bg-cardBg lg:w-96 w-80' value={selectedTeacher} onChange={handleTeacherChange}>
                    <option className='py-1 text-sm bg-cardBg' value="">Select Teacher</option>
                    <option className='py-1 text-sm bg-cardBg' value="Teacher 1">Teacher 1</option>
                    <option className='py-1 text-sm bg-cardBg' value="Teacher 2">Teacher 2</option>
                    <option className='py-1 text-sm bg-cardBg' value="Teacher 3">Teacher 3</option>
                  </select>
                )}
                <div className='flex items-center gap-4 px-5'>
                  <input className='w-3 h-3 text-primary' type="checkbox" checked={canAccessOtherCourse} onChange={handlecanAccessOtherCourse} />
                  <p className='text-[#555] text-sm'>Bought other course from same teachers</p>
                </div>
              </div>

              {/* <div className='space-y-3'>
                <h5 className='font-semibold'>Groups</h5>
                <select className='py-2 rounded-md w-80 bg-cardBg'>
                  <option className='py-1 text-sm bg-cardBg' value="">All</option>
                  <option className='py-1 text-sm bg-cardBg' value="">Group 1</option>
                  <option className='py-1 text-sm bg-cardBg' value="">Group 2</option>
                  <option className='py-1 text-sm bg-cardBg' value="">Group 3</option>
                </select>
              </div> */}
            </>
          )}
        </div>

        <div className='flex items-center gap-2 py-12 h-fit'>
          <button
            className='flex items-center gap-2 px-6 py-2 font-semibold border rounded-lg border-primary text-primary'
            onClick={handleBack}
          >
            <RiContractLeftLine />
            Back
          </button>
          <button
            className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
            onClick={handleSubmit}
            disabled={loading}
          >
            Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySettings_Step;

import React, { useState } from 'react';
import Select from 'react-select';
import { RxPinRight } from "react-icons/rx";

interface AccessibilitySettings_StepProps {
  handleNext: () => void;
}

const Step2AccessibilitySettings: React.FC<AccessibilitySettings_StepProps> = ({ handleNext }) => {
  const [isFree, setIsFree] = useState(false);
  const [boughtFromAnotherTeacher, setBoughtFromAnotherTeacher] = useState(false);
  const [canAccessOtherCourse, setCanAccessOtherCourse] = useState(false);
  const [selectedStages, setSelectedStages] = useState<number[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const teacherOptions = [
    { value: 'teacher1', label: 'Teacher 1' },
    { value: 'teacher2', label: 'Teacher 2' },
    { value: 'teacher3', label: 'Teacher 3' },
    { value: 'teacher4', label: 'Teacher 4' },
    { value: 'teacher5', label: 'Teacher 5' },
  ];

  const handleCheckboxChange = () => setIsFree(prev => !prev);
  const handleBoughtFromAnotherTeacher = () => setBoughtFromAnotherTeacher(prev => !prev);
  const handleCanAccessOtherCourse = () => setCanAccessOtherCourse(prev => !prev);

  // Toggle stage selection
  const toggleStage = (stage: number) => {
    setSelectedStages(prevSelected =>
      prevSelected.includes(stage)
        ? prevSelected.filter(s => s !== stage)
        : [...prevSelected, stage]
    );
  };

  // Toggle type selection
  const toggleType = (type: string) => {
    setSelectedType(prevType => (prevType === type ? null : type));
  };

  return (
    <div className='mt-12'>
      <div className='max-w-4xl p-8 mx-auto space-y-3 shadow-2xl h-fit bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Accessibility Settings</h2>
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center gap-4'>
            <input className='w-3 h-3 text-primary' type="checkbox" checked={isFree} onChange={handleCheckboxChange} />
            <p className='text-[#555]'>Free</p>
          </div>

          {isFree && (
            <>
              <div className='flex items-center gap-10 lg:gap-36'>
                <h5 className='font-semibold'>Type</h5>
                <div className='flex items-center gap-2'>
                  <p
                    onClick={() => toggleType("Internal")}
                    className={`px-4 py-1 text-white rounded-full cursor-pointer ${
                      selectedType === "Internal" ? 'bg-primary' : 'bg-pTag'
                    }`}
                  >
                    Internal
                  </p>
                  <p
                    onClick={() => toggleType("External")}
                    className={`px-4 py-1 text-white rounded-full cursor-pointer ${
                      selectedType === "External" ? 'bg-primary' : 'bg-pTag'
                    }`}
                  >
                    External
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-10 lg:gap-16'>
                <h5 className='font-semibold'>Academic Stage</h5>
                <div className='flex flex-wrap items-center gap-1'>
                  {[1, 2, 3, 4].map(stage => (
                    <p
                      key={stage}
                      onClick={() => toggleStage(stage)}
                      className={`px-4 py-1 text-white rounded-full cursor-pointer ${
                        selectedStages.includes(stage) ? 'bg-primary' : 'bg-pTag'
                      }`}
                    >
                      Stage {stage}
                    </p>
                  ))}
                </div>
              </div>

              <div className='space-y-3'>
                <h5 className='font-semibold'>Buying Status</h5>
                <div className='flex items-center gap-4 px-5'>
                  <input className='w-3 h-3 text-primary' type="checkbox" checked={boughtFromAnotherTeacher} onChange={handleBoughtFromAnotherTeacher} />
                  <p className='text-[#555] text-sm'>Bought From Another Teacher</p>
                </div>

                {boughtFromAnotherTeacher && (
                  <div className='mt-2 w-[30%] rounded-lg'>
                    <Select
                      options={teacherOptions}
                      placeholder="Search teacher"
                      isClearable
                    />
                  </div>
                )}
                
                <div className='flex items-center gap-4 px-5'>
                  <input className='w-3 h-3 text-primary' type="checkbox" checked={canAccessOtherCourse} onChange={handleCanAccessOtherCourse} />
                  <p className='text-[#555] text-sm'>Bought other course from same teacher</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className='flex items-center gap-2 py-12 h-fit'>
          <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' onClick={handleNext}>
            Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2AccessibilitySettings;

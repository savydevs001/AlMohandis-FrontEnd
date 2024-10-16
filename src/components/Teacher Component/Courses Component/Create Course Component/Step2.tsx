import React, { useState } from 'react';
import { RiContractLeftLine } from "react-icons/ri";
import { RxPinRight } from "react-icons/rx";

interface Step2Props {
  formData: { accessibility: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const Step2: React.FC<Step2Props> = ({ handleNext, handleBack }) => {
  const [isFree, setIsFree] = useState(false);
  const [boughtFromAnotherTeacher, setBoughtFromAnotherTeacher] = useState(false);
  
  // State to track selected types
  const [selectedTypes, setSelectedTypes] = useState<{ [key: string]: boolean }>({
    institute: false,
    external: false,
  });

  // State to track selected academic stages
  const [selectedStages, setSelectedStages] = useState<{ [key: string]: boolean }>({
    all: false,
    stage1: false,
    stage2: false,
    stage3: false,
    stage4: false,
  });

  const handleCheckboxChange = () => {
    setIsFree((prev) => !prev);
  };

  const handleBoughtFromAnotherTeacherChange = () => {
    setBoughtFromAnotherTeacher((prev) => !prev);
  };

  // Function to handle type selection
  const handleTypeSelection = (type: 'institute' | 'external') => {
    setSelectedTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Function to handle stage selection
  const handleStageSelection = (stage: 'all' | 'stage1' | 'stage2' | 'stage3' | 'stage4') => {
    setSelectedStages((prev) => ({
      ...prev,
      [stage]: !prev[stage],
    }));
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
                    onClick={() => handleTypeSelection('institute')}
                    className={`px-4 py-1 text-sm text-white rounded-full ${selectedTypes.institute ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}
                  >
                    Institute
                  </p>
                  <p
                    onClick={() => handleTypeSelection('external')}
                    className={`px-4 py-1 text-sm text-white rounded-full ${selectedTypes.external ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}
                  >
                    External
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-10 lg:gap-16'>
                <h5 className='font-semibold'>Academic Stage</h5>
                <div className='flex flex-wrap items-center gap-1'>
                  {Object.keys(selectedStages).map((stage) => (
                    <p
                      key={stage}
                      onClick={() => handleStageSelection(stage as 'all' | 'stage1' | 'stage2' | 'stage3' | 'stage4')}
                      className={`px-4 py-1 text-sm text-white rounded-full ${selectedStages[stage] ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}
                    >
                      {stage === 'all' ? 'All' : `Stage ${stage.slice(-1)}`}
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
                  <select className='py-1 lg:mx-16 rounded-xl bg-cardBg lg:w-96 w-80'>
                    <option className='py-1 text-sm bg-cardBg' value="">Select Teacher</option>
                    <option className='py-1 text-sm bg-cardBg' value="">Teacher 1</option>
                    <option className='py-1 text-sm bg-cardBg' value="">Teacher 2</option>
                    <option className='py-1 text-sm bg-cardBg' value="">Teacher 3</option>
                  </select>
                )}
                <div className='flex items-center gap-4 px-5'>
                  <input className='w-3 h-3 text-primary' type="checkbox" />
                  <p className='text-[#555] text-sm'>Bought other course from same teachers</p>
                </div>
              </div>

              <div className='space-y-3'>
                <h5 className='font-semibold'>Groups</h5>
                <select className='py-2 rounded-md w-80 bg-cardBg'>
                  <option className='py-1 text-sm bg-cardBg' value="">All</option>
                  <option className='py-1 text-sm bg-cardBg' value="">Group 1</option>
                  <option className='py-1 text-sm bg-cardBg' value="">Group 2</option>
                  <option className='py-1 text-sm bg-cardBg' value="">Group 3</option>
                </select>
              </div>
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
            onClick={handleNext}
          >
            Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;

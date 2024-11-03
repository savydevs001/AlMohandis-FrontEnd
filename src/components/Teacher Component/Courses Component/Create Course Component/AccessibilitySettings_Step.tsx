import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { RxPinRight } from "react-icons/rx";
import Cookies from 'js-cookie';

interface AccessibilitySettings_StepProps {
  handleNext: () => void;
}

const AccessibilitySettings_Step: React.FC<AccessibilitySettings_StepProps> = ({ handleNext }) => {
  const [isFree, setIsFree] = useState(false);
  const [boughtFromAnotherTeacher, setBoughtFromAnotherTeacher] = useState(false);
  const [canAccessOtherCourse, setcanAccessOtherCourse] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<number[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(false);

  // Teacher options for the dropdown
  const teacherOptions = [
    { value: 'teacher1', label: 'Teacher 1' },
    { value: 'teacher2', label: 'Teacher 2' },
    { value: 'teacher3', label: 'Teacher 3' },
    { value: 'teacher4', label: 'Teacher 4' },
    { value: 'teacher5', label: 'Teacher 5' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      await fetchCourse();
    };
    fetchData();
  }, []);

  const fetchCourse = async () => {
    try {
      const courseId = localStorage.getItem("courseId") as string;
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}`, {
        headers: {
          Authorization:  `Bearer ${Cookies.get('token')}`,
        },
      });
      if (res.data) {
        console.log(res.data);
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error("Failed to fetch course");
    }
  };

  const handleCheckboxChange = () => setIsFree(prev => !prev);
  const handleBoughtFromAnotherTeacherChange = () => setBoughtFromAnotherTeacher(prev => !prev);
  const handlecanAccessOtherCourse = () => setcanAccessOtherCourse(prev => !prev);

  const handleTypeSelection = (type: 'internal' | 'external') => {
    setSelectedTypes(prev => prev.includes(type.toUpperCase()) ? prev.filter(prevType => prevType !== type.toUpperCase()) : [...prev, type.toUpperCase()]);
  };

  const handleStageSelection = (stage: number) => {
    setSelectedStages(prev => prev.includes(stage) ? prev.filter(prevStage => prevStage !== stage) : [...prev, stage]);
  };

  const handleSubmit = async () => {
    if (isFree) {
      setloading(true);
      try {
        const token = localStorage.getItem("token") as string;
        const courseId = localStorage.getItem("courseId") as string;

        const res = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/accessibility`, {
          isFree,
          studentAccessType: selectedTypes,
          academicStage: selectedStages,
          canAccessIfPurchased: canAccessOtherCourse,
          broughtFromTeacherId: "cm2zq23sf0000126nbara6yem",
        }, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        if (res.data.id) {
          handleNext();
        } else {
          console.error("Failed");
        }
      } catch (error) {
        console.error("Failed to create course");
      } finally {
        setloading(false);
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
            <input className='w-3 h-3 text-primary' type="checkbox" checked={isFree} onChange={handleCheckboxChange} />
            <p className='text-[#555]'>Free</p>
          </div>

          {isFree && (
            <>
              <div className='flex items-center gap-10 lg:gap-36'>
                <h5 className='font-semibold'>Type</h5>
                <div className='flex items-center gap-2'>
                  <p onClick={() => handleTypeSelection('internal')} className={`px-4 py-1 text-sm text-white rounded-full ${selectedTypes.includes('INTERNAL') ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}>Internal</p>
                  <p onClick={() => handleTypeSelection('external')} className={`px-4 py-1 text-sm text-white rounded-full ${selectedTypes.includes('EXTERNAL') ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}>External</p>
                </div>
              </div>

              <div className='flex items-center gap-10 lg:gap-16'>
                <h5 className='font-semibold'>Academic Stage</h5>
                <div className='flex flex-wrap items-center gap-1'>
                  {[1, 2, 3, 4].map(stage => (
                    <p key={stage} onClick={() => handleStageSelection(stage)} className={`px-4 py-1 text-sm text-white rounded-full ${selectedStages.includes(stage) ? 'bg-primary' : 'bg-[#999] cursor-pointer'}`}>Stage {stage}</p>
                  ))}
                </div>
              </div>

              <div className='space-y-3'>
                <h5 className='font-semibold'>Buying Status</h5>
                <div className='flex items-center gap-4 px-5'>
                  <input className='w-3 h-3 text-primary' type="checkbox" checked={boughtFromAnotherTeacher} onChange={handleBoughtFromAnotherTeacherChange} />
                  <p className='text-[#555] text-sm'>Bought From Another Teacher</p>
                </div>

                {boughtFromAnotherTeacher && (
                  <div className='mt-2 w-[30%] rounded-lg'>
                    <Select
                    
                      options={teacherOptions}
                      onChange={option => setSelectedTeacher(option?.value || null)}
                      placeholder="Search teacher"
                      isClearable
                    />
                  </div>
                )}
                
                <div className='flex items-center gap-4 px-5'>
                  <input className='w-3 h-3 text-primary' type="checkbox" checked={canAccessOtherCourse} onChange={handlecanAccessOtherCourse} />
                  <p className='text-[#555] text-sm'>Bought other course from same teacher</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className='flex items-center gap-2 py-12 h-fit'>
          <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' onClick={handleSubmit} disabled={loading}>
            Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySettings_Step;

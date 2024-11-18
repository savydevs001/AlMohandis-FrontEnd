import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { RxPinRight } from "react-icons/rx";
import axios from 'axios';

interface AccessibilitySettings_StepProps {
  handleNext: () => void;
}

const Step2AccessibilitySettings: React.FC<AccessibilitySettings_StepProps> = ({ handleNext }) => {
  const [isFree, setIsFree] = useState(false);
  const [boughtFromAnotherTeacher, setBoughtFromAnotherTeacher] = useState(false);
  const [canAccessOtherCourse, setCanAccessOtherCourse] = useState(false);
  const [selectedStages, setSelectedStages] = useState<number[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]); // Changed to array for multiple selection
  const [teachers, setTeachers] = useState<any[]>([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string | null>(null); // Changed to store teacher ID

  useEffect(() => {
    // Fetch teachers list on component mount
    axios.get('http://localhost:5000/api/open/teachers')
      .then(response => {
        if (response.data.success) {
          setTeachers(response.data.data);
        }
      })
      .catch(error => {
        console.error("Error fetching teachers:", error);
      });
  }, []);

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
    setSelectedType(prevTypes => 
      prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type]
    );
  };

  // Handle Next button click, making the API request
  const handleNextWithApi = () => {
    const courseId = localStorage.getItem('courseId'); // Retrieve the courseId from localStorage

    if (courseId) {
      const accessibilitySettings = {
        studentAccessType: selectedType, // Multiple selection for types
        academicStage: selectedStages,  // Multiple stages
        canAccessIfPurchased: canAccessOtherCourse,
        isFree,
        broughtFromTeacherId: selectedTeacherId, // Teacher ID
      };

      // Update accessibility settings via API
      axios.patch(`http://localhost:5000/api/courses/${courseId}/accessibility`, accessibilitySettings)
        .then(response => {
          if (response.status === 200) {
            console.log("Accessibility settings updated successfully.");
            handleNext();
          } else {
            console.error("Failed to update accessibility settings.");
          }
        })
        .catch(error => {
          console.error("Error updating accessibility settings:", error);
        });
    } else {
      console.error("No courseId found in localStorage.");
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
                  <p
                    onClick={() => toggleType("INTERNAL")}
                    className={`px-4 py-1 text-white rounded-full cursor-pointer ${
                      selectedType.includes("INTERNAL") ? 'bg-primary' : 'bg-pTag'
                    }`}
                  >
                    Internal
                  </p>
                  <p
                    onClick={() => toggleType("EXTERNAL")}
                    className={`px-4 py-1 text-white rounded-full cursor-pointer ${
                      selectedType.includes("EXTERNAL") ? 'bg-primary' : 'bg-pTag'
                    }`}
                  >
                    External
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-10 lg:gap-16'>
                <h5 className='font-semibold'>Academic Stage</h5>
                <div className='flex flex-wrap items-center gap-1'>
                  {[1, 2, 3].map(stage => (
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
                      options={teachers.map(teacher => ({ value: teacher.id, label: teacher.fullName }))}
                      placeholder="Search teacher"
                      isClearable
                      onChange={(option) => setSelectedTeacherId(option ? option.value : null)}
                    />
                  </div>
                )}
                
                <div className='flex items-center gap-4 px-5'>
                  <input className='w-3 h-3 text-primary' type="checkbox" checked={canAccessOtherCourse} onChange={handleCanAccessOtherCourse} />
                  <p className='text-[#555] text-sm'>Can Access Other Courses if Purchased</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className='flex items-center gap-2 py-12 h-fit'>
          <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' onClick={handleNextWithApi}>
            Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2AccessibilitySettings;

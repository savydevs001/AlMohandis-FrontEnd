import { RxPinRight } from "react-icons/rx";
interface ObjectivesGoals_StepProps {
  handleNext: () => void; // Add handleNext prop
}

const Step3ObjecjectivesGoals
: React.FC<ObjectivesGoals_StepProps> = ({ handleNext }) => {

  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl p-8 mx-auto space-y-6 shadow-2xl h-fit bg-cardBg'>
        <h2 className='text-2xl font-semibold'>Objectives and Goals</h2>
        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="courseObjectives">Course Objectives</label>
          <textarea
            id="courseObjectives"
            name="description" // Make sure to differentiate if needed
            cols={400}
            rows={5}
            className='rounded-md bg-cardBg border-[#6666]'
            placeholder="Write a short Description"// Ensure change handler is set
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-medium rounded-md' htmlFor="studentLearning">What will Student learn?</label>
          <textarea
            id="studentLearning"
            name="additionalField1" // Update to match your data structure
            cols={400}
            rows={5}
            className='rounded-md bg-cardBg border-[#6666]'
            placeholder="Write a short Description"
          />
        </div>
        <div className='flex items-center gap-2'>
          <button className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary' onClick={handleNext}>Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3ObjecjectivesGoals
;



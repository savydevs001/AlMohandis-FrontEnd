import React from "react";
// import { RxPinRight } from "react-icons/rx";
import Step6LeftSide from "./Step6LeftSide";
import RightVideoModule from "./RightVideoModule/RightVideoModule";

interface Part_StepProps {
  handleNext: () => void;
}

const Step6CreatePart: React.FC<Part_StepProps> = ({ handleNext }) => {
  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl mx-auto space-y-6 shadow-2xl h-fit bg-cardBg'>
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          <div className="lg:w-[30%] w-full border-2">
            <Step6LeftSide />
          </div>
          <div className="lg:w-[70%] w-full border-2">
            {/* <RightAudioMudule title="Description" handleNext={handleNext} /> */}
            <RightVideoModule title="Description" handleNext={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6CreatePart;

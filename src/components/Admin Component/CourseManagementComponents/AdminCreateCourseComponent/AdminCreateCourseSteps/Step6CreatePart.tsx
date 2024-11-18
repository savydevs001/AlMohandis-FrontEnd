import React, { useEffect, useState } from "react";
import Step6LeftSide from "./Step6LeftSide";
import RightVideoModule from "./RightVideoModule/RightVideoModule";

interface Part_StepProps {
  handleNext: () => void;
}

const Step6CreatePart: React.FC<Part_StepProps> = ({ handleNext }) => {
  const [parts, setParts] = useState<any[]>([]); // State to hold parts

  useEffect(() => {
    // Retrieve parts from local storage
    const storedParts = localStorage.getItem("partContainer");
    if (storedParts) {
      setParts(JSON.parse(storedParts)); // Parse and set parts
    }
  }, []);

  const handleDeletePart = (partName: string) => {
    // Update the parts state and local storage when a part is deleted
    const updatedParts = parts.filter(part => part.name !== partName);
    setParts(updatedParts);
    localStorage.setItem("parts", JSON.stringify(updatedParts)); // Update local storage
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='max-w-4xl mx-auto space-y-6 shadow-2xl h-fit bg-cardBg'>
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          <div className="lg:w-[30%] w-full border-2">
            <Step6LeftSide parts={parts} onDeletePart={handleDeletePart} />
          </div>
          <div className="lg:w-[70%] w-full border-2">
            <RightVideoModule title="Description" handleNext={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6CreatePart;
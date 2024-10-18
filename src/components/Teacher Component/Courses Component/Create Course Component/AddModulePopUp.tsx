import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Modules } from './CreateCourse';

interface AddModulePopupProps {
  onClose: () => void;
  partContainer: { name: string; value: string; modules: Modules[] }[];
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: Modules[] }[]>>;
}

const AddModulePopup: React.FC<AddModulePopupProps> = ({ onClose, partContainer, setPartContainer }) => {
  const [selectedModule, setSelectedModule] = useState('Chapter');
  const [selectedSeason, setSelectedSeason] = useState(partContainer.length > 0 ? partContainer[0].name : '');
  console.log(selectedSeason);
  
  useEffect(() => {
    if (partContainer.length > 0 && !selectedSeason) {
      setSelectedSeason(partContainer[0].name);
    }
  }, [partContainer]);

  const handleModuleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModule(event.target.value);
    console.log(event.target.value);
    console.log(selectedModule);
    
  };

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(event.target.value);
    console.log(selectedSeason);
    
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Find the selected part
    const updatedPartContainer = partContainer.map(part => {
      if (part.name === selectedSeason) {
        // Calculate the next number for the module type
        const moduleCount = part.modules.filter(module => module.name === selectedModule).length;
        const newModuleNumber = moduleCount + 1;
        console.log("Part found");
        return {
          ...part,
          modules: [...part.modules, { name: selectedModule, number: newModuleNumber}] // Add the new module
        };
      }
      console.log("Part not found");
      return part;
    });

    // Update the partContainer state
    setPartContainer(updatedPartContainer);
    onClose();
  };

  const moduleOptions = ["Chapter", "Exam", "Assignment", "Attachment"];

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="w-1/3 p-5 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-end mb-4">
          <AiOutlineCloseCircle className="text-2xl text-red-600 cursor-pointer" onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-md" htmlFor="moduleTitle">Select type of Module</label>
            <select className='w-full rounded-md outline-none' value={selectedModule} onChange={handleModuleChange} name="" id="">
              {moduleOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-md" htmlFor="moduleDescription">Part</label>
            <select className='w-full rounded-md outline-none' value={selectedSeason} onChange={handleSeasonChange} name="" id="">
              {
                partContainer.length > 0 && partContainer.map((part, index) => (
                  <option key={index} >{part.name}</option>
                ))
              }
            </select>
          </div>
          <div className='flex gap-4'>
            <button className="px-4 py-2 text-white rounded-lg bg-primary" type="submit">Add</button>
            <button onClick={onClose} className="px-4 py-2 text-white rounded-lg bg-primary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModulePopup;

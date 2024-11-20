import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface AddModulePopupProps {
  onClose: () => void;
  partContainer: { name: string; value: string; modules: any[] }[];
  setPartContainer: React.Dispatch<React.SetStateAction<{ name: string; value: string; modules: any[] }[]>>;
}

const AddModulePopup: React.FC<AddModulePopupProps> = ({ onClose, partContainer, setPartContainer }) => {
  const [selectedModule, setSelectedModule] = useState('Chapter');
  const [selectedSeason, setSelectedSeason] = useState(partContainer.length > 0 ? partContainer[0].name : '');

  useEffect(() => {
    if (partContainer.length > 0 && !selectedSeason) {
      setSelectedSeason(partContainer[0].name);
    }
  }, [partContainer]);

  const handleModuleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModule(event.target.value);
  };

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const updatedPartContainer = partContainer.map(part => {
      if (part.name === selectedSeason) {
        const modules = part.modules || [];
        const moduleCount = modules.filter(module => module.name === selectedModule).length;
        const newModuleNumber = moduleCount + 1;

        return {
          ...part,
          modules: [
            ...modules,
            { name: selectedModule, number: newModuleNumber, lessons: [] },
          ],
        };
      }
      return part;
    });

    setPartContainer(updatedPartContainer);
    onClose();
  };

  const moduleOptions = ['Chapter', 'Exam', 'Assignment'];

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="w-[90%] p-5 bg-white rounded-lg shadow-lg lg:w-1/3">
        <div className="flex items-center justify ```tsx
        end mb-4">
          <AiOutlineCloseCircle className="text-2xl text-red-600 cursor-pointer" onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-md" htmlFor="moduleTitle">
              Select type of Module
            </label>
            <select
              className="w-full rounded-md outline-none"
              value={selectedModule}
              onChange={handleModuleChange}
              id="moduleTitle"
            >
              {moduleOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-md" htmlFor="moduleDescription">
              Part
            </label>
            <select
              className="w-full rounded-md outline-none"
              value={selectedSeason}
              onChange={handleSeasonChange}
              id="moduleDescription"
            >
              {partContainer.length > 0 &&
                partContainer.map((part, index) => (
                  <option key={index} value={part.name}>
                    {part.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-white rounded-lg bg-primary" type="submit">
              Add
            </button>
            <button onClick={handleCancel} className="px-4 py-2 text-white rounded-lg bg-primary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModulePopup;
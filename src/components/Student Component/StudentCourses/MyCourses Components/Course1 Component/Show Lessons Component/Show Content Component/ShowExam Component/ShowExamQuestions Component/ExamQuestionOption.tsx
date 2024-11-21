import React from 'react';

interface Props {
  optionText: string;
  onSelect: () => void;
  isSelected: boolean; // Add this prop
}

const ExamQuestionOption: React.FC<Props> = ({ optionText, onSelect, isSelected }) => {
  return (
    <div className="">
      <div className="flex items-center gap-4 p-4 bg-white border lg:px-10 rounded-xl border-pTag" onClick={onSelect}>
        <input 
          type="radio" 
          className="text-pTag" 
          checked={isSelected} // Set checked state
          readOnly // Prevent user from directly interacting with the radio button
        />
        <h1 className="text-xl">{optionText}</h1>
      </div>
    </div>
  );
}

export default ExamQuestionOption;
// AddModuleButtons.js
import React from 'react';

interface AddModuleButtonsProps {
  onAddAnother: () => void; // Prop to handle adding another module
  onNextModule: () => void; // Prop to handle next module
}

const AddModuleButtons: React.FC<AddModuleButtonsProps> = ({ onAddAnother, onNextModule }) => {
  return (
    <div>
      <div className='space-x-4'>
        <button 
          className='px-4 py-2 text-white rounded-md bg-primary' 
          onClick={onAddAnother} // Call the function passed from parent
        >
          Add Another <span>+</span>
        </button>
        <button 
          className='px-4 py-2 text-white rounded-md bg-primary' 
          onClick={onNextModule} // Call next module function
        >
          Next Module
        </button>
      </div>
    </div>
  );
};

export default AddModuleButtons;

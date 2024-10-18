import React from 'react';
import { IoQrCodeOutline } from "react-icons/io5";


interface SplitControlProps {
  rangeValues: [number, number];
  setRangeValues: (values: [number, number]) => void;
  duration: number;
  handleSplit: () => void;
}

const SplitControl: React.FC<SplitControlProps> = ({
  rangeValues,
  setRangeValues,
  duration,
  handleSplit,
}) => {
  // Handle range slider changes (Start and End times)
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseFloat(event.target.value);
    const updatedRange = [...rangeValues] as [number, number];
    updatedRange[index] = value;
    setRangeValues(updatedRange);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>Start: {rangeValues[0]} sec</label>
      <input
        type="range"
        min="0"
        max={duration || 100}
        value={rangeValues[0]}
        step="0.1"
        onChange={(e) => handleRangeChange(e, 0)}
        style={{
          width: '100%',
          height: '40px', // Increase height
          marginBottom: '10px',
          appearance: 'none', // Remove default browser styling
          background: '#666', // Background color of the slider track
          borderRadius: '10px', // Make track rounded
          outline: 'none', // Remove focus outline
        }}
      />
      <label>End: {rangeValues[1]} sec</label>
      <input
        type="range"
        min="0"
        max={duration || 100}
        value={rangeValues[1]}
        step="0.1"
        onChange={(e) => handleRangeChange(e, 1)}
        style={{
          width: '100%',
          height: '40px', // Increase height
          marginBottom: '10px',
          appearance: 'none', // Remove default browser styling
          background: '#666', // Background color of the slider track
          borderRadius: '10px', // Make track rounded
          outline: 'none', // Remove focus outline
        }}
      />
      <button className='px-4 py-1 font-semibold border rounded-lg border-primary text-primary' onClick={handleSplit}>
        Split
      </button>
      <div className='flex flex-col items-start gap-2 mt-6 lg:mt-0 lg:items-center lg:flex-row'>
            <div className='flex flex-col space-y-1'>
                  <label className='text-sm font-semibold' htmlFor="">Clip 1 Title</label>
                  <input className='rounded-md w-36 bg-cardBg' type="text" placeholder='Title of Clip' />
            </div>
            <div className='space-y-1'>
                  <label className='px-8 text-sm font-semibold text-center' htmlFor="">Time Stamp</label>
                  <div className='space-x-3'>
                        <input className='w-20 rounded-md bg-cardBg' type="number" placeholder='00:00' />
                        <input className='w-20 rounded-md bg-cardBg' type="number" placeholder='11:08' />
                  </div>
            </div>
            <div className='flex items-center justify-end gap-2 mt-12 border-b border-b-primary '>
            <IoQrCodeOutline className='text-sm text-primary' />
<a href="" className='text-sm text-primary'>Export</a>
            </div>
      </div>
    </div>
  );
};

export default SplitControl;

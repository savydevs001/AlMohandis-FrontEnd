import React, { useState } from 'react';
import { IoQrCodeOutline } from 'react-icons/io5';
import QRCodePopup from './QRCodePopup';

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseFloat(event.target.value);
    const updatedRange = [...rangeValues] as [number, number];

    // Ensure the range values do not overlap
    if (index === 0 && value < updatedRange[1]) {
      updatedRange[index] = value;
    } else if (index === 1 && value > updatedRange[0]) {
      updatedRange[index] = value;
    }

    setRangeValues(updatedRange);
  };

  const handleExportClick = () => {
    console.log('Export button clicked');
    setIsPopupOpen(true);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>Start: {rangeValues[0]} sec</label>
      <input
        type="range"
        min="0"
        max={duration > 0 ? duration : 100} // Prevent potential issues with 0 duration
        value={rangeValues[0]}
        step="0.1"
        onChange={(e) => handleRangeChange(e, 0)}
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '10px',
          appearance: 'none',
          background: '#666',
          borderRadius: '10px',
          outline: 'none',
        }}
      />
      <label>End: {rangeValues[1]} sec</label>
      <input
        type="range"
        min="0"
        max={duration > 0 ? duration : 100} // Prevent potential issues with 0 duration
        value={rangeValues[1]}
        step="0.1"
        onChange={(e) => handleRangeChange(e, 1)}
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '10px',
          appearance: 'none',
          background: '#666',
          borderRadius: '10px',
          outline: 'none',
        }}
      />
      <button
        className="px-4 py-1 font-semibold border rounded-lg border-primary text-primary"
        onClick={handleSplit}
      >
        Split
      </button>
      <div className="flex flex-col items-start gap-2 mt-6 lg:mt-0 lg:items-center lg:flex-row">
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-semibold">Clip 1 Title</label>
          <input
            className="rounded-md w-36 bg-cardBg"
            type="text"
            placeholder="Title of Clip"
          />
        </div>
        <div className="space-y-1">
          <label className="px-8 text-sm font-semibold text-center">Time Stamp</label>
          <div className="space-x-3">
            <input className="w-20 rounded-md bg-cardBg" type="text" placeholder="00:00" />
            <input className="w-20 rounded-md bg-cardBg" type="text" placeholder="11:08" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-12 border-b border-b-primary">
          <IoQrCodeOutline className="text-sm text-primary" />
          <span
            className="text-sm cursor-pointer text-primary"
            onClick={handleExportClick}
          >
            Export
          </span>
        </div>
      </div>

      {/* Show QR code popup */}
      {isPopupOpen && <QRCodePopup closePopup={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default SplitControl;

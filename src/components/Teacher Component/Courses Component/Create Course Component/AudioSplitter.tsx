import React from 'react';
import { IoClose, IoQrCodeOutline } from "react-icons/io5";


interface AudioSplitterProps {
  rangeValues: [number, number];
  setRangeValues: (values: [number, number]) => void;
  duration: number;
  handleSplit: () => void;
  splitClips: { start: number; end: number; name: string }[];
  setSplitClips: React.Dispatch<React.SetStateAction<{
    start: number;
    end: number;
    name: string;
  }[]>>,
  removeClip: (index: number) => void;
  mediaFile: File | null | undefined;
}

const AudioSplitter: React.FC<AudioSplitterProps> = ({
  rangeValues,
  setRangeValues,
  duration,
  handleSplit,
  splitClips,
  setSplitClips,
  removeClip,
  mediaFile
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
      <button className='px-4 py-1 font-semibold border rounded-lg border-primary text-primary' disabled={!mediaFile} // Disable button if no media file
        style={{
          cursor: !mediaFile ? 'not-allowed' : 'pointer',
          opacity: !mediaFile ? 0.5 : 1,
        }} onClick={handleSplit}>
        Split
      </button>
      {
        splitClips.length > 0 && (
          <div>
            {
              splitClips.map((clip, index) => (
                <div className='flex items-center gap-2'>
                  <div className='flex flex-col space-y-1'>
                    <label className='text-sm font-semibold' htmlFor="">Clip {index + 1} Title</label>
                    <input className='rounded-md w-36 bg-cardBg' type="text" placeholder='Title of Clip'
                      value={clip.name}
                      onChange={(e) => {
                        const updatedClips = [...splitClips];
                        updatedClips[index].name = e.target.value;
                        setSplitClips(updatedClips);
                      }} />
                  </div>
                  <div className='space-y-1'>
                    <label className='px-8 text-sm font-semibold text-center' htmlFor="">Time Stamp</label>
                    <div className='space-x-3 flex'>
                      <p className='w-20 rounded-md bg-cardBg'>{clip.start.toFixed(2)}</p>
                      <p className='w-20 rounded-md bg-cardBg'>{clip.end.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-end gap-2 mt-12 border-b border-b-primary '>
                    <IoQrCodeOutline className='text-sm text-primary' />
                    <a href="" className='text-sm text-primary'>Export</a>
                  </div>
                  <IoClose className='text-sm text-primary cursor-pointer' onClick={() => removeClip(index)} /> {/* Cross icon */}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default AudioSplitter;

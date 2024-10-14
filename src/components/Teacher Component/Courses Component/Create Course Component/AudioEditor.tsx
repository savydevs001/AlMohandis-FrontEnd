import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import audio from '../../../../assets/Romeo.mp3'

const AudioEditor: React.FC = () => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [clipTitle, setClipTitle] = useState<string>('Title of clip');
  const [startTime, setStartTime] = useState<string>('00:00');
  const [endTime, setEndTime] = useState<string>('03:00');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (waveformRef.current && !waveSurfer) {
      // Initialize WaveSurfer
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#ccc',
        progressColor: '#000',
        height: 80,
      //   responsive: true,
      });

      setWaveSurfer(ws);

      // Load the audio file (replace with your actual audio file URL)
      const audioUrl = 'Romeo.mp3'; // Example: '/path/to/audio.mp3'
      ws.load(audioUrl);

      return () => {
        ws.destroy(); // Clean up WaveSurfer on unmount
      };
    }
  }, [waveSurfer]);

  // Handle play/pause toggle
  const handlePlayPause = () => {
    if (waveSurfer) {
      if (isPlaying) {
        waveSurfer.pause(); // Pause the audio
      } else {
        waveSurfer.play(); // Play the audio
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  const handleSplit = () => {
    console.log(`Splitting clip from ${startTime} to ${endTime}`);
  };

  const handleExport = () => {
    console.log('Exporting clip');
  };

  return (
    <div className="max-w-lg p-6 mx-auto">
      {/* Waveform Display */}
      <div ref={waveformRef} className="w-full h-24 mb-4 bg-gray-100 border rounded"></div>

      {/* Play/Pause Button */}
      <div className="flex justify-center mb-4">
            
        <button
          onClick={handlePlayPause}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Clip Details and Time Stamps */}
      <div className="flex flex-col items-center justify-between mb-4 space-y-2 sm:flex-row sm:space-y-0">
        <input
          type="text"
          value={clipTitle}
          onChange={(e) => setClipTitle(e.target.value)}
          className="flex-grow w-full px-4 py-2 border rounded sm:w-auto"
          placeholder="Title of clip"
        />
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-20 px-2 py-1 text-center border rounded"
            placeholder="Start Time"
          />
          <span>to</span>
          <input
            type="text"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-20 px-2 py-1 text-center border rounded"
            placeholder="End Time"
          />
        </div>
      </div>

      {/* Buttons for Splitting and Exporting */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleSplit}
          className="px-4 py-2 text-white bg-gray-700 rounded"
        >
          Split
        </button>
        <button
          onClick={handleExport}
          className="px-4 py-2 text-white bg-green-500 rounded"
        >
          Export
        </button>
        <audio className='w-[40%]' src={audio}></audio>
      </div>
    </div>
  );
};

export default AudioEditor;

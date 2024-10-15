import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioEditor: React.FC = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const waveSurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current) {
      waveSurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#ccc',
        progressColor: '#000',
        height: 50,
      });

      // Set up event listeners
      waveSurfer.current.on('ready', () => {
        const totalDuration = waveSurfer.current?.getDuration();
        if (totalDuration) {
          setDuration(formatTime(totalDuration));
        }
      });

      waveSurfer.current.on('audioprocess', () => {
        const current = waveSurfer.current?.getCurrentTime();
        if (current) {
          setCurrentTime(formatTime(current));
        }
      });
    }

    return () => {
      waveSurfer.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (audioFile && waveSurfer.current) {
      const objectUrl = URL.createObjectURL(audioFile);
      waveSurfer.current.load(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [audioFile]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file);
    } else {
      console.error('Invalid file type. Please drop an audio file.');
    }
  };

  const handlePlayPause = () => {
    if (waveSurfer.current) {
      if (isPlaying) {
        waveSurfer.current.pause();
      } else {
        waveSurfer.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className='flex items-center gap-2 mt-4' style={{ padding: '10px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Waveform Display */}

      <div className='flex flex-col gap-1'>
       <button
          onClick={handlePlayPause}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '15px',
            // position: 'absolute',
            // left: '-30px',
            // top: '14px',
            zIndex: 1, // Ensure the button is on top of other elements
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div style={{ fontFamily: 'monospace', marginTop: '10px', marginBottom: '0px' ,fontSize: '7px'}}>
        <span>{currentTime} / {duration}</span>
      </div>
       </div>
      
      <div
        ref={waveformRef}
        style={{
          width: '80%',
          height: '50px',
          background: '#f3f3f3',
          // border: '1px dashed #4a90e2',
          borderRadius: '5px',
          position: 'relative',
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
         </div>
        {/* Play/Pause Icon */}
    
    
    </div>
  );
};

export default AudioEditor;

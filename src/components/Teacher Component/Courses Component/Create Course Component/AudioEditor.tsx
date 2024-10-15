// AudioEditor.tsx
import { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause } from "react-icons/fa6";
import SplitControl from './AudioSplitter'; 
import FileUpload from './FileUpload'; 

const AudioEditor = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const waveSurfer = useRef<WaveSurfer | null>(null);
  const [rangeValues, setRangeValues] = useState<[number, number]>([0, 5]); // [start, end]
  const [splitClips, setSplitClips] = useState<{ start: number; end: number; name: string }[]>([]);
  const [isPlaying, setIsPlaying] = useState(false); 
  const [currentTime, setCurrentTime] = useState(0); 
  const [duration, setDuration] = useState(0); 

  useEffect(() => {
    if (waveformRef.current) {
      waveSurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#ccc',
        progressColor: '#000',
        height: 40,
      });

      waveSurfer.current.on('audioprocess', () => {
        setCurrentTime(waveSurfer.current?.getCurrentTime() || 0);
      });

      waveSurfer.current.on('ready', () => {
        setDuration(waveSurfer.current?.getDuration() || 0);
      });

      return () => {
        waveSurfer.current?.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (audioFile && waveSurfer.current) {
      const objectUrl = URL.createObjectURL(audioFile);
      waveSurfer.current.load(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [audioFile]);

  const handleAudioUpload = (file: File | null) => {
    setAudioFile(file);
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

  const handleSplit = () => {
    const [start, end] = rangeValues;
    if (start < end) {
      const newClip = { start, end, name: `Clip ${splitClips.length + 1}` };
      setSplitClips([...splitClips, newClip]);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={{ padding: '10px', maxWidth: '800px', margin: '0 auto' }}>
      <FileUpload onFileSelect={handleAudioUpload} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <div className='flex flex-col'>
          <button
            onClick={handlePlayPause}
            style={{
              padding: '10px',
              color: '#000',
              borderRadius: '50%',
              border: 'none',
              marginRight: '10px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p className='text-[.9vw]'>
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          </div>
        </div>

        <div ref={waveformRef} style={{ width: '100%', height: '70px', background: '#f3f3f3' }}></div>
      </div>

      {/* <p style={{ textAlign: 'center' }}>{formatTime(currentTime)} / {formatTime(duration)}</p> */}

      <SplitControl
        rangeValues={rangeValues}
        setRangeValues={setRangeValues}
        duration={duration}
        handleSplit={handleSplit}
      />

      {splitClips.length > 0 && (
        <div>
          <h3>Split Clips</h3>
          {splitClips.map((clip, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label>Clip Name:</label>
              <input
                type="text"
                value={clip.name}
                onChange={(e) => {
                  const updatedClips = [...splitClips];
                  updatedClips[index].name = e.target.value;
                  setSplitClips(updatedClips);
                }}
                style={{ padding: '10px', width: '200px', marginRight: '10px' }}
              />
              <p>
                Start: {clip.start.toFixed(2)} sec | End: {clip.end.toFixed(2)} sec
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AudioEditor;

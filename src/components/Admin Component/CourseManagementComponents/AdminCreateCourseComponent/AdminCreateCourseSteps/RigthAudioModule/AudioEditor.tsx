import { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause } from "react-icons/fa6";

interface AudioEditorProps {
  mediaFile?: File | null;
}

const AudioEditor: React.FC<AudioEditorProps> = ({ mediaFile }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const waveSurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (waveformRef.current && mediaFile) {
      waveSurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#ccc',
        progressColor: '#000',
        height: 40,
        barGap: 2,
      });

      waveSurfer.current.on('audioprocess', () => {
        setCurrentTime(waveSurfer.current?.getCurrentTime() || 0);
      });

      waveSurfer.current.on('ready', () => {
        setDuration(waveSurfer.current?.getDuration() || 0);
      });

      waveSurfer.current.on('finish', () => {
        setIsPlaying(false);
      });

      return () => {
        waveSurfer.current?.destroy();
      };
    }
  }, [mediaFile]);

  useEffect(() => {
    if (mediaFile && waveSurfer.current) {
      const objectUrl = URL.createObjectURL(mediaFile);
      waveSurfer.current.load(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [mediaFile]);

  const handlePlayPause = () => {
    if (isPlaying) {
      waveSurfer.current?.pause();
    } else {
      waveSurfer.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex flex-col" style={{ padding: '10px', maxWidth: '800px', margin: '0 auto' }}>
      {mediaFile ? (
        <div className="flex flex-col gap-2">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
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
            <div ref={waveformRef} style={{ width: '100%', height: '70px', background: '#f3f3f3' }}></div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#555' }}>Please select an audio or video file to begin editing.</p>
      )}
    </div>
  );
};

export default AudioEditor;

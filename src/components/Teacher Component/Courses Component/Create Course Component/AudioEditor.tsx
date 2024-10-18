import { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause } from "react-icons/fa6";
import AudioSplitter from './AudioSplitter';

interface AudioEditorProps {
  mediaFile?: File | null; // Make it optional
}

const AudioEditor: React.FC<AudioEditorProps> = ({ mediaFile }) => {
  const [isVideo, setIsVideo] = useState(false); // Track if the file is a video
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const waveSurfer = useRef<WaveSurfer | null>(null);
  const [rangeValues, setRangeValues] = useState<[number, number]>([0, 5]);
  const [splitClips, setSplitClips] = useState<{ start: number; end: number; name: string }[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (waveformRef.current && !isVideo) {
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
        if (waveSurfer.current) {
          waveSurfer.current.destroy();
          waveSurfer.current = null;
        }
      };
    }
  }, [isVideo, mediaFile]);

  useEffect(() => {
    if (mediaFile) {
      const fileType = mediaFile.type.split('/')[0]; // Check if the file is audio or video
      setIsVideo(fileType === 'video');

      const objectUrl = URL.createObjectURL(mediaFile);

      if (!isVideo && waveSurfer.current) {
        waveSurfer.current.load(objectUrl);
      }

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [mediaFile]);

  // const handlePlayPause = () => {
  //   if (isVideo && videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //   } else if (waveSurfer.current) {
  //     if (isPlaying) {
  //       waveSurfer.current.pause();
  //     } else {
  //       waveSurfer.current.play();
  //     }
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  const handlePlayPause = () => {
    if (isPlaying) {
      if (waveSurfer.current) {
        waveSurfer.current.pause();
      }
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      if (waveSurfer.current) {
        waveSurfer.current.play();
      }
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleSplit = () => {
    const [start, end] = rangeValues;
    if (start < end) {
      const newClip = { start, end, name: `Clip ${splitClips.length + 1}` };
      setSplitClips([...splitClips, newClip]);
    }
  };

  const removeClip = (index: number) => {
    setSplitClips((prevClips) => prevClips.filter((_, i) => i !== index));
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className='flex flex-col' style={{ padding: '10px', maxWidth: '800px', margin: '0 auto' }}>
      <div className='flex flex-col gap-2'>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          {/* Conditionally render the play/pause button and time display for audio only */}
          {!isVideo && mediaFile && (
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
          )}

          {/* Render audio waveform if not a video, else render video player */}
          {!isVideo ? (
            <div ref={waveformRef} style={{ width: '100%', height: '70px', background: '#f3f3f3' }}></div>
          ) : (
            <div className='video-container w-[70%] h-[10%] rounded-lg'>
              <video
                ref={videoRef}
                controls={false}
                onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
                onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                src={mediaFile ? URL.createObjectURL(mediaFile) : ''}
              />
            </div>
          )}
        </div>
      </div>

      <AudioSplitter
        rangeValues={rangeValues}
        setRangeValues={setRangeValues}
        duration={duration}
        handleSplit={handleSplit}
        splitClips={splitClips}
        setSplitClips={setSplitClips}
        removeClip={removeClip}
        mediaFile={mediaFile}
      />
    </div>
  );
};

export default AudioEditor;

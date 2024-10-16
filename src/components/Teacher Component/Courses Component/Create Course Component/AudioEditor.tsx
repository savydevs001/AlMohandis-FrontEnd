// AudioEditor.tsx
import { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause } from "react-icons/fa6";
import SplitControl from './AudioSplitter'; 
// import FileUpload from './FileUpload'; 

interface AudioEditorProps {
  mediaFile: File | null;
}

const AudioEditor: React.FC<AudioEditorProps> = ({mediaFile}) => {
  // const [mediaFile, setMediaFile] = useState<File | null>(null);
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

      return () => {
        waveSurfer.current?.destroy();
      };
    }
  }, [isVideo]);

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

  // const handleMediaUpload = (file: File | null) => {
  //   setMediaFile(file);
  // };

  const handlePlayPause = () => {
    if (isVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    } else if (waveSurfer.current) {
      if (isPlaying) {
        waveSurfer.current.pause();
      } else {
        waveSurfer.current.play();
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
        {!isVideo && (
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

import { FaPlus } from "react-icons/fa6";
// import FileUpload from "./FileUpload";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Clip } from "./MainModules_Step";
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause } from "react-icons/fa6";
import AudioSplitter from './AudioSplitter';
import axios from "axios";
import { getFileFromIndexedDB, saveFileToIndexedDB } from "./FileSave";

interface MainModules_Step_RigthModuleProps {
  handleLessonChange: (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  lesson: { title: string; description: string; link: File | null | string; isPromotional: boolean; isFree: boolean, channel: string, clips: Clip[] };
  index: number;
  setLessons: React.Dispatch<React.SetStateAction<{ title: string; description: string; link: File | null | string; isPromotional: boolean; isFree: boolean, channel: string, clips: Clip[] }[]>>;
  activeModule: { partIndex: number, moduleIndex: number, lessonIndex?: number };
}

const MainModules_Step_RigthModule: React.FC<MainModules_Step_RigthModuleProps> = ({ lesson, handleLessonChange, index, setLessons, activeModule }) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [videoFile, setvideoFile] = useState<File | null>(null);
  const [isVideo, setIsVideo] = useState(false); // Track if the file is a video
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const waveSurfer = useRef<WaveSurfer | null>(null);
  const [rangeValues, setRangeValues] = useState<[number, number]>([0, 5]);
  const [splitClips, setSplitClips] = useState<{ start: number; end: number; title: string }[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    if (!file) return;
    await saveFileToIndexedDB(`${lesson.title}_file_${index}`, file);
    setvideoFile(file);
    setMediaFile(file);
  };

  // const handleLessonChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value, type } = e.target;
  //   if (type === 'checkbox') {
  //     const { checked } = e.target as HTMLInputElement;
  //     setsinglelesson(prevLesson => ({
  //       ...prevLesson,
  //       [name]: checked
  //     }));
  //   } else {
  //     setsinglelesson(prevLesson => ({
  //       ...prevLesson,
  //       [name]: value
  //     }));
  //   }
  // };

  const handleClick = async () => {
    if (videoFile) {
      const formData = new FormData();
      formData.append('videoFile', videoFile);
      formData.append('title', lesson.title);

      try {
        const response = await axios.post('http://localhost:5000/api/videoUpload', formData, {
          onUploadProgress: (progressEvent) => {
            const total = progressEvent.total || 1; // Ensure total is not undefined
            const current = progressEvent.loaded;
            const percentage = Math.round((current * 100) / total);
            setUploadProgress(percentage); // Update progress state
          },
        });
        console.log("Upload response:", response);
        if (response.data) {
          localStorage.setItem('videoUrl', response.data.videoUrl);
          handleLessonChange(index, { target: { name: 'link', value: response.data.videoUrl } } as React.ChangeEvent<HTMLInputElement>);
        } else {
          console.error("Error uploading file:", response.data.message);
        }
        closePopup();
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  }

  useEffect(() => {
    if (lesson) {
      console.log('Setting lesson clips', lesson);
      setSplitClips(lesson.clips);
    }
  }, [lesson.clips]);

  useEffect(() => {
      const fetchFile = async () => {
        const storedFile = await getFileFromIndexedDB(`${lesson.title}_file_${index}`);
        if (storedFile) {
          setMediaFile(storedFile);
        }
      };
      fetchFile();
      console.log('Media File:', mediaFile);
      
  }, [activeModule]);

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
      const fileType = mediaFile.type.split('/')[0].toUpperCase(); // Check if the file is audio or video
      setIsVideo(fileType === 'VIDEO');

      const objectUrl = URL.createObjectURL(mediaFile);

      if (!isVideo && waveSurfer.current) {
        waveSurfer.current.load(objectUrl);
      }
      // if (isVideo) {
      //   localStorage.removeItem(`${lesson.title}_video_${index}`);
      //   localStorage.setItem(`${lesson.title}_video_${index}`, URL.createObjectURL(mediaFile));
      // }

      return () => {
        URL.revokeObjectURL(objectUrl);
        // setMediaFile(null);
      };
    }
  }, [mediaFile, isVideo]);

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
      const newClip = { start, end, title: `Clip ${splitClips.length + 1}` };
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
    <div>
      <div className='flex flex-col justify-between w-full gap-4 lg:flex-row'>
        <div className='space-y-4 w-[90%]'>
          <div>
            <label className="font-semibold">Title</label>
            <input className='w-full py-2 rounded-md' name="title" type="text" placeholder='Lesson 1 Title' value={lesson.title} onChange={(e) => handleLessonChange(index, e)} />
          </div>
          <div className='space-y-4'>
            <div className='mt-3 space-y-2'>
              <div className='flex items-center gap-3'>
                <input className='w-3 h-3 rounded-sm text-primary' name="isPromotional" type="checkbox" checked={lesson.isPromotional} onChange={(e) => handleLessonChange(index, e)} />
                <p className='text-sm text-[#7C7C7C]'>Promoted Content</p>
              </div>
              <div className='flex items-center gap-3'>
                <input className='w-3 h-3 rounded-sm text-primary' name="isFree" type="checkbox" checked={lesson.isFree} onChange={(e) => handleLessonChange(index, e)} />
                <p className='text-sm text-[#7C7C7C]'>Available for Free</p>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label>Description</label> {/* Use the title prop here */}
              <textarea className='w-full border rounded-md' name="description" value={lesson.description} onChange={(e) => handleLessonChange(index, e)}></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson File and Attachment Upload Sections */}
      <div className='space-y-4'>
        <div className='w-[100%]'>
          <label className='font-semibold'>Lesson File</label>
          <div className='w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4'>
            <p className="">Browse and choose the files you want to upload from your computer</p>
            {/* <FileUpload onFileSelect={handleFileUpload} /> */}
            <div className='flex items-center justify-center'>
              <button
                className='rounded-md bg-primary'
                onClick={openPopup}
                style={{
                  padding: '5px 7px',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FaPlus />
              </button>
            </div>
            {isPopupOpen && <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='flex flex-col bg-white items-center p-6 mt-6 space-y-6 border rounded-lg shadow-md lg:w-[30%] w-[90%]'>
                <div className='flex justify-end w-full text-xl ' onClick={closePopup}>
                  <AiOutlineCloseCircle className='text-red-500' />
                </div>
                <label htmlFor="moduleType" className='font-semibold'>Select Type of Module</label>
                <select id="moduleType" className='w-[90%] p-2 border rounded-lg outline-none' name="channel" value={lesson.channel} onChange={(e) => handleLessonChange(index, e)}>
                  <option value="VDOCIPHER">Vdocipher</option>
                  <option value="YOUTUBE">Youtube</option>
                  <option value="BUNNY">Bunny</option>
                </select>

                <div className='w-full p-4 space-y-4'>
                  <h4 className='text-lg font-semibold text-center'>Upload File from your Device</h4>
                  <div className='w-full h-40 p-4 space-y-2 border-2 border-dashed rounded-lg border-neutral-300'>
                    <input type='file' className='text-center' onChange={handleChange} />
                  </div>
                  <button
                    className='px-3 py-1 mt-4 text-sm font-semibold text-white rounded-full bg-primary hover:bg-primary-dark'
                    onClick={handleClick}
                  // onClick={onNewUploadClick} // Opens file selection dialog
                  >
                    New Upload
                  </button>
                </div>
                {uploadProgress > 0 && (
                  <div className='w-full bg-gray-200 rounded-full h-4'>
                    <div
                      className='bg-blue-600 h-full rounded-full'
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
            }
          </div>
        </div>
      </div>

      {/* Audio Editor Section */}
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
                  src={mediaFile ? URL.createObjectURL(mediaFile) : undefined}
                // src={videoSrc}
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
          // onSliderChange={onSliderChange}
          setLessons={setLessons}
          indexClip={index}
        />
      </div>
    </div>
  );
};

export default MainModules_Step_RigthModule;

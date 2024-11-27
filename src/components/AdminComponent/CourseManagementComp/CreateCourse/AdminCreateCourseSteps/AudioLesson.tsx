import React, { useState, useRef, useEffect } from "react";
import Wavesurfer from "wavesurfer.js";
import { MediaSource, Clip, ChannelType, Lesson } from "../../../../../types/course";
import AudioEditor from "./RigthAudioModule/AudioEditor";

interface AudioLessonProps {
  lesson: Lesson;
}

const AudioLesson: React.FC<AudioLessonProps> = ({ lesson }) => {
  const [mediaSrc, setMediaSrc] = useState<MediaSource[]>(lesson.mediaSrc || []);
  const [newAudioFile, setNewAudioFile] = useState<File | null>(null);
  const [newMediaSource, setNewMediaSource] = useState<Partial<MediaSource>>({
    isFree: false,
    isPromotional: false,
    channel: ChannelType.BUNNY,
  });
  const [newClip, setNewClip] = useState<Clip>({
    id: "",
    title: "",
    start: 0,
    end: 0,
    mediaSrcId: "",
  });

  // Handle file input change (audio upload)
  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setNewAudioFile(file); // Set uploaded file for AudioEditor
    }
  };

  // Function to add new audio to lesson
  const handleAddAudio = () => {
    if (newAudioFile) {
      const audioUrl = URL.createObjectURL(newAudioFile); // URL for the uploaded audio
      const newMediaSourceData: MediaSource = {
        ...newMediaSource,
        id: `${Date.now()}`,
        link: audioUrl,
        lessonId: lesson.id,
        clips: [],
      } as MediaSource;

      setMediaSrc([...mediaSrc, newMediaSourceData]); // Update media sources
      setNewAudioFile(null); // Clear the file input
      setNewMediaSource({
        isFree: false,
        isPromotional: false,
        channel: ChannelType.BUNNY,
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto lg:p-4">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Audio Lessons</h2>

      {/* Audio File Upload Section */}
      <div className="mb-4">
     <div className="flex flex-col gap-4 lg:flex-row">
     <div className=" videoTitle lg:w-[60%] w-full">
        <input
          type="text"
          placeholder="Title"
          value={newMediaSource.title}
          onChange={(e) =>
            setNewMediaSource({ ...newMediaSource, title: e.target.value })
          }
          className="block w-full p-2 mb-4 text-gray-700 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Description"
          value={newMediaSource.description}
          onChange={(e) =>
            setNewMediaSource({ ...newMediaSource, description: e.target.value })
          }
          className="block w-full p-2 mb-4 text-gray-700 border border-gray-300 rounded-md"
        />
          <div className="flex items-center mb-4 space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={newMediaSource.isFree}
              onChange={(e) =>
                setNewMediaSource({ ...newMediaSource, isFree: e.target.checked })
              }
              className="mr-2"
            />
            Free
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={newMediaSource.isPromotional}
              onChange={(e) =>
                setNewMediaSource({ ...newMediaSource, isPromotional: e.target.checked })
              }
              className="mr-2"
            />
            Promotional
          </label>
        </div>
    </div>
      <div className="flex flex-col items-center justify-center order-2 gap-4 p-3 border border-dashed border-primary lg:w-[40%] w-full">
      <input
          type="file"
          accept="audio/*"
          id="file-input"
          className="hidden w-full p-2 mb-2 border border-gray-300 rounded"
          onChange={handleAudioUpload}
        />
        <p className="text-sm text-center">Browse and chose the files you want to upload from your computer</p>
        {/* Custom "+" Button */}
        <label
          htmlFor="file-input"
          className="px-2 text-3xl text-white rounded-lg cursor-pointer bg-primary "
        >
          + {/* This "+" icon will trigger the file input */}
        </label>
        </div>
     </div>
       
        {newAudioFile && (
          <AudioEditor mediaFile={newAudioFile} />
        )}
      
        <button
          className="px-6 py-2 text-white rounded bg-primary "
          onClick={handleAddAudio}
          disabled={!newAudioFile}
        >
          Add Audio
        </button>
      </div>

      {/* Display Uploaded Audio Sources */}
      {mediaSrc.map((media, index) => (
        <div key={media.id} className="p-4 mb-6 border border-gray-200 rounded-lg">
          <h3 className="mb-2 font-semibold text-gray-800">
            Audio {index + 1}: {media.link}
          </h3>

          {/* Audio Player */}
          <audio controls className="w-full mt-4">
            <source src={media.link} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
      <button className="px-4 py-2 text-white rounded-md bg-primary ">Save All Changes</button>
    </div>
  );
};

export default AudioLesson;

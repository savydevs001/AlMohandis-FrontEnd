import React, { useState, useRef, useEffect } from "react";
import Wavesurfer from "wavesurfer.js";
import { MediaSource, Clip, ChannelType, Lesson } from "../../../../../types/course";

interface AudioLessonProps {
  lesson: Lesson; // Use the Lesson type from the props
}

const AudioLesson: React.FC<AudioLessonProps> = ({ lesson }) => {
  const [mediaSrc, setMediaSrc] = useState<MediaSource[]>(lesson.mediaSrc || []); // Store media sources
  const [newAudioFile, setNewAudioFile] = useState<File | null>(null); // Store the uploaded audio file
  const [newClip, setNewClip] = useState<Clip>({
    id: "",
    title: "",
    start: 0,
    end: 0,
    mediaSrcId: "",
  }); // Clip details

  const waveformRefs = useRef<{ [key: string]: any }>({}); // Ref to store waveforms for each audio

  // Handle file input change (audio file upload)
  const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setNewAudioFile(file); // Store the uploaded file
    }
  };

  // Function to add new audio to the lesson
  const handleAddAudio = () => {
    if (newAudioFile) {
      const audioUrl = URL.createObjectURL(newAudioFile); // Create a URL for the audio file
      const newMediaSource: MediaSource = {
        id: `${Date.now()}`, // Unique ID for the new audio
        link: audioUrl,
        lessonId: lesson.id,
        channel: ChannelType.PODCAST, // You can adjust the channel type as needed
        isFree: false,
        isPromotional: false,
        clips: [],
      };
      setMediaSrc([...mediaSrc, newMediaSource]); // Add the new media source
      setNewAudioFile(null); // Clear the file input field
    }
  };

  // Function to add a clip to an audio source
  const handleAddClip = (mediaSrcId: string) => {
    const updatedMediaSrc = mediaSrc.map((media) => {
      if (media.id === mediaSrcId) {
        const newClipWithId = { ...newClip, id: `${Date.now()}` };
        return {
          ...media,
          clips: [...media.clips, newClipWithId],
        };
      }
      return media;
    });
    setMediaSrc(updatedMediaSrc); // Update the media sources state
    setNewClip({ id: "", title: "", start: 0, end: 0, mediaSrcId: "" }); // Reset clip state
  };

  // Initialize Wavesurfer instance for each audio when it's added
  useEffect(() => {
    mediaSrc.forEach((media) => {
      if (waveformRefs.current[media.id]) {
        // Only initialize the waveform if it hasn't been created yet
        const wavesurfer = Wavesurfer.create({
          container: `#waveform-${media.id}`,
          waveColor: "#a0aec0",
          progressColor: "#4CAF50",
          height: 100,
          barWidth: 2,
        });

        // Load the audio file into Wavesurfer
        wavesurfer.load(media.link);
      }
    });
  }, [mediaSrc]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Audio Lessons</h2>

      {/* Audio File Upload Section */}
      <div className="mb-4 flex items-center space-x-4">
        <input
          type="file"
          accept="audio/*"
          className="border border-gray-300 rounded p-2 w-full"
          onChange={handleAudioUpload}
        />
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          onClick={handleAddAudio}
        >
          Add Audio
        </button>
      </div>

      {/* Display Uploaded Audio Sources */}
      {mediaSrc.length > 0 && mediaSrc.map((media, index) => (
        <div key={media.id} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-gray-800">Audio {index + 1}: {media.link}</h3>

          {/* Waveform */}
          <div id={`waveform-${media.id}`} className="w-full mt-4"></div>

          {/* Audio Player */}
          <audio controls className="w-full mt-4">
            <source src={media.link} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Clip Creation Section */}
          <div className="space-y-4 mt-4">
            <div className="flex space-x-4">
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-1/3"
                placeholder="Clip title"
                value={newClip.title}
                onChange={(e) => setNewClip({ ...newClip, title: e.target.value, mediaSrcId: media.id })}
              />
              <input
                type="number"
                className="border border-gray-300 rounded p-2 w-1/4"
                placeholder="Start time (s)"
                value={newClip.start}
                onChange={(e) => setNewClip({ ...newClip, start: Number(e.target.value) })}
              />
              <input
                type="number"
                className="border border-gray-300 rounded p-2 w-1/4"
                placeholder="End time (s)"
                value={newClip.end}
                onChange={(e) => setNewClip({ ...newClip, end: Number(e.target.value) })}
              />
            </div>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              onClick={() => handleAddClip(media.id)}
            >
              Add Clip
            </button>
          </div>

          {/* Displaying Clips */}
          {media.clips.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700">Clips:</h4>
              {media.clips.map((clip, clipIndex) => (
                <div key={clip.id} className="mt-2">
                  <p className="text-gray-600">
                    <strong>Clip {clipIndex + 1}: </strong>{clip.title}
                  </p>
                  <p className="text-gray-500">Start: {clip.start}s, End: {clip.end}s</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AudioLesson;

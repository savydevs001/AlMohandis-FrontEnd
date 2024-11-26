import React, { useState, useRef, useEffect } from "react";
import Wavesurfer from "wavesurfer.js";
import { MediaSource, Clip, ChannelType, Lesson } from "../../../../../types/course";

interface AudioLessonProps {
  lesson: Lesson; // Use the Lesson type from the props
}

const AudioLesson: React.FC<AudioLessonProps> = ({ lesson }) => {
  const [mediaSrc, setMediaSrc] = useState<MediaSource[]>(lesson.mediaSrc || []); // Store media sources
  const [newAudioFile, setNewAudioFile] = useState<File | null>(null); // Store the uploaded audio file
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
      const newMediaSourceData: MediaSource = {
        ...newMediaSource,
        id: `${Date.now()}`, // Unique ID for the new audio
        link: audioUrl,
        lessonId: lesson.id,
        clips: [],
      } as MediaSource;

      setMediaSrc([...mediaSrc, newMediaSourceData]); // Add the new media source
      setNewAudioFile(null); // Clear the file input field
      setNewMediaSource({
        isFree: false,
        isPromotional: false,
        channel: ChannelType.BUNNY,
      });
    }
  };

  // Function to update media source fields
  const handleUpdateMediaSource = (id: string, field: string, value: any) => {
    setMediaSrc((prev) =>
      prev.map((media) => (media.id === id ? { ...media, [field]: value } : media))
    );
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
      // If Wavesurfer is not initialized for this media, initialize it
      if (!waveformRefs.current[media.id]) {
        const wavesurfer = Wavesurfer.create({
          container: `#waveform-${media.id}`,
          waveColor: "#a0aec0",
          progressColor: "#4CAF50",
          height: 100,
          barWidth: 2,
          backend: "MediaElement", // Use MediaElement backend to sync with <audio>
        });

        // Ensure the audio element is available
        const audioElement = document.querySelector(`#audio-${media.id}`) as HTMLAudioElement;
        if (audioElement) {
          wavesurfer.load(audioElement); // Load the audio element into Wavesurfer

          waveformRefs.current[media.id] = wavesurfer;

          // Synchronize Wavesurfer with the audio element
          audioElement.addEventListener("play", () => wavesurfer.play());
          audioElement.addEventListener("pause", () => wavesurfer.pause());
          audioElement.addEventListener("seeked", () => {
            const time = audioElement.currentTime;
            wavesurfer.seekTo(time / audioElement.duration); // Sync seek position
          });
        }
      }
    });

    // Cleanup Wavesurfer instances on component unmount
    return () => {
      Object.values(waveformRefs.current).forEach((wavesurfer) => wavesurfer.destroy());
    };
  }, [mediaSrc]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Audio Lessons</h2>

      {/* Audio File Upload Section */}
      <div className="mb-4">
        <input
          type="file"
          accept="audio/*"
          className="border border-gray-300 rounded p-2 w-full mb-2"
          onChange={handleAudioUpload}
        />
        <div className="flex items-center space-x-4 mb-4">
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
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          onClick={handleAddAudio}
          disabled={!newAudioFile}
        >
          Add Audio
        </button>
      </div>

      {/* Display Uploaded Audio Sources */}
      {mediaSrc.map((media, index) => (
        <div key={media.id} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">
            Audio {index + 1}: {media.link}
          </h3>
          <div className="flex items-center space-x-4 mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={media.isFree}
                onChange={(e) =>
                  handleUpdateMediaSource(media.id, "isFree", e.target.checked)
                }
                className="mr-2"
              />
              Free
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={media.isPromotional}
                onChange={(e) =>
                  handleUpdateMediaSource(media.id, "isPromotional", e.target.checked)
                }
                className="mr-2"
              />
              Promotional
            </label>
          </div>

          {/* Waveform */}
          <div id={`waveform-${media.id}`} className="w-full mt-4"></div>

          {/* Audio Player */}
          <audio controls id={`audio-${media.id}`} className="w-full mt-4">
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
                onChange={(e) =>
                  setNewClip({
                    ...newClip,
                    title: e.target.value,
                    mediaSrcId: media.id,
                  })
                }
              />
              <input
                type="number"
                className="border border-gray-300 rounded p-2 w-1/4"
                placeholder="Start time (s)"
                value={newClip.start}
                onChange={(e) =>
                  setNewClip({ ...newClip, start: Number(e.target.value) })
                }
              />
              <input
                type="number"
                className="border border-gray-300 rounded p-2 w-1/4"
                placeholder="End time (s)"
                value={newClip.end}
                onChange={(e) =>
                  setNewClip({ ...newClip, end: Number(e.target.value) })
                }
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
              <h4 className="font-semibold text-gray-700">Clips</h4>
              <ul className="space-y-2">
                {media.clips.map((clip) => (
                  <li key={clip.id} className="flex justify-between items-center">
                    <span>{clip.title}</span>
                    <span>
                      {clip.start}s - {clip.end}s
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AudioLesson;

import React, { useState } from "react";
import { MediaSource, Clip, ChannelType } from "../../../../../types/course";
import axios from "axios";

interface VideoLessonProps {
  lesson: any; // Define your lesson type properly
}

const VideoLesson: React.FC<VideoLessonProps> = ({ lesson }) => {
  console.log(lesson);
  const [mediaSrc, setMediaSrc] = useState<MediaSource[]>(lesson.mediaSrc || []);
  const [newVideoFile, setNewVideoFile] = useState<File | null>(null);
  const [newMediaSource, setNewMediaSource] = useState<Partial<MediaSource>>({
    title: "",
    description: "",
    isFree: false,
    isPromotional: false,
    channel: ChannelType.YOUTUBE,
  });

  const [newClip, setNewClip] = useState<Clip>({
    id: "",
    title: "",
    start: 0,
    end: 0,
    mediaSrcId: "",
  });

  const handleAddVideo = () => {
    if (newVideoFile) {
      const videoUrl = URL.createObjectURL(newVideoFile); // Create local URL for the video file
      const newMedia: MediaSource = {
        ...newMediaSource,
        id: `${Date.now()}`,
        link: videoUrl,
        lessonId: lesson.id,
        clips: [],
        title: newMediaSource.title || newVideoFile.name,
      } as MediaSource;

      setMediaSrc([...mediaSrc, newMedia]);
      setNewVideoFile(null); // Clear the file input
      setNewMediaSource({
        title: "",
        description: "",
        isFree: false,
        isPromotional: false,
        channel: ChannelType.YOUTUBE,
      });
    }
  };

  const handleUpdateMediaSource = (id: string, field: string, value: any) => {
    setMediaSrc((prev) =>
      prev.map((media) =>
        media.id === id ? { ...media, [field]: value } : media
      )
    );
  };

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
    setMediaSrc(updatedMediaSrc);
    setNewClip({ id: "", title: "", start: 0, end: 0, mediaSrcId: "" });
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/courses/lesson/${lesson.id}`,
        {
          mediaSources: mediaSrc.map((media) => ({
            link: media.link,
            title: media.title,
            description: media.description,
            channel: media.channel,
            isFree: media.isFree,
            isPromotional: media.isPromotional,
            clips: media.clips.map((clip) => ({
              title: clip.title,
              start: clip.start,
              end: clip.end,
            })),
          })),
        }
      );
      console.log("Lesson updated:", response.data);
    } catch (error) {
      console.error("Error updating lesson:", error);
    }
  };

  return (
    <div className=" video-lesson-container">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Video Lessons</h2>

      {/* Video Upload Section */}
      <div className="mb-6 video-upload-section">
        {/* Hidden File Input */}
    <div className="flex flex-col items-start gap-6 lg:flex-row">
    <div className="flex flex-col items-center justify-center order-2 gap-4 p-3 border border-dashed border-primary lg:w-[40%] w-full">
        <input
          type="file"
          accept="video/*"
          id="file-input"
          onChange={(e) => setNewVideoFile(e.target.files?.[0] || null)}
          className="hidden"
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
        {/* Video Title */}
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
              className="mr-2 text-primary"
            />
            Free
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={newMediaSource.isPromotional}
              onChange={(e) =>
                setNewMediaSource({
                  ...newMediaSource,
                  isPromotional: e.target.checked,
                })
              }
              className="mr-2 text-primary"
            />
            Promotional
          </label>
          </div>
    </div>
        </div>
        <button
          onClick={handleAddVideo}
          disabled={!newVideoFile}
          className={`py-2 px-4 w-fit text-white rounded-md ${
            newVideoFile
              ? "bg-primary text-white"
              : "bg-gray-300 cursor-not-allowed mt-3"
          }`}
        >
          Add Video
        </button>

        {/* Display Selected File */}
        {newVideoFile && (
          <div className="mt-2 text-gray-700">Selected Video: {newVideoFile.name}</div>
        )}
      </div>

      {/* Display Added Videos */}
      {mediaSrc.map((media, index) => (
        <div key={media.id} className="p-4 mb-6 border rounded-md shadow-sm video-section">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Video {index + 1}: {media.title}
          </h3>
          <input
            type="text"
            value={media.title}
            onChange={(e) => handleUpdateMediaSource(media.id, "title", e.target.value)}
            className="block w-full p-2 mb-2 border border-gray-300 rounded-md"
            placeholder="Edit Title"
          />
          <textarea
            value={media.description}
            onChange={(e) =>
              handleUpdateMediaSource(media.id, "description", e.target.value)
            }
            className="block w-full p-2 mb-2 border border-gray-300 rounded-md"
            placeholder="Edit Description"
          />
          <div className="flex items-center mb-4 space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={media.isFree}
                onChange={(e) =>
                  handleUpdateMediaSource(media.id, "isFree", e.target.checked)
                }
                className="mr-2 text-primary"
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
                className="mr-2 text-primary"
              />
              Promotional
            </label>
          </div>
          <video
            controls
            className="w-full lg:h-[35vh] mb-4 border border-slate-300 rounded-md"
            src={media.link}
          ></video>

          {/* Clip Creation Section */}
          <div className="clip-section">
            <h4 className="mb-4 font-medium text-gray-600 text-md">Add Clips</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Clip title"
                value={newClip.title}
                onChange={(e) =>
                  setNewClip({ ...newClip, title: e.target.value, mediaSrcId: media.id })
                }
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Start time (seconds)"
                value={newClip.start}
                onChange={(e) =>
                  setNewClip({ ...newClip, start: parseInt(e.target.value, 10) })
                }
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="End time (seconds)"
                value={newClip.end}
                onChange={(e) =>
                  setNewClip({ ...newClip, end: parseInt(e.target.value, 10) })
                }
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => handleAddClip(media.id)}
                className="px-4 py-2 text-white rounded-md bg-primary w-fit"
              >
                Add Clip
              </button>
            </div>
          </div>

          {/* Display Clips */}
          <div className="mt-4 clip-list">
            {media.clips.map((clip, idx) => (
              <div key={clip.id} className="p-2 mb-2 border rounded-md">
                <h5 className="font-medium text-gray-700">{clip.title}</h5>
                <p className="text-gray-600">Start: {clip.start}s | End: {clip.end}s</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="px-4 py-2 text-white rounded-md bg-primary w-fit "
      >
        Save All Changes
      </button>
    </div>
  );
};

export default VideoLesson;

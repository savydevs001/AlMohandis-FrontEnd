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
    <div className="video-lesson-container p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Video Lessons</h2>

      {/* Video Upload Section */}
      <div className="video-upload-section mb-6">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setNewVideoFile(e.target.files?.[0] || null)}
          className="block w-full text-gray-700 border border-gray-300 rounded-md p-2 mb-4"
        />
        <input
          type="text"
          placeholder="Title"
          value={newMediaSource.title}
          onChange={(e) =>
            setNewMediaSource({ ...newMediaSource, title: e.target.value })
          }
          className="block w-full text-gray-700 border border-gray-300 rounded-md p-2 mb-4"
        />
        <textarea
          placeholder="Description"
          value={newMediaSource.description}
          onChange={(e) =>
            setNewMediaSource({ ...newMediaSource, description: e.target.value })
          }
          className="block w-full text-gray-700 border border-gray-300 rounded-md p-2 mb-4"
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
                setNewMediaSource({
                  ...newMediaSource,
                  isPromotional: e.target.checked,
                })
              }
              className="mr-2"
            />
            Promotional
          </label>
        </div>
        <button
          onClick={handleAddVideo}
          disabled={!newVideoFile}
          className={`p-2 w-full text-white rounded-md ${
            newVideoFile
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Add Video
        </button>
      </div>

      {/* Display Added Videos */}
      {mediaSrc.map((media, index) => (
        <div key={media.id} className="video-section p-4 border rounded-md mb-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Video {index + 1}: {media.title}
          </h3>
          <input
            type="text"
            value={media.title}
            onChange={(e) => handleUpdateMediaSource(media.id, "title", e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Edit Title"
          />
          <textarea
            value={media.description}
            onChange={(e) =>
              handleUpdateMediaSource(media.id, "description", e.target.value)
            }
            className="block w-full border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Edit Description"
          />
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
          <video
            controls
            className="w-full h-auto rounded-md border border-gray-300 mb-4"
            src={media.link}
          ></video>

          {/* Clip Creation Section */}
          <div className="clip-section">
            <h4 className="text-md font-medium mb-4 text-gray-600">Add Clips</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Clip title"
                value={newClip.title}
                onChange={(e) =>
                  setNewClip({ ...newClip, title: e.target.value, mediaSrcId: media.id })
                }
                className="block w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="number"
                placeholder="Start time (seconds)"
                value={newClip.start}
                onChange={(e) => setNewClip({ ...newClip, start: Number(e.target.value) })}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="number"
                placeholder="End time (seconds)"
                value={newClip.end}
                onChange={(e) => setNewClip({ ...newClip, end: Number(e.target.value) })}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
              <button
                onClick={() => handleAddClip(media.id)}
                className="bg-green-500 text-white p-2 w-full rounded-md hover:bg-green-600"
              >
                Add Clip
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Save Button */}
      <div className="save-button-container mt-6">
        <button
          onClick={handleSave}
          className="p-2 w-full text-white rounded-md bg-blue-500 hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default VideoLesson;

import React, { useState } from "react";
import axios from "axios";
import { ChannelType } from "../../../../../types/course";

interface VideoLessonPopupProps {
  lessonId: string;
  onClose: () => void;
}


export const VideoLessonPopup: React.FC<VideoLessonPopupProps> = ({ lessonId, onClose }) => {
  const [videoOption, setVideoOption] = useState<ChannelType.VDOCIPHER | ChannelType.YOUTUBE>();
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // New state for delete operation

  const uploadToVideoShipher = async (file: File, title: string): Promise<string | null> => {
    const formData = new FormData();
    formData.append("videoFile", file);
    formData.append("title", "Video Title");

    try {
      const response = await axios.post(
        `http://localhost:5000/api/videoUpload?title=${encodeURIComponent(title)}`,
        formData
      );
      return response.data.videoUrl || null;
    } catch (error) {
      console.error("Error uploading video to VideoShipher:", error);
      return null;
    }
  };

  const handleSave = async () => {
    if (!videoTitle) {
      alert("Please provide a title for the video.");
      return;
    }

    let videoLink: string | null = "";

    setIsSaving(true);
    if (videoOption === ChannelType.VDOCIPHER && videoFile) {
      videoLink = await uploadToVideoShipher(videoFile, videoTitle);
      if (!videoLink) {
        alert("Failed to upload video to VideoShipher.");
        setIsSaving(false);
        return;
      }
    } else if (videoOption === ChannelType.YOUTUBE && youtubeLink) {
      videoLink = youtubeLink;
    } else {
      alert("Please provide a valid video option (upload or YouTube link).");
      setIsSaving(false);
      return;
    }

    const payload = {
      mediaSources: [
        {
          link: videoLink,
          title: videoTitle,
          description: videoDescription,
          channel: ChannelType.YOUTUBE,
          isFree: false,
          isPromotional: true,
          clips: [
            {
              title: "Part 1",
              start: 0,
              end: 300,
            },
            {
              title: "Part 2",
              start: 301,
              end: 600,
            },
          ],
        },
      ],
    };

    try {
      await axios.patch(`http://localhost:5000/api/courses/lesson/${lessonId}`, payload);
      alert("Lesson updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error saving lesson:", error);
      alert("Failed to save lesson. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this lesson?");
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      await axios.delete(`http://localhost:5000/api/courses/lessons/${lessonId}`);
      alert("Lesson deleted successfully!");
      onClose();
    } catch (error) {
      console.error("Error deleting lesson:", error);
      alert("Failed to delete lesson. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl p-6">
        <h2 className="mb-4 text-xl font-bold">Add Video to Lesson</h2>
        {/* Video Title */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Video Title</label>
          <input
            type="text"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            className="block w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Enter video title"
          />
        </div>
        {/* Video Description */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Video Description</label>
          <textarea
            value={videoDescription}
            onChange={(e) => setVideoDescription(e.target.value)}
            className="block w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Enter video description"
            rows={3}
          />
        </div>
        {/* Video Option */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Select Video Option</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="upload"
              name="videoOption"
              value="upload"
              checked={videoOption === ChannelType.VDOCIPHER}
              onChange={() => setVideoOption(ChannelType.VDOCIPHER)}
              className="mr-2"
            />
            <label htmlFor="upload">Upload to VideoShipher</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="youtube"
              name="videoOption"
              value="youtube"
              checked={videoOption === ChannelType.YOUTUBE}
              onChange={() => setVideoOption(ChannelType.YOUTUBE)}
              className="mr-2"
            />
            <label htmlFor="youtube">YouTube Link</label>
          </div>
        </div>
        {/* Upload or YouTube Link Input */}
        {videoOption === ChannelType.VDOCIPHER && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">Upload Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
              className="block w-full"
            />
          </div>
        )}
        {videoOption === ChannelType.YOUTUBE && (
          <div className="mb-4">
            <label className="block mb-2 font-medium">YouTube Link</label>
            <input
              type="text"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              className="block w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter YouTube link"
            />
          </div>
        )}
        {/* Save, Delete, and Cancel Buttons */}
        <div className="flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-4 text-white bg-gray-500 rounded"
            disabled={isSaving || isDeleting}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-blue-500 rounded mr-4"
            disabled={isSaving || isDeleting}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-red-500 rounded"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

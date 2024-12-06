import React, { useState } from "react";
import axios from "axios";

interface VideoLessonPopupProps {
  lessonId: string;
  onClose: () => void;
}

export const VideoLessonPopup: React.FC<VideoLessonPopupProps> = ({ lessonId, onClose }) => {
  const [videoOption, setVideoOption] = useState<"upload" | "youtube">("upload");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const uploadToVideoShipher = async (file: File, title: string): Promise<string | null> => {
    const formData = new FormData();
    formData.append("videoFile", file);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/videoUpload?title=${encodeURIComponent(title)}`, // Title added as a query parameter
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

    let videoLink = "";

    setIsSaving(true);
    if (videoOption === "upload" && videoFile) {
      videoLink = await uploadToVideoShipher(videoFile, videoTitle);
      if (!videoLink) {
        alert("Failed to upload video to VideoShipher.");
        setIsSaving(false);
        return;
      }
    } else if (videoOption === "youtube" && youtubeLink) {
      videoLink = youtubeLink;
    } else {
      alert("Please provide a valid video option (upload or YouTube link).");
      setIsSaving(false);
      return;
    }

    try {
      await axios.patch(`http://localhost:5000/api/courses/lesson/${lessonId}`, {
        title: videoTitle,
        description: videoDescription,
        link: videoLink,
        channel: videoOption === "upload" ? "VideoShipher" : "YouTube",
      });
      alert("Lesson updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error saving lesson:", error);
      alert("Failed to save lesson. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl p-6">
        <h2 className="mb-4 text-xl font-bold">Add Video to Lesson</h2>

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

        <div className="mb-4">
          <label className="block mb-2 font-medium">Select Video Option</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="upload"
              name="videoOption"
              value="upload"
              checked={videoOption === "upload"}
              onChange={() => setVideoOption("upload")}
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
              checked={videoOption === "youtube"}
              onChange={() => setVideoOption("youtube")}
              className="mr-2"
            />
            <label htmlFor="youtube">YouTube Link</label>
          </div>
        </div>

        {videoOption === "upload" && (
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

        {videoOption === "youtube" && (
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

        <div className="flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-4 text-white bg-gray-500 rounded"
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-blue-500 rounded"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

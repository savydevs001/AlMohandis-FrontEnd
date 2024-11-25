import React, { useState } from "react";
import { MediaSource, Clip, ChannelType } from "../../../../../types/course";

interface VideoLessonProps {
  lesson: any; // Define your lesson type properly
}

const VideoLesson: React.FC<VideoLessonProps> = ({ lesson }) => {
  const [mediaSrc, setMediaSrc] = useState<MediaSource[]>(lesson.mediaSrc || []);
  const [newVideoFile, setNewVideoFile] = useState<File | null>(null);
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
      const newMediaSource: MediaSource = {
        id: `${Date.now()}`,
        link: videoUrl,
        title: newVideoFile.name,
        lessonId: lesson.id,
        channel: ChannelType.VDOCIPHER, // Indicate it's a local upload
        isFree: false,
        isPromotional: false,
        clips: [],
      };
      setMediaSrc([...mediaSrc, newMediaSource]);
      setNewVideoFile(null); // Clear the file input
    }
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

          {/* Video Player */}
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

          {/* Display Clips */}
          <div className="clips-list mt-4">
            {media.clips.length > 0 ? (
              media.clips.map((clip, clipIndex) => (
                <div key={clip.id} className="clip-item mb-2 p-2 bg-gray-100 rounded-md">
                  <h5 className="font-medium text-gray-800">
                    Clip {clipIndex + 1}: {clip.title}
                  </h5>
                  <p className="text-sm text-gray-600">
                    Start: {clip.start}s, End: {clip.end}s
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No clips added yet.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoLesson;

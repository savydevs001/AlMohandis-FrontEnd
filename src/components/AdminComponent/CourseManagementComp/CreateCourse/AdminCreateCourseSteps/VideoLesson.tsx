import React, { useState } from "react";
import { LessonType, MediaSource, Clip, ChannelType } from "../../../../../types/course";

interface VideoLessonProps {
  lesson: any; // Define your lesson type properly
}

const VideoLesson: React.FC<VideoLessonProps> = ({ lesson }) => {
  const [mediaSrc, setMediaSrc] = useState<MediaSource[]>(lesson.mediaSrc || []);
  const [newVideoUrl, setNewVideoUrl] = useState<string>("");
  const [newClip, setNewClip] = useState<Clip>({
    id: "",
    title: "",
    start: 0,
    end: 0,
    mediaSrcId: "",
  });

  const handleAddVideo = () => {
    if (newVideoUrl) {
      const newMediaSource: MediaSource = {
        id: `${Date.now()}`, // Unique ID for each media
        link: newVideoUrl,
        lessonId: lesson.id,
        channel: ChannelType.YOUTUBE, // Assuming uploading via YouTube
        isFree: false,
        isPromotional: false,
        clips: [],
      };
      setMediaSrc([...mediaSrc, newMediaSource]);
      setNewVideoUrl("");
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
      <h2 className="text-xl font-bold mb-4">Video Lessons</h2>
      <div className="video-upload-section mb-4">
        <input
          type="text"
          value={newVideoUrl}
          onChange={(e) => setNewVideoUrl(e.target.value)}
          placeholder="Enter video URL"
          className="border p-2 rounded-md w-full mb-2"
        />
        <button
          onClick={handleAddVideo}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Add Video
        </button>
      </div>

      {mediaSrc.map((media, index) => (
        <div key={media.id} className="video-section p-4 border rounded-md mb-4">
          <h3 className="font-semibold">Video {index + 1}: {media.link}</h3>
          <div className="clip-section mt-4">
            <h4 className="text-lg font-medium mb-2">Add Clips</h4>
            <input
              type="text"
              placeholder="Clip title"
              value={newClip.title}
              onChange={(e) =>
                setNewClip({ ...newClip, title: e.target.value, mediaSrcId: media.id })
              }
              className="border p-2 rounded-md w-full mb-2"
            />
            <input
              type="number"
              placeholder="Start time (seconds)"
              value={newClip.start}
              onChange={(e) => setNewClip({ ...newClip, start: Number(e.target.value) })}
              className="border p-2 rounded-md w-full mb-2"
            />
            <input
              type="number"
              placeholder="End time (seconds)"
              value={newClip.end}
              onChange={(e) => setNewClip({ ...newClip, end: Number(e.target.value) })}
              className="border p-2 rounded-md w-full mb-2"
            />
            <button
              onClick={() => handleAddClip(media.id)}
              className="bg-green-500 text-white p-2 rounded-md"
            >
              Add Clip
            </button>
          </div>

          <div className="clips-list mt-4">
            {media.clips.length > 0 ? (
              media.clips.map((clip, clipIndex) => (
                <div key={clip.id} className="clip-item mb-2">
                  <h5 className="font-medium">Clip {clipIndex + 1}: {clip.title}</h5>
                  <p>Start: {clip.start}s, End: {clip.end}s</p>
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

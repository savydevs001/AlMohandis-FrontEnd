import React, { useState } from "react";
import { MediaSource, Clip, ChannelType } from "../../../../../types/course";

interface AudioLessonProps {
  lesson: any; // Define your lesson type properly
}

const AudioLesson: React.FC<AudioLessonProps> = ({ lesson }) => {
  const [mediaSrc, setMediaSrc] = useState<MediaSource[]>(lesson.mediaSrc || []);
  const [newAudioUrl, setNewAudioUrl] = useState<string>(""); 
  const [newClip, setNewClip] = useState<Clip>({
    id: "",
    title: "",
    start: 0,
    end: 0,
    mediaSrcId: "",
  });

  const handleAddAudio = () => {
    if (newAudioUrl) {
      const newMediaSource: MediaSource = {
        id: `${Date.now()}`, // Unique ID for each media
        link: newAudioUrl,
        lessonId: lesson.id,
        channel: ChannelType.YOUTUBE, // Assuming it's a podcast or audio source
        isFree: false,
        isPromotional: false,
        clips: [],
      };
      setMediaSrc([...mediaSrc, newMediaSource]);
      setNewAudioUrl(""); // Reset the input field
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
    <div className="audio-lesson-container">
      <h2>Audio Lessons</h2>
      <div className="audio-upload-section">
        <input
          type="text"
          value={newAudioUrl}
          onChange={(e) => setNewAudioUrl(e.target.value)}
          placeholder="Enter audio URL"
        />
        <button onClick={handleAddAudio}>Add Audio</button>
      </div>

      {mediaSrc.map((media, index) => (
        <div key={media.id} className="audio-section">
          <h3>Audio {index + 1}: {media.link}</h3>
          <div>
            <input
              type="text"
              placeholder="Clip title"
              value={newClip.title}
              onChange={(e) => setNewClip({ ...newClip, title: e.target.value, mediaSrcId: media.id })}
            />
            <input
              type="number"
              placeholder="Start time (seconds)"
              value={newClip.start}
              onChange={(e) => setNewClip({ ...newClip, start: Number(e.target.value) })}
            />
            <input
              type="number"
              placeholder="End time (seconds)"
              value={newClip.end}
              onChange={(e) => setNewClip({ ...newClip, end: Number(e.target.value) })}
            />
            <button onClick={() => handleAddClip(media.id)}>Add Clip</button>
          </div>
          <div>
            {media.clips.map((clip, clipIndex) => (
              <div key={clip.id}>
                <h4>Clip {clipIndex + 1}: {clip.title}</h4>
                <p>Start: {clip.start}s, End: {clip.end}s</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudioLesson;

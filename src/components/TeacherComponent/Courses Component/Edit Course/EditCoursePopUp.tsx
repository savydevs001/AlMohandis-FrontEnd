// AudioLessonPopup.tsx
import React from 'react';

export const AudioLessonPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <h2>Audio Lesson</h2>
      <p>Edit details about the Audio Lesson...</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

// VideoLessonPopup.tsx
// import React from 'react';

export const VideoLessonPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <h2>Video Lesson</h2>
      <p>Edit details about the Video Lesson...</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

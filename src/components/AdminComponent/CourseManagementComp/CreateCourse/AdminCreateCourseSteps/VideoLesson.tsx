import React, { useState,useEffect } from "react";
import { MediaSource, Clip, ChannelType } from "../../../../../types/course";
import axios from "axios";
import ReactPlayer from 'react-player';
import { Range } from "react-range";

interface VideoLessonProps {
  lesson: any; 
}

const VideoLesson: React.FC<VideoLessonProps> = ({ lesson }) => {
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
  const [modalOpen, setModalOpen] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState("");

  // useEffect to handle file upload or YouTube link processing
  useEffect(() => {
    const uploadVideoToVideoShipher = async () => {
      if (newVideoFile) {
        const formData = new FormData();
        formData.append("videoFile", newVideoFile);
        formData.append("title", "Video Title"); // Replace with a dynamic title if needed

        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/videoUpload`,
            formData,);

          if (response.data?.videoUrl) {
            setNewMediaSource({
              link: response.data.videoUrl,
              channel: ChannelType.VDOCIPHER ,
              
            });
          } else {
            console.error("Error: No videoUrl returned from VideoShipher.");
          }
        } catch (error) {
          console.error("Error uploading to VideoShipher:", error);
        }
      }
    };

    const processYouTubeLink = () => {
      if (youtubeLink) {
        setNewMediaSource({
          link: youtubeLink,
          channel: ChannelType.YOUTUBE,
        });
      }
    };

    if (newVideoFile) {
      uploadVideoToVideoShipher();
    } else if (youtubeLink) {
      processYouTubeLink();
    }
  }, [youtubeLink, newVideoFile])

  const handleAddVideo = () => {
    if (newVideoFile) {
      const videoUrl = URL.createObjectURL(newVideoFile);
      const newMedia: MediaSource = {
        ...newMediaSource,
        id: `${Date.now()}`,
        link: videoUrl,
        lessonId: lesson.id,
        clips: [],
        title: newMediaSource.title || newVideoFile.name,
      } as MediaSource;

      setMediaSrc([...mediaSrc, newMedia]);
      setNewVideoFile(null);
      setNewMediaSource({
        title: "",
        description: "",
        isFree: false,
        isPromotional: false,
        channel: ChannelType.YOUTUBE,
      });
    }
    if (youtubeLink) {
      const newMedia: MediaSource = {
        ...newMediaSource,
        id: `${Date.now()}`,
        link: youtubeLink,
        lessonId: lesson.id,
        clips: [],
        title: newMediaSource.title || "YouTube Video",
      } as MediaSource;

      setMediaSrc([...mediaSrc, newMedia]);
      // setYoutubeLink("");
      setModalOpen(false);
    }
  };

  const handleClipTimeChange = (values: number[]) => {
    setNewClip({ ...newClip, start: values[0], end: values[1] });
  };

  const handleAddClip = (mediaSrcId: string) => {
    const updatedMediaSrc = mediaSrc.map((media) => {
      if (media.id === mediaSrcId) {
        const newClipData: Clip = {
          ...newClip,
          id: `${Date.now()}`,
          mediaSrcId,
        };
        return {
          ...media,
          clips: [...media.clips, newClipData],
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
    <div className="video-lesson-container">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Video Lessons</h2>

      {/* Video Upload Section */}
      <div className="mb-6 video-upload-section">
        <div className="flex flex-col items-start gap-6 lg:flex-row">
          <div className="flex flex-col items-center justify-center order-2 gap-4 p-3 border border-dashed border-primary lg:w-[40%] w-full">
            <input
              type="file"
              accept="video/*"
              id="file-input"
              onChange={(e) => setNewVideoFile(e.target.files?.[0] || null)}
              className="hidden"
            />
            <p className="text-sm text-center">
              Browse and choose the files you want to upload from your computer
            </p>
            {/* "+" Button Triggers Modal */}
            <label
              onClick={() => setModalOpen(true)}
              className="px-2 text-3xl text-white rounded-lg cursor-pointer bg-primary"
            >
              +
            </label>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="mb-4 text-lg font-medium text-gray-800">Upload Options</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setModalOpen(false);
                  document.getElementById("file-input")?.click();
                }}
                className="px-4 py-2 text-white bg-primary rounded-md"
              >
                Upload to VideoSipher
              </button>
              <div>
                <input
                  type="text"
                  placeholder="YouTube Link"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                  className="block w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 mt-2 text-white bg-primary rounded-md"
                >
                  Add YouTube Video
                </button>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-gray-800 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
          </div>
          <div className="videoTitle lg:w-[60%] w-full">
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
          </div>
        </div>
        <button
          onClick={handleAddVideo}
          disabled={!newVideoFile && !youtubeLink}
          className={`py-2 px-4 w-fit text-white rounded-md ${
            newVideoFile || youtubeLink
              ? "bg-primary text-white"
              : "bg-gray-300 cursor-not-allowed mt-3"
          }`}
        >
          Add Video
        </button>
        {newVideoFile && (
          <div className="mt-2 text-gray-700">
            Selected Video: {newVideoFile.name}
          </div>
        )}
      </div>

      {/* Display Added Videos */}
      {mediaSrc.map((media) => (
        <div key={media.id} className="p-4 mb-6 border rounded-md shadow-sm video-section">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">{media.title}</h3>
          {!youtubeLink
          &&
          <video
            controls
            className="w-full lg:h-[35vh] mb-4 border border-slate-300 rounded-md"
            src={media.link}
            ></video>
          }
          { youtubeLink&&
            <div className="video-container">
           <ReactPlayer url={youtubeLink} />
    </div>

          }

          {/* Clip Section */}
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

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Select Clip Range (in seconds)
                </label>
                <Range
                  step={1}
                  min={0}
                  max={300} // Example max value, adjust as per video length
                  values={[newClip.start, newClip.end]}
                  onChange={handleClipTimeChange}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className="h-2 bg-gray-200 rounded-md"
                      style={{
                        ...props.style,
                        height: "50px",
                        background: "brown",
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, isDragged }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "50px",
                        width: "5px",
                        backgroundColor: isDragged ? "yellow" : "orange",
                        border: "2px solid yellow",
                      }}
                    />
                  )}
                />
                <p className="text-gray-500 mt-2">
                  Start: {newClip.start}s | End: {newClip.end}s
                </p>
              </div>

              <button
                onClick={() => handleAddClip(media.id)}
                className="px-4 py-2 text-white rounded-md bg-primary w-fit"
              >
                Add Clip
              </button>
            </div>

            {/* Display Clips */}
            <div className="mt-4 clip-list">
              {media.clips.map((clip) => (
                <div key={clip.id} className="p-2 mb-2 border rounded-md">
                  <h5 className="font-medium text-gray-700">{clip.title}</h5>
                  <p className="text-gray-600">
                    Start: {clip.start}s | End: {clip.end}s
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="px-4 py-2 mt-6 text-white rounded-md bg-primary w-fit"
      >
        Save Changes
      </button>
    </div>
  );
};

export default VideoLesson;

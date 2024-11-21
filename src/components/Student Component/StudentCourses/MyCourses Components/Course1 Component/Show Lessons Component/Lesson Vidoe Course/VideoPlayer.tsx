import EnrolledStudent from "./EnrolledStudent";
import PublishedCourse from "./PublishedCourse";
import StudentRating from "./StudentRating";
import VideoCommets from "./VideoCommets";
import { useState, useEffect } from "react";
// import { getVdoCipherOtp } from "../../../../../../../utils/services";

interface MediaSource {
  id: string;
  link: string;
  title: string;
  description: string;
  lessonId: string;
  channel: string;
  isFree: boolean;
  isPromotional: boolean;
}

interface LessonData {
  id: string;
  type: string;
  chapterId: string;
  mediaSrc: MediaSource[];
}

interface VideoPlayerProps {
  lessonData: LessonData;
  onMediaSrcSelect?: (id: string, link: string) => void;
}

function VideoPlayer({ lessonData, onMediaSrcSelect }: VideoPlayerProps) {
  const firstVideo = lessonData.mediaSrc[0] || null;
  const [selectedVideo, setSelectedVideo] = useState<string>(firstVideo?.link || "");
  const [, setSelectedVideoId] = useState<string>(firstVideo?.id || "");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [selectedVideoDescription, setSelectedVideoDescription] = useState<string>(firstVideo?.description || "");

  const handleVideoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLink = event.target.value;
    console.log
    const selectedMedia = lessonData.mediaSrc.find((video: MediaSource) => video.link === selectedLink);

    if (selectedMedia) {
      console.log("Selected Link:", selectedLink);  // Debugging: check selected link
      console.log("Selected Media:", selectedMedia); // Debugging: check selected media
      setSelectedVideo(selectedLink);
      setSelectedVideoId(selectedMedia.id);
      setSelectedVideoDescription(selectedMedia.description);
      if (onMediaSrcSelect) {
        onMediaSrcSelect(selectedMedia.id, selectedLink);
      }
    }
  };

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        // const { otp, playbackInfo } = await getVdoCipherOtp(selectedVideo);
        // console.log("OTP:", otp);
        // console.log("Playback Info:", playbackInfo);
        const embedUrl = `https://player.vdocipher.com/v2/?otp=20160313versASE323hmltmlQ30D25RtmWqIyF9T0E8oLNv5lXvJezyql7bUJ9he&playbackInfo=eyJ2aWRlb0lkIjoiYjQ1MWZkMGI3ZGJlNDA2M2E0Y2U0MGVhMjVmMjkxNWYifQ`;
        setVideoUrl(embedUrl);
      } catch (error) {
        console.error("Error embedding video:", error);
      }
    };

    if (selectedVideo) {
      fetchVideoDetails();
    }
  }, [selectedVideo]);

  return (
    <div className="space-y-3">
      <div className="w-full mx-auto rounded-full ">
        {videoUrl ? (
          <iframe
          className="lg:w-[100%] w-full lg:h-[55vh] rounded-lg"
            src={videoUrl}
            style={{ border: 0}}
            allow="encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col lg:w-[63%] w-[40%]">
          <label className="text-lg font-semibold" htmlFor="videoSelect">Title</label>
          <select
            className="rounded-md"
            id="videoSelect"
            onChange={handleVideoChange}
            value={selectedVideo}  // Ensure selected value is based on selectedVideo
          >
            {lessonData.mediaSrc.map((video: MediaSource) => (
              <option key={video.id} value={video.link}>
                {video.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <EnrolledStudent width="100%" title="Student Enrolled" count={340333} />
        </div>
      </div>
      <div className="space-y-5">
        <PublishedCourse />
        <StudentRating description={selectedVideoDescription} />
        <div>
          <VideoCommets />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;

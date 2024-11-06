import EnrolledStudent from "./EnrolledStudent";
import PublishedCourse from "./PublishedCourse";
import StudentRating from "./StudentRating";
import VideoCommets from "./VideoCommets";
import { useState, useEffect } from "react";
import { getVdoCipherOtp } from "../../../../../../../utils/services";

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
  const [selectedVideo, setSelectedVideo] = useState<string>(lessonData.mediaSrc[0]?.link || "");
  const [, setSelectedVideoId] = useState<string>(lessonData.mediaSrc[0]?.id || "");
  const [videoUrl, setVideoUrl] = useState<string>("");

  const handleVideoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLink = event.target.value;
    const selectedId = lessonData.mediaSrc.find((video: MediaSource) => video.link === selectedLink)?.id || "";

    setSelectedVideo(selectedLink);
    setSelectedVideoId(selectedId);
    if (onMediaSrcSelect) {
      onMediaSrcSelect(selectedId, selectedLink);
    }
  };

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const { otp, playbackInfo } = await getVdoCipherOtp(selectedVideo);
        const embedUrl = `https://player.vdocipher.com/v2/?otp=${otp}&playbackInfo=${playbackInfo}`;
        setVideoUrl(embedUrl);
        // const embedUrl = `https://player.vdocipher.com/v2/?otp=20160313versASE323cK79ssJUuL4elRsQfXaL1hd9CFWFAWJYGlrQHIG2LxQn0k&playbackInfo=eyJ2aWRlb0lkIjoiMmZjYzFhZmJmMWZlNDcwZDlmOWRlYzM0ZGZjODE5ZTQifQ==`;
      } catch (error) {
        console.error('Error embedding video:', error);
      }
      
    };

    if (selectedVideo) {
      fetchVideoDetails();
    }
  }, [selectedVideo]);

  return (
    <div className="space-y-3">
      <div className="rounded-full">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            style={{ border: 0, width: '42vw', height: '405px' }}
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
            value={selectedVideo}
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
        <StudentRating />
        <div>
          <VideoCommets />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;

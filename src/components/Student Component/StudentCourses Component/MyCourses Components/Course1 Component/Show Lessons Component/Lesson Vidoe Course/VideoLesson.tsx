import { useEffect, useState } from 'react';
import StudentDashboardHeader from "../StudentDashboardHeader";
import VideoLessonComponents from "./VideoLessonComponents";

// Define the types for the media source and lesson data
interface MediaSrc {
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
  mediaSrc: MediaSrc[];
}

function VideoLesson() {
  const [lessonData, setLessonData] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        // Use the environment variable for the backend URL
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/student/lesson/cm341oy4t0018125t0kv6190g`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: LessonData = await response.json();
        setLessonData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <div className="w-full">
          <StudentDashboardHeader />
          <VideoLessonComponents lessonData={lessonData} />
          {/* Example of rendering video titles */}
          <div>
            {lessonData?.mediaSrc?.map(video => (
              <div key={video.id}>
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                <a href={video.link} target="_blank" rel="noopener noreferrer">Watch Video</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoLesson;
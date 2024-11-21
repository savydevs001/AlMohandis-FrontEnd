import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import StudentDashboardHeader from "../StudentDashboardHeader";
import VideoLessonComponents from "./VideoLessonComponents";
import Cookies from 'js-cookie';
import axios from 'axios';

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
  const { lessonId } = useParams<{ lessonId: string }>(); // Get lessonId from params
  const [lessonData, setLessonData] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessonData = async () => {
      const token = Cookies.get('token'); 

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      };

      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/student/lesson/${lessonId}`, config);
        setLessonData(response.data);
        console.log(response.data);
      } catch (err) {
        setError('Error fetching lesson data');
        console.error(err);
      } finally {
        setLoading(false); // Stop loading once data is fetched or an error occurs
      }
    };

    fetchLessonData();
  }, [lessonId]);

  if (loading) {
    return (
        <div className="text-lg font-semibold">Loading...</div> 
    );
  }
 
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex w-[100%] flex-col min-h-screen lg:flex-row">
      <div className="flex-1 w-[100%] lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <div className="w-full">
          <StudentDashboardHeader />
          <VideoLessonComponents lessonData={lessonData} />
        </div>
      </div>
    </div>
  );
}

export default VideoLesson;
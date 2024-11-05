import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Cookies from 'js-cookie'; // Import js-cookie
import CourseMaterial from "./CourseMaterial";
import ShowActivity from "./Show Lessons Component/ShowActivity";
import ShowLessonComponents from "./Show Lessons Component/ShowLessonComponents";
import StudentDashboardHeader from "./Show Lessons Component/StudentDashboardHeader";

// Define the types for the course data
interface Lesson {
  mediaSrc: string;
}

interface Chapter {
  id: string;
  type: 'VIDEO' | 'AUDIO'; // Match types with CourseMaterial
  duration: string;
  link: string;
  lessons: Lesson[];
}

interface Assignment {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
}

interface Exam {
  id: string;
  title: string;
}

interface Module {
  chapters: Chapter[];
  assignments: Assignment[];
  exams: Exam[];
}

interface Part {
  modules: Module[];
}

interface Course {
  title:string
  parts: Part[];
}

// In your Course1 component
function Course1() {
  const { courseId } = useParams<{ courseId: string }>(); // Get courseId from URL params
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Retrieve the token from cookies
  const token = Cookies.get('token');

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/student/courses/${courseId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the headers
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Course = await response.json();
        setCourse(data);
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId, token]); // Add token to the dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-1">
      <div>
        <StudentDashboardHeader courseTitle={course?.title} />
      </div>
      <div className="flex flex-col gap-4 mt-8 lg:flex-row">
        <div className="lg:w-[25%] w-[100%] flex flex-col lg:items-center items-start bg-white shadow-md">
          <CourseMaterial course={course} />
        </div>
        <div className="lg:w-[50%] w-full bg-white shadow-md">
          {course && <ShowLessonComponents />} 
        </div>
        <div className="lg:w-[25%] w-full">
          <ShowActivity />
        </div>
      </div>
      {/* Uncomment and use the Routes if needed */}
      {/* <Routes>
        <Route path="videoLesson" element={<VideoLesson />} />
      </Routes> */}
    </div>
  );
}

export default Course1;
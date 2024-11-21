import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../CourseCard";
import Cookies from 'js-cookie';
import img from "../../../../../public/uploads/1730780381721-images.jpg"

// Define the Course type based on the expected structure
interface Course {
  courseId: string;
  courseTitle: string;
  instructorName: string;
  progress: number;
  imageSrc?: string; // Optional if not always provided
}

function DisplayCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>(`${import.meta.env.VITE_BACKEND_URL}/api/student/getMyCourses`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}` 
          },
        });
        setCourses(response.data); 
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
        <button className="px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary">Add New +</button>
      </div>
      <div className="space-y-4">
        {courses.length > 0 ? (
          courses.map(course => (
            <CourseCard 
              key={course.courseId} // Ensure each key is unique
              img={img} // Use course-specific images if available
              courseTitle={course.courseTitle}
              instructorName={course.instructorName || "Instructor Name"} // Default if instructor is not available
              courseId={course.courseId}
              progress={course.progress} // Assuming progress is part of the course object
            />
          ))
        ) : (
          <div>No courses found.</div>
        )}
      </div>
    </div>
  );
}

export default DisplayCourses;
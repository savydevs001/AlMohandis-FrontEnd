import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Cookies from "js-cookie";

// Define the type for course data
interface Course {
  courseId: string;
  courseName: string;
  teacher: string;
  assistant?: string;
  startDate: string;
  progress: number;
}

function StudentCourseTable() {
  const params = useParams<{ Id: string }>(); // Extract the student ID from URL params
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudentCourses = async () => {
      try {
        const token = Cookies.get("token"); // Get token from cookies
        if (!token) throw new Error("Unauthorized access. Token missing.");

        const response = await fetch(
          `http://localhost:5000/api/admin/getStudentCourse/${params.Id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data: Course[] = await response.json(); // Ensure the response matches the Course type
        setCourses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentCourses();
  }, [params.Id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      {courses.length === 0 ? ( // Check if courses array is empty
        <div className="text-center text-gray-700 mt-4">
          <p>No courses available for this student.</p>
        </div>
      ) : (
        <div>
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="text-white bg-primary">
                <th className="px-4 py-2 border border-black">Course Name</th>
                <th className="px-4 py-2 border border-black">Teacher</th>
                <th className="px-4 py-2 border border-black">Assistant</th>
                <th className="px-4 py-2 border border-black">Start Date</th>
                <th className="px-4 py-2 border border-black">Status</th>
                <th className="px-4 py-2 border border-black">Progress</th>
                <th className="px-4 py-2 border border-black">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-[#D1D6D6]">
              {courses.map((course) => (
                <tr key={course.courseId}>
                  <td className="px-4 py-2 border border-black">{course.courseName}</td>
                  <td className="px-4 py-2 border border-black">{course.teacher}</td>
                  <td className="px-4 py-2 border border-black">
                    {course.assistant || "NA"}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {new Date(course.startDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border border-black">
                    {course.progress === 100 ? "Completed" : "In Progress"}
                  </td>
                  <td className="px-4 py-2 border border-black">{course.progress}%</td>
                  <td className="px-4 py-2 border border-black">
                    <NavLink
                      to="/StudentViewCourse"
                      className="text-pink-500 border-b border-pink-500 cursor-pointer"
                    >
                      View
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentCourseTable;

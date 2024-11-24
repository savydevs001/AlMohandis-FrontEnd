import { useEffect, useState } from 'react';
import CoursesByMeCard from '../../../TeacherComponent/Courses Component/CoursesByMeCard';
import axios from 'axios';

interface Teacher {
  id: string;
  fullName: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
}

interface ActiveCourseShowCompProps {
  courses: Course[];
}

function ActiveCourseShowComp({ courses }: ActiveCourseShowCompProps) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/open/teachers');
        if (response.data.success) {
          setTeachers(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    // Filter courses based on the selected teacher
    if (selectedTeacherId) {
      const filtered = courses.filter(course => course.instructorId === selectedTeacherId);
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  }, [selectedTeacherId, courses]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="teacher-select" className="mr-2">Filter by Teacher:</label>
        <select
          id="teacher-select"
          value={selectedTeacherId}
          onChange={(e) => setSelectedTeacherId(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Teachers</option>
          {teachers.map(teacher => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.fullName}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CoursesByMeCard 
              key={course.id}
              name={course.title}
              published={`Published On: ${course.description}`} // Modify as needed
              students="Students" // You may want to replace this with actual student count if available
              button="Publish"
              showButton={false}
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg font-semibold text-center w-full mt-6">No Active Courses</p>
        )}
      </div>
    </div>
  );
}

export default ActiveCourseShowComp;

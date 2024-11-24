import { useEffect, useState } from "react";
import axios from "axios";
import CoursesByMeCard from "../../../TeacherComponent/Courses Component/CoursesByMeCard";

interface Teacher {
  id: string;
  name: string;
}

interface Course {
  id: string;
  name: string;
  instructorId: string;
  publishedDate: string;
  studentCount: number;
}

interface ActiveCourseShowCompProps {
  courses: Course[];
}

interface ActiveCourseDropDownProps {
  teachers: Teacher[];
  onSelect: (id: string) => void;
}

function ActiveCourseDropDown({ teachers, onSelect }: ActiveCourseDropDownProps) {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="px-4 py-2 border rounded"
    >
      <option value="">All Teachers</option>
      {teachers.map((teacher) => (
        <option key={teacher.id} value={teacher.id}>
          {teacher.name}
        </option>
      ))}
    </select>
  );
}

function ActiveCourseShowComp({ courses }: ActiveCourseShowCompProps) {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/open/teachers");
        if (response.data.success) {
          const formattedTeachers = response.data.data.map((teacher: any) => ({
            id: teacher.id,
            name: teacher.name,
          }));
          setTeachers(formattedTeachers);
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    // Filter courses based on selected teacher
    if (selectedTeacherId) {
      setFilteredCourses(courses.filter(course => course.instructorId === selectedTeacherId));
    } else {
      setFilteredCourses(courses);
    }
  }, [selectedTeacherId, courses]);

  return (
    <div>
      <ActiveCourseDropDown
        teachers={teachers}
        onSelect={(id) => setSelectedTeacherId(id)}
      />
      <div className="flex flex-wrap items-center gap-4">
        {filteredCourses.map(course => (
          <CoursesByMeCard
            key={course.id}
            name={course.name}
            published={course.publishedDate}
            students={`${course.studentCount}`}
            button="Publish"
            showButton={false}
          />
        ))}
      </div>
    </div>
  );
}

export default ActiveCourseShowComp;

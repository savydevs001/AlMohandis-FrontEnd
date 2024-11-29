import { useEffect, useState } from "react";
import CoursesByMeCard from "../../../TeacherComponent/Courses Component/CoursesByMeCard";


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

function ActiveCourseShowComp({ courses }: ActiveCourseShowCompProps) {
  const [selectedTeacherId] = useState<string | undefined>(undefined); // Allow undefined
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);


  useEffect(() => {
    if (selectedTeacherId) {
      setFilteredCourses(courses.filter(course => course.instructorId === selectedTeacherId));
    } else {
      setFilteredCourses(courses);
    }
  }, [selectedTeacherId, courses]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        {filteredCourses.map(course => (
          <CoursesByMeCard
            key={course.id}
            courseId={course.id} // Ensure you're passing courseId prop
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

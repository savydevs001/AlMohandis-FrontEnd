// import React from 'react'

import CoursesByMeCard from "../../../TeacherComponent/Courses Component/CoursesByMeCard"
import ActiveCourseDropDown from "./ActiveCourseDropDown"

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
   <ActiveCourseDropDown/>
 <div className="flex flex-wrap items-center gap-4">
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 <CoursesByMeCard name="Course Name" published="Published On" students="Students" button="Publish" showButton={false} />
 </div>
    </div>
  );
}

export default ActiveCourseShowComp;

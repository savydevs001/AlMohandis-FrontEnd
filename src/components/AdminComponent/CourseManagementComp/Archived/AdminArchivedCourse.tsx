import ActiveCourseDropDown from '../ActiveCoursesComponent/ActiveCourseDropDown';
import AdminArchivedCards from './AdminArchivedCards';

interface Course {
  id: string;
  title: string;
  description: string;
}

interface AdminArchivedCourseProps {
  courses: Course[];
}

function AdminArchivedCourse({ courses }: AdminArchivedCourseProps) {
  return (
    <div>
      <ActiveCourseDropDown />
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
        {courses.length > 0 ? (
          courses.map(course => (
            <AdminArchivedCards 
              key={course.id}
              name={course.title}
              madeOn={`Made on: ${course.description}`} // Modify as needed
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg font-semibold text-center w-full mt-6">No Pending Courses</p>
        )}
      </div>
    </div>
  );
}

export default AdminArchivedCourse;

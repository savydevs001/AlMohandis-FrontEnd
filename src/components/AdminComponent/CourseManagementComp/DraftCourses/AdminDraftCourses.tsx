import React from 'react';
import ActiveCourseDropDown from '../ActiveCoursesComponent/ActiveCourseDropDown';
import CoursesByMeCard from '../../../TeacherComponent/Courses Component/CoursesByMeCard';

function AdminDraftCourses({ courses }) {
  return (
    <div>
      <ActiveCourseDropDown />
      <div className="flex flex-wrap items-center gap-4">
        {courses.length > 0 ? (
          courses.map(course => (
            <CoursesByMeCard 
              key={course.id}
              courseId={course.id} // Pass the courseId here
              name={course.title}
              published={`Drafted On: 12/3/2024`} 
              students="Students" // You may want to replace this with actual student count if available
              button="Publish"
              showButton={true} // Show button for drafts
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg font-semibold text-center w-full mt-6">No Draft Courses</p>
        )}
      </div>
    </div>
  );
}

export default AdminDraftCourses;
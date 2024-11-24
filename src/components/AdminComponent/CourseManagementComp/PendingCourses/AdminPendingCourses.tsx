import React from 'react';
import ActiveCourseDropDown from '../ActiveCoursesComponent/ActiveCourseDropDown';
import PendingCard from '../../../TeacherComponent/Courses Component/PendingCard';

function AdminPendingCourses({ courses }) {
  return (
    <div>
      <ActiveCourseDropDown />
      <div className="flex flex-wrap items-center gap-5">
        {courses.length > 0 ? (
          courses.map(course => (
            <PendingCard 
              key={course.id}
              name={course.title}
              createdOn={`Created On: ${course.description}`} // Modify as needed
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg font-semibold text-center w-full mt-6">No Pending Courses</p>
        )}
      </div>
    </div>
  );
}

export default AdminPendingCourses;
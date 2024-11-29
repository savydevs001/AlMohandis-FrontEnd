import React, { useState } from 'react';
import PendingCard from '../../../TeacherComponent/Courses Component/PendingCard';
import axios from 'axios';

interface AdminPendingCoursesProps {
  courses: {
    id: string;
    title: string;
    description: string;
    updatedAt: string;
  }[];
}

const AdminPendingCourses: React.FC<AdminPendingCoursesProps> = ({ courses }) => {
  const [loading, setLoading] = useState(false);

  const handleApprove = async (courseId: string) => {
    try {
      setLoading(true); // Set loading state while making the request

      // Make the API request to approve the course
      const response = await axios.post(
        `http://localhost:5000/api/admin/courses/approveCourse/${courseId}`
      );

      if (response.status === 200) {
        console.log(`Course with ID ${courseId} approved.`);
        window.location.reload(); // Reload the page on success
      } else {
        console.error('Failed to approve the course');
      }
    } catch (error) {
      console.error('Error approving course:', error);
    } finally {
      setLoading(false); // Set loading to false when request finishes
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-5">
        {courses.length > 0 ? (
          courses.map(course => (
            <PendingCard
              key={course.id}
              name={course.title}
              createdOn={course.updatedAt}
              onApprove={() => handleApprove(course.id)}
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg font-semibold text-center w-full mt-6">No Pending Courses</p>
        )}
      </div>
      {loading && (
        <div className="text-center mt-4 text-blue-500">Approving course...</div>
      )}
    </div>
  );
};

export default AdminPendingCourses;

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ActiveCourseShowComp from './ActiveCoursesComponent/ActiveCourseShowComp';
import AdminPendingCourses from './PendingCourses/AdminPendingCourses';
import AdminDraftCourses from './DraftCourses/AdminDraftCourses';
import AdminArchivedCourse from './Archived/AdminArchivedCourse';
import axios from 'axios';
import Cookies from 'js-cookie';

type Tab = 'information' | 'course' | 'lecturesAttended' | 'registeredStudents';

interface Course {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  isDraft: boolean;
}

function CourseManagementShowHeader() {
  const [activeTab, setActiveTab] = useState<Tab>('information');
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = Cookies.get('token');
        const response = await axios.get('http://localhost:5000/api/admin/course/getAll', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on their status
  const activeCourses = courses.filter(course => course.isActive && !course.isDraft);
  const pendingCourses = courses.filter(course => !course.isActive && !course.isDraft);
  const draftCourses = courses.filter(course => course.isDraft);
  const archivedCourses = courses.filter(course => !course.isActive && !course.isDraft);

  const renderContent = () => {
    switch (activeTab) {
      case 'information':
        return <ActiveCourseShowComp courses={activeCourses} />;
      case 'course':
        return <AdminPendingCourses courses={pendingCourses} />;
      case 'lecturesAttended':
        return <AdminArchivedCourse courses={archivedCourses} />;
      case 'registeredStudents':
        return <AdminDraftCourses courses={draftCourses} />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="w-full space-y-3 ">
        <div className='flex flex-col justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0'>
          <div className="flex space-x-6">
            <button className={`px-2 py-2 text-md ${activeTab === 'information' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`} onClick={() => setActiveTab('information')}>
              Active
            </button>
            <button className={`lg:px-4 px-2 py-2 text-sm font-semibold ${activeTab === 'course' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`} onClick={() => setActiveTab('course')}>
              Pending
            </button>
            <button className={`px-4 py-2 text-sm font-semibold ${activeTab === 'lecturesAttended' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`} onClick={() => setActiveTab('lecturesAttended')}>
              Archived
            </button>
            <button className={`px-4 py-2 text-sm font-semibold ${activeTab === 'registeredStudents' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600'}`} onClick={() => setActiveTab('registeredStudents')}>
              Draft
            </button>
          </div>
          <div>
            <NavLink className='px-4 py-3 font-semibold text-white rounded-md bg-primary' to='AdminCreateCourse/step1'>Create New Course <span className='text-2xl'>+</span></NavLink>
          </div>
        </div>

        <div className="py-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default CourseManagementShowHeader;

// import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from '../../components/TeacherComponent/Sidebar';
import ExamsHeader from '../../components/TeacherComponent/Exam Component/ExamsHeader';
import ExamsCard from '../../components/TeacherComponent/Exam Component/ExamsCard';
import View from '../../components/TeacherComponent/Exam Component/View';
import ViewAttemps from '../../components/TeacherComponent/Exam Component/ViewAttemps';


function Exams() {
  const location = useLocation(); // Get the current route

  // Check if current path is either /exams/viewExam or /exams/viewAttemps
  const isViewPage = location.pathname === '/exams/viewExam' || location.pathname === '/exams/viewAttemps';

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <div>
        <Sidebar/>
      </div>

      <div className="flex-col w-full mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
        <div className="w-full p-2 mx-auto mt-3 lg:p-0 lg:flex bg-gray-50 lg:mt-0">
        </div>

        {/* Conditionally render ExamsHeader and ExamsCard */}
        {!isViewPage && (
          <>
            <ExamsHeader/>
            <div className='space-y-3'>
              <ExamsCard/>
              <ExamsCard/>
              <ExamsCard/>
              <ExamsCard/>
            </div>
          </>
        )}

        {/* Nested Routes */}
        <Routes>
          <Route path="viewExam" element={<View />} />
          <Route path="viewAttemps" element={<ViewAttemps />} />
        </Routes>
      </div>
    </div>
  )
}

export default Exams;

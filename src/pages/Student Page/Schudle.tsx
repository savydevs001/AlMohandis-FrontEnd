// import React from 'react'
import StudentSidebar from '../../components/StudentComponent/StudentSidebar'
import Schdules from '../../components/TeacherComponent/Schudele Component/Schdules'



function Schudle() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
   <StudentSidebar/>
    
    <div className="flex-1 mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
      <Schdules />
    </div>
  </div>
  )
}

export default Schudle

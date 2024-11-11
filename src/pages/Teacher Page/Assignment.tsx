// import React from 'react'

import Sidebar from "../../components/Teacher Component/Sidebar"
import {Routes, Route} from "react-router-dom"
import Ungraded from "../../components/Teacher Component/Assignment Component/Ungraded"
import Grades from "../../components/Teacher Component/Assignment Component/Grades"
import Assigment from "../../components/Teacher Component/Assignment Component/AssignmentCards"

function Assignment() {
  return (

     <div className="flex flex-col min-h-screen lg:flex-row">
      <div>
      <Sidebar/>
      </div>
      {/* <h1>Assignment</h1> */}
     
<div className="flex-col w-full mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
<div className="w-full p-2 mx-auto mt-3 lg:p-0 lg:flex bg-gray-50 lg:mt-0">
<Assigment/>

</div>

      {/* Nested Routes */}
      <Routes>
        <Route path="/" element={<Ungraded />} />
        <Route path="grades" element={<Grades />} />
      </Routes>
</div>
    
      </div>
    
  )
}

export default Assignment

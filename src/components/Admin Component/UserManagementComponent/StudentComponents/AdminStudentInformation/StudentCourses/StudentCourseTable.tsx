// import React from 'react'

import { NavLink } from "react-router-dom"

function StudentCourseTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Course Name</th>
              <th className="px-4 py-2 border border-black">Teacher</th>
              <th className="px-4 py-2 border border-black">Assistant</th>
              <th className="px-4 py-2 border border-black">Start Date</th>
              <th className="px-4 py-2 border border-black">Status</th>
              <th className="px-4 py-2 border border-black">Progress</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { id: 'Basic of Python', name: 'John Daniel', assistant: 'NA', startDate: '29-2-2021', status: 'Completed', progress: 90 },
              { id: 'Basic of Python', name: 'John Daniel', assistant: 'NA', startDate: '29-2-2021', status: 'Completed', progress: 90 },
              { id: 'Basic of Python', name: 'John Daniel', assistant: 'NA', startDate: '29-2-2021', status: 'Completed', progress: 90 },
              { id: 'Basic of Python', name: 'John Daniel', assistant: 'NA', startDate: '29-2-2021', status: 'Completed', progress: 90 },
              { id: 'Basic of Python', name: 'John Daniel', assistant: 'NA', startDate: '29-2-2021', status: 'Completed', progress: 90 },
              
              
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.assistant}</td>
                <td className="px-4 py-2 border border-black">{row.startDate}</td>
                <td className="px-4 py-2 border border-black">{row.status}</td>
                <td className="px-4 py-2 border border-black">{row.progress}%</td>
                <td className="px-4 py-2 border border-black">
                 <NavLink to='/StudentViewCourse' className="text-pink-500 border-b border-pink-500 cursor-pointer"> View</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
     )
}

export default StudentCourseTable

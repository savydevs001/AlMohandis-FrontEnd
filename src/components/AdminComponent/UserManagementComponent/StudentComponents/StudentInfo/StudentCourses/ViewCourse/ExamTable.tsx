// import React from 'react'

import { NavLink } from "react-router-dom"

function ExamTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Title</th>
              <th className="px-4 py-2 border border-black">Lesson No</th>
              <th className="px-4 py-2 border border-black">Chapter</th>
              <th className="px-4 py-2 border border-black">Points</th>
              <th className="px-4 py-2 border border-black">Type</th>
              <th className="px-4 py-2 border border-black">Submission</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
                  { id: 'Basic of Python', name: '1', assistant: 'Chapter Name', startDate: '9/10', status: 'Completed', progress: '20-02-2023' },
                  { id: 'Basic of Python', name: '1', assistant: 'Chapter Name', startDate: '9/10', status: 'Completed', progress: '20-02-2023' },
                  { id: 'Basic of Python', name: '1', assistant: 'Chapter Name', startDate: '9/10', status: 'MCQs', progress: '20-02-2023' },
              
              
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.assistant}</td>
                <td className="px-4 py-2 border border-black">{row.startDate}</td>
                <td className="px-4 py-2 border border-black">{row.status}</td>
                <td className="px-4 py-2 border border-black">{row.progress}%</td>
                <td className="px-4 py-2 border border-black">
                 <NavLink to='/ViewCourse' className="text-pink-500 border-b border-pink-500 cursor-pointer"> View</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
  )
}

export default ExamTable

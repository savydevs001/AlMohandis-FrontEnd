// import React from 'react'
import { NavLink } from 'react-router-dom'

function CoursePerformanceTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Title</th>
              <th className="px-4 py-2 border border-black">Enrollments</th>
              <th className="px-4 py-2 border border-black">Completion Rate</th>
              <th className="px-4 py-2 border border-black">Average Score</th>
              <th className="px-4 py-2 border border-black">Active Student</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
              { id: 'Basic of Science', name: '150', email: '70%', typeClass: '75%', joiningDate: '60', },
             
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                <td className="px-4 py-2 border border-black">
                 <NavLink to='/StudentViewCourse' className="text-pink-500 cursor-pointer"> View</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoursePerformanceTable

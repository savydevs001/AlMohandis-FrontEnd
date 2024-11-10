// import React from 'react'

import { NavLink } from "react-router-dom"

function RegisteredStudentTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
          <div className="">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="text-white bg-primary">
                  <th className="px-4 py-2 border border-black">Teacher </th>
                  <th className="px-4 py-2 border border-black">Course ID</th>
                  <th className="px-4 py-2 border border-black">Course Name</th>
                  <th className="px-4 py-2 border border-black">Contact</th>
                  <th className="px-4 py-2 border border-black">Assistant</th>
                  <th className="px-4 py-2 border border-black">Date Registered</th>
                  <th className="px-4 py-2 border border-black">Action</th>
                </tr>
              </thead>
              <tbody className="bg-[#D1D6D6]">
                {[
                  { id: 'John Daniel', name: 'CPED-98574', email: 'Basic of Python', typeClass: 'joun@gmail.com', joiningDate: 'NA', coursesEnrolled: 20-20-2024 },
                  { id: 'John Daniel', name: 'CPED-98574', email: 'Basic of Python', typeClass: 'joun@gmail.com', joiningDate: 'NA', coursesEnrolled: 20-20-2024 },
                  { id: 'John Daniel', name: 'CPED-98574', email: 'Basic of Python', typeClass: 'joun@gmail.com', joiningDate: 'NA', coursesEnrolled: 20-20-2024 },
                  { id: 'John Daniel', name: 'CPED-98574', email: 'Basic of Python', typeClass: 'joun@gmail.com', joiningDate: 'NA', coursesEnrolled: 20-20-2024 },
                  { id: 'John Daniel', name: 'CPED-98574', email: 'Basic of Python', typeClass: 'joun@gmail.com', joiningDate: 'NA', coursesEnrolled: 20-20-2024 },
                  
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border border-black">{row.id}</td>
                    <td className="px-4 py-2 border border-black">{row.name}</td>
                    <td className="px-4 py-2 border border-black">{row.email}</td>
                    <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                    <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                    <td className="px-4 py-2 border border-black">{row.coursesEnrolled}</td>
                    <td className="px-4 py-2 border border-black">
                     <NavLink to='' className="text-blue-500 cursor-pointer"> View</NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default RegisteredStudentTable

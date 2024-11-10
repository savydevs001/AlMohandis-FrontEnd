// import React from 'react'

import { Link } from "react-router-dom"

function AdminTeacherTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-sm text-white bg-primary">
              <th className="px-4 py-2 border border-black">Student ID</th>
              <th className="px-4 py-2 border border-black"> Name</th>
              <th className="px-4 py-2 border border-black">Email</th>
              <th className="px-4 py-2 border border-black">Level</th>
              <th className="px-4 py-2 border border-black">Department</th>
              <th className="px-4 py-2 border border-black">Joining</th>
              <th className="px-4 py-2 border border-black">Course</th>
              <th className="px-4 py-2 border border-black">Student</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6] text-xs">
            {[
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Professor', joiningDate: 'Computer Science', coursesEnrolled: '20-02-2025', courses: 5, student:250 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Professor', joiningDate: 'Computer Science', coursesEnrolled: '20-02-2025', courses: 5, student:250 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Professor', joiningDate: 'Computer Science', coursesEnrolled: '20-02-2025', courses: 5, student:250 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Professor', joiningDate: 'Computer Science', coursesEnrolled: '20-02-2025', courses: 5, student:250 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Professor', joiningDate: 'Computer Science', coursesEnrolled: '20-02-2025', courses: 5, student:250 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Professor', joiningDate: 'Computer Science', coursesEnrolled: '20-02-2025', courses: 5, student:250 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Professor', joiningDate: 'Computer Science', coursesEnrolled: '20-02-2025', courses: 5, student:250 },
              
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                <td className="px-4 py-2 border border-black">{row.coursesEnrolled}</td>
                <td className="px-4 py-2 border border-black">{row.courses}</td>
                <td className="px-4 py-2 border border-black">{row.student}</td>
                <td className="px-4 py-2 border border-black">
                 <Link to='/TeacherInformation' className="text-blue-500 cursor-pointer"> View</Link> | <span className="text-red-600 cursor-pointer">Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminTeacherTable

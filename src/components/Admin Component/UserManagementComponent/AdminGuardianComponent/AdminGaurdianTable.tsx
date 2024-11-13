// import React from 'react'

import { NavLink } from "react-router-dom"

function AdminGaurdianTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black"> ID</th>
              <th className="px-4 py-2 border border-black"> Name</th>
              <th className="px-4 py-2 border border-black">Email</th>
              <th className="px-4 py-2 border border-black">Relation</th>
              <th className="px-4 py-2 border border-black">Joining Date</th>
              <th className="px-4 py-2 border border-black">Student</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Father', joiningDate: '20-01-2022', coursesEnrolled: 2 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Father', joiningDate: '20-01-2022', coursesEnrolled: 2 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Father', joiningDate: '20-01-2022', coursesEnrolled: 2 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Father', joiningDate: '20-01-2022', coursesEnrolled: 2 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Father', joiningDate: '20-01-2022', coursesEnrolled: 2 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Father', joiningDate: '20-01-2022', coursesEnrolled: 2 },
              { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Father', joiningDate: '20-01-2022', coursesEnrolled: 2 },
             
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                <td className="px-4 py-2 border border-black">{row.coursesEnrolled}</td>
                <td className="px-4 py-2 border border-black">
                 <NavLink to='/GaurdianInformation' className="text-pink-500 cursor-pointer"> View</NavLink> | <span className="text-red-600 cursor-pointer">Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminGaurdianTable

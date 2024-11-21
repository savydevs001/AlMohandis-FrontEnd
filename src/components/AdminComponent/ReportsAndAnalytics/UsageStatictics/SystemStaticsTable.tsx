// import React from 'react'

import { NavLink } from "react-router-dom"

function SystemStaticsTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Day</th>
              <th className="px-4 py-2 border border-black">Total Requests</th>
              <th className="px-4 py-2 border border-black">Peak Time</th>
              <th className="px-4 py-2 border border-black">Api Calls</th>
              <th className="px-4 py-2 border border-black">Active Students</th>
              <th className="px-4 py-2 border border-black">Average Load</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              { id: 'Day 1', name: '20,000', email: '4:00PM', typeClass: '8000', joiningDate: '50', },
              
             
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                <td className="px-4 py-2 border border-black">
                 <NavLink to='' className="">75%</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SystemStaticsTable

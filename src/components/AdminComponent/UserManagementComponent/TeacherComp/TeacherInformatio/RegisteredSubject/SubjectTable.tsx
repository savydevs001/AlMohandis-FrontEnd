// import React from 'react'
import { NavLink } from 'react-router-dom'

function RegisteredSubjectTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Subject Name </th>
              <th className="px-4 py-2 border border-black">Students</th>
              <th className="px-4 py-2 border border-black">Class</th>
              <th className="px-4 py-2 border border-black">Schedule On</th>
              <th className="px-4 py-2 border border-black">Duration</th>
              <th className="px-4 py-2 border border-black">Student List</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { id: 'Basic of Python', name: '230', email: '21-cs', typeClass: 'Monday (12:00PM)', joiningDate: '1 hr 30 min'},
              { id: 'Basic of Python', name: '230', email: '21-cs', typeClass: 'Monday (12:00PM)', joiningDate: '1 hr 30 min'},
              { id: 'Basic of Python', name: '230', email: '21-cs', typeClass: 'Monday (12:00PM)', joiningDate: '1 hr 30 min'},
              { id: 'Basic of Python', name: '230', email: '21-cs', typeClass: 'Monday (12:00PM)', joiningDate: '1 hr 30 min'},
              { id: 'Basic of Python', name: '230', email: '21-cs', typeClass: 'Monday (12:00PM)', joiningDate: '1 hr 30 min'},
              { id: 'Basic of Python', name: '230', email: '21-cs', typeClass: 'Monday (12:00PM)', joiningDate: '1 hr 30 min'},
         
              
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
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

export default RegisteredSubjectTable

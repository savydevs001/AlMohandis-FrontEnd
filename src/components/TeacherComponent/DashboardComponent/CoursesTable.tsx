// import React from 'react'

function CoursesTable() {
  return (
      <div className="overflow-x-auto">
      <table className="min-w-full text-sm rounded-lg shadow-lg h-fit bg-neutral-100">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-black">Course Name</th>
            <th className="px-4 py-3 text-left text-black">Students Enrolled</th>
            <th className="px-4 py-3 text-left text-black">Next Lesson</th>
            <th className="px-4 py-3 text-left text-black">Assistant</th>
            <th className="px-4 py-3 text-left text-black">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 text-sm">Course 1</td>
            <td className="px-4 py-3">24</td>
            <td className="px-4 py-3">Lesson ABC</td>
            <td className="px-4 py-3">Junaid</td>
            <td className="px-4 py-3">Draft</td>
          </tr>
          <tr className="">
            <td className="px-4 py-3">Course 2</td>
            <td className="px-4 py-3">15</td>
            <td className="px-4 py-3">Lesson XYZ</td>
            <td className="px-4 py-3">Sara</td>
            <td className="px-4 py-3">Pending</td>
          </tr>
          <tr className="">
            <td className="px-4 py-3">Course 3</td>
            <td className="px-4 py-3">15</td>
            <td className="px-4 py-3">Lesson XYZ</td>
            <td className="px-4 py-3">Sara</td>
            <td className="px-4 py-3">Pending</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  )
}

export default CoursesTable

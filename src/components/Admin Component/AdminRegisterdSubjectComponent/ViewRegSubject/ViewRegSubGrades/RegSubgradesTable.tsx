// import React from 'react'

function RegSubgradesTable() {
  return (
      <div className="w-full">
      <div className="mt-3">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Name</th>
              <th className="px-4 py-2 border border-black">Total Marks</th>
              <th className="px-4 py-2 border border-black">Obtained Marks</th>
              <th className="px-4 py-2 border border-black">Grades</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { exam: 'john Smith', total: 100, obtained: 90, grades: 'A' },
              { exam: 'john Smith', total: 100, obtained: 90, grades: 'A' },
              { exam: 'john Smith', total: 100, obtained: 90, grades: 'A' },
              { exam: 'john Smith', total: 100, obtained: 90, grades: 'A' },
              { exam: 'john Smith', total: 100, obtained: 90, grades: 'A' },
              { exam: 'john Smith', total: 100, obtained: 90, grades: 'A' },
              { exam: 'john Smith', total: 100, obtained: 90, grades: 'A' },

            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.exam}</td>
                <td className="px-4 py-2 border border-black">{row.total}</td>
                <td className="px-4 py-2 border border-black">{row.obtained}</td>
                <td className="px-4 py-2 border border-black">{row.grades}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RegSubgradesTable

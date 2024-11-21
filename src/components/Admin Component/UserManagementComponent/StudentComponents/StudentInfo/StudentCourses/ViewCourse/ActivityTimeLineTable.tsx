// import React from 'react'

function ActivityTimeLineTable() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Date</th>
              <th className="px-4 py-2 border border-black">Activity</th>
              <th className="px-4 py-2 border border-black">Chapter</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
                  { id: '20-03-2024', name: 'Lesson Watched', assistant: 'Watched "Lesson 4: Overview of Data Science" of Chapter 1.' },
               
              
              
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.assistant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
  )
}

export default ActivityTimeLineTable

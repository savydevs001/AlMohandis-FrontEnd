// import React from 'react'

function StudentCoursesButtons() {
  return (
    <div className="flex items-center gap-6 py-6">
            <button className="px-4 py-3 text-lg font-semibold text-white rounded-md bg-primary">Total <span className="px-3 text-xl">08</span></button>
            <button className="px-4 py-3 text-lg font-semibold text-white rounded-md bg-[#098E02]">Completed <span className="px-3 text-xl">03</span></button>
            <button className="px-4 py-3 text-lg font-semibold text-white rounded-md bg-[#0900FF]">In Progress <span className="px-3 text-xl">04</span></button>
            <button className="px-4 py-3 text-lg font-semibold text-white rounded-md bg-[#C60404]">Failed <span className="px-3 text-xl">01</span></button>
    </div>
  )
}

export default StudentCoursesButtons

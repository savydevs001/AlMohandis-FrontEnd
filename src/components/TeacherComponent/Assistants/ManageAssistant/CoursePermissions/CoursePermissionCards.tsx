// import React from 'react'

function CoursePermissionCards() {
  return (
    <div className="flex gap-3">
      <input type="checkbox" className='w-3 h-3 bg-[#00A200] rounded-full' />
      <div className="p-3 space-y-1 bg-white border rounded-lg border-primary">
            <h1 className="font-semibold">Course Name</h1>
            <p>Published on 25-09-2023 10:00PM</p>
      </div>
    </div>
  )
}

export default CoursePermissionCards

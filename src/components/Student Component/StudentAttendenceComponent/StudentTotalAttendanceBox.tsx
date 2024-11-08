// import React from 'react'

function StudentTotalAttendanceBox() {
  return (
    <div className="flex items-center gap-4">
      <div className="p-2 bg-white border rounded-lg shadow-sm w-fit">
            <h1 className="font-semibold">Total Lessons</h1>
            <p className="text-lg font-medium text-primary">12</p>
      </div>
      <div className="p-2 bg-white border rounded-lg shadow-sm w-fit">
            <h1 className="font-semibold">Present</h1>
            <p className="text-lg font-medium text-primary">10</p>
      </div>
      <div className="p-2 bg-white border rounded-lg shadow-sm w-fit">
            <h1 className="font-semibold">Absent</h1>
            <p className="text-lg font-medium text-red-600">10</p>
      </div>
    </div>
  )
}

export default StudentTotalAttendanceBox

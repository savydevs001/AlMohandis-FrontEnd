// import React from 'react'

function ViewAttendenceSheet() {
  return (
    <div className="flex items-center justify-between bg-white border shadow-sm border-[#99999949] rounded-md p-3">
      <div >
            <h5 className="text-[#888] font-medium">Student Name</h5>
      </div>
      <div className="flex items-center gap-3">
            <p className="text-[#11C111]">Present : <span className="text-black">12</span></p>
            <span className="text-[#AFAFAF]">|</span>
            <p className="text-[#FF0000]">Absent : <span className="text-black">12</span></p>
      </div>
    </div>
  )
}

export default ViewAttendenceSheet

// import React from 'react'

import EnrolledStudent from "./EnrolledStudent"

function PublishedCourse() {
  return (
    <div className="flex flex-col items-start w-full gap-5 lg:items-center lg:flex-row">
      <div className="flex items-center gap-5  lg:w-[70%] w-full">
      <EnrolledStudent title="Published On " count={20-3-2023}  width="70%"/>
      <EnrolledStudent title="Duration " count={12}  width="70%"/>
      </div>
      <div className="lg:w-[30%] w-[50%]">
      <div className="p-3 space-y-1 bg-white rounded-lg shadow-sm ">
          <h1 className="text-xl font-normal leading-snug">Attachment</h1>
          <h5 className="text-lg text-pTag">No Attachment</h5>
        </div>
      </div>
    </div>
  )
}

export default PublishedCourse

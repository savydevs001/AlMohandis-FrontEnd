// import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";

function StudentRating() {
  return (
    <div className="mt-4 ">
      <div className="flex flex-col lg:items-center lg:flex-row">
            <p className="lg:w-[70%] w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quisquam quos ut illum obcaecati odit in animi velit dicta voluptates. Facere porro maiores cumque voluptas omnis aut, eaque necessitatibus similique!</p>
            <div className="lg:w-[35%] bg-white shadow p-3 rounded-lg space-y-2">
                  <h3 className="font-semibold text-md">Ratings and Reviews</h3>
                  <div className="flex items-center gap-1">
                  <FaStar className="text-sm text-secondary" />
                  <FaStar className="text-sm text-secondary" />
                  <FaStar className="text-sm text-secondary" />
                  <FaStar className="text-sm text-secondary" />
                  <FaStar className="text-sm text-secondary" />
      <p className="px-1 text-xs text-white rounded-lg bg-primary">3.0</p>
                  </div>
            </div>
      </div>

      <div className="">
           <div className="flex flex-col w-full gap-4 p-2 mt-4 text-white rounded-md bg-primary">
           <h3 className="flex items-center gap-6">
            <MdAssignment/>
            <span>Lesson 1 Assignment</span>
            </h3>
           </div>
          <div className="flex flex-col w-full gap-4 p-2 mt-4 text-white rounded-md bg-primary">
          <h3 className="flex items-center gap-6 ">
            <MdAssignment/>
            <span>Lesson 1 Exam</span>
            </h3>
          </div>
      </div>
    </div>
  )
}

export default StudentRating

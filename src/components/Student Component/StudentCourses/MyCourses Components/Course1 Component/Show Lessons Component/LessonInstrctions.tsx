// import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";

function LessonInstrctions() {
  return (
    <div className="mt-3 text-xs border border-black">
      <div className="flex flex-col items-center p-2 space-y-1">
            <p>Lesson 1 video <span>30 Minute</span></p>
            <div className="flex items-center gap-2 text-green-400">
            <FaRegCheckCircle className="text-white bg-green-400 rounded-full" />
<p>Watch on time</p>
            </div>
            <p>1 Assignment : <span className="text-pTag">Submitted</span></p>
      </div>
      <hr className="border-pTag w-[90%] mx-auto" />
      <div className="flex flex-col items-center p-2 space-y-1">
            <p>Lesson 2 Audio <span>30 Minute</span></p>
            <div className="flex items-center gap-2 text-yellow-400">
            <BiSolidError className="text-yellow-400 rounded-full" />
<p>Deadline in 2 days</p>
            </div>
            <p>1 Assignment : <span className="text-pTag">Submitted</span></p>
      </div>
      <hr className="border-pTag w-[90%] mx-auto"/>
      <div className="flex flex-col items-center p-2 space-y-1">
            <p>Lesson 2 Audio <span>30 Minute</span></p>
            <div className="flex items-center gap-2 text-red-600">
            <IoCloseCircleSharp className="text-red-600 rounded-full" />
<p>Missed Deadline</p>
            </div>
            <p>1 Assignment : <span className="text-pTag">Submitted</span></p>
      </div>
    </div>
  )
}

export default LessonInstrctions

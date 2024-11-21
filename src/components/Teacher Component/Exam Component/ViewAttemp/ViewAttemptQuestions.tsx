// import React from 'react'
import { MdOutlineModeEditOutline } from "react-icons/md";

function ViewAttemptQuestions() {
  return (
    <div className="lg:w-[45%] w-full bg-white p-4 space-y-3 rounded-xl">
  <div>
  <div className="flex items-center justify-between ">
            <h1 className="text-lg font-semibold">Question 1</h1>
            <MdOutlineModeEditOutline />
      </div>
      <p className="text-lg">What is the first Question</p>
  </div>
      <div className="flex items-center gap-4">
            <input type="radio" />
            <p className="text-lg">Option 1</p>
      </div>
    </div>
  )
}

export default ViewAttemptQuestions

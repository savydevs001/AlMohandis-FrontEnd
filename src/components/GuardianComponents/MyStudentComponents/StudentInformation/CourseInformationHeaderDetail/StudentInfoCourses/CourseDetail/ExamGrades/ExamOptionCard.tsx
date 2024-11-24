// import React from 'react'
import { MdOutlineModeEdit } from "react-icons/md";

function ExamOptionCard() {
  return (
    <div className="px-4 py-2 space-y-3 bg-white border rounded-lg shadow-sm">
<div className="space-y-1">
<div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Question 1</h1>
            <MdOutlineModeEdit />
      </div>
      <p>What is the first Question</p>
</div>
      <div className="flex items-center gap-3">
            <input type="radio" className="w-3 h-3 text-primary" />
            <p className="text-lg">option 2</p>
      </div>
    </div>
  )
}

export default ExamOptionCard

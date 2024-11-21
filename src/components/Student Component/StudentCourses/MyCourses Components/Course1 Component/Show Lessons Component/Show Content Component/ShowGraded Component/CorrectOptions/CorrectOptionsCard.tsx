// import React from 'react'
import { LuPencil } from "react-icons/lu";

function CorrectOptionsCard() {
  return (
    <div className="flex items-center mt-4 w-[100%]">
      <div className="p-4 bg-white shadow-sm w-[95%] rounded-xl">
<div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Question 1</h1>
      <LuPencil />
</div>
<h5 className="mt-2 text-lg">What is the first Question?</h5>

<div className="flex items-center gap-3 mt-6">
      <span className="text-lg font-semibold text-green-400">Correct Option  :</span>
      <div className="flex items-center gap-3">
            <input className="text-primary" type="radio" />
            <span className="text-lg">Option 1</span>
      </div>
</div>
      </div>
    </div>
  )
}

export default CorrectOptionsCard

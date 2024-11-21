// import React from 'react'

import CorrectOptionsCard from "./OptionsCard"

function CorrectOptionLayout() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl font-semibold">Quiz Title</h1>

      <div className="mt-10">
            <h3 className="text-2xl font-bold text-[#333]"><span className="text-4xl text-primary">07</span>/10</h3>
            <div className="grid items-center w-full grid-cols-1 lg:grid-cols-3 md:grid-col-2">
                  <CorrectOptionsCard/>
                  <CorrectOptionsCard/>
                  <CorrectOptionsCard/>
                  <CorrectOptionsCard/>
            </div>
      </div>
    </div>
  )
}

export default CorrectOptionLayout

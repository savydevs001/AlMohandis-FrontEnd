// import React from 'react'
import { GoClock } from "react-icons/go";

function ShowLessonHeader({head}:any) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-xl font-semibold">{head}</h1>
      <p className="flex items-center gap-1 text-xs">
            <span><GoClock /></span>
            1 hours 30 minutes
      </p>
    </div>
  )
}

export default ShowLessonHeader

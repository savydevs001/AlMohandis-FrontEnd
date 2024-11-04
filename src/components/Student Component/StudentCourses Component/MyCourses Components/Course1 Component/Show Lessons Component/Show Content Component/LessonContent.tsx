// import React from 'react'

import ChapterDropdown from "./ChapterDropDown"
import Contents from "./Contents"
import ShowNextVideoContent from "./ShowNextVideoContent"

function LessonContent() {
  return (
    <div>
     <div className="space-y-6">
      <Contents/>
      <ShowNextVideoContent/>
      <ChapterDropdown/>
     </div>
    </div>
  )
}

export default LessonContent

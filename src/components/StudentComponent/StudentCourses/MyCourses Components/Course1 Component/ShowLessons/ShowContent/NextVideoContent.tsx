// import React from 'react'

import ContentVideo from "./ContentVideo"

function ShowNextVideoContent() {
  return (
      <div className="w-full bg-white h-[30%] space-y-3 shadow-md p-3">
      <h1 className="text-xl font-semibold">Next Video</h1>
      <div className="max-h-[280px] overflow-y-auto space-y-3"> {/* Set max height and enable scrolling */}
        <ContentVideo title="Title 1" />
        <ContentVideo title="Title 1" />
        <ContentVideo title="Title 1" />
        <ContentVideo title="Title 1" />
        <ContentVideo title="Title 1" />
        <ContentVideo title="Title 1" />
        {/* Add more ContentVideo components as needed */}
      </div>
      <div>
            
      </div>
    </div>
  )
}

export default ShowNextVideoContent

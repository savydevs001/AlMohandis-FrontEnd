// import React from 'react'

import Comment from "./Comment"

function VideoCommets() {
  return (
    <div className="w-full ">
    <div className="flex items-center justify-between w-full px-4 border rounded-lg border-pTag">
      <input className="px-2 overflow-hidden border-none outline-none bg-none" type="text" placeholder="Add Comment" />
      <button className="px-2 py-1 text-white bg-primary">Comment</button>
    </div>
<div>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
</div>
    </div>
  )
}

export default VideoCommets

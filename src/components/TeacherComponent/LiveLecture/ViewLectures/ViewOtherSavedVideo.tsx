// import React from 'react'

function ViewOtherSavedVideo() {
  return (
    <div className="flex items-start gap-3">
      <div className=" w-[55%]">
      <iframe
        className="w-full h-[17vh] rounded-xl"
        src="https://www.youtube.com/embed/tLh9T51zvpQ?si=AEZQGorsFEJid9Mt"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div className="space-y-1">
            <h3 className="font-semibold text-black text-md">Title</h3>
            <p className="text-xs text-pTag">172.9k views</p>
            <p className="text-xs text-pTag">Published on <span className="font-semibold">20-03-2025</span></p>
      </div>
    </div>
  )
}

export default ViewOtherSavedVideo

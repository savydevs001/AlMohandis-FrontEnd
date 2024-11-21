// import React from 'react'
import { FaBookmark } from "react-icons/fa6"

interface ContentVideoProps {
  title: string; // Title text for the p tag
}

function ContentVideo({ title }: ContentVideoProps) {
  return (
    <div className="flex items-start justify-between hover:bg-[#3E899224] p-2 hover:border-l-4 hover:border-l-primary transition-all ease duration-75">
      <div className="flex items-start gap-5">
        <div className="">
          <iframe
            width="100"
            height="60"
            src="https://www.youtube.com/embed/MxEtxo_AaZ4?si=wnv7bglWKzO9An29"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-0 leading-tight">
          <p>{title}</p> {/* Use the title prop here */}
          <span className="text-sm text-primary">3:00</span>
        </div>
      </div>
      <div>
        <FaBookmark className="text-secondary" />
      </div>
    </div>
  )
}

export default ContentVideo

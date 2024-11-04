// import React from 'react'
import { IoVideocam } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { SiLibreofficewriter } from "react-icons/si";
import { NavLink } from "react-router-dom";

function ShowChapter() {
  return (
    <div className="mt-4 space-y-5">
   <NavLink to={'/videoLesson'} >
   <div className="flex items-center gap-4">
    <IoVideocam />
<div className="">
      <h4>Lesson 1</h4>
      <p className="flex items-center gap-2 text-xs text-[#7C7C7C]">Video <li>30 minutes</li></p>
</div>
    </div>
   </NavLink>
    <div className="flex items-center gap-4">
    <IoIosMusicalNotes />
<div className="">
      <h4>Lesson 1</h4>
      <p className="flex items-center gap-2 text-xs text-[#7C7C7C]">Audio <li>30 minutes</li></p>
</div>
    </div>
    <div className="flex items-center gap-4">
    <GrAttachment />
<div className="">
      <h4>Attachment 1</h4>
      <p className="flex items-center gap-2 text-xs text-[#7C7C7C]">Type of Attachment</p>
</div>
    </div>
    <div className="flex items-center gap-4">
    <SiLibreofficewriter />
<div className="">
      <h4>Assignment 1</h4>
      <p className="flex items-center gap-2 text-xs text-[#7C7C7C]">Submitted - Review</p>
</div>
    </div>
    <div className="flex items-center gap-4">
    <SiLibreofficewriter />
<div className="">
      <h4>Exam 1</h4>
      <p className="flex items-center gap-2 text-xs text-[#7C7C7C]">20-12-2023</p>
</div>
    </div>
    </div>
  )
}

export default ShowChapter

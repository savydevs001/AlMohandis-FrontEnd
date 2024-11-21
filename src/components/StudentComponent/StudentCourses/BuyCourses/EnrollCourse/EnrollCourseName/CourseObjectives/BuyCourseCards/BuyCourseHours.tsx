// import React from 'react'
import { FaLayerGroup } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbRectangleVertical } from "react-icons/tb";

function BuyCourseHours() {
  return (
    <div className="px-2">
      <hr className="border-pTag" />
      <div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-6">
<FaLayerGroup className="text-xl text-pTag" />
<p className="">Chapters</p>
</div>
      <h5 className="font-semibold text-primary">6</h5>
      </div>
      <hr className="mt-2 border-pTag" />
      <div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-6">
<MdOutlineWatchLater className="text-xl text-pTag" />
<p className="">Hours</p>
</div>
      <h5 className="font-semibold text-primary">20 Hours</h5>
      </div>
      <hr className="mt-2 border-pTag" />
      <div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-6">
<TbRectangleVertical className="text-xl text-pTag" />
<p className="">Level</p>
</div>
      <h5 className="font-semibold text-primary">Advance</h5>
      </div>
      <hr className="mt-2 border-pTag" />
    </div>
  )
}

export default BuyCourseHours

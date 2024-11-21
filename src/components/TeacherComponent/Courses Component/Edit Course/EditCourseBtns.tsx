// import React from 'react'

import { NavLink } from "react-router-dom"

function EditCourseBtns() {
  return (
    <div className="mt-4 space-x-4 space-y-3">
     <NavLink to={'/courses'} >
     <button className="px-4 py-2 font-semibold text-white rounded-md bg-primary">Send for Review</button>
     </NavLink>
     <NavLink to={'/draft'}>
     <button className="px-4 py-2 font-semibold text-white rounded-md bg-primary">Save Draft</button>
     </NavLink>
      <button className="px-4 py-2 font-semibold border rounded-md text-primary border-primary">Cancel</button>
    </div>
  )
}

export default EditCourseBtns

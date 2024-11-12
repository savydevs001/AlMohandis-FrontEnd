// import React from 'react'

import AdminInputField from "./AdminInputField"

function AdminLandingReviews() {
  return (
      <div className="mt-4 mb-4">
      <div className="flex items-center gap-4">
            <input className="w-4 h-4 text-green-400 bg-green-400 rounded-full" type="checkbox" />
            <h5 className="text-lg font-semibold">Reviews</h5>
      </div>
            <h1 className="text-xl font-semibold text-center text-primary">Reviews</h1>
<div className="space-y-2">
      <AdminInputField label="Title" placeholder="Enter Popular Courses Title"/>
      <AdminInputField label="Description" placeholder="Enter Popular Courses Description"/>
   
</div>
    </div>
  )
}

export default AdminLandingReviews

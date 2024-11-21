// import React from 'react'

function CreateManagementGroupSidebar() {
  return (
      <div className="h-full p-4 bg-gray-100 lg:w-[35%]">
      <div className="flex flex-col mb-4 space-y-1">
      <label htmlFor="">Title</label>
      <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Write title of the Subject" />
      </div>
      <h2 className="mb-4 text-lg font-semibold text-teal-700">Items</h2>
      <ul className="space-y-2">
        <li className="text-gray-700 cursor-pointer">Management Group 1</li>
        <li className="text-gray-700 cursor-pointer">Management Group 2</li>
      </ul>
    </div>
  )
}

export default CreateManagementGroupSidebar

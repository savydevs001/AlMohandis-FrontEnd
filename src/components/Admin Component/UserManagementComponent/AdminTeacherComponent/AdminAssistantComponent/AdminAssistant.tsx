// import React from 'react'

import AdminAssistantCard from "./AdminAssistantCard"

function AdminAssistant() {
  return (
    <div>
      <div className="flex items-center justify-end">
            <button className="px-4 py-1 text-lg font-semibold text-white rounded-md bg-primary">Add Assistant</button>
      </div>
      <div className="grid grid-cols-1 p-4 mt-6 mb-6 lg:p-8 gap-7 md:grid-cols-2 lg:grid-cols-3">
      <AdminAssistantCard/>
      <AdminAssistantCard/>
      <AdminAssistantCard/>
      <AdminAssistantCard/>
      <AdminAssistantCard/>
      <AdminAssistantCard/>
      </div>
    </div>
  )
}

export default AdminAssistant

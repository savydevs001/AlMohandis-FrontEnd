// import React from 'react'

import AdminFileInput from "./AdminFileInput"
import AdminInputField from "./AdminInputField"

function AdminLandingFeatures() {
  return (
    <div className="mt-6">
      <h1 className="text-xl font-semibold text-center text-primary">How are we different</h1>
      <AdminInputField label="Description" placeholder= 'Add Description....'/>

      <div className="mt-4">
            <h1 className="text-xl font-semibold text-center">Feature-1</h1>
            <div className="space-y-2">
                  <div className="flex items-center w-full gap-3">
                  <AdminInputField   label="Title" placeholder="Enter Title...."/>
                  <AdminFileInput label="Icon"/>
                  </div>
                  
                  <AdminInputField   label="Title" placeholder="Enter Title...."/>
            </div>
      </div>
      <div className="mt-4">
            <h1 className="text-xl font-semibold text-center">Feature-2</h1>
            <div className="space-y-2">
                  <div className="flex items-center w-full gap-3">
                  <AdminInputField   label="Title" placeholder="Enter Title...."/>
                  <AdminFileInput label="Icon"/>
                  </div>
                  
                  <AdminInputField   label="Title" placeholder="Enter Title...."/>
            </div>
      </div>
      <div className="mt-4">
            <h1 className="text-xl font-semibold text-center">Feature-3</h1>
            <div className="space-y-2">
                  <div className="flex items-center w-full gap-3">
                  <AdminInputField   label="Title" placeholder="Enter Title...."/>
                  <AdminFileInput label="Icon"/>
                  </div>
                  
                  <AdminInputField   label="Title" placeholder="Enter Title...."/>
            </div>
      </div>
      <div className="mt-4">
            <h1 className="text-xl font-semibold text-center">Feature-4</h1>
            <div className="space-y-2">
                  <div className="flex items-center w-full gap-3">
                  <AdminInputField   label="Title" placeholder="Enter Title...."/>
                  <AdminFileInput label="Icon"/>
                  </div>
                  
                  <AdminInputField   label="Title" placeholder="Enter Title...."/>
            </div>
      </div>
    </div>
  )
}

export default AdminLandingFeatures

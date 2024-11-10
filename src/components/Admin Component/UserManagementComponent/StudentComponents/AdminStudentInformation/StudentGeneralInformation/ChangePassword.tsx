// import React from 'react'

import { useState } from "react";

function ChangePassword() {
      const [showPasswordFields, setShowPasswordFields] = useState(false);

      const togglePasswordFields = () => {
        setShowPasswordFields(!showPasswordFields);
      };
    

  return (
    <div>
       <div className="mt-4">
        <button
          className="px-4 py-1 font-semibold border rounded-md border-primary text-primary"
          onClick={togglePasswordFields}
        >
          Change Password
        </button>
        {showPasswordFields && (
          <div className="mt-4 space-y-3 border border-gray-300 rounded-lg p-4 bg-[#f9f9f9]">
            <div className="flex flex-col gap-2 lg:items-center lg:gap-8 lg:flex-row">
              <label className="font-semibold text-[#333] lg:w-[40%]" htmlFor="currentPassword">Current Password*</label>
              <input
                id="currentPassword"
                className="w-full max-w-md py-2 border rounded-lg border-slate-300"
                type="password"
                placeholder="Enter current password"
              />
            </div>
            <div className="flex flex-col gap-2 lg:items-center lg:gap-8 lg:flex-row">
              <label className="font-semibold text-[#333] lg:w-[40%]" htmlFor="newPassword">New Password*</label>
              <input
                id="newPassword"
                className="w-full max-w-md py-2 border rounded-lg border-slate-300"
                type="password"
                placeholder="Enter new password"
              />
            </div>
            <div className="flex flex-col gap-2 lg:items-center lg:gap-8 lg:flex-row">
              <label className="font-semibold text-[#333] lg:w-[40%]" htmlFor="confirmPassword">Confirm Password*</label>
              <input
                id="confirmPassword"
                className="w-full max-w-md py-2 border rounded-lg border-slate-300"
                type="password"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChangePassword

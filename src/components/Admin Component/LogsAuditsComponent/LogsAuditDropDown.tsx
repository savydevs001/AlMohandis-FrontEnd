// import React from 'react'

function LogsAuditDropDown() {
  return (
<div className="flex flex-col justify-between lg:items-center lg:flex-row">
<div className="flex items-center lg:w-[70%] w-full gap-4 lg:gap-8">
      <div className="flex flex-col space-y-1 lg:w-[35%] w-[50%]">
      <label className="font-semibold" htmlFor="">User Role</label>
        <select className="w-[100%] rounded-lg py-2 border-slate-300" name="" id="">
              <option value="">All</option>
              <option value="">Students</option>
              <option value="">Teachers</option>
              <option value="">Guardians</option>
              <option value="">Admins</option>
              <option value="">Assistants</option>
              {/* <option value="">Select Category</option> */}
        </select>
      </div>
      <div className="flex flex-col space-y-1 lg:w-[35%] w-[50%]">
      <label className="font-semibold" htmlFor="">Status</label>
        <select className="w-[100%] rounded-lg py-2 border-slate-300" name="" id="">
              <option value="">All</option>
              <option value="">Course Creation</option>
              <option value="">User Role Change</option>
              <option value="">Payment Processing</option>
        </select>
      </div>
      </div>
      <div className="mt-3">
          <input  type="date" className="rounded-md"/>
        </div>
</div>
  )
}

export default LogsAuditDropDown

// import React from 'react'

function UserActivityDropDown() {
  return (
    <div className="flex items-center justify-between px-5">
      <div className="w-[40%]">
            <select className="lg:w-[60%] w-[100%] rounded-md" name="" id="">
                  <option value="">All</option>
                  <option value="">Student</option>
                  <option value="">Teacher</option>
                  <option value="">Guardian</option>
                  <option value="">Assistant</option>
                  <option value="">Admin</option>
            </select>
      </div>
      <input type="date" className="rounded-md"/>
    </div>
  )
}

export default UserActivityDropDown

// import React from 'react'

function DashboardSysteNotification() {
  return (
      <div className="lg:w-[45%] w-full bg-white shadow-sm p-2 space-y-3 rounded-lg">
      <h1 className="text-lg font-semibold">System Notification</h1> 
      <div className="flex items-center gap-3">
       <span className="text-xs text-pTag">18/09/2024</span>
       <p className="font-semibold text-pTag">System maintenance scheduled.</p>
      </div>
      <div className="flex items-center gap-3">
       <span className="text-xs text-pTag">18/09/2024</span>
       <p className="font-semibold text-pTag">Course 'Algebra 101' has been completed by 5 students</p>
      </div>
      <div className="flex items-center gap-3">
       <span className="text-xs text-pTag">18/09/2024</span>
       <p className="font-semibold text-pTag">Teacher Sarah Smith added a new lesson to 'Physics Basics'</p>
      </div>
      <div className="flex items-center gap-3">
       <span className="text-xs text-pTag">18/09/2024</span>
       <p className="font-semibold text-pTag">Teacher Sarah Smith added a new season of Course “ Basics of Databse”</p>
      </div>
     </div>
  )
}

export default DashboardSysteNotification

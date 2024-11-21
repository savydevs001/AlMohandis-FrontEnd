// import React from 'react'

function TotalActiveUserCard() {
  return (
    <div className="lg:w-[60%] w-full border-2 rounded-md p-6 border-primary">
      <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-primary">Total Active Users</h3>
            <h4 className="text-xl font-semibold text-primary">3148</h4>
      </div>
    <div className="mt-4 space-y-2">
    <div className="flex items-center justify-between">
            <h3 className="text-lg font-normal">Total Active Student</h3>
            <h4 className="text-xl font-semibold">1630</h4>
      </div>
    <div className="flex items-center justify-between">
            <h3 className="text-lg font-normal">Total Active Teacher</h3>
            <h4 className="text-xl font-semibold">506</h4>
      </div>
    <div className="flex items-center justify-between">
            <h3 className="text-lg font-normal">Total Active Guardians</h3>
            <h4 className="text-xl font-semibold">706</h4>
      </div>
    <div className="flex items-center justify-between">
            <h3 className="text-lg font-normal">Total Active Assistants</h3>
            <h4 className="text-xl font-semibold">329</h4>
      </div>
    <div className="flex items-center justify-between">
            <h3 className="text-lg font-normal">Total Active Admins</h3>
            <h4 className="text-xl font-semibold">5</h4>
      </div>
    </div>
    </div>
  )
}

export default TotalActiveUserCard

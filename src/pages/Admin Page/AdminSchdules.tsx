// import React from 'react'
import AdminSidebar from '../../components/AdminComponent/AdminSidebar'
import Schdules from '../../components/Teacher Component/Schudele Component/Schdules'

function AdminSchdules() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
    <AdminSidebar/>
    
    <div className="flex-1 mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
      <Schdules />
    </div>
  </div>
  )
}

export default AdminSchdules




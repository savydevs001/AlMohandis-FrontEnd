// import React from 'react'
import Schdules from '../../components/Teacher Component/Schudele Component/Schdules'
import Sidebar from '../../components/Teacher Component/Sidebar'

function Schudle() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
    <Sidebar/>
    
    <div className="flex-1 mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
      <Schdules />
    </div>
  </div>
  )
}

export default Schudle

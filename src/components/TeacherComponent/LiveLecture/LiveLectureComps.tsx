// import React from 'react'
import { HiOutlineSignal } from "react-icons/hi2";


import UserManagementHeader from "../../AdminComponent/UserManagementComponent/UserManagementHeader"
import LiveLectureCards from "./LiveLectureCard";
import { NavLink } from "react-router-dom";

function LiveLectureComps() {
  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Live Lectures"/>
      <div className="flex items-center justify-end">
        <NavLink to='StartLiveLecture'>
            <button className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-lg bg-primary">Start Live
            <HiOutlineSignal />     
                   </button>
                   </NavLink>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 sm:grid-cols-2">
        <LiveLectureCards showButton={false}/>
        <LiveLectureCards showButton={false}/>
        <LiveLectureCards showButton={false}/>
        <LiveLectureCards showButton={false}/>
        <LiveLectureCards showButton={false}/>
        <LiveLectureCards showButton={false}/>
      </div>
    </div>
  )
}

export default LiveLectureComps

// import React from 'react'

import GradeNowShowComp from "./GradeNowComp"
import AdminSidebar from "../../../AdminComponent/AdminSidebar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
function GradeNow() {
  const [subId,setSubId]=useState<string>("")
  const params=useParams<{ subId: string }>()
  useEffect(() => {
    setSubId(params.subId || ""); // Provide a fallback value if params.subId is undefined
  }, [params.subId]);
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      
      <AdminSidebar></AdminSidebar>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        {/* <CardContent /> */}
       <GradeNowShowComp subId={subId}/>
      </div>
    </div>
  )
}

export default GradeNow

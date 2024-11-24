// import React from 'react'


import { Route, Routes } from "react-router-dom"
import LiveLectureComps from "../../components/TeacherComponent/LiveLecture/LiveLectureComps"
import Sidebar from "../../components/TeacherComponent/Sidebar"
import StartLiveLecture from "../../components/TeacherComponent/LiveLecture/StartLiveLecture"
import ViewLectures from "../../components/TeacherComponent/LiveLecture/ViewLectures/ViewLectures"



function LiveLectures() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <Sidebar/>
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <Routes>
          <Route path="/" element={<LiveLectureComps />}/>
          <Route path="StartLiveLecture" element={<StartLiveLecture />}/>
          <Route path="ViewLectures" element={<ViewLectures />}/>
        </Routes>
      </div>
    </div>
  )
}

export default LiveLectures

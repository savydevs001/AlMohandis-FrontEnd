
// import { Route, Routes } from "react-router-dom"
import CourseMaterial from "./CourseMaterial"
import ShowActivity from "./Show Lessons Component/ShowActivity"
import ShowLessonComponents from "./Show Lessons Component/ShowLessonComponents"
import StudentDashboardHeader from "./Show Lessons Component/StudentDashboardHeader"
// import VideoLesson from "./Show Lessons Component/Lesson Vidoe Course/VideoLesson"

function Course1() {
  return (
 <div className="flex-1">
    <div>
      <StudentDashboardHeader/>
    </div>
         <div className="flex flex-col gap-4 mt-8 lg:flex-row ">
    <div className="lg:w-[25%] w-[100%] flex flex-col lg:items-center items-start bg-white shadow-md ">
      <CourseMaterial/>
    </div>
    <div className="lg:w-[50%] w-full bg-white shadow-md">
      <ShowLessonComponents/>
    </div>
    <div className="lg:w-[25%] w-full">
      <ShowActivity/>
    </div>
    </div>
    {/* <Routes>
<Route path="videoLesson" element= {<VideoLesson/>} />      
    </Routes> */}
 </div>
  )
}

export default Course1

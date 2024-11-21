import DashBoardHeader from "../../../Teacher Component/DashboardComponent/DashBoardHeader"
import DisplayCourses from "./DisplayCourses"

function MyCoursesContent() {
  return (
    <div className="flex-1 space-y-8">
     <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">My Courses</h1>
      <DashBoardHeader/>
     </div>
     <div>
     <DisplayCourses/>
     </div>
    </div>
  )
}

export default MyCoursesContent

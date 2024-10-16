import DashBoardHeader from "../../Dashboard Component/DashBoardHeader"
import Sidebar from "../../Sidebar"
import EditCourseForm from "./EditCourseForm"
import SeasonsTiles from "./SeasonsTiles"


function EditCourse() {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <Sidebar/>
      <div className="w-full p-6">
      <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Edit</h1>
          <DashBoardHeader />
        </div>
            <EditCourseForm/>
            <SeasonsTiles/>
      </div>
    </div>
  )
}

export default EditCourse

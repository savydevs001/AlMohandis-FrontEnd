
import CourseCard from "../CourseCard"
import img from "../../../../assets/apple.png"

function DisplayCourses() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
            <button className="px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary">Add New + </button>
      </div>
      <div className="space-y-4">
      <CourseCard img={img} courseTitle="Course Title" instructorName="Instructor Name" progress={75}/>
      <CourseCard img={img} courseTitle="Course Title" instructorName="Instructor Name" progress={75}/>
      <CourseCard img={img} courseTitle="Course Title" instructorName="Instructor Name" progress={75}/>
      </div>
    </div>
  )
}

export default DisplayCourses


import DashBoardHeader from "../DashboardComponent/DashBoardHeader"

function ExamsHeader() {
  return (
      <div className="w-full">
      <div className="flex items-center justify-between w-full gap-4 ">
             <h1 className="text-2xl font-bold">Exams</h1>
             <DashBoardHeader />
           </div>
      <div className="flex flex-col py-6 space-y-1">
         <label className="font-semibold" htmlFor="">Select Course</label>
         <select name="" id="" className="w-full lg:w-[30%]  rounded-md">
               <option value="">All</option>
               <option value="">Physics</option>
               <option value="">Math</option>
               <option value="">Computer</option>
         </select>
      </div>
      <div>
         {/* <Ungraded/> */}
         {/* <Grades/> */}
      </div>
       </div>
  )
}

export default ExamsHeader

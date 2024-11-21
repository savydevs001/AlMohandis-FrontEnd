import DashBoardHeader from "../DashboardComponent/DashBoardHeader";
import ViewAttemptQuestions from "./ViewAttemp/ViewAttemptQuestions";
import ViewAttemptStudents from "./ViewAttemp/ViewAttemptStudents";


function ViewAttemps() {
  return (
    <div className="w-full">
        <div className="w-full">
   <div className="flex items-center justify-between w-full gap-4 p-2 ">
          <h1 className="text-2xl font-bold">Exams</h1>
          <DashBoardHeader />
        </div>
        </div>

        <div className="flex flex-col items-center gap-5 mt-6 lg:flex-row">
         <div
         className="lg:w-[30%] w-[90%] h-fit space-y-3"
         >  
         <ViewAttemptStudents/>
         <ViewAttemptStudents/>
         <ViewAttemptStudents/>
         <ViewAttemptStudents/>
         </div>
         <div
         className="flex flex-wrap items-center justify-center flex-1 w-full gap-5 p-4 rounded-md h-fit bg-slate-200"
         >  
         <ViewAttemptQuestions/>
         <ViewAttemptQuestions/>
         <ViewAttemptQuestions/>
         <ViewAttemptQuestions/>
         <ViewAttemptQuestions/>
         <ViewAttemptQuestions/>
         <ViewAttemptQuestions/>
         </div>
        </div>
        
    </div>
  )
}

export default ViewAttemps



import TeacherEmploymetnInfo from "./TeacherEmployment"
import TeacherGneralInfoForm from "./TeacherInfoForm"

function TeacherGeneralInformationSect() {
  return (
    <div>
        <div className="flex flex-col items-center bg-white border rounded-md lg:flex-row">
      <div className="lg:w-[30%] w-full">
       <h1 className="text-lg font-semibold text-center">General Information</h1>
      </div>
      <div className="lg:w-[70%] w-full border">
<TeacherGneralInfoForm/>

      </div>
     </div>
     <TeacherEmploymetnInfo/>
    </div>
  )
}

export default 

TeacherGeneralInformationSect

// import React from 'react'
import img from '../../../../assets/book.webp'
import ChangePassword from "../../../AdminComponent/UserManagementComponent/StudentComponents/StudentInfo/GeneralInfo/ChangePassword"
import GeneralSetting from './GeneralSetting'
function AssistantInfo() {
  return (
      <div className='space-y-8'>
            <div className="flex flex-col gap-6 p-4 space-y-0 bg-white border border-black rounded-lg lg:flex-row">
        <div className="w-20 h-20 bg-red-400 rounded-full">
          <img className="w-full h-full rounded-full" src={img} alt="" />
        </div>
      <div className='space-y-1 '>
        <div className='text-xl'>
        <h1 className='font-semibold '>Assistant Name</h1>
           <p>assistant@institute.gmail.com</p>
           <p>+099839498</p>
           <p>Department of Computer Science</p>
           <p><span className='text-pTag'>Registration Number:</span> 193k98</p>
        </div>
      <ChangePassword/>
      </div>
    </div>
    <div>
    <div className="flex flex-col items-center bg-white border rounded-md lg:flex-row">
      <div className="lg:w-[30%] w-full">
       <h1 className="text-lg font-semibold text-center">General Settings</h1>
      </div>
      <div className="lg:w-[70%] w-full border p-4">
 {/* <GeneralInformationForm/> */}
<GeneralSetting/>
      </div>
     </div>
    </div>
      </div>
  )
}

export default AssistantInfo


import { AiOutlineScan } from "react-icons/ai";

import Sidebar from "../../components/TeacherComponent/Sidebar";
import AdminProfileShowComp from "../../components/AdminComponent/AdminProfileComponent/ProfileShowComp";


function TeacherProfile() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <Sidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
            <div className="flex-1">
      <AdminProfileShowComp/>
      <div className="flex flex-col items-center bg-white border rounded-md lg:flex-row ">
          {/* Account Setting Header */}
          <div className="lg:w-[30%] w-full">
            <h1 className="text-lg font-semibold text-center">Assistant</h1>
          </div>
    
          {/* Account Setting Form */}
          <div className="lg:w-[70%] w-full border p-4">
            <form className="flex flex-col space-y-3">
              {/* Notification Toggle */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Become Teacher Assistant</p>
                <AiOutlineScan />

              </div>
            </form>
          </div>
        </div>
            </div>
      </div>
    </div>
  )
}

export default TeacherProfile




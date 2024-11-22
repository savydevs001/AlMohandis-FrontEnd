import { Route, Routes } from "react-router-dom"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar"
import ShowAll from "../../components/AdminComponent/AdminGroups/ShowAll"
import ViewGroup from "../../components/AdminComponent/AdminGroups/ViewGroup"
const Groups = () => {
    return (
        <div className="flex flex-col min-h-screen lg:flex-row">
   <AdminSidebar/>
        <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
         <Routes>
          <Route path="/" element={<ShowAll/>}/>
          <Route path="group/:id" element={<ViewGroup/>}/>
         </Routes>
        </div>
  
      </div>
    )
}

export default Groups
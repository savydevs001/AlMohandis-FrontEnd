
import { NavLink, Routes, Route } from "react-router-dom"
import Ungraded from "../../components/Teacher Component/Assignment Component/Ungraded"
import Grades from "../../components/Teacher Component/Assignment Component/Grades"
import DashBoardHeader from "../../components/Teacher Component/Dashboard Component/DashBoardHeader"
import AdminSidebar from "../../components/Admin Component/AdminSidebar"

function AdminAssignment() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <div>
        <AdminSidebar />
      </div>
      
      <div className="flex-col w-full mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
        {/* Assignment Header */}
        <div className="w-full p-2 mx-auto mt-3 lg:p-0 lg:flex bg-gray-50 lg:mt-0">
          <div className="w-full">
            <div className="flex items-center justify-between w-full gap-4 p-2">
              <h1 className="text-2xl font-bold">Assignments</h1>
              <DashBoardHeader />
            </div>
            <nav className="flex items-center gap-12 mt-8">
  <li className="list-none text-tertiary">
    <NavLink 
      to="/AdminAssignment" 
      end
      className={({ isActive }) => isActive 
        ? 'text-tertiary border-b border-primary font-semibold flex items-center gap-4' 
        : 'text-tertiary flex items-center gap-4'}>
      Ungraded
    </NavLink>
  </li>
  <li className="list-none">
    <NavLink 
      to="grades" 
      className={({ isActive }) => isActive 
        ? 'text-tertiary border-b border-primary font-semibold flex items-center gap-4' 
        : 'text-tertiary flex items-center gap-4'}>
      Graded
    </NavLink>
  </li>
</nav>
            <div className="flex flex-col py-6 space-y-1">
              <label className="font-semibold" htmlFor="course-select">Select Course</label>
              <select id="course-select" className="w-full lg:w-[30%] rounded-md">
                <option value="">All</option>
                <option value="Physics">Physics</option>
                <option value="Math">Math</option>
                <option value="Computer">Computer</option>
              </select>
            </div>
          </div>
        </div>

      {/* Nested Routes */}
      <Routes>
        <Route path="/" element={<Ungraded />} />
        <Route path="grades" element={<Grades />} />
      </Routes>
</div>
    
      </div>
    
  )
}

export default AdminAssignment




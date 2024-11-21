import { Route, Routes } from "react-router-dom";
import StudentSidebar from "../../StudentSidebar";
import BuyCoursePage from "./BuyCoursePage";
import EnrollCourse from "./Enroll Course Component/EnrollCourse";

function BuyCourses() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar />
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <Routes>
          {/* Main BuyCoursePage route */}
          <Route path="/" element={<BuyCoursePage />} />
          {/* EnrollCourse route */}
          <Route path="enrollCourse" element={<EnrollCourse />} />
        </Routes>
      </div>
    </div>
  );
}

export default BuyCourses;

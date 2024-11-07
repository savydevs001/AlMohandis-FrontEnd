import { Route, Routes } from "react-router-dom";
import StudentAssignmentPageLayout from "../../components/Student Component/StudentAssignment Component/StudentAssignmentPageLayout";
import StudentSidebar from "../../components/Student Component/StudentSidebar";
import SubmitAssignment from "../../components/Student Component/StudentAssignment Component/UpComingAssignmets/SubmitAssignment";
import AssignmentGrades from "../../components/Student Component/StudentAssignment Component/AssignmentGrades/AssignmentGrades";
import ViewAssignment from "../../components/Student Component/StudentAssignment Component/ViewAssignment";
import ViewAssignmentsGrades from "../../components/Student Component/StudentAssignment Component/AssignmentGrades/ViewAssignmentsGrades";
import SubmitedAssignmentView from "../../components/Student Component/StudentAssignment Component/UpComingAssignmets/SubmitedAssignmentView";

function StudentAssignments() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar />
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <Routes>
          <Route path="/" element={<StudentAssignmentPageLayout />} />
          <Route path="SubmitAssignment" element={<SubmitAssignment />} />
          <Route path="AssignmentGrades" element={<AssignmentGrades />} />
          <Route path="ViewAssignment" element={<ViewAssignment />} />
          <Route path="ViewAssignmentGrades" element={<ViewAssignmentsGrades />} />
          <Route path="SubmitAssignmentView" element={<SubmitedAssignmentView  />} />
        </Routes>
      </div>
    </div>
  );
}

export default StudentAssignments;

import { Route, Routes } from "react-router-dom";
import StudentAssignmentPageLayout from "../../components/StudentComponent/StudentAssignment/AssignmentPage";
import StudentSidebar from "../../components/StudentComponent/StudentSidebar";
import SubmitAssignment from "../../components/StudentComponent/StudentAssignment/UpComingAssignmets/SubmitAssignment";
import AssignmentGrades from "../../components/StudentComponent/StudentAssignment/AssignmentGrades/AssignmentGrades";
import ViewAssignment from "../../components/StudentComponent/StudentAssignment/ViewAssignment";
// import ViewAssignmentsGrades from "../../components/Student Component/StudentAssignment Component/AssignmentGrades/ViewAssignmentsGrades";
// import SubmitedAssignmentView from "../../components/Student Component/StudentAssignment Component/UpComingAssignmets/SubmitedAssignmentView";


export interface Assignment {
  id: string; 
  title: string;
  description?: string; 
  dueDate?: string; 
  submitted: boolean; 
  points?: number; 
}

function StudentAssignments() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar />
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <Routes>
          {/* upcoming i.e not submitted*/}
          <Route path="/" element={<StudentAssignmentPageLayout />} /> 
          <Route path="submitted" element={<SubmitAssignment />} />
          <Route path="graded" element={<AssignmentGrades />} />
          <Route path="view/:assignmentId" element={<ViewAssignment />} />
          {/* <Route path="ViewAssignmentGrades" element={<ViewAssignmentsGrades />} />
          <Route path="SubmitAssignmentView" element={<SubmitedAssignmentView  />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default StudentAssignments;

import { Route, Routes, useLocation } from "react-router-dom";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import ExamsHeader from "../../components/TeacherComponent/Exam Component/ExamsHeader";
import ExamsCard from "../../components/TeacherComponent/Exam Component/ExamsCard";
import View from "../../components/TeacherComponent/Exam Component/View";
import ViewAttemps from "../../components/TeacherComponent/Exam Component/ViewAttemps";
import { useState } from "react";
import axios from "axios";

type ExamDetails = {
  examId: string;
  examTitle: string;
  courseName: string;
  partName: string;
  moduleType: string;
};

function AdminExam() {
  const location = useLocation();
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  const [selectedExamTitle, setSelectedExamTitle] = useState<string | null>(null);
  const [examDetails, setExamDetails] = useState<ExamDetails | null>(null);

  // Check if current path is either /AdminExam/viewExam or /AdminExam/viewAttemps
  const isViewPage = location.pathname === "/AdminExam/viewExam" || location.pathname === "/AdminExam/viewAttemps";

  const handleExamSelect = async (examId: string | null, examTitle: string) => {
    setSelectedExamId(examId);
    setSelectedExamTitle(examTitle);
   if(examId==null){
    try {
      const apiUrl = `http://localhost:5000/api/admin/exams/getAll`;
      const response = await axios.get(apiUrl); 
      setExamDetails(response.data);
      
     } catch (error) {
       console.error("Error fetching exam details:", error);
     }

  }
  else{
      try {
        const apiUrl = `http://localhost:5000/api/admin/exams/${examId}`;
        const response = await axios.get(apiUrl); // Fetch exam details by ID
        setExamDetails(response.data);
       } catch (error) {
         console.error("Error fetching exam details:", error);
       }

    }
  };

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <div>
        <AdminSidebar />
      </div>

      <div className="flex-col w-full mx-auto mt-3 lg:p-6 lg:flex bg-gray-50 lg:mt-0">
        {/* Conditionally render ExamsHeader */}
        {!isViewPage && (
          <>
            <ExamsHeader onExamSelect={handleExamSelect} />
            {selectedExamId && (
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Selected Exam: {selectedExamTitle}</h2>
                {examDetails ? (
                  <ExamsCard
                    key={examDetails.examId}
                    examTitle={examDetails.examTitle}
                    courseName={examDetails.courseName}
                    partName={examDetails.partName}
                    moduleType={examDetails.moduleType}
                  />
                ) : (
                  <p>Loading exam details...</p>
                )}
              </div>
            )}
          </>
        )}

        {/* Nested Routes */}
        <Routes>
          <Route path="viewExam" element={<View />} />
          <Route path="viewAttemps" element={<ViewAttemps />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminExam;

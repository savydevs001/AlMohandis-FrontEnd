import React, { useEffect, useState } from "react";
import DashBoardHeader from "../DashboardComponent/DashBoardHeader";
import axios from "axios";

type Exam = {
  examId: string;
  examTitle: string;
};

type ExamsHeaderProps = {
  onExamSelect: (examId: string | null, examTitle: string) => void; // Updated: Allow null for "All" option
};

const ExamsHeader: React.FC<ExamsHeaderProps> = ({ onExamSelect }) => {
  const [exams, setExams] = useState<Exam[]>([]);
  const [selectedExam, setSelectedExam] = useState<string>("");

  useEffect(() => {
    // Fetch all exams
    const fetchExams = async () => {
      try {
        const apiUrl = `http://localhost:5000/api/admin/exams/getAll`;
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setExams(response.data); // Store the list of exams
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };

    fetchExams();
  }, []);

  const handleExamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;

    if (selectedId === "all") {
      setSelectedExam(selectedId);
      onExamSelect(null, "All"); // Send "All" to the parent
    } else {
      const selectedExam = exams.find((exam) => exam.examId === selectedId);
      if (selectedExam) {
        setSelectedExam(selectedId);
        onExamSelect(selectedExam.examId, selectedExam.examTitle); // Send selected exam to the parent
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full gap-4">
        <h1 className="text-2xl font-bold">Exams</h1>
        <DashBoardHeader />
      </div>
      <div className="flex flex-col py-6 space-y-1">
        <label className="font-semibold" htmlFor="exam-select">Select Exam</label>
        <select
          id="exam-select"
          className="w-full lg:w-[30%] rounded-md"
          value={selectedExam}
          onChange={handleExamChange}
        >
          <option value="">Select an Exam</option>
          <option value="all">All</option> {/* Add "All" option */}
          {exams.map((exam) => (
            <option key={exam.examId} value={exam.examId}>
              {exam.examTitle}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExamsHeader;

// ExamQuestionShowComponent.tsx
import React, { useEffect, useState } from 'react';
import ExamQuestionsHeader from "./ExamQuestionsHeader";
import ExamQuestion from "./ExamQuestion";
import Cookies from 'js-cookie';

interface Question {
  id: string;
  questionText: string;
  answerType: string;
  options: string[];
  correctAnswer: string;
}

interface Exam {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
  questions: Question[];
}

interface Props {
  examId: string | undefined;
}

const ExamQuestionShowComponent: React.FC<Props> = ({ examId }) => {
  const [examData, setExamData] = useState<Exam | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExamData = async () => {
      const token = Cookies.get('token'); // Adjust the cookie name as necessary
      try {
        const response = await fetch(`http://localhost:5000/api/student/exams/${examId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch exam data');
        }

        const data: Exam = await response.json();
        setExamData(data);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExamData();
  }, [examId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex-1">
      <ExamQuestionsHeader />
      {examData && <ExamQuestion examData={examData} />}
    </div>
  );
}

export default ExamQuestionShowComponent;
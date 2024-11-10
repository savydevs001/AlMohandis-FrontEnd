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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [remainingTime, setRemainingTime] = useState(300); // 5 minutes in seconds
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null); // Timer ID to manage the interval

  useEffect(() => {
    const fetchExamData = async () => {
      const token = Cookies.get('token'); 
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/student/exams/${examId}`, {
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
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExamData();
  }, [examId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    setTimerId(timer); // Set the timer ID

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const nextQuestion = () => {
    if (examData && currentQuestionIndex < examData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const finishExam = () => {
    setFinished(true);
    if (timerId) {
      clearInterval(timerId); // Stop the timer
    }
    submitExam(); // Call submitExam when the exam is finished
  };

  const submitExam = async () => {
    const token = Cookies.get('token');
    const totalMarks = examData?.questions.length; // Assuming each question is worth 1 mark
    const obtainedMarks = selectedAnswers.filter((answer, index) => answer === examData?.questions[index].correctAnswer).length;

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/student/exams/${examId}/attempt`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          totalMarks,
          obtainedMarks,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit exam');
      }

      const result = await response.json();
      console.log('Exam submitted successfully:', result);
    } catch ( error) {
      console.error('Error submitting exam:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex-1">
      {examData && (
        <ExamQuestionsHeader 
          title={examData.title} remainingTime={formatTime(remainingTime)} 
        />
      )}
      {examData && !finished && (
        <div>
          <ExamQuestion 
            question={examData.questions[currentQuestionIndex]} 
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswers[currentQuestionIndex]} // Pass selected answer
          />
          <div className="flex justify-between mt-4">
            <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button onClick={nextQuestion} disabled={currentQuestionIndex === examData.questions.length - 1}>
              Next
            </button>
            {currentQuestionIndex === examData.questions.length - 1 && (
              <button onClick={finishExam}>
                Finish
              </button>
            )}
          </div>
          <div className="mt-4">
            {currentQuestionIndex + 1} / {examData.questions.length}
          </div>
        </div>
      )}
      {finished && examData && (
        <div>
          <h2>Your Answers:</h2>
          {examData.questions.map((question, index) => (
            <div key={question.id} className={`border ${selectedAnswers[index] !== question.correctAnswer ? 'border-red-500' : ''} p-4 rounded-md mb-4`}>
              <h1 className="text-lg">{question.questionText}</h1>
              <p className="text-pTag">Correct Answer: {question.correctAnswer}</p>
              <p className="text-pTag">Your Answer: {selectedAnswers[index]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExamQuestionShowComponent;
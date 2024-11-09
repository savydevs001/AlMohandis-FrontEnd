import React from 'react';
import { NavLink } from 'react-router-dom';
import ShowLessonHeader from '../../ShowLessonHeader';

interface Question {
  id: string;
  questionText: string;
  answerType: string;
  options: any[];
  correctAnswer: string;
  assignmentId: string | null;
  examId: string | null;
  moduleId: string | null;
}

interface Exam {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
  questions: Question[];
}

interface SingleExamProps {
  exam: Exam;
  currentPart: {
    title: string;
    price: number;
    completionTime: number;
  };
}

const SingleExam: React.FC<SingleExamProps> = ({ exam, currentPart }) => {
  console.log(exam);
  return (
    <div className="flex-1 p-5 space-y-5">
      <ShowLessonHeader head={currentPart.title} />
      <div className="flex items-start justify-between">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">{exam.title}</h1>
          <p className="w-[100%] font-sans">
            This exam consists of the following questions:
            <ul className="list-disc list-inside mt-2">
              {exam.questions.map((question, index) => (
                <li key={question.id}>
                  {index + 1}. {question.questionText}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <p>Total Questions: <span className='font-bold'>{exam.questions.length}</span></p>
      </div>
      
      <NavLink to={`/exams/${exam.id}/attempt`}>
        <button className="px-4 py-2 mt-3 font-semibold text-white rounded-md bg-primary">Start Exam</button>
      </NavLink>
    </div>
  );
};

export default SingleExam;
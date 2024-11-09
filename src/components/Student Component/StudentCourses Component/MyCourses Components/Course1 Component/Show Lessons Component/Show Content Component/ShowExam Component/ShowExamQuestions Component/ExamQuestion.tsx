// ExamQuestion.tsx
import React from 'react';
import { CiCircleInfo } from "react-icons/ci";
import ExamQuestionOption from "./ExamQuestionOption";
import ExamQuestionsList from "./ExamQuestionsList";

interface Question {
  id: string;
  questionText: string;
  answerType: string;
  options: string[];
  correctAnswer: string;
}

interface Exam {
  questions: Question[];
}

interface Props {
  examData: Exam;
}

const ExamQuestion: React.FC<Props> = ({ examData }) => {
  return (
    <div className="space-y-7 mt-14">
      {examData.questions.map((question) => (
        <div key={question.id} className="bg-white border border-cardBg shadow-sm lg:w-[70%] w-full p-6 flex items-center justify-between rounded-xl">
          <div className="space-y-3 ">
            <h1 className="text-lg">{question.questionText}</h1>
            <p className="text-pTag">{question.correctAnswer}</p>
          </div>
          <CiCircleInfo className="text-3xl text-pTag" />
        </div>
      ))}
      <div className="flex flex-wrap items-center gap-6">
        {examData.questions.map((question) => (
          question.options.map((option, index) => (
            <ExamQuestionOption key={index} optionText={option} />
          ))
        ))}
      </div>
      <div>
        <ExamQuestionsList />
      </ div>
    </div>
  );
}

export default ExamQuestion;
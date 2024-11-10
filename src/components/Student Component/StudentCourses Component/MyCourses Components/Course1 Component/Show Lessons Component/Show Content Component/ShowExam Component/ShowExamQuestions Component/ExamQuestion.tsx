import React from 'react';
import { CiCircleInfo } from "react-icons/ci";
import ExamQuestionOption from "./ExamQuestionOption";

interface Question {
  id: string;
  questionText: string;
  answerType: string;
  options: string[];
  correctAnswer: string;
}

interface Props {
  question: Question;
  onAnswerSelect: (answer: string) => void;
  selectedAnswer: string | undefined; // Add this prop
}

const ExamQuestion: React.FC<Props> = ({ question, onAnswerSelect, selectedAnswer }) => {
  return (
    <div className="space-y-7 mt-14">
      <div className="bg-white border border-cardBg shadow-sm lg:w-[70%] w-full p-6 flex items-center justify-between rounded-xl">
        <div className="space-y-3 ">
          <h1 className="text-lg">{question.questionText}</h1>
        </div>
        <CiCircleInfo className="text-3xl text-pTag" />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        {question.options.map((option, index) => (
          <ExamQuestionOption 
            key={index} 
            optionText={option} 
            onSelect={() => onAnswerSelect(option)} 
            isSelected={selectedAnswer === option} // Pass selected state
          />
        ))}
      </div>
    </div>
  );
}

export default ExamQuestion;
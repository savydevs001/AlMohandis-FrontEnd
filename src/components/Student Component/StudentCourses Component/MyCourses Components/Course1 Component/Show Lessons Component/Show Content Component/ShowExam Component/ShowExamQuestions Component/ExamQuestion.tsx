// import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import ExamQuestionOption from "./ExamQuestionOption";
import ExamQuestionsList from "./ExamQuestionsList";

function ExamQuestion() {
  return (
    <div className="space-y-7 mt-14">
      <div className="bg-white border border-cardBg shadow-sm lg:w-[70%] w-full p-6 flex items-center justify-between rounded-xl">
            <div className="space-y-3 ">
            <h1 className="text-lg ">What is the first question?</h1>
            <p className="text-pTag">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, consequuntur.</p>
            </div>
            <CiCircleInfo className="text-3xl text-pTag"/>
      </div>
      <div className="flex flex-wrap items-center gap-6">
            <ExamQuestionOption/>
            <ExamQuestionOption/>
            <ExamQuestionOption/>
            <ExamQuestionOption/>

      </div>
      <div>
            <ExamQuestionsList/>
      </div>
    </div>
  )
}

export default ExamQuestion

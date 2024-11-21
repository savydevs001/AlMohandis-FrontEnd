// import React from 'react'

import { NavLink } from "react-router-dom";
import ExamQuestionsDropDown from "./QuestionsDropDown"
import { LuArrowLeftToLine, LuArrowRightToLine } from "react-icons/lu";

function ExamQuestionsList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
      <h1 className="text-xl font-semibold">Total Question</h1>
      <h5 className="text-3xl font-semibold text-primary">14/ <span className="text-black">25</span></h5>
      </div>
      <div className="flex flex-col justify-between space-y-3 lg:items-center lg:flex-row">
            <div>
                  <ExamQuestionsDropDown/>
            </div>
            <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-primary border-primary">
                  <LuArrowLeftToLine />

                        Previous</button>
                 <NavLink to='/correctOptions'>
                 <button className="flex items-center gap-2 px-4 py-2 text-white rounded-md bg-primary ">Next
                  <LuArrowRightToLine  />
                  </button>
                 </NavLink>
            </div>
      </div>
    </div>
  )
}

export default ExamQuestionsList

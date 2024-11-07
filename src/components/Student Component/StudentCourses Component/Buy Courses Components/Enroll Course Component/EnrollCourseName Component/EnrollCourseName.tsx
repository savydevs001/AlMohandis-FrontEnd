// import React from 'react'

import EnrollStudentCard from "./EnrollStudentCard";
import { HiMiniLanguage } from "react-icons/hi2"; // Example icon
import { FaUserGraduate } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

function EnrollCourseName() {
  return (
    <div className="bg-[#FEB7051F] p-3 rounded-lg space-y-2 ">
      <h1 className="text-2xl font-semibold text-[#333]">Course Name</h1>
      <p className="w-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto alias minus animi amet eaque sint beatae eveniet laudantium explicabo cumque. Eos pariatur accusamus necessitatibus perferendis, nemo ex tempora ab eum.
      </p>
      <p className="text-pTag">Published on <span className="text-[#333] text-lg font-medium">28-02-2024</span></p>
      <div className="flex items-center gap-2">
        <EnrollStudentCard Icon={HiMiniLanguage} title="Language" subtitle="English" />
        <EnrollStudentCard Icon={FaUserGraduate} title="Enrolled Students" subtitle="12,976" />
        <EnrollStudentCard Icon={FaRegEye} title="Availability" subtitle="Public" />
      </div>
    </div>
  );
}

export default EnrollCourseName;

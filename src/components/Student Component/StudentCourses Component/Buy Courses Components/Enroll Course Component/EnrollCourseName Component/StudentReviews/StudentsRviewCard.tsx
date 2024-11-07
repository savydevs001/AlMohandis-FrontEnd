// import React from "react";
import { IoStar } from "react-icons/io5";
// import { FaArrowRightLong } from "react-icons/fa6";
import img from '../../../../../../../assets/book.webp'
function StudentsRviewCard() {
  return (
   <div className="flex items-center justify-center w-full gap-2 p-2 mt-4 space-y-1 bg-white rounded-lg shadow-md lg:w-full">
      <div className="w-[40%] h-24 flex items-center justify-center">
      <img className="rounded-full w-[100%] lg:h-[50%] h-[63%]" src={img} alt="" />
      </div>
      <div className="">
      <h5 className="text-lg font-semibold">Student 1</h5>
      
      <p className="text-xs text-tertiary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero
      </p>
      <div className="flex items-center justify-start mt-1 text-sm">
        <IoStar className="text-secondary" />
        <IoStar className="text-secondary" />
        <IoStar className="text-secondary" />
        <IoStar className="text-secondary" />
        <span className="px-2 rounded-full text-txtColor bg-primary">3.0</span>
      </div>
    </div>
    </div>
  );
}

export default StudentsRviewCard;





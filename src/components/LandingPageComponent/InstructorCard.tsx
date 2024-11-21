import { IoStar } from "react-icons/io5";
import React from "react";
import { NavLink } from "react-router-dom";

// Define the prop types
interface InstructorCardProps {
  buttonText: string; // Specify that buttonText should be a string
  width?: string;     // Optional width prop as a string (e.g., "w-full", "lg:w-1/2")
}

const InstructorCard: React.FC<InstructorCardProps> = ({ buttonText, width = "w-full" }) => {
  return (
    <div className={`flex flex-wrap lg:max-w-[22vw] mx-auto mt-6 text-txtColor `}>
      <div className={`${width} p-2 text-black shadow-xl rounded-xl bg-txtColor max-h-fit card `}>
        <figure className="px-4 pt-4">
          <img
            src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1"
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="items-center text-center card-body">
          <div className='flex items-center justify-end px-4 mt-1 text-sm'>
            <IoStar className='text-secondary' />
            <IoStar className='text-secondary' />
            <IoStar className='text-secondary' />
            <IoStar className='text-secondary' />
            <span className='px-2 rounded-full text-txtColor bg-primary'>3.0</span>
          </div>
          <div className='flex flex-col items-start px-4'>
            <h4 className='text-xl font-bold'>Course 1</h4>
            <h5 className='text-md'>Instructor</h5>
            <h3 className='text-xl font-semibold text-primary'>Free</h3>
          </div>
          <NavLink to='enrollCourse'>
            <div className="w-[90%] m-auto mt-2 p-2 border card-actions border-primary rounded-lg mb-2">
              <button className="font-medium btn text-primary">{buttonText}</button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;

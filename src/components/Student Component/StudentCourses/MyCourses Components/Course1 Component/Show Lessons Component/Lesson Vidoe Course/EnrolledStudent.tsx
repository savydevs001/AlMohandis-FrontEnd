// import React from 'react';

interface EnrolledStudentProps {
  title: string;    // Title text for h1
  count: number;    // Count value for h5
  date?: string;    // Optional date to display in h5
  width?: string;   // Optional width for the component
}

function EnrolledStudent({ title, count, date, width = "40%" }: EnrolledStudentProps) {
  return (
    <div
      className={`p-3 space-y-1 bg-white rounded-lg shadow-sm 
        w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]`}
      style={{ width }}  // Apply custom width if provided
    >
      <h1 className="text-xl font-normal leading-snug">{title}</h1>
      <h5 className="text-xl font-bold text-primary">
        {count.toLocaleString()}
        {date && <span className="ml-2 text-sm text-gray-500">({date})</span>}
      </h5>
    </div>
  );
}

export default EnrolledStudent;

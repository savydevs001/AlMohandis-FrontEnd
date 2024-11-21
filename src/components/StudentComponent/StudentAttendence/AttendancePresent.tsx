import React from 'react';

type StudentAttendancePresentProps = {
  status: 'Present' | 'Absent';
};

const StudentAttendancePresent: React.FC<StudentAttendancePresentProps> = ({ status }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between w-full p-3 bg-white border rounded-lg shadow-sm">
        <h1 className="font-semibold text-PTag">Lesson 1</h1>
        <p
          className={`font-semibold ${
            status === 'Present' ? 'text-[#009721]' : 'text-[#FF0000]'
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default StudentAttendancePresent;

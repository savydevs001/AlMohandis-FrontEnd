import { useState } from 'react';

function AttendanceSheet() {
  // Specify type as "present" | "absent" | null
  const [status, setStatus] = useState<"present" | "absent" | null>(null);

  return (
    <div className="flex items-center justify-between bg-white border shadow-sm border-[#99999949] rounded-md p-3">
      <div className="text-[#777] font-semibold text-lg">Student 1</div>
      <div className="flex items-center gap-2 text-white">
        <p
          className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
            status === 'present' ? 'bg-[#11C111]' : 'bg-[#AFAFAF]'
          }`}
          onClick={() => setStatus('present')}
        >
          P
        </p>
        <p
          className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
            status === 'absent' ? 'bg-[#FF0000]' : 'bg-[#AFAFAF]'
          }`}
          onClick={() => setStatus('absent')}
        >
          A
        </p>
      </div>
    </div>
  );
}

export default AttendanceSheet;

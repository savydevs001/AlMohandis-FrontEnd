import React from "react";

type Lecture = {
  day: string;
  time: string;
  title: string;
};

const LectureSchedule: React.FC = () => {
  const days = [
    "24/08/2024", "25/08/2024", "26/08/2024", 
    "27/08/2024", "28/08/2024", "29/08/2024", "30/08/2024"
  ];

  const times = [
    "12:00-01:00 PM", "01:00-02:00 PM", "02:00-03:00 PM", 
    "03:00-04:00 PM", "04:00-05:00 PM", "05:00-06:00 PM"
  ];

  const lectures: Lecture[] = [
    { day: "24/08/2024", time: "02:00-03:00 PM", title: "Lecture Title" },
    { day: "28/08/2024", time: "02:00-03:00 PM", title: "Lecture Title" },
    { day: "29/08/2024", time: "03:00-04:00 PM", title: "Lecture Title" },
    { day: "30/08/2024", time: "04:00-05:00 PM", title: "Lecture Title" },
    { day: "26/08/2024", time: "05:00-06:00 PM", title: "Lecture Title" },
  ];

  const getLecture = (day: string, time: string) => {
    return lectures.find((lecture) => lecture.day === day && lecture.time === time);
  };

  return (
    <div className="p-4 mt-5 sm:p-6 md:p-4">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-8 sm:gap-4">
        {/* Header for time slots */}
        <div className="hidden sm:block"></div> {/* Empty cell for the top-left corner */}

        {/* Time and Date header on small screens */}
        {days.map((day) => (
          <div key={day} className="text-xs font-semibold text-center sm:text-sm">
            {day}
          </div>
        ))}
        
        {/* Time slots and corresponding lectures */}
        {times.map((time) => (
          <React.Fragment key={time}>
            {/* Time Column */}
            <div className="text-xs font-semibold sm:text-sm">{time}</div>

            {/* Lecture Cells */}
            {days.map((day) => {
              const lecture = getLecture(day, time);
              return (
                <div
                  key={`${day}-${time}`}
                  className={`flex items-center justify-center h-16 sm:h-20 border ${lecture ? 'bg-yellow-200' : 'bg-white'}`}
                >
                  {lecture ? (
                    <div className="text-xs font-semibold text-center text-teal-700 sm:text-sm">
                      <span>{lecture.title}</span>
                      <span className="block text-sm">{day}</span> {/* Date under the title */}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LectureSchedule;

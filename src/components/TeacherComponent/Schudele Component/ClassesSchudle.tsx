import React from "react";

interface Schedule {
  startTime: string;
  endTime: string;
}

interface Group {
  groupName: string;
  schedules: Schedule[];
}

interface Subject {
  subjectName: string;
  groups: Group[];
}

interface ClassesSchudleProps {
  day: string;
  schedules: Subject[];
}

function ClassesSchudle({ day, schedules }: ClassesSchudleProps) {
  return (
    <div className="py-6">
      <div className="border-b pb-2 mb-4">
        <h4 className="text-xl font-bold text-primary">{day}</h4>
      </div>
      <div className="space-y-6">
        {schedules.map((subject) => (
          <div key={subject.subjectName} className="bg-gray-50 p-4 rounded shadow">
            <h5 className="text-lg font-semibold text-gray-800">{subject.subjectName}</h5>
            {subject.groups.map((group) => (
              <div key={group.groupName} className="mt-3">
                <h6 className="font-medium text-gray-600">Group: {group.groupName}</h6>
                <div className="mt-2">
                  {group.schedules.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 px-3 bg-white border rounded mb-2"
                    >
                      <p className="text-gray-700 text-sm">
                        {new Date(schedule.startTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        -{" "}
                        {new Date(schedule.endTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassesSchudle;

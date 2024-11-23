import React from 'react';
import AttendenceHeader from "../../../TeacherComponent/Attendence Component/AttendenceHeader";
import AttendanceSheet from "../../../TeacherComponent/Attendence Component/MarkAttendence/AttendenceSheet";

interface AdminMarkAttendanceShowCompProps {
  subjects: any[];
  selectedSubject: string | null;
  setSelectedSubject: React.Dispatch<React.SetStateAction<string | null>>;
  groups: any[];
  selectedGroup: string | null;
  setSelectedGroup: React.Dispatch<React.SetStateAction<string | null>>;
  students: any[];
}

const AdminMarkAttendanceShowComp: React.FC<AdminMarkAttendanceShowCompProps> = ({
  subjects,
  selectedSubject,
  setSelectedSubject,
  groups,
  selectedGroup,
  setSelectedGroup,
  students,
}) => {
  return (
    <div className="flex-1 p-6 space-y-6">
      <AttendenceHeader />

      {/* Subject and Group Dropdowns in a row */}
      <div className="flex gap-4 mb-6">
        {/* Subject Dropdown */}
        <div className="w-1/2">
          <label htmlFor="subject" className="block text-lg font-semibold text-gray-800 mb-2">
            Select Subject
          </label>
          <select
            id="subject"
            value={selectedSubject || ''}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full p-3 border-2 rounded-md shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a Subject</option>
            {subjects.length === 0 ? (
              <option value="">No subjects available</option>
            ) : (
              subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Group Dropdown */}
        {selectedSubject && (
          <div className="w-1/2">
            <label htmlFor="group" className="block text-lg font-semibold text-gray-800 mb-2">
              Select Group
            </label>
            <select
              id="group"
              value={selectedGroup || ''}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full p-3 border-2 rounded-md shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Group</option>
              {groups.length === 0 ? (
                <option value="">No groups available</option>
              ) : (
                groups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.title}
                  </option>
                ))
              )}
            </select>
          </div>
        )}
      </div>

      {/* Students List */}
      {selectedGroup && students.length > 0 ? (
        <div className="space-y-4">
          {students.map((student) => (
            <AttendanceSheet key={student.id} student={student} groupId={selectedGroup} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p>No students available for this group</p>
        </div>
      )}
    </div>
  );
};

export default AdminMarkAttendanceShowComp;

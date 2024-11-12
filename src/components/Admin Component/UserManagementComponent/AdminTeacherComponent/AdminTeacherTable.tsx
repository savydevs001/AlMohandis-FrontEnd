import React, { useState } from 'react';
import { Link } from "react-router-dom";

type RowData = {
  id: string;
  name: string;
  email: string;
  typeClass: string;
  joiningDate: string;
  coursesEnrolled: string;
  courses: number;
  student: number;
};

function AdminTeacherTable() {
  const [data] = useState<RowData[]>([
    { id: '01IST09', name: 'John Daniel', email: 'john@gmail.com', typeClass: 'Professor', joiningDate: 'Computer Science', coursesEnrolled: '20-02-2025', courses: 5, student: 250 },
    { id: '01IST10', name: 'Anna Smith', email: 'anna@gmail.com', typeClass: 'Professor', joiningDate: 'Physics', coursesEnrolled: '21-03-2023', courses: 4, student: 180 },
    { id: '01IST11', name: 'Zara Ali', email: 'zara@gmail.com', typeClass: 'Professor', joiningDate: 'Mathematics', coursesEnrolled: '19-04-2021', courses: 3, student: 200 },
    // ... add more rows as needed
  ]);

  const [sortConfig, setSortConfig] = useState<{ key: keyof RowData | null; direction: 'asc' | 'desc' | null }>({
    key: null,
    direction: null,
  });

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) return data;

    const sortedArray = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

    return sortedArray;
  }, [data, sortConfig]);

  const requestSort = (key: keyof RowData) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="overflow-x-auto">
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-sm text-white bg-primary">
              <th className="px-4 py-2 border border-black cursor-pointer" onClick={() => requestSort('id')}>
                Student ID {sortConfig.key === 'id' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="px-4 py-2 border border-black cursor-pointer" onClick={() => requestSort('name')}>
                Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="px-4 py-2 border border-black cursor-pointer" onClick={() => requestSort('email')}>
                Email {sortConfig.key === 'email' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="px-4 py-2 border border-black">Level</th>
              <th className="px-4 py-2 border border-black">Department</th>
              <th className="px-4 py-2 border border-black">Joining</th>
              <th className="px-4 py-2 border border-black">Course</th>
              <th className="px-4 py-2 border border-black">Student</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6] text-xs">
            {sortedData.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                <td className="px-4 py-2 border border-black">{row.coursesEnrolled}</td>
                <td className="px-4 py-2 border border-black">{row.courses}</td>
                <td className="px-4 py-2 border border-black">{row.student}</td>
                <td className="px-4 py-2 border border-black">
                  <Link to='/TeacherInformation' className="text-blue-500 cursor-pointer">View</Link> | 
                  <span className="text-red-600 cursor-pointer">Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTeacherTable;

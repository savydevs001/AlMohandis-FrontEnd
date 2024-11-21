import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

type RowData = {
  id: string;
  fullName: string;
  email: string;
  gender: string;
  joiningDate: string;
  department: string;
  level: number;
  experience: number;
  isFreeze: boolean;
  assistantForId: string | null;
};

function AdminTeacherTable() {
  const [data, setData] = useState<RowData[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof RowData | null; direction: 'asc' | 'desc' | null }>({
    key: null,
    direction: null,
  });
  const { enqueueSnackbar } = useSnackbar(); // Initialize notistack

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch('http://localhost:5000/api/admin/teacher/getAll', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result: RowData[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        enqueueSnackbar('Failed to fetch data', { variant: 'error' });
      }
    };

    fetchData();
  }, [enqueueSnackbar]);

  const handleDelete = async (id: string) => {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`http://localhost:5000/api/admin/teacher/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete teacher');
      }

      setData(data.filter((row) => row.id !== id));
      enqueueSnackbar('Teacher deleted successfully', { variant: 'success' });
    } catch (error) {
      console.error('Error deleting teacher:', error);
      enqueueSnackbar('Failed to delete teacher', { variant: 'error' });
    }
  };

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
              <th className="px-4 py-2 border border-black cursor-pointer" onClick={() => requestSort('fullName')}>
                Name {sortConfig.key === 'fullName' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="px-4 py-2 border border-black cursor-pointer" onClick={() => requestSort('email')}>
                Email {sortConfig.key === 'email' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="px-4 py-2 border border-black">Gender</th>
              <th className="px-4 py-2 border border-black">Department</th>
              <th className="px-4 py-2 border border-black">Joining Date</th>
              <th className="px-4 py-2 border border-black">Level</th>
              <th className="px-4 py-2 border border-black">Experience</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6] text-xs">
            {sortedData.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.fullName}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.gender}</td>
                <td className="px-4 py-2 border border-black">{row.department}</td>
                <td className="px-4 py-2 border border-black">{new Date(row.joiningDate).toLocaleDateString()}</td>
                <td className="px-4 py-2 border border-black">{row.level}</td>
                <td className="px-4 py-2 border border-black">{row.experience} years</td>
                <td className="px-4 py-2 border border-black">
                  <Link to='/TeacherInformation' className="text-blue-500 cursor-pointer">View</Link> | 
                  <span className="text-red-600 cursor-pointer" onClick={() => handleDelete(row.id)}>Delete</span>
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

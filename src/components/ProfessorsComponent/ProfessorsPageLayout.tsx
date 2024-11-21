// src/components/ProfessorsComponent/ProfessorsPageLayout.tsx
import { useEffect, useState } from 'react';

import ProfessorsCard from "./ProfessorsCard";
import Cookies from 'js-cookie';
import DashBoardHeader from '../TeacherComponent/DashboardComponent/DashBoardHeader';

interface Professor {
  id: string; // Assuming each professor has a unique ID
  fullName: string;
  department: string; // Adjust based on your API response structure
  // Add other fields as necessary
}

function ProfessorsPageLayout() {
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = Cookies.get('token');

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/teacher/getAll`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfessors(data); // Adjust this based on the actual API response structure
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessors();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Registered Professors</h1>
        <DashBoardHeader />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-6 mb-6 md:grid-cols-2 lg:grid-cols-4 ">
        {professors.map(professor => (
          <ProfessorsCard key={professor.id} professor={professor} />
        ))}
      </div>
    </div>
  );
}

export default ProfessorsPageLayout;
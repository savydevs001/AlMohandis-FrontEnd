import React, { useEffect, useState } from 'react';
import UpComingAssignmentCard from "./UpComingAssignment";
import Cookies from 'js-cookie';

interface Assignment {
  id: string; 
  title: string;
  description?: string; 
  dueDate?: string; 
  submitted: boolean; 
  points?: number; 
}

const UpComingAssgnment: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [courseTitle, setCourseTitle] = useState<string>(''); 

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const token = Cookies.get('token'); 
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/student/assignments`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("Data is")
        console.log(data);
        setAssignments(data[0].assignments);
        setCourseTitle(data[0].courseTitle);
        console.log(data);
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  // Filter assignments to find those that are not submitted
  const upcomingAssignments = assignments.filter(assignment => !assignment.submitted);
console.log(upcomingAssignments);
  return (
    <div className="space-y-4">
      {upcomingAssignments.length > 0 ? (
        upcomingAssignments.map((assignment) => (
          <UpComingAssignmentCard 
            key={assignment.id} 
            title={assignment.title} 
            points={assignment.points ? `${assignment.points} Points` : 'No points assigned'} 
            courseTitle={courseTitle}
            id={assignment.id}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">
          No upcoming assignments, enjoy! 🎉
        </p>
      )}
    </div>
  );
}

export default UpComingAssgnment;
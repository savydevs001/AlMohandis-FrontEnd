import React, { useEffect, useState } from 'react';
import DashBoardHeader from "../../../Teacher Component/DashboardComponent/DashBoardHeader";
import StudentAssignmentHeader from "../StudentAssignmentHeader";
import SubmitAssignmentCard from "./SubmitAssignmentCard";
import Cookies from 'js-cookie';

interface Assignment {
  id: string; 
  title: string;
  description?: string; 
  dueDate?: string; 
  submitted: boolean; 
  points?: number; 
}

const SubmitAssignment: React.FC = () => {
  const [submittedAssignments, setSubmittedAssignments] = useState<Assignment[]>([]);
  const [courseTitle, setCourseTitle] = useState<string>(''); // State for course title

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const token = Cookies.get('token'); // Replace with your method of retrieving the token
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/student/assignments`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Assuming data[0].assignments is the correct structure
        const submitted = data[0].assignments.filter((assignment: Assignment) => assignment.submitted);
        setSubmittedAssignments(submitted);
        setCourseTitle(data[0].courseTitle); // Set the course title from the response
      } catch (error) {
        console.error('Error fetching assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Submitted Assignments</h1>
        <DashBoardHeader />
      </div>
      <StudentAssignmentHeader />

      <h2 className="text-xl font-semibold text-center">{courseTitle}</h2> {/* Display the course title */}

      <div className="space-y-4">
        {submittedAssignments.length > 0 ? (
          submittedAssignments.map((assignment) => (
            <SubmitAssignmentCard 
              key={assignment.id} 
              title={assignment.title} 
              points={assignment.points ? `${assignment.points} Points` : 'No points assigned'} 
              courseTitle={courseTitle} // Pass the course title to the card
              id={assignment.id}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No submitted assignments found.</p>
        )}
      </div>
    </div>
  );
}

export default SubmitAssignment;
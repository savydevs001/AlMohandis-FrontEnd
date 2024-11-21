import React, { useState, useEffect } from 'react';
import { RxPinRight } from 'react-icons/rx';
import Cookies from 'js-cookie';

const Step4AddInstructor: React.FC<{ handleNext: () => void }> = ({ handleNext }) => {
  const [teachers, setTeachers] = useState<{ id: string; fullName: string }[]>([]); // To store fetched teachers
  const [selectedTeacher, setSelectedTeacher] = useState<string>(''); // To store the selected teacher ID
  const [isAssigning, setIsAssigning] = useState<boolean>(false); // To show loading state while assigning
  const [courseId, setCourseId] = useState<string>(''); // Store courseId from localStorage

  useEffect(() => {
    // Fetch the courseId from localStorage
    const storedCourseId = localStorage.getItem('courseId');
    if (storedCourseId) {
      setCourseId(storedCourseId); // Set courseId if available
    } else {
      alert('Course ID not found in localStorage.');
    }

    // Fetch teachers data from the API
    const fetchTeachers = async () => {
      try {
        const token = Cookies.get('token'); // Get the token from cookies
        const response = await fetch('http://localhost:5000/api/open/teachers', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in the header
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch teachers');
        }

        const data = await response.json();
        if (data.success) {
          setTeachers(data.data); // Assuming the data is an array of teachers
        } else {
          console.error('Failed to fetch teachers: ', data.message);
        }
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  const handleTeacherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeacher(e.target.value);
  };

  const handleAssignCourse = async () => {
    if (!selectedTeacher || !courseId) {
      alert('Please select a teacher and ensure the course is available.');
      return;
    }

    setIsAssigning(true);

    try {
      const token = Cookies.get('token'); // Get the token from cookies
      const response = await fetch('http://localhost:5000/api/admin/course/assign', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          teacherId: selectedTeacher, // The selected teacher's ID
          courseId, // The course ID from localStorage
        }),
      });

      const data = await response.json();
      if (data.status == 200) {
        alert('Course assigned successfully!');
        handleNext(); // Call the next step function
      } else {
        alert('Failed to assign course: ');
      }
    } catch (error) {
      console.error('Error assigning course:', error);
      alert('Error assigning course.');
    } finally {
      setIsAssigning(false);
    }
  };

  return (
    <div className="h-screen mt-12">
      <div className="max-w-4xl h-[80%] p-8 mx-auto space-y-3 shadow-2xl bg-cardBg">
        <h2 className="text-2xl font-semibold">Instructors</h2>
        <div className="flex flex-col space-y-4">
          <div className="">
            <h5 className="font-medium">Select Instructor from list</h5>
            <select
              className="py-2 rounded-md w-80 bg-cardBg"
              value={selectedTeacher}
              onChange={handleTeacherChange}
            >
              <option className="py-1 text-sm bg-cardBg" value="">
                Select Teacher
              </option>
              {teachers.map((teacher) => (
                <option
                  key={teacher.id}
                  className="py-1 text-sm bg-cardBg"
                  value={teacher.id}
                >
                  {teacher.fullName}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:px-32">
            <button
              className="px-6 py-2 font-semibold border-2 rounded-lg text-primary border-primary"
              onClick={handleAssignCourse}
              disabled={isAssigning}
            >
              {isAssigning ? 'Assigning...' : 'Assign Instructor'}
              <span className="px-2 text-lg">+</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 py-12 h-fit">
          <button
            className="flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary"
            onClick={handleNext}
          >
            Next
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4AddInstructor;

import React, { useRef, useState } from 'react';
import { IoIosLink } from 'react-icons/io';
import ShowLessonHeader from '../../ShowLessonHeader';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

interface Question {
  id: string;
  questionText: string;
  answerType: string;
  options: any[];
  correctAnswer: string;
  assignmentId: string;
  examId: string | null;
  moduleId: string | null;
}

interface Assignment {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
  questions: Question[];
  submissions: any[];
  isSubmitted: boolean; // Add this line to indicate submission status
}

interface SingleAssignmentProps {
  assignment: Assignment;
  currentPart: {
    title: string;
    price: number;
    completionTime: number;
  }
}

const SingleAssignment: React.FC<SingleAssignmentProps> = ({ assignment, currentPart }) => {
  const { enqueueSnackbar } = useSnackbar();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  console.log(assignment);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile); // Store the selected file
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a file before submitting.');
      return;
    }

    const token = Cookies.get('token'); // Retrieve the token from cookies
    if (!token) {
      alert('No authorization token found. Please log in.');
      return;
    }

    const formData = new FormData();
    formData.append('assignmentId', assignment.id);
    formData.append('file', file);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/student/submitAssignment`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit assignment');
      }
      enqueueSnackbar('Assignment submitted successfully!', { variant: 'success' });
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div className="flex-1 p-5 space-y-5">
      <ShowLessonHeader head={currentPart.title} />
      <div className="flex items-start justify-between">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">{assignment.title}</h1>
          <p className="w-[100%] font-sans">
            {assignment.questions.map((question, index) => (
              <div key={question.id}>
                <strong>Question {index + 1}:</strong> {question.questionText}
              </div>
            ))}
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <label className="font-semibold text-md" htmlFor="">
          Supporting Material
        </label>
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          disabled={assignment.isSubmitted} // Disable if assignment is submitted
        />
        {/* Custom button */}
        <div>
      <img
        src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Random from Unsplash"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "8px",
        }}
      />
    </div>
      </div>

      <div className="space-y-2">
        <h4 className='font-semibold'>Your Solution</h4>
        {/* Show the file name if a file is selected */}
        {fileName && (
          <div className="w-full p-2 text-xs text-gray-700 border rounded-lg ">
            Selected file: {fileName}
          </div>
        )}
        {assignment.isSubmitted && (
          <div className="w-full p-2 text-xs text-red-600 border rounded-lg">
            This assignment has already been submitted.
          </div>
        )}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleFileClick}>
          <IoIosLink />
          <p className="text-sm text-primary">Add your work</p>
        </div>
      </div>

      <button 
        onClick={handleSubmit}
        className="px-4 py-2 font-semibold text-white rounded-md bg-primary"
        disabled={assignment.isSubmitted} // Disable if assignment is submitted
      >
        Submit
      </button>
    </div>
  );
};

export default SingleAssignment;
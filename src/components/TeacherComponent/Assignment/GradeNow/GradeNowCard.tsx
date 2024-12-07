import { useState, ChangeEvent, useEffect } from 'react';
import { FaPen } from 'react-icons/fa';
import axios from 'axios';

interface Submission {
  assignmentId: string;
  comment: string;
  grade: number;
  id: string;
  isGraded: boolean;
  student: {
    id: string;
    fullName: string;
  };
  studentId: string;
  submissionDate: string;
  submitted: boolean;
  work: File | string; // This can either be a string (file path) or a File object (uploaded file)
}

interface GradeNowCardProps {
  data: Submission; // Expect a single assignment object
}

const GradeNowCard: React.FC<GradeNowCardProps> = ({ data }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [marks, setMarks] = useState<string>(data.grade ? data.grade.toString() : ''); // Default to provided grade
  const [remarks, setRemarks] = useState<string>(data.comment || ''); // Default to provided comment
  const [loading, setLoading] = useState<boolean>(false);
  const [showWork, setShowWork] = useState<boolean>(false); // Whether to show the student's work (image/file)

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Handle edit mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Save the edited marks and remarks
  const handleSave = async (studentId:string) => {
    setIsEditing(false);
    try {
      setLoading(true);
      // Call your API to update the grade and remarks
      const response = await axios.put(`http://localhost:5000/api/admin/submissions/${studentId}/grade`, {
        grade: marks,
        comment: remarks,
      });
      console.log('Grade updated:', response.data);
    } catch (error) {
      console.error('Error saving grade:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle marks input change
  const handleMarksChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMarks(e.target.value);
  };

  // Handle remarks input change
  const handleRemarksChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRemarks(e.target.value);
  };

  // Toggle the visibility of the student's work (image/file)
  const handleShowWork = () => {
    setShowWork(!showWork);
  };

  // Handle the grade API call
  const handleGrade = async () => {
    try {
      setLoading(true);
      // Send grade request to API
      const response = await axios.post('/api/grade', {
        submissionId: data.id,
        grade: marks,
        remarks: remarks,
      });
      console.log('Grade response:', response.data);
      // Optionally update the UI or show a success message
    } catch (error) {
      console.error('Error grading submission:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={!isEditing ? handleEditClick : undefined} // Click to edit if not already editing
      className={`p-4 rounded-lg shadow-sm border ${
        isEditing ? 'bg-primary text-white rounded-lg' : 'bg-white text-black'
      }`}
    >
      <h2 className="text-lg font-semibold">{data.student.fullName}</h2>
      <p className="text-md">
        Submission <span className="font-semibold">{new Date(data.submissionDate).toLocaleString()}</span>
      </p>

      {isEditing ? (
        <>
          {/* Marks Input */}
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={marks}
              onChange={handleMarksChange}
              className="w-16 mb-2 font-semibold text-center text-white bg-transparent border-none text-md focus:ring-0 focus:outline-none focus:border-none"
              placeholder="Grade"
              min="0"
              max="10"
            />
            <span className="text-md">/ 10</span>
          </div>
          
          {/* Remarks Input */}
          <p className="mb-2">Remarks</p>
          <div className="flex items-center p-1 border border-white rounded">
            <input
              type="text"
              value={remarks}
              onChange={handleRemarksChange}
              className="w-full text-white bg-transparent border-none focus:outline-none placeholder:text-white focus:ring-0"
              placeholder="Add Remarks"
            />
            <button
            className="ml-2 text-white cursor-pointer rounded hover:bg-slate-500"
            onClick={()=>{handleSave(data.studentId)}}>
             GRADE
            </button>
            
          </div>
        </>
      ) : (
        <>
          {/* Display Grade and Remarks */}
          <p className="text-lg font-semibold text-primary">{marks} / 10</p>
          {remarks && <p className="mt-2 text-md">{remarks}</p>}
        </>
      )}

      {/* Show student work (image/file) when clicked */}
      <button
        onClick={handleShowWork}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {showWork ? 'Hide Work' : 'Show Work'}
      </button>

      {showWork && (
        <div className="mt-4">
          {typeof data.work === 'string' ? (
            // If the work is a string (URL path)
            <img
              src={`http://localhost:5000/${data.work}`} // Assuming the work is an image file stored under 'uploads'
              alt="Student Work"
              className="w-full max-w-xs rounded-md"
            />
          ) : (
            // If the work is a File object
            <div>
              <p>File name: {data.work.name}</p>
              <a
                href={URL.createObjectURL(data.work)} // Creates a temporary URL for the file
                download={data.work.name}
                className="text-blue-500"
              >
                Download File
              </a>
            </div>
          )}
        </div>
      )}

      {/* Grade button */}
      {!data.isGraded && (
        <div className="mt-4">
          <button
            onClick={handleGrade}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            disabled={loading}
          >
            {loading ? 'Grading...' : 'Grade'}
          </button>
        </div>
      )}
    </div>
  );
};

export default GradeNowCard;

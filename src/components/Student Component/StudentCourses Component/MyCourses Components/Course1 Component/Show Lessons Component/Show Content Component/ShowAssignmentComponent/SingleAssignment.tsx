import React, { useRef, useState } from 'react';
import { IoIosLink } from 'react-icons/io';
import ShowLessonHeader from '../../ShowLessonHeader';

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
}

interface SingleAssignmentProps {
  assignment: Assignment;
}

const SingleAssignment: React.FC<SingleAssignmentProps> = ({ assignment }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex-1 p-5 space-y-5">
      <ShowLessonHeader />
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
        />
        {/* Custom button */}
        <button
          onClick={handleFileClick}
          className="w-full py-1 border rounded-lg border-pTag hover:bg-gray-300"
        >
          Choose File
        </button>
      </div>

      <div className="space-y-2">
        <h4 className='font-semibold'>Your Solution</h4>
        {/* Show the file name if a file is selected */}
        {fileName && (
          <div className="w-full p-2 text-xs text-gray-700 border rounded-lg ">
            Selected file: {fileName}
          </div>
        )}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleFileClick}>
          <IoIosLink />
          <p className="text-sm text-primary">Add your work</p>
        </div>
      </div>

      <button className="px-4 py-2 font-semibold text-white rounded-md bg-primary">Submit</button>
    </div>
  );
};

export default SingleAssignment;
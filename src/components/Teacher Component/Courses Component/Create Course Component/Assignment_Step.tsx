import React, { useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import axios from 'axios';
import { AssignmentOrExamResponse, AssignmentResponse } from '../../../../types/courses/createCourse';
import Cookies from 'js-cookie';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface Assignment_StepProps {
  handleNextModule: () => void;
  handleFinish: () => void;
  isLastModule: boolean;
  handleFileUpload?: (file: File | null) => void;
  partId: string | null;
  setAssignmentId: (id: string) => void;
  activeModule: { partIndex: number, moduleIndex: number, lessonIndex?: number };
}

const Assignment_Step: React.FC<Assignment_StepProps> = ({ handleNextModule, isLastModule, handleFinish, handleFileUpload, partId, activeModule, setAssignmentId }) => {

  // State to manage questions
  const [questions, setQuestions] = useState<{ questionText: string, answerType: string, options: string[], correctAnswer: string; id?: string }[]>([{ questionText: '', answerType: 'SHORT_ANSWER', options: [], correctAnswer: '' }]);
  const [title, setTitle] = useState<string>(''); // State to manage title
  const [isFree, setIsFree] = useState<boolean>(false); // State to manage isFree
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading

  useEffect(() => {
    const fetchData = async () => {
      await fetchAssignment();
    };
    fetchData();
  }, []);

  const fetchAssignment = async () => {
    const assignmentKey = `assignmentId_${activeModule.partIndex}_${activeModule.moduleIndex}`;
    const assignmentId = localStorage.getItem(assignmentKey);
    if (assignmentId) {
      setAssignmentId(assignmentId);
      const res: AssignmentResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/courses/modules/${assignmentId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      console.log(res.data.assignments);

      setTitle(res.data.assignments[0].title);
      const questions = res.data.assignments[0].questions.map((question) => ({
        questionText: question.questionText,
        answerType: question.answerType,
        options: question.options.map(option => option),
        correctAnswer: question.correctAnswer,
        id: question.id
      }));
      setQuestions(questions);
    }
    console.log(questions);
  };


  const handleDeleteQuestion = (index: number) => {
    setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
  };

  // Function to handle adding a new question
  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', answerType: 'SHORT_ANSWER', options: [], correctAnswer: '' }]); // Add a new empty question
  };

  // Function to handle change in question input
  const handleQuestionChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = value; // Update the specific question's text
    setQuestions(updatedQuestions);
  };

  const handleNext = async () => {
    handleNextModule(); // Call the handleNextModule prop to go to the next module
  };

  const handlefinish = async () => {
    const res = await ApiCall();
    if (res?.data.id) {
      handleFinish(); // Call the handleFinish prop to finish the process
    }
    handleFinish();
  };

  const validateForm = () => {
    return title.length > 0 && questions.every(question => question.questionText.length > 0); // Validate if the title and all questions are filled
  };

  const ApiCall = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      console.log('API Call');

      setLoading(true);
      const courseId = localStorage.getItem('courseId');
      const assignmentId = localStorage.getItem(`assignmentId_${activeModule.partIndex}_${activeModule.moduleIndex}`);
      if (assignmentId) {
        await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/${assignmentId}/assignment`, {
          title,
          questions
        }, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
      } else {
        const res: AssignmentOrExamResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/assignment`, {
          title,
          questions
        }, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
        return res;
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    console.log('Save');

    const res = await ApiCall();
    if (res?.data.id) {
      const { partIndex, moduleIndex } = activeModule;
      console.log(`Part Id in Assignment Step: ${partId}`);
      const assignmentCount = localStorage.getItem('assignmentCount') ? parseInt(localStorage.getItem('assignmentCount')!) : 0;
      const newAssignmentName = `Assignment ${assignmentCount + 1}`;
      const assignmentKey = `assignmentId_${partIndex}_${moduleIndex}`;

      console.log(`Created ${newAssignmentName} with ID: ${res?.data.id}`);
      localStorage.setItem(assignmentKey, res?.data.id);
      localStorage.setItem('AssignmentCount', (assignmentCount + 1).toString());
      setAssignmentId(res?.data.id);
    }
    // const { partIndex, moduleIndex } = activeModule;
    // console.log(`Part Id in Assignment Step: ${partId}`);
    // const randomString = Math.random().toString(36).substring(2, 8);
    // const assignmentCount = localStorage.getItem('assignmentCount') ? parseInt(localStorage.getItem('assignmentCount')!) : 0;
    // const newAssignmentName = `Assignment ${assignmentCount + 1}`;
    // const assignmentKey = `assignmentId_${partIndex}_${moduleIndex}`;

    // console.log(`Created ${newAssignmentName} with ID: ${randomString}`);
    // localStorage.setItem(assignmentKey, randomString);
    // localStorage.setItem('AssignmentCount', (assignmentCount + 1).toString());
    // setAssignmentId(randomString);
  };

  return (
    <div className=' h-fit'>
      <div className='flex max-w-4xl gap-3 mx-auto h-fit '>
        <div className='flex-1 p-4'>
          <div>
            <div className='flex flex-col justify-between w-full gap-4 lg:flex-row'>
              <div className='space-y-4 w-[90%]'>
                <div>
                  <label className="font-semibold">Title</label>
                  <input className='w-full py-2 rounded-md' type="text" placeholder='Enter The Assignment Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                  <label className="font-semibold flex gap-2">IsFree</label>
                  <input className='py-2 rounded-md' type="checkbox" checked={isFree} onChange={() => setIsFree((prev) => !prev)} />
                </div>
                <div className='space-y-4'>
                  {/* Dynamically render questions */}
                  {questions.map((question, index) => (
                    <div key={index} className='flex flex-col gap-1'>
                      <label>{`Question ${index + 1}`}</label>
                      <input
                        className='w-full border rounded-md'
                        type="text"
                        placeholder={`Add Question ${index + 1}`}
                        value={question.questionText}
                        onChange={(e) => handleQuestionChange(index, e.target.value)} // Handle question change
                      />
                      <RiDeleteBin6Line
                        onClick={() => handleDeleteQuestion(index)}
                        className="p-1 text-2xl text-red-600 border border-red-600 rounded-sm cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Lesson File and Attachment Upload Sections */}
              <div className='space-y-4'>
                <div className='w-[100%]'>
                  <label className='font-semibold'>Lesson File</label>
                  <div className='w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4'>
                    <p>Browse and choose the files you want to upload from your computer</p>
                    <FileUpload onFileSelect={handleFileUpload} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button to add new question */}
          <button
            className='px-4 py-2 mt-3 border rounded-md text-primary border-primary'
            onClick={handleAddQuestion}
            disabled={loading}
          >
            Add Question +
          </button>

          {/* Button to go to next module */}
          <div className='flex items-center gap-2 mt-4'>
            {!isLastModule && (
              <>
                <button
                  className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                  onClick={handleNext}
                  disabled={loading}
                >
                  Next Module
                </button>
                <button
                  className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                  onClick={handleSave}
                  disabled={loading}
                >
                  Save
                </button>
              </>
            )}
            {isLastModule && (
              <>
                <button
                  className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                  onClick={handlefinish}
                  disabled={loading}
                >
                  Finish Module
                </button>
                <button
                  className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                  onClick={handleSave}
                  disabled={loading}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment_Step;

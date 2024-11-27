import React, { useState } from 'react'; 
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { Assignment, Question, AnswerType } from '../../../../../types/course';
import { IoIosCloseCircleOutline } from "react-icons/io";


interface AssignmentModuleProps {
  moduleId: string;
  partId: string;
  module: Assignment;
  onSave: () => void; // New onSave prop to trigger re-fetch in parent
}

const AssignmentModule: React.FC<AssignmentModuleProps> = ({ moduleId, partId, module, onSave }) => {
  const [questions, setQuestions] = useState<Question[]>(module.questions);
  const [supportingMaterial, setSupportingMaterial] = useState<File | null>(null);
  const [title, setTitle] = useState<string>(module.title);
  const [isFree, setIsFree] = useState<boolean>(module.isFree); // State for isFree
  const [isSaving, setIsSaving] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  // Get courseId from localStorage
  const courseId = localStorage.getItem('courseId') || '';

  // Handle supporting material file change
  const handleSupportingMaterialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSupportingMaterial(file);
    }
  };

  // Add a new question
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: `${Date.now()}`, // Unique ID
        questionText: '',
        answerType: AnswerType.MCQ,
        options: ['', '', ''], // Default options
        correctAnswer: '',
      },
    ]);
  };

  // Remove a question by ID
  const handleRemoveQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  // Update a specific question field
  const handleQuestionChange = (id: string, key: string, value: any) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, [key]: value } : q))
    );
  };

  // Handle title change
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handle isFree toggle
  const handleIsFreeChange = () => {
    setIsFree(!isFree); // Toggle isFree state
  };

  // Save updated questions, supporting material, and isFree to the API
  const handleSave = async () => {
    if (!courseId) {
      enqueueSnackbar('Course ID is missing in local storage.', { variant: 'error' });
      return;
    }

    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append('title', title); // Append title to the form data
      if (supportingMaterial) {
        formData.append('supportingMaterial', supportingMaterial); // Append supporting material file
      }

      // Send questions and isFree as part of the request body, not in FormData (no stringify)
      const requestBody = {
        title,
        questions, // questions are now passed as an array of objects
        supportingMaterial: supportingMaterial ? supportingMaterial.name : null, // Optional: filename for display
        isFree, // Added isFree flag
      };

      const url = `http://localhost:5000/api/courses/${courseId}/assignment/${module.id}`;

      // Sending the request with JSON data
      const response = await axios.patch(url, requestBody, {
        headers: {
          'Content-Type': 'application/json', // Change to application/json for sending JSON data
        },
      });

      enqueueSnackbar('Assignment saved successfully!', { variant: 'success' }); // Success notification
      console.log('Response:', response.data);

      // Call onSave after successfully saving the assignment to trigger a refetch in parent
      onSave();
    } catch (error) {
      console.error('Error saving assignment:', error);
      enqueueSnackbar('Failed to save the assignment. Please try again.', { variant: 'error' }); // Error notification
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold">Assignment Module</h2>
      
      {/* Editable Title */}
      <div className="mt-4 mb-4">
          <div className='flex flex-col gap-3 lg:flex-row'>
          <div className="flex flex-col items-center justify-center order-2 gap-4 p-3 border border-dashed border-primary lg:w-[45%] w-full">
        <input
          type="file"
          id="file-input"
          onChange={handleSupportingMaterialChange}
          className="hidden p-2 mb-2 border rounded"
        />
        <p className="text-sm text-center">Browse and chose the files you want to upload from your computer</p>
        {/* Custom "+" Button */}
        <label
          htmlFor="file-input"
          className="px-2 text-3xl text-white rounded-lg cursor-pointer bg-primary "
        >
          + {/* This "+" icon will trigger the file input */}
        </label>
        </div>
        <div className=' lg:w-[55%] w-full'>
        <label className="block font-semibold">Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange} // Update title state on change
          className="w-full p-2 mb-2 rounded border-slate-300"
        />
      
      {/* Supporting Material */}
      <div className="mb-4">
        <label className="block font-semibold">Supporting Material:</label>
        {supportingMaterial && (
          <div className="mt-2 text-sm">
            <strong>Selected file: </strong> {supportingMaterial.name}
          </div>
        )}
      </div>

      {/* Is Free Toggle */}
      <div className="flex items-center mb-4">
        <label className="block mr-2 font-semibold">Is Free:</label>
        <input
          type="checkbox"
          checked={isFree}
          onChange={handleIsFreeChange} // Handle isFree toggle
          className="p-2 text-primary"
        />
      </div>
      </div>
          </div>
        </div>

      {/* Questions */}
      {questions.length > 0 &&
        questions.map((question) => (
          <div key={question.id} className="pb-4 mb-4 border-b">
            <input
              type="text"
              value={question.questionText}
              onChange={(e) =>
                handleQuestionChange(question.id, 'questionText', e.target.value)
              }
              placeholder="Enter question text"
              className="w-full py-2 mb-2 rounded border-slate-300"
            />
            <div className=''>
              <div className='flex flex-wrap items-center w-full lg:gap-4'>
              {question.options.map((option, idx) => (
                <div key={idx} className="flex items-center">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleQuestionChange(
                        question.id,
                        'options',
                        question.options.map((opt, i) =>
                          i === idx ? e.target.value : opt
                        )
                      )
                    }
                    placeholder={`Option ${idx + 1}`}
                    className="px-4 py-2 mb-2 mr-2 rounded border-slate-300 "
                  />
                  <button
                    onClick={() =>
                      handleQuestionChange(
                        question.id,
                        'options',
                        question.options.filter((_, i) => i !== idx)
                      )
                    }
                    className="text-red-500"
                  >
                    <IoIosCloseCircleOutline />
                  </button>
              </div>
              ))}
              </div>
              <button
                onClick={() =>
                  handleQuestionChange(question.id, 'options', [
                    ...question.options,
                    '',
                  ])
                }
                className="px-4 py-2 mb-2 text-white rounded bg-primary"
              >
                Add Option
              </button>
              <div className='space-y-1'>
                <label className="block">Correct Answer:</label>
                <input
                  type="text"
                  value={question.correctAnswer || ''}
                  onChange={(e) =>
                    handleQuestionChange(
                      question.id,
                      'correctAnswer',
                      e.target.value
                    )
                  }
                  placeholder="Enter correct answer"
                  className="p-2 mb-2 rounded border-slate-300 "
                />
              </div>
            </div>
            <button
              onClick={() => handleRemoveQuestion(question.id)}
              className="p-2 mt-4 font-semibold border rounded text-primary border-primary"
            >
              Remove Question
            </button>
          </div>
        ))}
<div className='space-x-4'>
        
<button
        onClick={handleAddQuestion}
        className="p-2 text-white rounded bg-primary"
      >
        Add Question
      </button>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className={`p-2 mt-4 text-primary rounded ${isSaving ? 'bg-gray-400 text-primary' : 'border border-primary text-black font-semibold'}`}
        disabled={isSaving}
      >
        {isSaving ? 'Saving...' : 'Save'}
      </button>
</div>
    </div>
  );
};

export default AssignmentModule;

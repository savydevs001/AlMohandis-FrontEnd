import React, { useState } from 'react';
import axios from 'axios';
import { Exam, Question, AnswerType } from '../../../../../types/course';
import { useSnackbar } from 'notistack';  // Import the useSnackbar hook from notistack
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ExamModuleProps {
  module: Exam;
  onSave: () => void; // New onSave prop to trigger re-fetch in parent
}

const ExamModule: React.FC<ExamModuleProps> = ({ module, onSave }) => {
  const [questions, setQuestions] = useState<Question[]>(module.questions);
  const [title, setTitle] = useState<string>(module.title);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar(); // Hook to trigger notifications

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: `${Date.now()}`,
        questionText: '',
        answerType: AnswerType.MCQ,
        options: ['', '', ''],
        correctAnswer: '',
      },
    ]);
  };

  const handleRemoveQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleQuestionChange = (id: string, key: string, value: any) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, [key]: value } : q))
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const requestBody = {
        title,
        questions,
      };

      const response = await axios.patch(
        `http://localhost:5000/api/courses/${localStorage.getItem('courseId')}/exam/${module.id}`,
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Exam saved:', response.data);
      onSave();
      
      // Enqueue success notification after exam is saved
      enqueueSnackbar('Exam saved successfully!', { variant: 'success' });
    } catch (error) {
      console.error('Error saving exam:', error);
      enqueueSnackbar('Failed to save exam. Please try again.', { variant: 'error' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold">Exam Module</h2>
      <div className="mt-4 mb-4 space-y-1">
        <label className="block">Exam Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 rounded border-slate-300"
        />
      </div>

      {questions.map((question, index) => (
        <div key={question.id} className="pb-4 mb-4 border-b">
          <input
            type="text"
            value={question.questionText}
            onChange={(e) => handleQuestionChange(question.id, 'questionText', e.target.value)}
            placeholder="Enter question text"
            className="w-full p-2 mb-2 rounded border-slate-300"
          />
          <div>
            <div className='flex flex-wrap items-center w-full gap-4'>
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
                  className="w-full p-2 mb-2 mr-2 rounded border-slate-300"
                />
                <button
                  onClick={() =>
                    handleQuestionChange(question.id, 'options', question.options.filter((_, i) => i !== idx))
                  }
                  className="text-red-500"
                >
                  <IoIosCloseCircleOutline />

                </button>
              </div>
            ))}
            </div>
            <button
              onClick={() => handleQuestionChange(question.id, 'options', [...question.options, ''])}
              className="p-2 mb-2 text-white rounded bg-primary"
            >
              Add Option
            </button>
            <div className='space-y-1'>
              <label className="block">Correct Answer:</label>
              <input
                type="text"
                value={question.correctAnswer || ''}
                onChange={(e) => handleQuestionChange(question.id, 'correctAnswer', e.target.value)}
                placeholder="Enter correct answer"
                className="p-2 mb-2 rounded w-fit border-slate-300"
              />
            </div>
          </div>
          <button
            onClick={() => handleRemoveQuestion(question.id)}
            className="p-2 mt-2 font-semibold border rounded border-primary text-primary"
          >
            Remove Question
          </button>
        </div>
      ))}
      <div className='space-x-4'>
      <button onClick={handleAddQuestion} className="p-2 text-white rounded bg-primary">
        Add Question
      </button>

      <button
        onClick={handleSave}
        className={`border border-primary text-primary font-semibold p-2 rounded mt-4 ${isSaving ? 'bg-gray-500 text-white' : ''}`}
        disabled={isSaving}
      >
        {isSaving ? 'Saving...' : 'Save Exam'}
      </button>
      </div>
    </div>
  );
};

export default ExamModule;

import React, { useState } from 'react';
import axios from 'axios';
import { Exam, Question, AnswerType } from '../../../../../types/course';
import { useSnackbar } from 'notistack';  // Import the useSnackbar hook from notistack

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
    <div className="p-4">
      <h2 className="text-lg font-bold">Exam Module</h2>
      <div className="mb-4">
        <label className="block">Exam Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
      </div>

      {questions.map((question, index) => (
        <div key={question.id} className="border-b pb-4 mb-4">
          <input
            type="text"
            value={question.questionText}
            onChange={(e) => handleQuestionChange(question.id, 'questionText', e.target.value)}
            placeholder="Enter question text"
            className="border rounded p-2 w-full mb-2"
          />
          <div>
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
                  className="border rounded p-2 w-1/2 mb-2 mr-2"
                />
                <button
                  onClick={() =>
                    handleQuestionChange(question.id, 'options', question.options.filter((_, i) => i !== idx))
                  }
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => handleQuestionChange(question.id, 'options', [...question.options, ''])}
              className="bg-blue-500 text-white p-2 rounded mb-2"
            >
              Add Option
            </button>
            <div>
              <label className="block">Correct Answer:</label>
              <input
                type="text"
                value={question.correctAnswer || ''}
                onChange={(e) => handleQuestionChange(question.id, 'correctAnswer', e.target.value)}
                placeholder="Enter correct answer"
                className="border rounded p-2 w-full mb-2"
              />
            </div>
          </div>
          <button
            onClick={() => handleRemoveQuestion(question.id)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove Question
          </button>
        </div>
      ))}
      <button onClick={handleAddQuestion} className="bg-green-500 text-white p-2 rounded">
        Add Question
      </button>

      <button
        onClick={handleSave}
        className={`bg-blue-500 text-white p-2 rounded mt-4 ${isSaving ? 'bg-gray-500' : ''}`}
        disabled={isSaving}
      >
        {isSaving ? 'Saving...' : 'Save Exam'}
      </button>
    </div>
  );
};

export default ExamModule;

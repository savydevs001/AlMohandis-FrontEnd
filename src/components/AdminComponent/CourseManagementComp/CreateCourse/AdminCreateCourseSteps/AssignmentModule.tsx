import React, { useState } from 'react';
import { Assignment, Question, AnswerType } from '../../../../../types/course';

interface AssignmentModuleProps {
  module: Assignment;
}

const AssignmentModule: React.FC<AssignmentModuleProps> = ({ module }) => {
  const [questions, setQuestions] = useState<Question[]>(module.questions);

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
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleQuestionChange = (id: string, key: string, value: any) => {
    setQuestions(
      questions.map(q => (q.id === id ? { ...q, [key]: value } : q))
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Assignment Module</h2>
      { questions.length > 0 && questions.map((question, _) => (
        <div key={question.id} className="pb-4 mb-4 border-b">
          <input
            type="text"
            value={question.questionText}
            onChange={e => handleQuestionChange(question.id, 'questionText', e.target.value)}
            placeholder="Enter question text"
            className="w-full p-2 mb-2 border rounded"
          />
          <div>
            {question.options.map((option, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="text"
                  value={option}
                  onChange={e =>
                    handleQuestionChange(
                      question.id,
                      'options',
                      question.options.map((opt, i) =>
                        i === idx ? e.target.value : opt
                      )
                    )
                  }
                  placeholder={`Option ${idx + 1}`}
                  className="w-1/2 p-2 mb-2 mr-2 border rounded"
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
              className="p-2 mb-2 text-white bg-blue-500 rounded"
            >
              Add Option
            </button>
            <div>
              <label className="block">Correct Answer:</label>
              <input
                type="text"
                value={question.correctAnswer || ''}
                onChange={e => handleQuestionChange(question.id, 'correctAnswer', e.target.value)}
                placeholder="Enter correct answer"
                className="w-full p-2 mb-2 border rounded"
              />
            </div>
          </div>
          <button
            onClick={() => handleRemoveQuestion(question.id)}
            className="p-2 text-white bg-red-500 rounded"
          >
            Remove Question
          </button>
        </div>
      ))}
      <button onClick={handleAddQuestion} className="p-2 text-white bg-green-500 rounded">
        Add Question
      </button>
    </div>
  );
};

export default AssignmentModule;

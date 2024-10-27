import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { AssignmentOrExamResponse } from '../../../../types/courses/createCourse';

interface Exam_StepProps {
  handleNextModule: () => void;
  handleFinish: () => void;
  isLastModule: boolean;
  partId: string | null;
}

const Exam_Step: React.FC<Exam_StepProps> = ({ handleNextModule, isLastModule, handleFinish, partId }) => {
  const [title, setTitle] = useState<string>('Math Exam');
  const [questions, setQuestions] = useState([
    {
      questionText: '',
      answerType: 'MCQ',
      options: [''],
      correctAnswer: ''
    }
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddQuestion = () => {
    setQuestions([...questions, {
      questionText: '',
      answerType: 'MCQ',
      options: [''],
      correctAnswer: ''
    }]);
  };

  const handleQuestionChange = (index: number, field: string, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex: number, oIndex: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (qIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options.push('');
    setQuestions(updatedQuestions);
  };

  const handleAnswerTypeChange = (qIndex: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answerType = value;
    setQuestions(updatedQuestions);
  };

  const handleNext = async () => {
    const res = await ApiCall();
    if (res?.data.id) {
      alert('Exam created successfully');
      setQuestions([{ questionText: '', answerType: 'SHORT_ANSWER', options: [], correctAnswer: '' }]); // Reset questions
      setTitle(''); // Reset title
      handleNextModule(); // Call the handleNext prop to move to the next step
    } else {
      alert('An error occurred. Please try again.');
    }
 };

 const handlefinish = async () => {
    const res = await ApiCall();
    if (res?.data.id) {
      alert('Exam created successfully');
      setQuestions([{ questionText: '', answerType: 'SHORT_ANSWER', options: [], correctAnswer: '' }]); // Reset questions
      setTitle(''); // Reset title
      handleFinish(); // Call the handleFinish prop to finish the process
    } else {
      alert('An error occurred. Please try again.');
    }
 };

  const validateForm = () => {
    return title.length > 0 && questions.every(question => question.questionText.length > 0); // Validate if the title and all questions are filled
  };

  const ApiCall = async () => {
    if (!validateForm()) {
      alert('Please fill all the fields');
      return;
    }
    try {
      setLoading(true);
      const courseId = localStorage.getItem('courseId');
      const res: AssignmentOrExamResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/exam`, {
        title,
        questions
      }, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      return res;
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-12 h-fit'>
      <div className='flex max-w-4xl gap-3 mx-auto shadow-2xl h-fit bg-cardBg'>
        <div className='flex-1 p-4 border border-neutral-300'>
          <div className="space-y-1">
            <label className="font-semibold" htmlFor="">Title</label>
            <input
              className='w-full py-2 rounded-md'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Exam Title"
            />
          </div>

          {questions.map((question, qIndex) => (
            <div key={qIndex} className='mt-4'>
              <input
                className='w-full py-2 rounded-md'
                type="text"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
                placeholder={`Question ${qIndex + 1}`}
              />
              <select
                className='w-full py-2 mt-2 rounded-md'
                value={question.answerType}
                onChange={(e) => handleAnswerTypeChange(qIndex, e.target.value)}
              >
                <option value="MCQ">MCQ</option>
                <option value="Short Question">Short Question</option>
              </select>
              {question.answerType === 'MCQ' && (
                <div className='mt-2'>
                  {question.options.map((option, oIndex) => (
                    <input
                      key={oIndex}
                      className='w-full py-2 rounded-md mt-1'
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                      placeholder={`Option ${oIndex + 1}`}
                    />
                  ))}
                  <button
                    className='px-2 py-1 mt-2 text-white bg-blue-500 rounded'
                    onClick={() => handleAddOption(qIndex)}
                  >
                    Add Option
                  </button>
                  <input
                    className='w-full py-2 rounded-md mt-2'
                    type="text"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                    placeholder="Correct Answer"
                  />
                </div>
              )}
              {question.answerType === 'Short Question' && (
                <div className='mt-2'>
                  <input
                    className='w-full py-2 rounded-md'
                    type="text"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                    placeholder="Correct Answer"
                  />
                </div>
              )}
            </div>
          ))}

          <button
            className='px-4 py-2 mt-4 text-white bg-green-500 rounded'
            onClick={handleAddQuestion}
            disabled={loading}
          >
            Add Question
          </button>

          <div className='flex items-center gap-2 mt-4'>
            {!isLastModule && (
              <button
                className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                onClick={handleNext}
                disabled={loading}
              >
                Next Module
              </button>
            )}
            {isLastModule && (
              <button
                className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                onClick={handlefinish}
                disabled={loading}
              >
                Finish Module
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam_Step;

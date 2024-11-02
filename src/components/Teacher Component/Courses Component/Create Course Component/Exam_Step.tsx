import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { AssignmentOrExamResponse, EXAMResponse } from '../../../../types/courses/createCourse';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface Exam_StepProps {
  handleNextModule: () => void;
  handleFinish: () => void;
  isLastModule: boolean;
  partId: string | null;
  setExamId: (id: string) => void;
  activeModule: { partIndex: number, moduleIndex: number, lessonIndex?: number };
}

const Exam_Step: React.FC<Exam_StepProps> = ({ handleNextModule, isLastModule, handleFinish, partId, activeModule, setExamId }) => {
  const [title, setTitle] = useState<string>('Math Exam');
  const [isFree, setIsFree] = useState<boolean>(false); // State to manage isFree
  const [questions, setQuestions] = useState<{ questionText: string, answerType: string, options: string[]; correctAnswer: string; id?: string }[]>([
    {
      questionText: '',
      answerType: 'MCQ',
      options: [''],
      correctAnswer: ''
    }
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchExam();
    };
    fetchData();
  }, []);

  const fetchExam = async () => {
    const examKey = `examId_${activeModule.partIndex}_${activeModule.moduleIndex}`;
    const examId = localStorage.getItem(examKey);
    if (examId) {
      setExamId(examId);
      const res: EXAMResponse = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/courses/modules/${examId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      console.log(res.data.exams[0].questions[0].options);

      setTitle(res.data.exams[0].title);
      const questions = res.data.exams[0].questions.map((question) => ({
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

  const handleDeleteQuestion = (index: number) => {
    setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
  };


  const handleNext = async () => {
    handleNextModule();
  };

  const handlefinish = async () => {
    const res = await ApiCall();
    if (res?.data.id) {
      handleFinish(); // Call the handleFinish prop to finish the process
    } else {
      console.error('Failed to create exam');
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
      setLoading(true);
      const courseId = localStorage.getItem('courseId');
      const examId = localStorage.getItem(`examId_${activeModule.partIndex}_${activeModule.moduleIndex}`);
      if (examId) {
        await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/${examId}/exam`, {
          title,
          questions
        }, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });
      } else {
        const res: AssignmentOrExamResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/courses/${courseId}/parts/${partId}/modules/exam`, {
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
    const res = await ApiCall();
    if (res?.data.id) {
      console.log(`Part Id in Exam Step: ${partId}`);
      const { partIndex, moduleIndex } = activeModule;
      console.log(`Part Id in Exam Step: ${partId}`);
      const examCount = localStorage.getItem('examCount') ? parseInt(localStorage.getItem('examCount')!) : 0;
      const newExamName = `Exam ${examCount + 1}`;
      const examKey = `examId_${partIndex}_${moduleIndex}`;

      console.log(`Created ${newExamName} with ID: ${res?.data.id}`);
      localStorage.setItem(examKey, res?.data.id);
      localStorage.setItem('examCount', (examCount + 1).toString());
      setExamId(res?.data.id);
    }
  };

  return (
    <div className='mt-0 h-fit'>
      <div className='flex max-w-4xl gap-3 px-4 mx-auto h-fit bg-cardBg'>
        <div className='flex-1 space-x-2'>
          <label className="font-semibold">IsFree</label>
          <input className='w-4 h-4 rounded-md' type="checkbox" checked={isFree} onChange={() => setIsFree((prev) => !prev)} />
          <div className="mt-3 space-y-1">
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
              <div className='flex items-center justify-between'>
              <input
                className='w-[50%] py-2 rounded-md'
                type="text"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
                placeholder={`Question ${qIndex + 1}`}
              />
               <RiDeleteBin6Line onClick={() => handleDeleteQuestion(qIndex)} className="p-1 text-2xl text-red-600 border border-red-600 rounded-sm cursor-pointer" />
              </div>
              <select
                className='w-full py-2 mt-2 rounded-md'
                value={question.answerType}
                onChange={(e) => handleAnswerTypeChange(qIndex, e.target.value)}
              >
                <option value="MCQ">MCQ</option>
                <option value="SHORT_ANSWER">Short Question</option>
              </select>
              {question.answerType === 'MCQ' && (
                <div className='flex flex-wrap gap-3 mt-2'>
                  {question.options.map((option, oIndex) => (
                    <input
                      key={oIndex}
                      className='w-[45%] py-2 mt-1 rounded-md'
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                      placeholder={`Option ${oIndex + 1}`}
                    />
                  ))}
                  <button
                    className='px-2 py-2 mt-2 text-white rounded bg-primary'
                    onClick={() => handleAddOption(qIndex)}
                  >
                    Add Option
                  </button>
                  <input
                    className='w-full py-2 mt-2 rounded-md'
                    type="text"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                    placeholder="Correct Answer"
                  />
                </div>
              )}
              {question.answerType === 'SHORT_ANSWER' && (
                <div className='mt-2 w-[50%]'>
                  <input
                    className='w-[50%] py-2 rounded-md'
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
            className='px-4 py-2 mt-4 text-white rounded bg-primary'
            onClick={handleAddQuestion}
            disabled={loading}
          >
            Add Question
          </button>

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

export default Exam_Step;

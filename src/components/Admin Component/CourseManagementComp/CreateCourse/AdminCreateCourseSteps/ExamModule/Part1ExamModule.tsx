import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
// import Step6LeftSide from '../Step6LeftSide';

interface Exam_StepProps {
  handleNextModule: () => void;
  handleFinish: () => void;
  isLastModule: boolean;
}

const Part1ExamModule: React.FC<Exam_StepProps> = ({ handleNextModule, handleFinish, isLastModule }) => {
  const [title, setTitle] = useState<string>('Math Exam');
  const [isFree, setIsFree] = useState<boolean>(false);
  const [questions, setQuestions] = useState<{ questionText: string, answerType: string, options: string[]; correctAnswer: string }[]>([
    {
      questionText: '',
      answerType: 'MCQ',
      options: [''],
      correctAnswer: ''
    }
  ]);

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

  const handleAddQuestion = () => {
    setQuestions(prevQuestions => [...prevQuestions, { questionText: '', answerType: 'MCQ', options: [''], correctAnswer: '' }]);
  };

  const handleSave = async () => {
    const formData = {
      title,
      isFree,
      questions
    };

    // This is where you would send formData to your backend
    console.log('Form data to be saved:', formData);
    // Example with fetch:
    // await fetch('/api/save-exam', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <div className='mt-0 h-fit'>
      <div className='flex flex-col w-[100%] gap-3 px-4 mx-auto mt-4 lg:max-w-4xl h-fit bg-cardBg lg:flex-row'>
        <div className='lg:w-[30%] w-full  border-2'>
            {/* <Step6LeftSide/> */}
        </div>
        <div className='w-full p-4 space-x-2 border-2 lg:flex-1'>
          <p className='text-sm text-[#7C7C7C]'>Available for Free</p>
          <input className='w-3 h-3 rounded-sm text-primary' type="checkbox" checked={isFree} onChange={() => setIsFree(prev => !prev)} />
          <div className="mt-3 space-y-1">
            <label className="font-semibold">Title</label>
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
          >
            Add Question
          </button>

          <div className='flex items-center gap-2 mt-4'>
            {!isLastModule && (
              <button
                className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
                onClick={handleNextModule}
              >
                Next Module
              </button>
            )}
            {isLastModule && (
              <button
                className='flex items-center gap-2 px-6 font-semibold text-white border-2 rounded-lg lg:py-2 bg-primary'
                onClick={handleFinish}
              >
                Finish Module
              </button>
            )}
            <button
              className='flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary'
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1ExamModule;

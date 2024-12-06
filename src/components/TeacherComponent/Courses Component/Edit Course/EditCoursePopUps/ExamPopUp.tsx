import React, { useState } from "react";
import axios from "axios";

export const ExamPopup: React.FC<{
  onClose: () => void;
  moduleId: string;
  partId: string;
  courseId: string;
}> = ({ onClose, moduleId, courseId, partId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState<
    { id: number; questionText: string; answerType: string; options: string[]; correctAnswer: string }[]
  >([]);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      questionText: "",
      answerType: "MCQ",
      options: ["", "", "", ""],
      correctAnswer: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionChange = (id: number, field: string, value: any) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === id ? { ...q, [field]: value } : q
      )
    );
  };

  const handleOptionChange = (questionId: number, optionIndex: number, value: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((opt, idx) =>
                idx === optionIndex ? value : opt
              ),
            }
          : q
      )
    );
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleSave = async () => {
    const payload = {
      title,
      questions: questions.map((q) => ({
        questionText: q.questionText,
        answerType: q.answerType,
        options: q.options,
        correctAnswer: q.correctAnswer,
      })),
    };
  console.log('courseId',courseId)
  console.log('partId',partId)
  console.log('moduleId',moduleId)
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/courses/${courseId}/exam/${moduleId}`,
        
        payload
      );
      console.log("Exam Updated successfully:", response.data);
      onClose();
    } catch (error) {
      console.error("Error updating exam:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        <div className="w-full">
          <input
            type="text"
            placeholder="Exam Title"
            className="w-full rounded-md border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full space-y-1">
          <label className="font-semibold">Description</label>
          <input
            type="text"
            placeholder="Enter Description here..."
            className="w-full rounded-md border-slate-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <button
            className="px-4 py-3 mt-2 w-[40%] text-primary rounded border border-primary font-semibold"
            onClick={handleAddQuestion}
          >
            Add Question +
          </button>
        </div>

        {questions.map((q, index) => (
          <div key={q.id} className="p-4 bg-gray-100 rounded-md">
            <label className="block font-semibold">Question {index + 1}</label>
            <input
              type="text"
              placeholder="Enter Question"
              className="w-full rounded-md border-slate-300"
              value={q.questionText}
              onChange={(e) =>
                handleQuestionChange(q.id, "questionText", e.target.value)
              }
            />

            <label className="block mt-2 font-semibold">Options</label>
            {q.options.map((option, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={`Option ${idx + 1}`}
                className="w-full mt-1 rounded-md border-slate-300"
                value={option}
                onChange={(e) =>
                  handleOptionChange(q.id, idx, e.target.value)
                }
              />
            ))}

            <label className="block mt-2 font-semibold">Correct Answer</label>
            <input
              type="text"
              placeholder="Enter Correct Answer"
              className="w-full rounded-md border-slate-300"
              value={q.correctAnswer}
              onChange={(e) =>
                handleQuestionChange(q.id, "correctAnswer", e.target.value)
              }
            />

            <button
              className="px-2 py-1 mt-2 text-sm text-white bg-red-500 rounded"
              onClick={() => handleRemoveQuestion(q.id)}
            >
              Remove Question
            </button>
          </div>
        ))}

        <div className="flex items-center justify-end w-full gap-4">
          <button
            className="px-4 py-2 mt-4 text-white rounded bg-primary"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-4 py-2 mt-4 font-semibold border rounded text-primary border-primary"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

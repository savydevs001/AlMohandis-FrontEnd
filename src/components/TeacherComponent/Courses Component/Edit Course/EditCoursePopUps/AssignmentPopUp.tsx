import React, { useState } from "react";
import AdminFileInput from "../../../../AdminComponent/Landing/AdminFileInput";
import axios from "axios";

export const AssignmentPopup: React.FC<{
  onClose: () => void;
  moduleId: string;
  courseId: string;
}> = ({ onClose, moduleId, courseId }) => {
  const [title, setTitle] = useState<string>(""); // Title of the assignment
  const [questions, setQuestions] = useState<
    {
      id: number;
      questionText: string;
      answerType: string;
      correctAnswer: string;
      options: string[];
    }[]
  >([]);
  const [assignmentFile, setAssignmentFile] = useState<File | null>(null); // Assignment file

  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      questionText: "",
      answerType: "SHORT_ANSWER",
      correctAnswer: "",
      options: [],
    }; // Default structure for a question
    setQuestions([...questions, newQuestion]); // Add the new question to the list
  };

  const handleQuestionChange = (id: number, field: string, value: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, [field]: value } : q // Update the specified field for the question with the matching ID
      )
    );
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id)); // Remove the question with the specified ID
  };

  const handleUpdateAssignment = async () => {
    try {
      const data = {
        title,
        questions: questions.map(({ id, ...q }) => q), // Exclude the internal ID from the API payload
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(data));

      if (assignmentFile) {
        formData.append("file", assignmentFile);
      }

      // PATCH request to update the assignment
      //  console.log("asas",moduleId)
      await axios.patch(
        `http://localhost:5000/api/courses/${courseId}/assignment/${moduleId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Assignment updated successfully!");
      onClose(); // Close the popup after updating
    } catch (error) {
      console.error("Error updating assignment:", error);
      alert("Failed to update assignment. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center w-full max-w-md gap-4 p-6 bg-white rounded-lg shadow-lg ">
        <div className="w-full">
          <label className="font-semibold">Assignment Title</label>
          <input
            type="text"
            placeholder="Enter assignment title"
            className="w-full rounded-md border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title
          />
        </div>

        {/* Add Question Section */}
        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="text" className="font-semibold">
            Questions
          </label>
          {questions.map((q) => (
            <div key={q.id} className="space-y-2 border-b pb-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter question text"
                  value={q.questionText}
                  onChange={(e) =>
                    handleQuestionChange(q.id, "questionText", e.target.value)
                  }
                  className="w-[70%] rounded-md border-slate-300"
                />
                <select
                  value={q.answerType}
                  onChange={(e) =>
                    handleQuestionChange(q.id, "answerType", e.target.value)
                  }
                  className="w-[30%] rounded-md border-slate-300"
                >
                  <option value="SHORT_ANSWER">Short Answer</option>
                  <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                </select>
              </div>
              {q.answerType === "MULTIPLE_CHOICE" && (
                <div className="space-y-1">
                  <label className="font-semibold">Options</label>
                  {q.options.map((opt, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) =>
                          setQuestions(
                            questions.map((question) =>
                              question.id === q.id
                                ? {
                                    ...question,
                                    options: question.options.map((o, i) =>
                                      i === index ? e.target.value : o
                                    ),
                                  }
                                : question
                            )
                          )
                        }
                        className="w-[80%] rounded-md border-slate-300"
                        placeholder="Enter option"
                      />
                      <button
                        onClick={() =>
                          setQuestions(
                            questions.map((question) =>
                              question.id === q.id
                                ? {
                                    ...question,
                                    options: question.options.filter(
                                      (_, i) => i !== index
                                    ),
                                  }
                                : question
                            )
                          )
                        }
                        className="px-3 py-1 text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    className="text-sm text-primary"
                    onClick={() =>
                      setQuestions(
                        questions.map((question) =>
                          question.id === q.id
                            ? {
                                ...question,
                                options: [...question.options, ""],
                              }
                            : question
                        )
                      )
                    }
                  >
                    Add Option +
                  </button>
                </div>
              )}
              <div>
                <label className="font-semibold">Correct Answer</label>
                <input
                  type="text"
                  value={q.correctAnswer}
                  onChange={(e) =>
                    handleQuestionChange(q.id, "correctAnswer", e.target.value)
                  }
                  className="w-full rounded-md border-slate-300"
                  placeholder="Enter correct answer"
                />
              </div>
              <button
                onClick={() => handleRemoveQuestion(q.id)}
                className="text-sm text-red-500"
              >
                Remove Question
              </button>
            </div>
          ))}
          <button
            className="px-4 py-3 mt-2 w-full text-white rounded bg-primary"
            onClick={handleAddQuestion}
          >
            Add Question +
          </button>
        </div>

        <div className="w-full">
          <AdminFileInput
            label=""
            fileText="Assignment File"
            onChange={(file) => setAssignmentFile(file)} // Update the file state
          />
        </div>

        <div className="flex items-center justify-end w-full gap-4">
          <button
            className="px-4 py-2 mt-4 text-white rounded bg-primary"
            onClick={handleUpdateAssignment}
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

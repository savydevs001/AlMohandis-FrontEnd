import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import { ModuleType, AnswerType, LessonType, ChannelType, Module, Part } from '../../../../../types/course';
import AssignmentModule from './AssignmentModule';
import ExamModule from './ExamModule';
import ChapterModule from './ChapterModule';
import AttachmentModule from './AttachmentModule';

// Dummy data (populated according to interfaces)
const dummyParts: Part[] = [
    {
      id: "part-1",
      title: "Part 1: Introduction to Programming",
      price: 100,
      completionTime: 120,
      openingDate: new Date("2024-11-01"),
      courseId: "course-1",
      modules: [
        {
          id: "module-1",
          type: ModuleType.ASSIGNMENT,
          partId: "part-1",
          courseId: "course-1",
          isPromoted: true,
          isPromotional: false,
          attachments: [], // Add attachments if any
          chapters: [],
          assignments: [
            {
              id: "assignment-1",
              title: "Assignment 1: Basic Syntax",
              questions: [
                {
                  id: "question-1",
                  questionText: "What is a variable?",
                  answerType: AnswerType.MCQ,
                  options: ["A memory storage", "A function", "An operator"],
                  correctAnswer: "A memory storage",
                  assignmentId: "assignment-1",
                  moduleId: "module-1"
                },
                {
                  id: "question-2",
                  questionText: "What does 'let' do in JavaScript?",
                  answerType: AnswerType.MCQ,
                  options: ["Defines a variable", "Creates a function", "Imports a module"],
                  correctAnswer: "Defines a variable",
                  assignmentId: "assignment-1",
                  moduleId: "module-1"
                }
              ],
              supportingMaterial: "https://example.com/materials/intro-to-js.pdf",
              moduleId: "module-1",
              isFree: false
            }
          ],
          exams: [],
        },
        {
          id: "module-2",
          type: ModuleType.EXAM,
          partId: "part-1",
          courseId: "course-1",
          isPromoted: false,
          isPromotional: false,
          attachments: [],
          chapters: [],
          assignments: [],
          exams: [
            {
              id: "exam-1",
              title: "Final Exam: JavaScript Basics",
              questions: [
                {
                  id: "exam-question-1",
                  questionText: "What is the output of console.log(1 + '1')?",
                  answerType: AnswerType.MCQ,
                  options: ["11", "2", "undefined"],
                  correctAnswer: "11",
                  examId: "exam-1",
                  moduleId: "module-2"
                }
              ],
              moduleId: "module-2",
              isFree: false
            }
          ]
        }
      ]
    },
    {
      id: "part-2",
      title: "Part 2: Advanced JavaScript",
      price: 150,
      completionTime: 180,
      openingDate: new Date("2024-12-01"),
      courseId: "course-1",
      modules: [
        {
          id: "module-3",
          type: ModuleType.CHAPTER,
          partId: "part-2",
          courseId: "course-1",
          isPromoted: false,
          isPromotional: false,
          attachments: [], // Add attachments if any
          chapters: [
            {
              id: "Learn Fundamentals",
              moduleId: "module-3",
              lessons: [
                {
                  id: "lesson-1",
                  type: LessonType.VIDEO,
                  chapterId: "chapter-1",
                  mediaSrc: [
                    {
                      id: "media-1",
                      title: "Introduction to Advanced JavaScript",
                      description: "Learn the basics of advanced JavaScript concepts",
                      link: "https://youtube.com/video1",
                      channel: ChannelType.YOUTUBE,
                      lessonId: "lesson-1",
                      isFree: true,
                      isPromotional: false,
                      clips: [
                        {
                          id: "clip-1",
                          title: "Introduction to Advanced JavaScript",
                          start: 0,
                          end: 600,
                          mediaSrcId: "media-1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          assignments: [],
          exams: []
        },
        {
          id: "module-3",
          type: ModuleType.CHAPTER,
          partId: "part-2",
          courseId: "course-1",
          isPromoted: false,
          isPromotional: false,
          attachments: [], // Add attachments if any
          chapters: [
            {
              id: "Learn Advanced ",
              moduleId: "module-3",
              lessons: [
                {
                  id: "lesson-1",
                  type: LessonType.AUDIO,
                  chapterId: "chapter-1",
                  mediaSrc: [
                    {
                      id: "media-1",
                      link: "https://youtube.com/video1",
                      title:"Learn",
                      description:"Learn",
                      channel: ChannelType.YOUTUBE,
                      lessonId: "lesson-1",
                      isFree: true,
                      isPromotional: false,
                      clips: [
                        {
                          id: "clip-1",
                          title: "Introduction to Advanced JavaScript",
                          start: 0,
                          end: 600,
                          mediaSrcId: "media-1"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "lesson-1",
                  type: LessonType.AUDIO,
                  chapterId: "chapter-1",
                  mediaSrc: [
                    {
                      id: "media-1",
                      link: "https://youtube.com/video1",
                      channel: ChannelType.YOUTUBE,
                      title:"Audio",
                      description:"Audio",
                      lessonId: "lesson-1",
                      isFree: true,
                      isPromotional: false,
                      clips: [
                        {
                          id: "clip-1",
                          title: "Introduction to Advanced JavaScript",
                          start: 0,
                          end: 600,
                          mediaSrcId: "media-1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          assignments: [],
          exams: []
        }
      ]
    }
  ];

const Step6CreatePart: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const handleModuleSelect = (module: Module) => {
      setSelectedModule(module);
  };

  const renderModuleContent = (module: Module) => {
    switch (module.type) {
      case ModuleType.ASSIGNMENT:
        return <AssignmentModule module={module.assignments[0]} />;
      case ModuleType.EXAM:
        return <ExamModule module={module.exams[0]} />;
      case ModuleType.CHAPTER:
        return <ChapterModule chapter={module.chapters[0]} />;
      case ModuleType.ATTACHMENT:
        return <AttachmentModule module={module.attachments[0]} />;
      default:
        return <p>Select a valid module to view details.</p>;
    }
  };

  return (
    <div className="flex p-4 space-x-4">
      {/* Left Panel */}
      <LeftPanel parts={dummyParts} onModuleSelect={handleModuleSelect} />

      {/* Right Panel: Module Content */}
      <div className="w-2/3">
        <h1 className="text-xl font-bold mb-4">Module Details</h1>
        {selectedModule ? (
          renderModuleContent(selectedModule)
        ) : (
          <p className="text-gray-500">Select a module to view details.</p>
        )}
      </div>
    </div>
  );
};

export default Step6CreatePart;

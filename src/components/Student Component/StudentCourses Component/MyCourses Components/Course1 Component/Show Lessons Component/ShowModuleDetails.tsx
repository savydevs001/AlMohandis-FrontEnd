import React from 'react';
import ShowChapter from './ShowChapter'; // Ensure the correct path to ShowChapter
import ShowAssignments from './Show Content Component/ShowAssignmentComponent/ShowAssignment';
import SingleAssignment from './Show Content Component/ShowAssignmentComponent/SingleAssignment';
import SingleExam from './Show Content Component/ShowExam Component/SingleExam';

interface MediaSource {
  id: string;
  link: string;
  title: string;
  description: string;
  lessonId: string;
  channel: string;
  isFree: boolean;
  isPromotional: boolean;
}

interface Chapter {
  id: string;
  name: string; // Chapter name
  lessons: Lesson[];
}

interface Exam {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
  questions: Question[];
}

interface Question {
  id: string;
  questionText: string;
  answerType: string;
  options: any[];
  correctAnswer: string;
  assignmentId: string;
  examId: string | null;
  moduleId: string | null;
}

interface Assignment {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
  questions: Question[];
  submissions: any[];
}

interface Lesson {
  id: string;
  type: 'VIDEO' | 'AUDIO';
  chapterId: string;
  mediaSrc: MediaSource[];
  duration: string;
}

interface ShowModuleDetailProps {
  activeSection: string | null;
  activeItem: string | null;
  course: {
    parts: {
      id: string;
      title: string;
      price: number;
      completionTime: number;
      modules: {
        id: string;
        type: 'CHAPTER' | 'ASSIGNMENT' | 'EXAM';
        chapters: Chapter[];
        assignments: Assignment[];
        exams: Exam[];
      }[];
    }[];
  } | null; 
}

const ShowModuleDetail: React.FC<ShowModuleDetailProps> = ({ activeSection, activeItem, course }) => {
  const getActiveChapter = () => {
    if (course && activeSection === 'Chapters' && activeItem) {
      for (const part of course.parts) {
        for (const module of part.modules) {
          if (module.type === 'CHAPTER') {
            const chapter = module.chapters.find(ch => `Chapter ${module.chapters.indexOf(ch) + 1}` === activeItem);
            if (chapter) return { chapter, currentPart: part }; // Return both chapter and current part
          }
        }
      }
    }
    return null;
  };

  
  const getActiveAssignment = () => {
    if (course && activeSection === 'Assignments' && activeItem) {
      for (const part of course.parts) {
        for (const module of part.modules) {
          if (module.type === 'ASSIGNMENT') {
            const assignment = module.assignments.find(asg => asg.id === activeItem);
            if (assignment) return { assignment, currentPart: part }; // Return both assignment and current part
          }
        }
      }
    }
    return null;
  };
  

  const getActiveExam = () => {
    if (course && activeSection === 'Exams' && activeItem) {
      for (const part of course.parts) {
        for (const module of part.modules) {
          if (module.type === 'EXAM') {
            const exam = module.exams.find(ex => ex.id === activeItem);
            if (exam) return { exam, currentPart: part }; 
          }
        }
      }
    }
    return null;
  };

  const activeChapterData = getActiveChapter();
  const activeAssignment = getActiveAssignment();
  const activeExam = getActiveExam();

  return (
    <div>
      {activeSection === 'Chapters' && activeChapterData ? (
        <ShowChapter chapter={activeChapterData.chapter} currentPart={activeChapterData.currentPart} />
      ) : activeSection === 'Assignments' && activeAssignment ? (
        <SingleAssignment assignment={activeAssignment.assignment} currentPart={activeAssignment.currentPart} />
      ) : activeSection === 'Exams' && activeExam ? (
        <SingleExam exam={activeExam.exam} currentPart={activeExam.currentPart} />
      ) : activeItem === 'View All Assignments' ? (
        <ShowAssignments />
      ) : (
        <div className='mt-6 text-xl font-semibold text-center text-gray-400'>Select a section to view details.</div>
      )}
    </div>
  );
};

export default ShowModuleDetail;
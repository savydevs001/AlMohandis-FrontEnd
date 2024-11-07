import React from 'react';
import ShowChapter from './ShowChapter'; // Ensure the correct path to ShowChapter
import ShowAssignments from './Show Content Component/ShowAssignmentComponent/ShowAssignment';
import SingleAssignment from './Show Content Component/ShowAssignmentComponent/SingleAssignment';
import SingleExam from './Show Content Component/ShowExam Component/SingleExam';
// import ShowExam from './ShowExam'; // Ensure the correct path to ShowExam

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
      modules: {
        type: 'CHAPTER' | 'ASSIGNMENT' | 'EXAM';
        chapters: Chapter[];
        assignments: Assignment[];
        exams: Exam[];
      }[];
    }[];
  } | null; 
}

const ShowModuleDetail: React.FC<ShowModuleDetailProps> = ({ activeSection, activeItem, course }) => {
  console.log(activeItem)
  const getActiveChapter = () => {
    if (course && activeSection === 'Chapters' && activeItem) {
      for (const part of course.parts) {
        for (const module of part.modules) {
          if (module.type === 'CHAPTER') {
            const chapter = module.chapters.find(ch => `Chapter ${module.chapters.indexOf(ch) + 1}` === activeItem);
            if (chapter) return chapter;
          }
        }
      }
    }
    return null;
  };
  console.log(activeSection)

  const getActiveAssignment = () => {
    if (course && activeSection === 'Assignments' && activeItem) {
      for (const part of course.parts) {
        for (const module of part.modules) {
          if (module.type === 'ASSIGNMENT') {
            const assignment = module.assignments.find(asg => asg.id === activeItem);
            if (assignment) return assignment;
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
            if (exam) return exam;
          }
        }
      }
    }
    return null;
  };

  const activeChapter = getActiveChapter();
  const activeAssignment = getActiveAssignment();
  const activeExam = getActiveExam();

  console.log(activeChapter,activeAssignment,activeExam)
  return (
    <div>
    {activeSection === 'Chapters' && activeChapter ? (
      <ShowChapter chapter={activeChapter} />
    ) : activeSection === 'Assignments' && activeAssignment ? (
      <SingleAssignment assignment={activeAssignment} />
    ) : activeSection === 'Exams' && activeExam  ? (
      <SingleExam exam={activeExam}/>
    ) : activeItem === 'View All Assignments' ? (
      <ShowAssignments/>  
    ) : (
      <div className='mt-6 text-xl font-semibold text-center text-gray-400'>Select a section to view details.</div>
    )}
  </div>
  
  );
};

export default ShowModuleDetail;
import React from 'react';
import ShowChapter from './ShowChapter'; // Ensure the correct path to ShowChapter
import ShowAssignments from './Show Content Component/ShowAssignmentComponent/ShowAssignment';
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

export interface Assignment {
  id: string;
  title: string;
  moduleId: string;
  isFree: boolean;
}

export interface Exam {
  id: string;
  title: string;
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
  } | null; // Allow course to be null
}

const ShowModuleDetail: React.FC<ShowModuleDetailProps> = ({ activeSection, activeItem, course }) => {
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

  // const getActiveAssignment = () => {
  //   if (course && activeSection === 'Assignments' && activeItem) {
  //     for (const part of course.parts) {
  //       for (const module of part.modules) {
  //         if (module.type === 'ASSIGNMENT') {
  //           const assignment = module.assignments.find(asg => asg.title === activeItem);
  //           if (assignment) return assignment;
  //         }
  //       }
  //     }
  //   }
  //   return null;
  // };

  // const getActiveExam = () => {
  //   if (course && activeSection === 'Exams' && activeItem) {
  //     for (const part of course.parts) {
  //       for (const module of part.modules) {
  //         if (module.type === 'EXAM') {
  //           const exam = module.exams.find(ex => ex.title === activeItem);
  //           if (exam) return exam;
  //         }
  //       }
  //     }
  //   }
  //   return null;
  // };

  const activeChapter = getActiveChapter();
  // const activeAssignment = getActiveAssignment();
  // const activeExam = getActiveExam();
  return (
    <div>
    {activeSection === 'Chapters' && activeChapter ? (
      <ShowChapter chapter={activeChapter} />
    ) : activeSection === 'Assignments' ? (
      <p>Show Single Assignment</p> // Replace with <ShowAssignment assignment={activeAssignment} /> when ready
    ) : activeSection === 'Exams'  ? (
      <p>Show Single Exams</p> 
      // saif show single exam here plz
    ) : activeSection === 'View All Assignments' ? (
      <ShowAssignments/>  // all assignments
    ) : (
      <div>Select a section to view details.</div>
    )}
  </div>
  
  );
};

export default ShowModuleDetail;
export interface MediaSource {
    id: string;
    link: string;
    title: string;
    description: string;
    lessonId: string;
    channel: string;
    isFree: boolean;
    isPromotional: boolean;
  }
  
  export interface Lesson {
    id: string;
    type: 'VIDEO' | 'AUDIO';
    chapterId: string;
    mediaSrc: MediaSource[];
    duration: string;
  }
  
  export interface Chapter {
    id: string;
    name: string; // Chapter name
    type: 'VIDEO' | 'AUDIO'; // Add the type field
    duration: string; // Add duration
    link: string; // Add link
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
  
  export interface Module {
    type: 'CHAPTER' | 'ASSIGNMENT' | 'EXAM';
    chapters: Chapter[];
    assignments: Assignment[];
    exams: Exam[];
  }
  
  export interface Part {
    modules: Module[];
  }
  
  export interface Course {
    title: string;
    parts: Part[];
  }
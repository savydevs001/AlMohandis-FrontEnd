export enum ModuleType {
  CHAPTER = "CHAPTER",
  EXAM = "EXAM",
  ASSIGNMENT = "ASSIGNMENT",
  ATTACHMENT = "ATTACHMENT"
}

export enum AnswerType {
  MCQ = "MCQ",
  TRUE_FALSE = "TRUE_FALSE",
  SHORT_ANSWER = "SHORT_ANSWER"
}

export enum LessonType {
  AUDIO = "AUDIO",
  VIDEO = "VIDEO"
}

export enum ChannelType {
  YOUTUBE = "YOUTUBE",
  BUNNY = "BUNNY",
  VDOCIPHER = "VDOCIPHER"
}

export interface Module {
  id: string;
  type: ModuleType;
  partId: string;
  courseId: string;
  isPromoted: boolean;
  isPromotional: boolean;
  attachments: Attachment[];
  chapters: Chapter[];               
  assignments: Assignment[];
  exams: Exam[];
}

export interface Attachment {
  id: string;
  fileType: string;
  fileUrl: string;
  description: string;
  moduleId: string;
}

export interface Assignment {
  id: string;
  title: string;
  questions: Question[];
  supportingMaterial?: string;
  moduleId: string;
  isFree: boolean;
}

export interface Exam {
  id: string;
  title: string;
  questions: Question[];
  moduleId: string;
  isFree: boolean;
}

export interface Lesson {
  id: string;
  type: LessonType;
  chapterId: string;
  mediaSrc: MediaSource[];
}

export interface Clip {
  id: string;
  title: string;
  start: number;
  end: number;
  mediaSrcId: string;
}

export interface MediaSource {
  id: string;
  link: string;
  title: string;
  description: string;
  lessonId: string;
  channel: ChannelType;
  isFree: boolean;
  isPromotional: boolean;
  clips: Clip[];
}

export interface Chapter {
  id: string;
  moduleId: string;
  lessons: Lesson[];
}
// start 
export interface Part {
  id: string;
  title: string;
  price: number;
  completionTime: number;
  openingDate: Date;
  courseId: string;
  modules: Module[];
}

export interface Question {
  id: string;
  questionText: string;
  answerType: AnswerType;
  options: string[];
  correctAnswer?: string;
  assignmentId?: string;
  examId?: string;
  moduleId?: string;
}

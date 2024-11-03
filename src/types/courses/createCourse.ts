export type CreateCourseResponse = {
    data: {
        id: string,
        title: string,
        description: string,
        imageSrc: string
        isFree: boolean,
        isActive: boolean,
        isDraft: boolean,
        waitingForReview: boolean,
        objectives: null,
        whatYouWillLearn: null,
        instructorId: string
    }
}

export type AccessibilitySettingsResponse = {
    data: {
        id: string,
        courseId: string,
        isFree: boolean,
        canAccessOtherCourse: boolean,
        selectedTypes: string[],
        selectedStages: number[],
        selectedTeacher: string
    }
}

export type CreatePartResponse = {
    data: {
        id: string,
        title: string,
        price: number,
        openingDate: string,
        completionTime: number,
        courseId: string
    }
}

export type AssignmentOrExamResponse = {
    data: {
        id: string,
        partId: string,
        courseId: string,
        type: string,
    }
};

export type ChapterResponse = {
    data: {
        id: string,
        moduleId: string,
    }
}

export type DeleteResponse = {
    data: {
        message: string
    }
};

export type AssignmentResponse = {
    data: {
        id: string,
        type: 'ASSIGNMENT' | 'EXAM' | 'CHAPTER'
        partId: string,
        courseId: string,
        isPromoted: false,
        isPromotional: boolean,
        assignments: [
            {
                id: string,
                title: string,
                moduleId: string,
                questions: [
                    {
                        id: string,
                        questionText: string,
                        answerType: "SHORT_ANSWER" | "MCQ",
                        options: [],
                        correctAnswer: string
                    }
                ]
            }
        ],
    }
}

export type EXAMResponse = {
    data: {
        id: string,
        type: 'ASSIGNMENT' | 'EXAM' | 'CHAPTER'
        partId: string,
        courseId: string,
        isPromoted: false,
        isPromotional: boolean,
        exams: [
            {
                id: string,
                title: string,
                moduleId: string,
                questions: [
                    {
                        id: string,
                        questionText: string,
                        answerType: "SHORT_ANSWER" | "MCQ",
                        options: string[],
                        correctAnswer: string
                    }
                ]
            }
        ],
    }
}

// Define types for the individual components of the structure

// Media Source Type
export interface MediaSource {
    id: string;
    link: string;
    title: string;
    description: string;
    lessonId: string;
    channel: string;
    isFree: boolean;
    isPromotional: boolean;
    clips: Clip[];
  }
  
  // Clip Type
  interface Clip {
    id: string;
    title: string;
    start: number;
    end: number;
    mediaSrcId: string;
  }
  
  // Lesson Type
  export interface Lesson {
    id: string;
    type: string;
    chapterId: string;
    mediaSrc: MediaSource[];
  }
  
  // Chapter Type
  interface Chapter {
    id: string;
    moduleId: string;
    lessons: Lesson[];
  }
  
  // Main Chapter Response Type
  export interface ChapterReturnResponse {
   data: {
    id: string;
    type: string;
    partId: string;
    courseId: string;
    isPromoted: boolean;
    isPromotional: boolean;
    exams: unknown[]; // Specify more detail if exams have a known structure
    assignments: unknown[]; // Specify more detail if assignments have a known structure
    chapters: Chapter[];
    attachments: unknown[]; // Specify more detail if attachments have a known structure
   }
  }
  
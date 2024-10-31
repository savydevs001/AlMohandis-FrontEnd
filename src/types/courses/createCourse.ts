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

export type CHAPTERResponse = {
    data: {
        id: string,
        type: 'ASSIGNMENT' | 'EXAM' | 'CHAPTER'
        partId: string,
        courseId: string,
        chapters: [
            {
                id: string,
                moduleId: string,
                lessons: [
                    {
                        id: string,
                        title: string,
                        description: string,
                        type: string,
                        srcUrl: string,
                        isFree: boolean,
                        isPromotional: boolean,
                        chapterId: string,
                        clips: [
                            {
                                start: number,
                                end: number,
                                title: string,
                            }
                        ],
                    }
                ]
            }
        ],
    }
}
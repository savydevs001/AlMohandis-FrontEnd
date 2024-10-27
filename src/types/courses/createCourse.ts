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
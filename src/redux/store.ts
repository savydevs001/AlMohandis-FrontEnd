import { configureStore } from "@reduxjs/toolkit";
import { createCourseAPI } from './api/Teacher/course/createCourse';
import { AuthAPI } from "./api/auth/auth";

export const store = configureStore({
  reducer: {
    [createCourseAPI.reducerPath]: createCourseAPI.reducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createCourseAPI.middleware, AuthAPI.middleware),
});

// export type RootState = ReturnType<typeof store.getState>;
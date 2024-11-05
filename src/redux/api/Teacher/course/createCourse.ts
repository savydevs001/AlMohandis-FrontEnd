import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const createCourseAPI = createApi({
    reducerPath: 'createCourse',  
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/courses/` }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url: 'create',
                method: 'POST',
                body: data,
                // Authorization: `Bearer ${localStorage.getItem('token')}`
            })
        })
    })
})

export const {
 useCreateCourseMutation
} = createCourseAPI;
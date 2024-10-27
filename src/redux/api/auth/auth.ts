import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginData, UserResponse } from '../../../types/auth/auth';

export const AuthAPI = createApi({
    reducerPath: 'Auth',  // name of the slice just like we do in createSlice
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth/` }),
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginData>({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data,
            })
        })
    })
})

export const {
 useLoginMutation
} = AuthAPI;
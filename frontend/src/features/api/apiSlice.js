import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
	tagTypes: ['Auth'],
	endpoints: (builder) => {
		return {
			login: builder.mutation({
				query: (payload) => ({
					url: '/user/login',
					method: 'POST',
					body: payload
				}),
			}),
			signup: builder.mutation({
				query: (payload) => ({
					url: '/user/signup',
					method: 'POST',
					body: payload
				}),
			}),
		}
	}
})

export const { useLoginMutation, useSignupMutation } = apiSlice;
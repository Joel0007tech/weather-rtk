import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getPosts: builder.query({
        query: () => ({
            url: 'posts',
            method: 'GET'
        }),
        
        }),

        getComments:builder.query({
        query:() => ({
            url: 'comments',
            method :'GET'
        })
        }),
    })
})

export const {useGetPostsQuery, useGetCommentsQuery} = weatherApi

export default weatherApi
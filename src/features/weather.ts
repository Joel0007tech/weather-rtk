import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const weatherApi = createApi ({
    reducerPath: 'weatherApi',
    baseQuery : fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) =>({
        getPosts: builder.query({
            query:() => ({
                url:'posts',
                method: 'GET'
            })
        })
    })
})

export const {} = weatherApi

export default weatherApi
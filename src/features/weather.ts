import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (builder) => ({
        getWeather: builder.query({
        query: (name) => ({
            url: `pokemon/${name}`,
            method: 'GET'
        }),
        
        }),

       
    })
})

export const {useGetWeatherQuery} = weatherApi

export default weatherApi
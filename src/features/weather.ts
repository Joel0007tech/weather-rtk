import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/data/2.5/'}),
    endpoints: (builder) => ({
        getWeather: builder.query({
        query: (name) => ({
            url: `weather/${name}`,
            method: 'GET'
        }),
        
        }),

       
    })
})

export const {useGetWeatherQuery} = weatherApi

export default weatherApi
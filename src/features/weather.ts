import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/data/2.5/'}),
    endpoints: (builder) => ({
        getWeather: builder.query({
        query: () => ({
            url: 'weather?lat=9.0820 &appid=66c84b0c01e16f85950117f98b90839a',
            method: 'GET'
        }),
        
        }),

        getCity:builder.query({
        query:() => ({
            url: 'weather?q=Miami&appid=66c84b0c01e16f85950117f98b90839a',
            method :'GET'
        })
        }),
    })
})

export const {useGetWeatherQuery, useGetCityQuery} = weatherApi

export default weatherApi
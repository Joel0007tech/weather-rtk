import React from 'react'
import {useGetWeatherQuery,  useGetCityQuery } from './features/weather'

const App = () => {

  const {data : posts} = useGetWeatherQuery({});
  const {data : comments} = useGetCityQuery({});

  console.log(posts);
  console.log(comments);
  
  return (
    <div>HI</div>
  )
}

export default App

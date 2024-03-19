import React from 'react'
import {useGetWeatherQuery,  useGetCityQuery } from './features/weather';
;
import Head from './container/Display';

const App = () => {

  const {data : posts} = useGetWeatherQuery({});
  const {data : comments} = useGetCityQuery({});

  console.log(posts);
  console.log(comments);
  
  return (
    <div style={{
      fontFamily: "Radio Canada",
      fontWeight: 700,
      fontStyle: "normal"
    }}>
      <Head />
    </div>
  )
}

export default App

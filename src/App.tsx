import React from 'react'
import { useGetPostsQuery, useGetCommentsQuery } from './features/weather'

const App = () => {

  const {data : posts} = useGetPostsQuery({});
  const {data : comments} = useGetCommentsQuery({});

  console.log(posts);
  console.log(comments);
  
  return (
    <div>HI</div>
  )
}

export default App

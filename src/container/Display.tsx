
import React from 'react'
import { CiSearch } from "react-icons/ci";

  
const Head = () => {
  const myStyle = {
    backgroundImage:
        "url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg')",
    height: "109vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
};
const myFont ={
  fontFamily:"cursive"
}
  return (
    <div className='p-32 pt-80' style={myStyle}>
      <header>
      <div>
      <h1 className="text-black text-4xl text-center"> A
      weather <span className='text-blue-700'>
        App</span></h1>
        <p className='text-center text-md pt-5 text-black' style={myFont}>Your friendly weather forecast finder</p>
        </div>
      </header>
     
        <section className='flex justify-center pt-5'>
          {/* <div className=' flex justify-center row gap-5'>
          <div className='flex flex-col p-4 bg-blue-700'>
           <h3>Hello</h3>
           <p>Your text here</p>
           <a href="http://">Link here</a>
          </div>
          <div className='flex flex-col p-4 bg-blue-700'>
           <h3>Hello</h3>
           <p>Your text here</p>
           <a href="http://">Link here</a>
          </div>
          <div className='flex flex-col p-4 bg-blue-700'>
           <h3>Hello</h3>
           <p>Your text here</p>
           <a href="http://">Link here</a>
          </div>
          </div> */}

          <input type="text" name="" id="" className='bg-blue-600 w-4/12 h-14 p-3 border rounded-md' style={myFont}/>
          <CiSearch className=' relative right-11 top-4 size-6 text-white'/>
          <input type="submit" value="Search" className=' cursor-pointer bg-blue-600 p-2 pr-10 pl-10 border rounded text-md text-white' style={myFont}/>
        </section>
    
    </div>
  )
}

export default Head
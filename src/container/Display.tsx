import React from 'react'


  
const Head = () => {
  return (
    <div className='bg-gray-200 p-5'>
      <header>
      <div>
      <h1 className="text-blue-700 text-4xl text-center"> <span className='text-black'>A </span>
      weather <span className='text-black'>
        A</span>pp</h1>
        <p className='text-center text-md pt-5'>Your friendly weather forecast finder</p>
        </div>
      </header>
     
        <section className='flex justify-center pt-4'>
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

          <input type="text" name="" id="" className='bg-blue-500 w-4/12 h-14 p-3'/>
        </section>
    
    </div>
  )
}

export default Head
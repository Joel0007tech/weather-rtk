
import React from 'react'
import { CiSearch } from "react-icons/ci";
import {useGetWeatherQuery, weatherApi} from '../features/weather';
import Selector from './Selector';

  
const Head = () => {
  const myStyle = {
    backgroundImage:
        "url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg')",
    height: "109vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
};
const change ={
backgroundColor:"red"
};
const myFont ={
  fontFamily:"Montserrat Alternates, sans-serif"
}

const {data, error, isLoading } = useGetWeatherQuery('Miami')
  return (
    <div className='p-32 pt-80' style={myStyle}>
      {/* <header>
      <div>
      <h1 className="text-black text-4xl text-center font-bold"> A
      <span className='text-blue-700'> weather 🌐 </span>
        App</h1>
        <p className='text-center text-md pt-5 tracking-widest font-semibold ' style={myFont}>Your friendly 
        <span className='text-black font-extrabold'> weather</span> forecast finder</p>
        </div>
      </header> */}
      <div className=' relative top-16'>
      <Selector/>
        </div>

        {/* <section className='flex justify-center pt-5 gap-3'> */}
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
{/* 
          <select className='bg-blue-600 w-4/12 h-14 p-3 border rounded-md text-white' style={myFont}>
          <option value=""></option>
          </select>
          <input type="submit" value=" Search " className=' cursor-pointer bg-blue-600 p-2 pr-8 
          pl-8 border rounded text-md text-white hover:bg-black text-white;' style={myFont}/>
            <CiSearch className=' relative right-7 top-4 size-6 text-white'/>
        </section>
    {error? (
      <>oh, bla bla</>
    ): isLoading ? (
      <>....loading</>
    ): data ?(
      <>
      <h3 className='text-white'>{data.Miami}</h3></>
    ):null}
    */}
    </div>
  )
}

export default Head
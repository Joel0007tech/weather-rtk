
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
    <div className='p-32 pt-96' style={myStyle}>
      {<header>
      <div>
      <h1 className="text-black text-4xl text-center font-bold"> A
      <span className='text-blue-700'> weather 🌐 </span>
        App</h1>
        <p className='text-center text-md pt-5 tracking-widest font-semibold ' style={myFont}>Your friendly 
        <span className='text-black font-extrabold'> weather</span> forecast finder</p>
        </div>
      </header>}

      <section className='flex flex-row gap-4 justify-center relative top-3'>
      <Selector/>
      <input type="submit" value=" Search " className=' cursor-pointer bg-blue-600 pr-8 h-9 relative top-1
          pl-8 border rounded text-md text-white hover:bg-black text-white;' style={myFont}/>
        </section>
    </div>
  )
}

export default Head
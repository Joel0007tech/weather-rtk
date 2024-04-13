
import React, { useState } from 'react'
import { Country } from 'country-state-city';
import Selector from './Selector';
import { useGetWeatherQuery } from '../features/weather';

  
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
  fontFamily:"Montserrat Alternates, sans-serif"
};

  let countryData = Country.getAllCountries();

const [country, setcountry] = useState(countryData[0])

const {data, error, isLoading} = useGetWeatherQuery('bulbasaur')

  return (
    <div className='p-32 pt-96' style={myStyle}>
      {
        error?(
          <>there, was an error</>
        ) : isLoading?(
          <>loading....</>
        ) : data?(
          <>
           <h3 className='text-white'>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} /></>
        ) : null
      }

      {<header>
      <div>
      <h1 className="text-black text-4xl text-center font-bold"> A
      <span className='text-blue-700'> weather 🌐 </span>
        App</h1>
        <p className='text-center text-md pt-5 tracking-widest font-semibold ' style={myFont}>Your friendly 
        <span className='text-blue-700 font-extrabold'> weather</span> forecast finder</p>
        </div>
      </header>}

      <section className='flex flex-row gap-4 justify-center relative top-3'>
      <Selector 
      data={countryData} 
      selected={country} 
      setSelected={setcountry}
      />
      <input type="submit" value=" Search " className=' cursor-pointer bg-blue-600 relative pr-8 pl-8 h-11 top-1
      border rounded text-md text-white hover:bg-black text-white;' style={myFont}/>
        </section>
    </div>
  )
}

export default Head
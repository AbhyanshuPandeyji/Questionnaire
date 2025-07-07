import React from 'react'

import Hero from "../components/Homepage/Hero.jsx"
import HomeAbout from "../components/Homepage/HomeAbout.jsx"
import Feature from "../components/Homepage/Feature.jsx"

const Homepage = () => {
  return (
    <div className='min-h-[150vh] h-fit'>
      <div className='h-[100vh]'>
        <Hero/>
      </div>
      <div className='h-fit'>
        <HomeAbout />
        <Feature />
      </div>
    </div>
  )
}

export default Homepage
import React, { useEffect, useRef } from 'react'

import Hero from "../components/Homepage/Hero.jsx"
import HomeAbout from "../components/Homepage/HomeAbout.jsx"
import Feature from "../components/Homepage/Feature.jsx"
import FadeInSection from '../utils/sections/FadeInSection.jsx'


const Homepage = () => {
  return (
    <div className='min-h-[150vh] h-fit'>
      <FadeInSection>
        <div className='h-[100vh]'>
          <Hero />
        </div>
      </FadeInSection>
      <div className='h-fit'>
        {/* <FadeInSection> */}
          <HomeAbout />
        {/* </FadeInSection> */}
        {/* <Feature /> */}
      </div>
    </div>
  )
}

export default Homepage
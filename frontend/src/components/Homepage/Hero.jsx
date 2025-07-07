import React from 'react'
import heroImg from '../../assets/heroimg.jpg'

const Hero = () => {
  return (
    <div>
      <img src={heroImg} alt="" className='h-[100vh] w-full object-cover ' />
    </div>
  )
}

export default Hero
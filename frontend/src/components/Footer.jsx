import React from 'react'
import { NavbarConstantsData } from '../constants/NavbarConstants'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:justify-evenly justify-center gap-y-5 p-5 bg-yellow-500 
    min-h-[200px] md:min-h-[100px] h-fit flex md:flex-row  flex-col items-center'>
      <div className='flex gap-x-5 items-center'>
        {NavbarConstantsData && NavbarConstantsData.map((item, index) => (
          <NavLink to={item?.path} key={index} >{item?.title}</NavLink>
        ))}
      </div>
    </div>
  )
}

export default Footer
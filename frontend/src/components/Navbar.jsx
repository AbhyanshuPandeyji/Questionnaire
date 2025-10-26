import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

// icons
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { NavbarConstantsData } from '../constants/NavbarConstants';




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  // const handleIsOpen = (e)=>{
  //   e.preventDefault();
  //   setIsOpen(!isOpen)
  // }

  return (
    <div className='fixed z-[999] w-full md:h-[80px] min-h-[80px] md:bg-blue-600 items-center flex justify-center'>
      <ul className='md:flex hidden gap-x-10 '>
        {NavbarConstantsData && NavbarConstantsData.map((item, index) => (
          <NavLink to={item?.path} key={index} className="text-lg roboto-text
           font-semibold italic transition-all duration-300 ease-in-out hover:underline" >{item?.title}</NavLink>
        ))}
      </ul>
      {/* <ul className='flex flex-col md:hidden gap-x-10 w-full h-screen'>
        <div className='w-full flex h-[80px]'>
          <button className='w-full justify-end flex items-center bg-blue-600' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CgClose size={"24px"} className='m-4' /> : <FaBars size={"24px"} className='m-4' />}
          </button>
        </div>
        {isOpen ? (<>
          <div className='justify-center items-center flex flex-col gap-y-10 bg-blue-600 h-screen'>
            {NavbarConstantsData && NavbarConstantsData.map((item, index) => (
              <NavLink to={item?.path} key={index} className="text-lg roboto-text font-semibold italic 
              transition-all duration-300 ease-in-out hover:underline" >{item?.title}</NavLink>
            ))}
          </div></>) : <></>}
      </ul> */}
    </div>
  )
}

export default Navbar
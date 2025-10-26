import React from 'react'
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom';

// page imports
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Homepage from "../page/Homepage.jsx";
import About from '../page/About.jsx'
import Contact from '../page/Contact.jsx'
import Question from '../page/Question.jsx'
import CreateQuestion from '../page/CreateQuestion.jsx'

//icon
import { IoMdCreate } from "react-icons/io";


const Layout = () => {
  return (
    <div className='relative'>
      <Navbar />
      <div className='relative md:top-[80px] top-[80px]'>
        <div className='relative min-h-screen h-fit'>
          <div className=''>
            <NavLink
            to={"/create"}
              className='fixed bottom-10 right-10 p-4 bg-green-400 cursor-pointer rounded-full text-white'>
              <IoMdCreate size={"20px"} />
            </NavLink>
          </div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/question",
        element: <Question />
      },
      {
        path: "/create",
        element: <CreateQuestion />
      }
    ]
  }
])
const Routing = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default Routing;
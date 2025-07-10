import React, { useState, useEffect } from 'react';
import heroImg from '../../assets/heroimg.jpg'
import "./HomePage.scss"
import TypewriterEffect from '../../utils/text/TypeWriterEffect';

const Hero = () => {


  return (
    <div className='bg-red-400 w-full h-[100vh]'>
      {/* <img src={heroImg} alt="" className='h-[100vh] w-full object-cover ' /> */}
      <div className='z-[100] flex justify-center items-center w-full h-full'>
        <div className='flex h-[50vh] w-[80vw] flex-col gap-y-8 justify-center items-center'>
          <h1 className='text-8xl font-bold'>This Is My Own Question Bank</h1>
          <h3 className='text-4xl italic font-light'>You asked for it , here you go</h3>
          {/* <h3 className='text-4xl italic font-light'><TypewriterEffect text={`See Whats New For me To Wonder`} /></h3> */}
        </div>
      </div>
    </div>
  )
}

export default Hero;



// export const TypewriterEffect = ({ text, speed = 100, loop = true }) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false); // For a typewriter-like effect

//   useEffect(() => {
//     let timer;
//     if (!isDeleting && currentIndex < text.length) {
//       timer = setInterval(() => {
//         setDisplayedText(prev => prev + text[currentIndex]);
//         setCurrentIndex(prev => prev + 1);
//       }, speed);
//     } else if (isDeleting && displayedText.length > 0) {
//       timer = setInterval(() => {
//         setDisplayedText(prev => prev.slice(0, -1));
//       }, speed);
//     } else if (loop && isDeleting && displayedText.length === 0) {
//       setIsDeleting(false);
//       setCurrentIndex(0);
//     } else if (!isDeleting && currentIndex === text.length) {
//       if (loop) {
//         setTimeout(() => setIsDeleting(true), 1500); // Delay before deleting
//       }
//     }

//     return () => clearInterval(timer); // Cleanup on component unmount or re-render
//   }, [displayedText, currentIndex, isDeleting, text, speed, loop]);

//   return (
//     <div>
//       {displayedText}
//     </div>
//   );
// }
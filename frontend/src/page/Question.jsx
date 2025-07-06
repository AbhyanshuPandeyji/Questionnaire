import React from 'react'

const Question = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col min-h-[150px] h-fit w-full'>
        <div className='md:w-[70vw] w-full bg-yellow-400'>tags</div>
        <div className='bg-green-400 md:w-[30vw] w-full'>search</div>
      </div>
      <div className='flex w-full justify-center'>
        <div className='md:w-[80vw] w-full bg-blue-400 h-fit min-h-screen'>content</div>
        {/* <div>filters</div> */}
      </div>
    </div>
  )
}

export default Question
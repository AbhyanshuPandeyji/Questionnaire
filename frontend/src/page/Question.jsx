import React, { useState } from 'react'
import QuestionsCard from "../components/Questions/QuestionsCard.jsx"
import { PreMadeTags } from '../constants/QuestionsConstants.js'

const Question = () => {

  const [tagSelected, setTagSelected] = useState("");

  const handleTags = (e,item) => {
    e.preventDefault();
    if(tagSelected === item){
      setTagSelected("");
    }else{
      setTagSelected(item);
    }
  }

  return (
    <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col min-h-[100px] h-fit w-[80vw] mx-auto'>
        <div className='md:w-[70%] w-full flex gap-4 justify-start items-center '>
          {PreMadeTags && PreMadeTags.map((item, index) => (
            <button onClick={(e) => handleTags(e,item)} 
            className={`px-4 ${tagSelected === item ? "bg-blue-400" : "none" }
               cursor-pointer py-2 rounded-lg text-lg 
            font-semibold border-2 h-fit border-black`} key={index}>
              {item}
            </button>
          ))}
        </div>
        <div className=' md:w-[30%] w-full flex justify-start items-center'>
          <input type="text" className='border-2 rounded-lg bg-gray-200 text-lg p-2' />
          <button className='bg-green-500 p-2 rounded-lg border-2 border-green-500'>Search</button>
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <div className='md:w-[80vw] w-full h-fit min-h-screen'>
          <QuestionsCard tagSelected={tagSelected} />
        </div>
        {/* <div>filters</div> */}
      </div>
    </div>
  )
}

export default Question
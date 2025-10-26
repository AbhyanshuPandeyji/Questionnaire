import React, { useEffect, useState } from 'react'
import QuestionsCard from "../components/Questions/QuestionsCard.jsx"
import { PreMadeTags } from '../constants/QuestionsConstants.js'

const Question = () => {

  const [tagSelected, setTagSelected] = useState("");
  const [query, setQuery] = useState("")
  const [queryVal , setQueryVal ] = useState("")
  const [questionData , setQuestionData] = useState([])

  const handleTags = (e, item) => {
    e.preventDefault();
    if (tagSelected === item) {
      setTagSelected("");
    } else {
      setTagSelected(item);
    }
  }

  const handleSubmit = (e,queryArg)=>{
    e.preventDefault();
    setQueryVal(queryArg);
    setQuery("")
  }

  useEffect(()=>{
    // data is not getting parsed.
    try{
      let localData = localStorage.getItem("questionaire");
      setQuestionData((data) => data = JSON.parse(localData));

    }catch (error) {
      consolex.log("error" , error)
    }
    // console.log(JSON.parse(localData))
  },[])

  // console.log(query)
  console.log(questionData)

  return (
    <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col min-h-[100px] md:p-2 p-4 md:gap-y-0 gap-y-4 h-fit w-full md:w-[80vw] mx-auto'>
        <div className='md:w-[70%] w-full flex gap-4 md:justify-start md:items-center  '>
          {PreMadeTags && PreMadeTags.map((item, index) => (
            <button onClick={(e) => handleTags(e, item)}
              className={`px-4 ${tagSelected === item ? "bg-blue-400" : "none"}
               cursor-pointer py-2 rounded-lg text-lg 
            font-semibold border-2 h-fit border-black`} key={index}>
              {item}
            </button>
          ))}
        </div>
        <div className=' md:w-[30%] w-full flex justify-start items-center'>
          <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} 
          className='border-2 w-4/6 text-black rounded-lg rounded-r-none border-none  bg-gray-300 text-lg p-2' />
          <button
            onClick={(e)=>handleSubmit(e,query)}
            className='bg-green-500 w-2/6 p-2 cursor-pointer rounded-lg rounded-l-none border-2
             border-green-500'>Search</button>
        </div>
      </div>
      <hr className='md:w-[80%] w-full  mx-auto border-gray-400 bg-gray-400 h-[3px] rounded-lg'  />
      <br />
      <div className='flex md:p-0 p-4 w-full justify-center'>
        <div className='md:w-[80vw] w-full h-fit min-h-screen'>
          <QuestionsCard query={queryVal} tagSelected={tagSelected} questionData={questionData} />
        </div>
        {/* <div>filters</div> */}
      </div>
    </div>
  )
}

export default Question
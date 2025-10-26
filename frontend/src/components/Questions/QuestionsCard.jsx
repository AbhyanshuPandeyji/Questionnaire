import React, { useEffect, useState } from 'react'
import QuestionsAnswer from "../Questions/QuestionsAnswer.jsx";
import { QNA } from "../../constants/QuestionsConstants.js"
import { AnimatePresence } from 'framer-motion';

const QuestionsCard = ({ query, tagSelected , questionData}) => {
  // const [answer, setAnswer] = useState("");
  const [ansId, SetAnsId] = useState(null);
  // after incoming parsed , the data is not being automatically allocated to the quesData , instead its requiring the refectch.
  const [quesData, setQuesData] = useState(questionData);

  console.log("local data variable \n", quesData)

  const handleSetId = (e, id) => {
    e.preventDefault();
    if (id === ansId) {
      SetAnsId(null);
    } else
      if (id !== ansId) {
        SetAnsId(id);
      }
  }

  useEffect(()=>{
    setQuesData((data) => data = questionData)
  },[questionData])

  // console.log(query)
  console.log("question data on question cards. \n" ,questionData)

  useEffect(() => {

    const filteredData = () => {

      if (tagSelected !== "") {
        let filtered = questionData.filter((item, index) => {
          // return item.tags.preMadeTag[0] === tagSelected
          return item.tags === tagSelected
        })
        if (query !== "") {
          let queryFiltered = filtered.filter((item, index) => {
            return item.question.toLocaleLowerCase().includes(query);
          });
          setQuesData(queryFiltered)
        } else {
          setQuesData(filtered);
        }
      }
      if (query !== "" && tagSelected === "") {
        let queryFiltered = questionData.filter((item, index) => {
          return item.question.toLocaleLowerCase().includes(query);
        });
        setQuesData(queryFiltered)
        // setQuesData(QNA)
      }
      if (query === "" && tagSelected === "") {
        setQuesData(questionData)
      }
    }

    filteredData();
  }, [tagSelected, query])


  // console.log(ansId);
  // console.log(QNA.tags)
  // console.log("tags prop" , tagSelected);
  // console.log("Filtered Question data after tag selection" ,quesData)
  return (
    <div className='flex flex-col gap-y-2'>
      {/* {QNA && QNA.map((item, index) => ( */}
      {quesData && quesData.map((item, index) => (
        <div key={index} className='flex flex-col bg-gray-700 rounded-lg border-black border-2' index={item?.id}>
          <p
            className=' px-2 text-lg text-semibold cursor-pointer text-white'
            onClick={(e) => handleSetId(e, item?.id)}>{item?.question}</p>
          <AnimatePresence initial={false}>
            {ansId === item?.id && (
              <QuestionsAnswer key={item.id} ansId={ansId} />
            )}
          </AnimatePresence>

          {/* I only want to display answer whose id match to the current question clicked */}
          {/* {
            answer === item?.id ? (
              <>
                <p className='font-light'>{item?.answer}</p>
              </> 
            ) : <></>
          } */}
          {/* <QuestionsAnswer currentAnsId = {item?.id} answer={answer} displayItem={true}/> */}
        </div>
      ))}
    </div>
  )
}

export default QuestionsCard;
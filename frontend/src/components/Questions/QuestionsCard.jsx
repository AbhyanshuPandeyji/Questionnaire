import React, { useEffect, useState } from 'react'
import QuestionsAnswer from "../Questions/QuestionsAnswer.jsx";
import { QNA } from "../../constants/QuestionsConstants.js"

const QuestionsCard = ({ tagSelected }) => {
  // const [answer, setAnswer] = useState("");
  const [ansId, SetAnsId] = useState(null);
  const [quesData, setQuesData] = useState(QNA);

  const handleSetId = (e, id) => {
    e.preventDefault();
    if (id === ansId) {
      SetAnsId(null);
    } else
      if (id !== ansId) {
        SetAnsId(id);
      }
  }

  useEffect(() => {
    if (tagSelected !== "") {
      const filteredData = QNA.filter((item, index) => {
        return item.tags.preMadeTag[0] === tagSelected
      })
      setQuesData(filteredData);
    } else {
      setQuesData(QNA)
    }
  }, [tagSelected])

  // console.log(ansId);
  // console.log(QNA.tags)
  // console.log("tags prop" , tagSelected);
  // console.log("Filtered Question data after tag selection" ,quesData)
  return (
    <div className='flex flex-col gap-y-2'>
      {/* {QNA && QNA.map((item, index) => ( */}
      {quesData && quesData.map((item, index) => (
        <div className='flex flex-col bg-gray-700 rounded-lg border-black border-2' index={item?.id}>
          <p
            className=' px-2 text-lg text-semibold cursor-pointer text-white'
            onClick={(e) => handleSetId(e, item?.id)}>{item?.question}</p>
          {ansId === item?.id ? <QuestionsAnswer ansId={ansId} /> : <></>}
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
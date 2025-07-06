import React from 'react'
import { QNA } from '../../constants/QuestionsConstants'

const QuestionsAnswer = ({ansId}) => {
  const ans = QNA.filter((item,index)=>{
    return item?.id === ansId
  })

  return (
    <div className='bg-gray-300 rounded-lg border-2 border-black'>
      <p>{ans[0]?.answer}</p>
    </div>
  )
}

export default QuestionsAnswer
import React from 'react'
import { QNA } from '../../constants/QuestionsConstants'
import { AnimatePresence, motion } from 'framer-motion'

const QuestionsAnswer = ({ ansId }) => {
  const ans = QNA.find((item, index) => {
    return item?.id === ansId
  })


  return (
    <motion.div
      key={ansId}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden px-2 pb-2 text-sm
           bg-gray-300 rounded-lg border-2 border-black"
    >
      {ans?.answer}
    </motion.div>
  )
}

export default QuestionsAnswer
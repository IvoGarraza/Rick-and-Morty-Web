import React from 'react'
import {motion} from 'framer-motion'

const Cards = ({episodes}) => {
  return (
    <motion.div className='bg-white w-[90%] h-[90%] m-2 p-4 rounded-xl shadow-md ' whileInView={{x:0}} initial={{x:-400}} transition={{duration:0.5}}>
        <h2 className='font-bold '>{episodes.name}</h2>
        <div>
          {
            episodes.episode
          }
        </div>
        <p>Estreno: {episodes.air_date}</p>
    </motion.div>
  )
}

export default Cards
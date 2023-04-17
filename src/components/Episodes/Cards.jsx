import React from 'react'
import {motion} from 'framer-motion'

const CardsEpisodes = ({capitulos}) => {
  return (
    <motion.div className='bg-white w-[90%] h-[90%] m-2 p-4 rounded-xl shadow-md ' /* whileInView={{x:0}} initial={{x:-400}} transition={{duration:0.5}} */>
        <h2 className='font-bold '>{capitulos.name}</h2>
        <p>
          {
            capitulos.episode
          }
        </p>
        <p>Estreno: {capitulos.air_date}</p>
    </motion.div>
  )
}

export default CardsEpisodes
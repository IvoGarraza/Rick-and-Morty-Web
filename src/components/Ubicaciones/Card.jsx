import React from 'react'

const Card = ({location}) => {
  return (
    <div className='bg-white w-[90%] h-[80%] m-2 rounded-xl flex items-center justify-center'>
        <div className='bg-slate-800 w-[15%] flex items-center h-20 justify-center rounded-l-lg'>
            <span className='text-white font-bold '>{location.id}</span>
        </div>
        <div className='w-[85%]'>
            <h2 className='font-bold'>{location.name}</h2>
            <div>
                <span>Tipo:</span>
                <span>{location.type}</span>
            </div>
            <div>
                <span>Dimension:</span>
                <span>{location.dimension}</span>
            </div>
        </div>
    </div>
  )
}

export default Card
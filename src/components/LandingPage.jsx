import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center h-[100vh]'>
        <h2 className='font-bold text-white text-xl m-6'>Bienvenido a la app de Rick and Morty</h2>
        <Link to='/home'>
            <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Ingresar</button>
        </Link>
    </div>
  )
}

export default LandingPage
import React from 'react'


const colorState = (state) => {
    switch (state) {
      case "Alive":
        return "bg-green-500";
  
      case "Dead":
        return "bg-red-500";
  
      default:
        return "bg-slate-500";
    }
  };

  const colorGender = (gender) => {
    switch (gender) {
      case "Male":
        return "text-blue-600";
      case "Female":
        return "text-pink-600";
      case "Genderless":
        return "text-yellow-600";
      default:
        return "text-slate-500";
    }
  };

const Card2 = ({character}) => {
  return (
    <div className='flex flex-row m-2 h-[100%] items-center'>
        <div className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-400 rounded-l-xl flex flex-col items-center w-[200px] h-[100%] justify-around my-8 shadow-[10px_0px_10px_-4px_#dce97c]'>
            <img src={character.image} className='rounded-full w-[88px]'></img>
            <div className='flex flex-col'>
                <span className='font-bold'>Estado:</span>
                <div className='flex flex-row items-center justify-center'>
                    <div className={`w-[10px] h-[10px] ${colorState(character.status)} rounded-full m-1`}></div>
                    <span>{character.status}</span>
                </div>
            </div>
        </div>
        <div className='bg-slate-800 text-white rounded-r-xl p-4 h-[90%] flex flex-col items-center -z-10'>
            <h2 className='font-extrabold'>{character.name}</h2>
            <div className='flex flex-row'>
                <div className='flex flex-col mx-4'>
                    <span className='font-semibold'>Especie:</span>
                    <span className='text-slate-400'>{character.species}</span>
                </div>
                <div className='flex flex-col mx-4'>
                    <span className='font-semibold'>Genero:</span>
                    <span className={`${colorGender(character.gender)}`}>{character.gender}</span>
                </div>
            </div>
            <div className='flex flex-col'>
                <span className='font-semibold'>Origen:</span>
                <span className='text-slate-400' >{character.origin.name}</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-semibold'>Ultima vez visto:</span>
                <span className='text-slate-400' >{character.location.name}</span>
            </div>
        </div>
    </div>
  )
}

export default Card2
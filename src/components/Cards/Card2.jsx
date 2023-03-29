import React from 'react'

const Card2 = ({character}) => {
  return (
    <div>
        <div className='bg-slate-300 rounded-l-xl'>
            <img src={character.image} className='rounded-full'></img>
            <span>Estado:</span>
            <span>{character.status}</span>
        </div>
        <div className='bg-slate-800'>
            <h2>{character.name}</h2>
            <div>
                <div>
                    <span>Especie:</span>
                    <span>{character.species}</span>
                </div>
                <div>
                    <span>Genero:</span>
                    <span>{character.gender}</span>
                </div>
            </div>
            <div>
                <span>Ubicacion:</span>
                <span>{character.location}</span>
            </div>
        </div>
    </div>
  )
}

export default Card2
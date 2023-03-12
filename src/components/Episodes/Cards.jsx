import React from 'react'

const Cards = ({episodes}) => {
  return (
    <div>
        <h2>{episodes.name}</h2>
        <p>numero: {episodes.episode}</p>
        <p>{episodes.characters}</p>
    </div>
  )
}

export default Cards
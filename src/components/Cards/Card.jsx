import React from "react";
import { Link } from "react-router-dom";

const colorState = (state) =>{
  switch (state) {
      case 'Alive':
          return "text-green-500"
          
      case 'Dead':
        return "text-red-500"

      default:
          return "text-slate-500"
  }
}

const colorGender = (gender)=>{
  switch (gender) {
    case 'Male':
      return "text-blue-600";
    case 'Female':
      return "text-pink-600";
    case 'Genderless':
      return "text-yellow-600";
    default:
      return "text-slate-500"
  }
}

const Card = ({ character }) => {
  return (
    <div
      className="flex flex-col items-center text-white border-[5px] border-slate border-gray-500 shadow-sm shadow-black rounded-xl "
      onClick={() => <Link to={`/${character.url}`}></Link>}
    >
      <div className="flex w-[100%]">
        <div className="mx-2 rounded-full text-slate-200 ">{character.id}</div>
      </div>
      <h3 className="font-bold">{character.name}</h3>
      <img src={character.image} className="w-[70%] rounded-t"></img>
      <div className="bg-slate-800 rounded-b w-[70%] flex flex-col items-center mb-8">
        <div className="flex flex-row">
          <span>Especie: </span>
          <h4 className="mx-2">{character.species}</h4>
        </div>
        <div className="flex flex-row">
          <span>Genero: </span>
          <h4
            className={`${
              colorGender(character.gender)
            } mx-2`}
          >
            {character.gender}
          </h4>
        </div>
        <div className="flex flex-row">
          <span>Estado:</span>
          <p
            className={`mx-2 ${
              /* character.status === "Alive" ? "text-green-500" : "text-red-500" */
              colorState(character.status)
            }`}
          >
            {character.status}
          </p>
        </div>
      </div>
      <Link to={`/${character.url}`} className='bg-[#28BA06] w-[50%] p-2 rounded-lg font-medium '>Detalles</Link>
    </div>
  );
};

export default Card;

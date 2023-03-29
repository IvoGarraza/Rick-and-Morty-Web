import React from "react";
import { Link } from "react-router-dom";

const colorState = (state) => {
  switch (state) {
    case "Alive":
      return "text-green-500";

    case "Dead":
      return "text-red-500";

    default:
      return "text-slate-500";
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

const Card = ({ character }) => {
  return (
    <div
      className="flex sm:flex-col flex-row items-center text-white border-[5px] border-slate border-gray-500 bg-slate-800 shadow-sm shadow-black rounded-xl w-[95%] h-[97%]"
      onClick={() => <Link to={`/${character.url}`}></Link>}
    >
      <img src={character.image} className="sm:w-[100%] w-[30%] sm:rounded-t-xl rounded-full m-2 sm:m-0"></img>
      <div className="sm:flex hidden sm:w-[2%] w-[10%] sm:h-[5%] h-[8%] absolute text-black bg-yellow-500 border-[1px] border-black items-center justify-center rounded-full font-extrabold mb-[90%] ml-[85%] sm:ml-[13%]">
        <div className="mx-2 rounded-full ">{character.id}</div>
      </div>
      <div className="w-full">
        <h3 className="font-bold text-xl m-2">{character.name}</h3>
        <div className="rounded-b  flex flex-col items-center mb-8">
          <div className="flex flex-row items-center justify-around w-full m-2">
            <div className="flex flex-col">
              <span>Especie: </span>
              <h4 className="mx-2 text-slate-200">{character.species}</h4>
            </div>
            <div className="flex flex-col">
              <span>Genero: </span>
              <h4 className={`${colorGender(character.gender)} mx-2`}>
                {character.gender}
              </h4>
            </div>
            <div className="flex flex-col">
              <span>Estado:</span>
              <p
                className={`mx-2 ${
                  colorState(character.status)
                }`}
              >
                {character.status}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <span>Origen: </span>
            <h4 className="text-slate-400">{character.origin.name}</h4>
          </div>
          <div>
            <span>Ultima vez visto: </span>
            <h4 className="text-slate-400">{character.location.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

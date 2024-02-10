import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

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
      className="group flex sm:flex-col flex-row relative justify-between items-center text-white border-[5px] border-slate border-gray-500 bg-slate-800 shadow-sm shadow-black rounded-xl w-[95%] h-full pb-2 overflow-hidden"
      onClick={() => <Link to={`/${character.url}`}></Link>}
    >
      <img
        src={character.image}
        className="sm:w-[100%] w-[30%]  sm:group-hover:rounded-b-md sm:rounded-t-none transition-all duration-1000 rounded-full m-2 sm:m-0"
      ></img>
      <div className="sm:flex hidden sm:w-8 w-[10%] sm:h-8 h-[8%] absolute text-black bg-yellow-500 border-[1px] border-black items-center justify-center rounded-full font-extrabold top-2 left-2 sm:left-2">
        <div className="mx-2 rounded-full ">{character.id}</div>
      </div>
      <div className="w-full">
        <h3 className="font-bold text-xl h-12 w-full flex items-center justify-center">{character.name}</h3>
        <div className="rounded-b  flex flex-col items-center mb-2">
          <div className="flex flex-row items-center justify-around w-full">
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
              <p className={`mx-2 ${colorState(character.status)}`}>
                {character.status}
              </p>
            </div>
          </div>
          {/*           <div className="flex flex-col">
            <span>Origen: </span>
            <h4 className="text-slate-400">{character.origin.name}</h4>
          </div>
          <div>
            <span>Ultima vez visto: </span>
            <h4 className="text-slate-400">{character.location.name}</h4>
          </div> */}
          {/*           <div className="bg-green-600 hover:bg-yellow-500 transition-all  p-2 rounded-md ">
            <Link to={`/characters/${character.id}`}>Ver detalle</Link>
          </div> */}
          <Link to={`/characters/${character.id}`}>
            <button class="shadow__btn mt-2">Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

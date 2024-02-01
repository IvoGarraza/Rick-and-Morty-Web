import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import title from "../assets/title.png";
import { Link } from "react-router-dom";
import wallpaper from "../assets/wallpaper.jpg";

const Home = () => {
  return (
    <div className=" relative flex flex-col items-center pt-24 justify-around h-[100vh]">
      <img src={wallpaper} className="absolute -z-10"></img>
      <div className="flex flex-col text-white">
        {/*         <span className="font-bold text-4xl">
          ¡Bienvenido la aplicacion de Rick and Morty!
        </span>
        <br />
        <span>
          En esta web podras encontrar informacion de los personajes, episodios
          y locacion que aparecieron en la serie animada de Adult Swim
        </span>
        <br /> */}
      </div>

      <div className="flex sm:flex-col flex-col font-bold text-[#88e23b] items-center justify-around w-1/2  bg-slate-400/40 rounded-lg p-2 py-12">
        <div className="flex w-full items-center justify-center">
          <img src={title} className="sm:w-[50%] w-[90%] mb-10"></img>
        </div>
        <div className="flex flex-row">
          <Link
            to="/characters"
            className="bg-gradient-to-b sm:w-1/3 w-full h-44 justify-around flex flex-col bg-[#2b9cab] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-[#88e23b]"
          >
            <span className="drop-shadow-md shadow-black text-2xl text-white">
              Personajes
            </span>
            <span>
              Explora el Multiverso de Personajes: ¿Quién será tu favorito en
              esta caótica aventura?
            </span>
          </Link>
          <Link
            to="/locations"
            className="bg-gradient-to-b sm:w-1/3 w-full h-44 justify-around flex flex-col bg-[#2b9cab] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-[#88e23b]"
          >
            <span className="drop-shadow-md shadow-black text-2xl text-white">
              Ubicaciones
            </span>
            <span>
              De planetas locos a realidades alternativas, explora las
              Ubicaciones que desafían la lógica
            </span>
          </Link>
          <Link
            to="/episodes"
            className="bg-gradient-to-b sm:w-1/3 w-full h-44 justify-around flex flex-col bg-[#2b9cab] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-[#88e23b]"
          >
            <span className="drop-shadow-md shadow-black text-2xl text-white">
              Episodios
            </span>
            <span>
              Explora los Episodios llenos de absurdidad y ciencia ficción
            </span>
          </Link>
        </div>
      </div>
      <span className="font-light text-xs">Desarrollada por Ivo Garraza</span>
    </div>
  );
};

export default Home;

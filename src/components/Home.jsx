import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import title from "../assets/title.png";
import { Link } from "react-router-dom";
import wallpaper from "../assets/wallpaper.jpg";

const Home = () => {
  return (
    <div className=" relative flex flex-col items-center justify-around h-[90vh]">
      <img src={wallpaper} className="absolute -z-10"></img>
      <div className="flex sm:flex-col flex-col font-bold text-[#88e23b] items-center justify-around w-1/2  bg-slate-400/40 rounded-lg p-2 py-12">
        <div className="flex w-full items-center justify-center">
          <img src={title} className="sm:w-[50%] w-[90%] mb-10"></img>
        </div>
        <div className="flex flex-row">
          <Link
            to="/characters"
            className="bg-gradient-to-b sm:w-1/3 w-full h-44 justify-around flex flex-col bg-[#2b9cab] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-black"
          >
            <span className="drop-shadow-md shadow-black text-2xl text-white">
              Characters
            </span>
            <span>
              Explora el Multiverso de Personajes: ¿Quién será tu favorito en
              esta caótica aventura?
            </span>
          </Link>
          <Link
            to="/locations"
            className="bg-gradient-to-b sm:w-1/3 w-full h-44 justify-around flex flex-col bg-[#2b9cab] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-black"
          >
            <span className="drop-shadow-md shadow-black text-2xl text-white">
              Locations
            </span>
            <span>
              De planetas locos a realidades alternativas, explora las
              Ubicaciones que desafían la lógica
            </span>
          </Link>
          <Link
            to="/episodes"
            className="bg-gradient-to-b sm:w-1/3 w-full h-44 justify-around flex flex-col bg-[#2b9cab] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-black"
          >
            <span className="drop-shadow-md shadow-black text-2xl text-white">
              Episodes
            </span>
            <span>
              Explora los Episodios llenos de absurdidad y ciencia ficción
            </span>
          </Link>
        </div>
      </div>
      <a href="https://ivogarraza.onrender.com/" className="font-light text-xs absolute -bottom-14 rounded-md bg-[#2b9cab] text-white p-2">Desarrollada por Ivo Garraza</a>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import title from '../assets/title.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
  <div className="flex flex-col items-center justify-center h-[100vh]">
    <img src={title} className='w-[40%] mb-10'></img>
    <div className="flex flex-col font-bold text-white w-[40%]">
        <Link to='/characters' className="bg-yellow-300 m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl">Personajes</Link>
        <Link to='/locations' className="bg-yellow-300 m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl">Ubicaciones</Link>
        <Link to='/episodes'  className="bg-yellow-300 m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl">Episodios</Link>
    </div>
  </div>
  );
};

export default Home;

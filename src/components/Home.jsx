import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import title from '../assets/title.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
  <div className="flex flex-col items-center justify-center h-[100vh]">
    <img src={title} className='w-[40%] mb-10'></img>
    <div className="flex flex-col font-bold text-white w-[40%]">
        <Link to='/characters' className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-white"><span className="drop-shadow-md shadow-black">Personajes</span></Link>
        <Link to='/locations' className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-white"><span className="drop-shadow-md shadow-black">Ubicaciones</span></Link>
        <Link to='/episodes'  className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-white"><span className="drop-shadow-md shadow-black">Episodios</span></Link>
    </div>
  </div>
  );
};

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import title from '../../assets/title.png'
import { motion } from "framer-motion";

const variants = {
  open:{opacity:1,x:0},
  closed:{opacity:0, x:200}
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-slate-600 flex flex-row items-center justify-between w-100 h-20">
      <div className="flex flex-row">
        <img src={logo} className="w-[12%] sm:w-[5%] m-2"></img>
        <img src={title} className='w-[50%] sm:w-[20%]'></img>
      </div>
      <div className="">
        <div className="list-none sm:flex hidden justify-end items-center flex-1">
          <Link to="/episodes" className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl font-bold text-white">Episodios</Link>
          <Link to="/locations" className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl font-bold text-white">Locaciones</Link>
          <Link to="/characters" className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl font-bold text-white">Personajes</Link>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center mr-2 w-[25px] h-[25px] sm:w-[10px]">
          <img
            src={toggle ? close : menu}
            onClick={() => setToggle((prev) => !prev)}
          ></img>
        </div>
        <motion.div animate = {toggle?"open":"closed"} variants={variants} transition={{duration:0.5}}
        className={`${toggle ? "flex" : "hidden"} justify-center absolute top-20 right-0 backdrop-blur-md p-6 w-[70%] h-[100vh] rounded-lg sidebar border-black`}>
          <div className="flex flex-col w-[90%] mt-10">
            <Link to="/characters" className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl font-bold text-white">Personajes</Link>
            <Link to="/locations" className="bg-gradient-to-b from-[#FAFD7CFF] via-[#FAE48BFF] to-[#E89242FF] m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl font-bold text-white">Ubicaciones</Link>
            <Link to="/episodes" className="bg-gradient-to-b from-[#FAFD7CFF] via-[#FAE48BFF] to-[#E89242FF] m-2 w-100 h-100 p-2 shadow-sm hover:shadow-none shadow-black rounded-xl font-bold text-white">Episodios</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

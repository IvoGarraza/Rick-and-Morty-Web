import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import title from '../../assets/title.png'
import { motion, useAnimation } from "framer-motion";


const variants = {
  open:{opacity:1,x:0},
  closed:{opacity:0, x:200}
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div initial={{y:-100}} animate={{y:0}} duration={{duration:3}} className="bg-slate-600 absolute top-0 flex flex-row z-20 items-center justify-between w-100 h-20 shadow-lg sha shadow-[#88e23b]/30">
      <Link to='/' className="flex flex-row cursor-pointer">
        <img src={logo} className="w-[12%] sm:w-[5%] m-2"></img>
        <img src={title} className='w-[50%] sm:w-[20%]'></img>
      </Link>
      <div className="">
        <div className="list-none sm:flex hidden justify-end items-center flex-1">
          <Link to='/characters' className="bg-[#fee16a] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[1px] border-black"><span className="drop-shadow-md shadow-black text-black font-medium">Personajes</span></Link>
          <Link to='/locations' className="bg-[#fee16a] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[1px] border-black"><span className="drop-shadow-md shadow-black text-black font-medium">Ubicaciones</span></Link>
          <Link to='/episodes'  className="bg-[#fee16a] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[1px] border-black"><span className="drop-shadow-md shadow-black text-black font-medium">Episodios</span></Link>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center mr-2 w-[25px] h-[25px] sm:w-[10px]">
          <img
            src={toggle ? close : menu}
            onClick={() => setToggle((prev) => !prev)}
          ></img>
        </div>
        <motion.div animate = {toggle?"open":"closed"} variants={variants} transition={{duration:0.5}}
        className={`${toggle ? "flex" : "hidden"} justify-center absolute top-20 right-0 bg-slate-600 p-6 w-[70%] h-[100vh] rounded-lg sidebar border-black`}>
          <div className="flex flex-col w-[90%] mt-10">
            <Link to='/characters' className="bg-[#02afc5] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-white"><span className="drop-shadow-md shadow-black text-white font-bold">Personajes</span></Link>
            <Link to='/locations' className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-white"><span className="drop-shadow-md shadow-black text-white font-bold">Ubicaciones</span></Link>
            <Link to='/episodes'  className="bg-gradient-to-b from-[#FAFD7CFF] via-[#fee16a] to-[#E89242FF] m-2 w-100 h-100 p-2 hover:shadow-none shadow-sm shadow-black rounded-xl border-[2px] border-white"><span className="drop-shadow-md shadow-black text-white font-bold">Episodios</span></Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;

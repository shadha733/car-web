import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
const [menu, setMenu] = useState(false);
const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <header className=" fixed w-full z-10   bg-secondary text-white shadow-md">
    <nav className=' container flex justify-between items-center py-3'>
      <div className="flex items-center gap-2"> 
        <GiSteeringWheel size={37} className=" text-primary" />
        
      <h1 className="fon-blod text-2xl">WheelsDeal</h1> 
      </div>
      <div className="custom-navbar  flex  items-center   gap-6 text-lg font-semibold ">
      <Link to="/" className="hover:text-primary transition duration- 200 ease-linear">Home</Link>
        <Link to="/About" className="hover:text-primary transition duration- 200 ease-linear">About</Link>
        <Link to="/Cars" className="hover:text-primary transition duration- 200 ease-linear">Our Cars</Link>
        <Link to="/Services" className="hover:text-primary transition duration- 200 ease-linear">Services</Link>
        
      </div>
      <div className="md:hidden   hover:text-primary transition duration- 200 ease-linear" >

       {/*<button onClick={toggleMenu} >
          {menu ? <AiOutlineClose  size={25}/> : <AiOutlineMenu  size={25} className="text-2xl cursor-pointer ml-6"/>}
        </button>*/}

        {menu ? (
          <AiOutlineClose size={25} className=" ml-6 cursor-pointer" onClick={toggleMenu} />
        ) : (
          <AiOutlineMenu size={25} className=" ml-6 cursor-pointer" onClick={toggleMenu} />
        )
          
          }
      </div>
      
    
    </nav>
    
    <div className={`${menu ? "translate-x-0" : "translate-x-full"}  md:hidden flex flex-col absolute bg-secondary text-white right-0 top-16  font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-1/4 h-fit rounded-br-xl transition-transform duration-300 ease-in-out shadow-lg`}
      >
          <Link to="/" className="hover:text-primary transition duration- 200 ease-linear" onClick={closeMenu}>Home</Link>
        <Link to="/About" className="hover:text-primary transition duration- 200 ease-linear" onClick={closeMenu}>About</Link>
        <Link to="/Cars" className="hover:text-primary transition duration- 200 ease-linear" onClick={closeMenu}>Our Cars</Link>
        <Link to="/Services" className="hover:text-primary transition duration- 200 ease-linear" onClick={closeMenu}>Services</Link>
        </div>
      
      
  
    </header>
  );
}
export default Navbar;
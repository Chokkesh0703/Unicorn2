import React, { useState } from 'react';
import logo from "./../assets/logo/mlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex flex-row p-2 justify-items-end md:justify-normal lg:ml-20 md:p-20 items-center gap-60 md:py-8 lg:py-0 lg:pt-5 md:ml-0 relative'>
      <div className="md:w-[218px] md:h-[125px] md:p-1 w-[100px]">
        <img src={logo} alt="Logo" />
      </div>
      
    
      <ul className="text-[#ffff] hidden flex-row lg:gap-20 md:gap-10 md:flex font-Poppins-normal">
        <li className="font-Poppins-normal hover:text-yellow-500">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-yellow-500 transition-all duration-200 ">
          <a href="#About">About Us</a>
        </li>
        <li className="hover:text-yellow-500 transition-scroll duration-500 ">
          <a href="#Movies  ">Movies</a>
        </li>
        <li className="hover:text-yellow-500 transition-all duration-200 ">
          <a href="#Contact">Contact Us</a>
        </li>
      </ul>

    
      <div className="md:hidden  z-100">
        <button onClick={toggleMenu} className="text-black p-4 text-2xl ">
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="nav-menu absolute top-0 right-0 size-60 h-[600px] z-50 bg-yellow-400 flex justify-center items-center  ">
          <ul className="nav_menu_list flex flex-col gap-5">
            <li className="nav_list" onClick={toggleMenu} ><a href="#Home" className=" hover:text-yellow-500 transition-all duration-200 ">Home</a></li>
            <li className="nav_list" onClick={toggleMenu}><a href="#About" className=" outlinehover:text-yellow-500
            transition-all duration-500 " onClick={toggleMenu}>About Us</a></li>
            <li className="nav_list" onClick={toggleMenu}><a href="#Movies" className=" hover:text-yellow-500 transition-all duration-500 ">Movies</a></li>
            <li className="nav_list" onClick={toggleMenu}><a href="#Contact" className=" hover:text-yellow-500 transition-all duration-500 ">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

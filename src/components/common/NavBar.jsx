import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bgcolor bg-orange-500   sticky top-0 z-[1000]  bg-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-[100xpx] h-[37px]" />
            <div className="flex justify-around gap-16 ml-20 hidden md:flex items-center space-x-4">
            <a href="#About" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">About</a>
            <a href="#Services" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">Services</a>
            <a href="#contact" className="hover:text-orange-700 font-bold transition duration-1000 nav-item relative">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
         
            <button className="bg-white px-3 py-3 button-shadow rounded-sm hover:bg-orange-700 hover:text-white duration-1000 text-black button-nav">Get Started</button>
          </div>

          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden text-center z-50 absolute top-16 left-0 w-full bg-[#fcbf4e] transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <a href="#Home" onClick={toggleMenu} className="block py-2 px-4 hover:bg-orange-700">Home</a>
          <a href="#About" onClick={toggleMenu} className="block py-2 px-4 hover:bg-orange-700">About</a>
          <a href="#Services" onClick={toggleMenu} className="block py-2 px-4 hover:bg-orange-700">Services</a>
          <a href="#contact" onClick={toggleMenu} className="block py-2 px-4 hover:bg-orange-700">Contact</a>
          <button onClick={toggleMenu} className="bg-white px-3 py-3 rounded-sm hover:bg-orange-700 hover:text-white duration-1000 text-black my-3">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

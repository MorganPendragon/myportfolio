import React, { useState } from 'react';
import './navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Burger Button */}
      <button
        className="fixed top-4 right-4 z-50 flex flex-col justify-center items-center w-10 h-10 bg-[#124d54] rounded-md sm:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`bg-white h-0.5 w-6 rounded-full transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
            }`}
        ></span>
        <span
          className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out mt-1.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
        ></span>
        <span
          className={`bg-white h-0.5 w-6 rounded-full transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
            }`}
        ></span>
      </button>

      {/* Overlay for mobile when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 sm:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Navigation Menu - Hidden on mobile by default, shown on desktop */}
      <div
        className={`taskbar flex flex-col sm:flex-row justify-center align-center items-center rounded-lg
                  sm:space-x-4 space-y-2 sm:space-y-0  
                  bg-[#1b263b] text-white 
                  w-1/4 mx-auto mt-6 font-sans
                  ${isMenuOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-[-100%] opacity-0 sm:translate-y-0 sm:opacity-100'
          }`}
      >
        <a
          //home
          href="./home.js"
          className="bg-transparent px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className=" hover:text-decoration-color w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
          </svg>
          <span className="nav-text absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            HOME
          </span>
        </a>
        <a
          //eduaction
          href="#"
          className="bg-transparent px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="m6 10.5237-2.27075.6386C3.29797 11.2836 3 11.677 3 12.125V20c0 .5523.44772 1 1 1h2V10.5237Zm12 0 2.2707.6386c.4313.1213.7293.5147.7293.9627V20c0 .5523-.4477 1-1 1h-2V10.5237Z" />
            <path fillRule="evenodd" d="M12.5547 3.16795c-.3359-.22393-.7735-.22393-1.1094 0l-6.00002 4c-.45952.30635-.5837.92722-.27735 1.38675.30636.45953.92723.5837 1.38675.27735L8 7.86853V21h8V7.86853l1.4453.96352c.0143.00957.0289.01873.0435.02746.1597.09514.3364.14076.5112.1406.3228-.0003.6395-.15664.832-.44541.3064-.45953.1822-1.0804-.2773-1.38675l-6-4ZM10 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1Zm1-4c-.5523 0-1 .44772-1 1s.4477 1 1 1h2c.5523 0 1-.44772 1-1s-.4477-1-1-1h-2Z" clipRule="evenodd" />
          </svg>
        </a>
        <a
          //experience
          href="#"
          className="bg-transparent px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="text-white w-[30px] h-[30px]" focusable="false">
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>
        </a>
        <a
          //projects
          href="#"
          className="bg-transparent px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clipRule="evenodd" />
          </svg>
        </a>
        <a
          //contacts
          href="#"
          className="bg-transparent px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
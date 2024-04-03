import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from "../pages/logo.png";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="pb-2 bg-black px-4 md:px-10 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-bold">
            <img src={logo} alt="logo" className="h-10" />
          </div>
          <ul className={`hidden md:flex space-x-8 text-white ${isMenuOpen ? '' : 'hidden'}`}>
            <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link to="/search" className="hover:text-gray-900">Search</Link></li>
            <li><Link to="/genre" className="hover:text-gray-900">Genre</Link></li>
            <li><Link to="/news" className="hover:text-gray-900">News</Link></li>
            <li><Link to="/movies" className="hover:text-gray-900">Movies</Link></li>
            <li><Link to="/tvshows" className="hover:text-gray-900">TV Shows</Link></li>
            <li><Link to="/login" className="hover:text-gray-900">Login</Link></li>
          </ul>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {/* Add your mobile menu icon here */}
            {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </nav>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4 text-white">
            <li><Link to="/" className="hover:text-gray-900" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/explore" className="hover:text-gray-900" onClick={toggleMenu}>Explore</Link></li>
            <li><Link to="/genre" className="hover:text-gray-900" onClick={toggleMenu}>Genre</Link></li>
            <li><Link to="/news" className="hover:text-gray-900" onClick={toggleMenu}>News</Link></li>
            <li><Link to="/movies" className="hover:text-gray-900" onClick={toggleMenu}>Movies</Link></li>
            <li><Link to="/tvshows" className="hover:text-gray-900" onClick={toggleMenu}>TV Shows</Link></li>
            <li><Link to="/login" className="hover:text-gray-900" onClick={toggleMenu}>Login</Link></li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  )
};

export default NavBar;
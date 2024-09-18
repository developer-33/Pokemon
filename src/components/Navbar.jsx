// import { BiCommentDetail } from "react-icons/bi";
import { FaHome, FaTv, FaBell, FaUserCircle, FaSearch, FaEllipsisH } from 'react-icons/fa';
import { FaApple } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
import { SiPokemon } from "react-icons/si";
import { SiBattledotnet } from "react-icons/si";

import { DiPython } from "react-icons/di";
import { Link } from 'react-router-dom'; // React Router for navigation

const Navbar = () => {
  return (
    <div className="bg-red-700   w-full shadow-lg top-0 z-50">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        
        {/* Left: Logo and Site Title */}
        <div className="flex items-center space-x-4">
          <TbPokeball className="text-white text-4xl" />
          <span className="text-white font-bold text-xl">Pokémon Fansite</span>
          
          {/* Search Bar */}
          <div className="relative ml-4">
            <FaSearch className="absolute left-3 top-2.5 text-black" />
            <input
              type="text"
              placeholder="Search Pokémon"
              className="bg-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-32 md:w-64"
            />
          </div>
        </div>
        
        {/* Middle: Navigation Links */}
        {/* <ul className="hidden md:flex space-x-6">
          <li className="text-white hover:text-gray-200">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link to="/forum">Forum</Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link to="/art-gallery">Pokémon List</Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link to="/login-page">Login</Link>
          </li>
        </ul> */}

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          {/* <Link to="/login-page">
            <FaHome className="  text-2xl text-black hover:text-gray-200 cursor-pointer" />
          </Link> */}
          <Link to="/">
            <FaHome className="  text-2xl text-black hover:text-gray-200 cursor-pointer" />
          </Link>
          <Link to="/art-gallery">
            <FaTv className="text-2xl text-white hover:text-gray-200 cursor-pointer" />
          </Link>
          <Link to="/forum"> {/* Corrected path */}
          <SiPokemon className="text-2xl text-white hover:text-gray-200 cursor-pointer" />
          </Link>
         
          <Link to="/settings">
            <FaApple className="text-2xl text-white hover:text-gray-200 cursor-pointer" />
          </Link>
          <Link to="/all-pokemon">
            <SiBattledotnet className="text-2xl text-white hover:text-gray-200 cursor-pointer" />
          </Link>
          <Link to="/login-page">
            <SiBattledotnet className="text-2xl text-white hover:text-gray-200 cursor-pointer" />
          </Link>
          <Link to="/try-pokemon">
            <DiPython className="text-2xl text-white hover:text-gray-200 cursor-pointer" />
          </Link>
          {/* DropDown  */}
          <Link to="/profile">
          <FaUserCircle className="text-3xl text-yellow-400 hover:text-gray-200 cursor-pointer" />
          </Link>
          <Link to="notifacation">
          <FaBell className="text-2xl text-white hover:text-gray-200 cursor-pointer" />
          </Link>
          <FaEllipsisH className="text-2xl text-white hover:text-gray-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

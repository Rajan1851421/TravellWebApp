import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiUser,
  FiSearch,
  FiHeart,
  FiMapPin,
  FiGlobe,
} from "react-icons/fi";
import Logo from '../assets/Logo/logo1.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-sky-50 to-blue-100 shadow-sm sticky top-0 w-full z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent flex items-center"
            >
             <img src={Logo} alt="Kashi Tour & Trevels" className="h-25 w-20"/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:space-x-1">
            <Link
              to="/"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center"
            >
              <FiMapPin className="mr-1" /> Home
            </Link>
            <Link
              to="/explore-Vehicle"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
            >
              Explore Vehicle
            </Link>
            <Link
              to="/gallery"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
            >
              Gallery
            </Link>
            {/* <Link
              to="/deals"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap"
            >
              Special Deals
            </Link> */}
            <Link
              to="/about"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
            >
              Contact
            </Link>
            <Link
              to="/add-vehicle"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
            >
              Add Vehicle
            </Link>
          </div>

          {/* Right side icons (search, user, favorites) */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <button className="p-2 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <FiUser className="h-5 w-5" />
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 shadow-sm whitespace-nowrap">
              Enquiry now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <FiSearch className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-100 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-lg">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center"
              onClick={toggleMenu}
            >
              <FiMapPin className="mr-2" /> Home
            </Link>
            <Link
              to="/explore-Vehicle"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Explore Vehicle
            </Link>
            <Link
              to="/tours"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Tours
            </Link>
            <Link
              to="/deals"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Special Deals
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FiUser className="h-8 w-8 p-1 rounded-full bg-blue-100 text-blue-600" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Traveler
                </div>
                <div className="text-sm font-medium text-gray-500">
                  Welcome back!
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/login"
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={toggleMenu}
              >
                Create Account
              </Link>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-md text-base font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 shadow-sm mt-2">
                Book a Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiUser,
  FiSearch,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 w-full z-100">
      <div className="m mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and main nav items */}
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              BrandName
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              to="/"
              className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/add-vehicle"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Add Vehicle
            </Link>
            <Link
              to="/about"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/testimonial"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Testimonial
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="-mr-2 flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            {isOpen ? (
              <FiX className="block h-6 w-6" />
            ) : (
              <FiMenu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <FiUser className="h-8 w-8 p-1 text-gray-600" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  User Name
                </div>
                <div className="text-sm font-medium text-gray-500">
                  user@example.com
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <button className="block w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Your Profile
              </button>
              <button className="block w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Settings
              </button>
              <button className="block w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

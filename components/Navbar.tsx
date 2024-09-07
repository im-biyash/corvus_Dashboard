"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="p-4 bg-blue-400 w-full relative">
      <div className="flex justify-between items-center w-full">
        <div className="text-white text-2xl">Logo</div>
        <div className="hidden md:flex justify-center items-center w-full space-x-4">
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="hidden md:flex space-x-4 mr-5">
          <button className="text-white">Login</button>
          <button className="text-white">Signup</button>
        </div>
        <div className="md:hidden absolute right-4">
          <button onClick={toggleMenu}>
            <FaBars className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      {/* Mobile view */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4">
          <li className="py-2">Home</li>
          <li className="py-2">About</li>
          <li className="py-2">Contact</li>
          <li className="py-2">Services</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

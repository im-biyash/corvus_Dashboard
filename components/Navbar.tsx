"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image"; 
import logo from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2 my-1">
      <div className="logo flex items-center">
        <Image
          src={logo}
          className=" my-1 font- p-2 w-12 bg-white rounded-xl"
          alt="Logo"
        />
        <h1 className="text-xl font-bold p-1 ml-2">
          Peak Voyage 
        </h1>
      </div>
      <div className="flex-grow flex justify-center">
        <ul className="flex gap-3 p-2 font-semibold">
          
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex-shrink-0 mr-2 sm:mr-5">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image"; // Import Image component from next/image
import logo from "../assets/logo.png"; // Import the image

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2 my-1">
      <div className="logo flex items-center">
        <Image
          src={logo}
          className="h-11 my-2 p-2 w-auto bg-white rounded-xl"
          alt="Logo"
        />
        <h1 className="text-xl font-bold ml-2 p-1">
          <span className="block leading-none">Peak</span>
          <span className="block leading-none">Voyage</span>
        </h1>
      </div>
      <div className="flex-grow flex justify-center">
        <ul className="flex gap-3 p-2 font-semibold">
          
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex-shrink-0 mr-2">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

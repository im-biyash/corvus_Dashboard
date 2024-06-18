"use client";
import React, { useState, useEffect } from "react";
import UserItem from "./userItem";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";
import { BiChevronDown, BiChevronUp, BiMenu } from "react-icons/bi";
import { TbBrandPaypay } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";   

const Sidebar = () => {
  const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  
  const toggleEmployeeDropdown = () => {
    setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  const toggleSidebar = () => { 
    setIsSidebarOpen(!isSidebarOpen);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768); 
    };

    handleResize(); 

    window.addEventListener("resize", handleResize); 


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`border-r h-full ${
        isSidebarOpen ? "w-[300px]" : "w-[60px]"
      } transition-all duration-300`}
    >
      <div>
        {isSidebarOpen && <UserItem />}{" "}
       
      </div>
      <div>
        <Command>
          <CommandList className="min-h-screen">
            <CommandEmpty>
              {isSidebarOpen ? (
                "No results found."
              ) : (
                <BiMenu
                  className="text-xl cursor-pointer text-center ml-3"
                  onClick={toggleSidebar}
                />
              )}
            </CommandEmpty>
            <CommandGroup
              className={`${isSidebarOpen ? "p-2 text-xl" : "hidden"}`}
            >
              {isSidebarOpen && (
                <>
                  <div className="">
                    <div className="flex items-center ml-6 relative">
                      <LuLayoutDashboard />
                      <BiMenu
                        className="cursor-pointer absolute top-0 right-0 mt-1 mr-2 hover:bg-slate-600"
                        onClick={toggleSidebar}
                      />
                      <CommandItem className="font-bold text-xl text-center">
                        Dashboard
                      </CommandItem>
                    </div>
                  </div>
                  <div
                    className="dark:hover:bg-slate-600 hover:bg-slate-300"
                    onClick={toggleEmployeeDropdown}
                  >
                    <div className="flex items-center ml-8 mt-2 text-xl p-1 cursor-pointer">
                      <FaUser />
                      <CommandItem>Employee</CommandItem>
                      {isEmployeeDropdownOpen ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </div>
                  </div>
                  {isEmployeeDropdownOpen && (
                    <div className="ml-14 relative max-h-64 overflow-y-auto">
                      <div className="absolute top-0 bottom-0 left-1.5 border-l-2 border-dotted border-gray-300"></div>
                      <div className="dark:hover:bg-slate-600 hover:bg-slate-300">
                        <div className="flex items-center ml-2 mt-2 text-lg p-1 relative">
                          <div className="absolute left-[-5px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                          <CommandItem>Manage Employee</CommandItem>
                        </div>
                      </div>
                      <div className="dark:hover:bg-slate-600 hover:bg-slate-300">
                        <div className="flex items-center ml-2 text-lg p-1 relative">
                          <div className="absolute left-[-5px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                          <CommandItem>Department</CommandItem>
                        </div>
                      </div>
                      <div className="dark:hover:bg-gray-600 hover:bg-slate-300">
                        <div className="flex items-center ml-2 text-lg p-1 relative">
                          <div className="absolute left-[-5px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                          <CommandItem>Directory</CommandItem>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="dark:hover:bg-slate-600 hover:bg-slate-300">
                    <div className="flex items-center ml-8 text-xl p-1">
                    <RiPresentationFill />
                      <CommandItem>Attendance</CommandItem>
                    </div>
                  </div>
                  <div className="dark:hover:bg-slate-600 hover:bg-slate-300 ">
                    <div className="flex items-center ml-8 text-xl p-1 ">
                    <TbBrandPaypay />
                      <CommandItem>Payroll</CommandItem>
                    </div>
                  </div>
                  <div className="dark:hover:bg-slate-600 hover:bg-slate-300">
                    <div className="flex items-center ml-8 text-xl p-1">
                    <TbReportMoney />
                      <CommandItem>Payment</CommandItem>
                    </div>
                  </div>
                </>
              )}
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default Sidebar;

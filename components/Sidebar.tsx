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
        {isSidebarOpen && <UserItem />}
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
            <CommandGroup>
              <div className={`flex items-center justify-between ${isSidebarOpen ? "pl-6 pr-2" : "justify-center items-center font-bold  pl-4 text-center"} my-4`}>
                <LuLayoutDashboard />
                {isSidebarOpen && (
                  <>
                    <CommandItem className="font-bold text-xl  text-center flex-grow">
                      Dashboard
                    </CommandItem>
                    <BiMenu
                      className="cursor-pointer hover:bg-slate-600"
                      onClick={toggleSidebar}
                    />
                  </>
                )}
              </div>
              <div
                className="dark:hover:bg-slate-600 hover:bg-slate-300"
                onClick={toggleEmployeeDropdown}
              >
                <div className={`flex items-center ${isSidebarOpen ? "pl-8 pr-2" : "justify-center"} mt-2 text-xl p-1 cursor-pointer`}>
                  <FaUser />
                  {isSidebarOpen && (
                    <>
                      <CommandItem className="flex-grow">Employee</CommandItem>
                      {isEmployeeDropdownOpen ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </>
                  )}
                </div>
              </div>
              {isEmployeeDropdownOpen && isSidebarOpen && (
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
                <div className={`flex items-center ${isSidebarOpen ? "pl-8 pr-2" : "justify-center"} text-xl p-1 my-4`}>
                  <RiPresentationFill />
                  {isSidebarOpen && <CommandItem className="flex-grow">Attendance</CommandItem>}
                </div>
              </div>
              <div className="dark:hover:bg-slate-600 hover:bg-slate-300">
                <div className={`flex items-center ${isSidebarOpen ? "pl-8 pr-2" : "justify-center"} text-xl p-1 my-4`}>
                  <TbBrandPaypay />
                  {isSidebarOpen && <CommandItem className="flex-grow">Payroll</CommandItem>}
                </div>
              </div>
              <div className="dark:hover:bg-slate-600 hover:bg-slate-300">
                <div className={`flex items-center ${isSidebarOpen ? "pl-8 pr-2" : "justify-center"} text-xl p-1 my-4`}>
                  <TbReportMoney />
                  {isSidebarOpen && <CommandItem className="flex-grow">Payment</CommandItem>}
                </div>
              </div>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default Sidebar;

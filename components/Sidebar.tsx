'use client';
import React, { useState } from 'react';
import UserItem from './userItem';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiTimer } from "react-icons/ci";
import { MdOutlineSystemUpdateAlt, MdOutlinePayment } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Sidebar = () => {
  const [isEmployeeDropdownOpen, setIsEmployeeDropdownOpen] = useState(false);

  const toggleEmployeeDropdown = () => {
    setIsEmployeeDropdownOpen(!isEmployeeDropdownOpen);
  };

  return (
    <div className='border-r h-full w-[300px]'>
      <div>
        <UserItem />
      </div>
      <div>
        <Command>
          <CommandList className='min-h-screen'>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup className='p-2 text-xl'>
              <div className='flex items-center ml-6'>
                <LuLayoutDashboard />
                <CommandItem className='font-bold text-xl text-center'>
                  Dashboard
                </CommandItem>
              </div>
              <div className='flex items-center ml-8 mt-2 text-xl p-1 cursor-pointer' onClick={toggleEmployeeDropdown}>
                <FaUser />
                <CommandItem>Employee</CommandItem>
                {isEmployeeDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
              </div>
              {isEmployeeDropdownOpen && (
                <div className='ml-14 relative max-h-64 overflow-y-auto'>
                  <div className='absolute top-0 bottom-0 left-1.5 border-l-2 border-dotted border-gray-300'></div>
                  <div className='flex items-center ml-2 mt-2 text-lg p-1 relative'>
                    <div className='absolute left-[-5px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full'></div>
                    <CommandItem>Manage Employee</CommandItem>
                  </div>
                  <div className='flex items-center ml-2 text-lg p-1 relative'>
                    <div className='absolute left-[-5px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full'></div>
                    <CommandItem>Department</CommandItem>
                  </div>
                  <div className='flex items-center ml-2 text-lg p-1 relative'>
                    <div className='absolute left-[-5px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full'></div>
                    <CommandItem>Directory</CommandItem>
                  </div>
                </div>
              )}
              <div className='flex items-center ml-8 text-xl p-1'>
                <CiTimer />
                <CommandItem>Attendance</CommandItem>
              </div>
              <div className='flex items-center ml-8 text-xl p-1'>
                <MdOutlineSystemUpdateAlt />
                <CommandItem>Payroll</CommandItem>
              </div>
              <div className='flex items-center ml-8 text-xl p-1'>
                <MdOutlinePayment />
                <CommandItem>Payment</CommandItem>
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

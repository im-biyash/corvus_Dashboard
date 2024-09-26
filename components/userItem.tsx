import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Useritem = () => {
  return (
    <div className='flex gap-2 items-center border-2 rounded-l-xl py-4 px-3 w-full'>
      <Avatar className='ml-2 p-2'>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex flex-col items-start'>
        <span className='text-xl'>Admin</span>
        <span>admin12@gmail.com</span>
      </div>
    </div>
  );
};

export default Useritem;

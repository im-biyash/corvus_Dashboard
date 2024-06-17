import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const userItem = () => {
  return (
    <div className=' flex  gap-2 items-center border-2 rounded-xl py-2 h-full w-[300px]'>
        <div className='ml-2 p-2'>
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
        </div>
      
      <div className='flex flex-col items-start '>
        <span className='text-xl'>Admin</span>
        <span>admin12@gmail.com</span>
      </div>
    </div>
  )
}

export default userItem

"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import NavLink from "./NavLink";
import NavButton from "@/components/Navbar/NavButton"
const Nav2 = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () =>{
    setisClick(!isClick)
  }

  const navLinks = [
    {
    title:"Home",
    path: "#"
    },
    {
    title:"How we work",
    path: "#"
    },
    {
    title:"Service",
    path: "#"
    },
    {
    title:"Contact",
    path: "#"
    }
 ]

  return (
    <nav className=' container mx-auto'>
      <div className='max-w7xl mx-auto px-4 sm:px-6 '>
        <div className='flex items-center justify-between  h-16'>
          <div className='flex items-center'>
              <div className='flex-shrink-0 flex ml-2 items-center justify-center'>
            <Image className="mr-2" src="/images/logo.png" width={40} height={40} alt="logo" />
            <h2 className="text-xl text-white font-bold">
               Amir.<span className=" text-teal-400 font-bold">Co</span>
            </h2>
              </div>
          </div>
          
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-2'>             
              {navLinks.map((link,index) => (
                    <li key={index} className='list-none '>
                        <NavLink href={link.path}title={link.title} />
                    </li>
                    ))
              }
            </div>
          </div>
          <div className="hidden md:block">
                <NavButton />
          </div>
          <div className='md:hidden flex items-center '>
            <button onClick={toggleNavbar} className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white '>
              {isClick ? (
                <XMarkIcon className="h-5 w-5 " /> 
                
              ):(
                <Bars3Icon className="h-5 w-5 " /> 
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 '>
          {navLinks.map((link,index) => (
                    <li key={index} className='p-1 list-none text-center'>
                        <NavLink href={link.path}title={link.title} />
                    </li>
                    ))
              }
              <div className="block md:hidden text-center">
                <NavButton />
              </div>
          </div>
        </div>
      )}
       
    </nav>
  )
}

export default Nav2
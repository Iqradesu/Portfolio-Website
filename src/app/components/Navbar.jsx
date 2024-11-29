"use client";
import Link from 'next/link'
import React, { useState} from 'react'
import NavLink from './NavLink'
import { HiOutlineXMark, HiMiniBars3 } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';


const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title:"Projects",
        path: "#projects",
    },
    {
        title:"Contact",
        path: "#Contact"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className='fixed top-0 left-0 z-50 bg-[#121212] bg-opacity-100 w-full'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2 box-shadow'>
            <Link href={"/"} className='text-2xl md:text-4xl font-semibold text-white'>IQRA</Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white'><HiMiniBars3 className='h-5 w-5'/></button>
                    ):(
                        <button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white hover:text-white'><HiOutlineXMark className='h-5 w-5'/></button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index)=>{ 
                            return(
                                <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                            )
                            
                        })
                    }
                </ul>
            </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
            </nav>
    )
}

export default Navbar

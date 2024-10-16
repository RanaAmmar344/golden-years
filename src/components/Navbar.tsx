"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/main-logo.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from "lucide-react"
import { HiOutlineUser } from "react-icons/hi2";
import { CgShoppingBag } from "react-icons/cg";



const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    };

    return (
        <div className='w-full mx-auto flex items-center justify-center '>
            <nav className='fixed top-2 z-50 w-full'>
                <div className='max-w-screen-xl lg:mx-28 mx-auto flex items-center justify-between rounded-xl text-white p-4  border-collapse border nav-border   '>
                    
                    <Image
                        src={logo}
                        width={218.19}
                        height={43}
                        alt='Logo'
                    />
                    <div className='hidden lg:flex items-center justify-center  px-2 '>
                        <ul className='flex items-center cursor-pointer gap-4 font-chakra-petch text-[16px] font-bold leading-[20.8px] text-left'>
                            <Link href='/'><li className='p-1 hover:text-yellow-400'>Home</li></Link>
                            <Link href='/collection'><li className='p-1  hover:text-yellow-400'>Collection</li></Link>
                            <Link href='/about'><li className='p-1 hover:text-yellow-400'>About</li></Link>
                           
                        </ul>
                        
                    </div>
                    <div className='hidden lg:flex items-center justify-center  '>
                        <Image
                        className=' cursor-pointer mr-2 '
                        src='/wallet-btn.png'
                        alt=''
                         width={164}
                         height={47}
                        />
                       
                        <div className='flex mb-1 '>
                        <HiOutlineUser   className='border w-[41px] h-[41px] p-2 mr-3 nav-border cursor-pointer hover:bg-[rgba(255,187,0,0.33)]  ' />
                        <CgShoppingBag  className='border w-[41px] p-2 h-[41px] nav-border cursor-pointer hover:bg-[rgba(255,187,0,0.33)]' />

                        </div>
                       


                    </div>
                  
                    <div className='flex-col justify-end  md:flex lg:hidden'>
                        <Button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</Button>
                    </div>
                </div>
                

                {mobileDrawerOpen && (
                    <div className='lg:hidden mx-4 bg-neutral-500 rounded-4 rounded-2xl pb-6'>
                        <ul className='flex flex-col space-y-2 py-5 items-center cursor-pointer gap-4 font-chakra-petch text-[16px] font-bold leading-[20.8px] text-left'>
                            <Link href='/'><li className='p-1 hover:text-yellow-400'>Home</li></Link>
                            <Link href='/collection'><li className='p-1  hover:text-yellow-400'>Collection</li></Link>
                            <Link href='/about'><li className='p-1 hover:text-yellow-400'>About</li></Link>
                           
                        </ul>
                        <div className=' flex items-center justify-center  '>
                        <Image
                        className=' cursor-pointer mr-2 '
                        src='/wallet-btn.png'
                        alt=''
                         width={164}
                         height={47}
                        />
                       
                        <div className='flex mb-1 '>
                        <HiOutlineUser   className='border w-[41px] h-[41px] p-2 mr-3 nav-border cursor-pointer   ' />
                        <CgShoppingBag  className='border w-[41px] p-2 h-[41px] nav-border cursor-pointer' />

                        </div>
                       


                    </div>

                        
                      
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar

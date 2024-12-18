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
            <nav className='pt-4 z-50 w-[1160px] h-[65px] mx-auto '>
                <div className='max-w-screen-xl lg:mx-10 mx-auto flex items-center justify-between rounded-xl text-white p-4  border-collapse border nav-border    '>
                    
                    <Image
                    className='lg:w-[218.19px] w-[152.23px]'
                        src={logo}
                        width={218.19}
                        height={43}
                        alt='Logo'
                    />
                    <div className='hidden lg:flex items-center justify-center   '>
                        <ul className='flex items-center cursor-pointer gap-4 font-chakra-petch text-[16px] font-bold leading-[20.8px] text-left'>
                            <Link href='/'><li className='p-1  hover:text-yellow-400'>Home</li></Link>
                            <Link href='/collection'><li className='p-1  hover:text-yellow-400'>Collection</li></Link>
                            <Link href='/about'><li className='p-1 hover:text-yellow-400'>About</li></Link>
                           
                        </ul>
                        
                    </div>
                    <div className='hidden lg:flex items-center justify-center   '>
                        
                       <div className='mr-2 flex  w-[170px] h-[47px]  '>

                    <Button className="custom-btn   "> </Button> 
                       </div>
                        

                       
                        <div className='flex mb-1 '>
                        <HiOutlineUser   className='border w-[41px] h-[41px] p-2 mr-3 nav-border-2 cursor-pointer hover:bg-[rgba(255,187,0,0.33)]  ' />
                        <CgShoppingBag  className='border w-[41px] p-2 h-[41px] nav-border-2 cursor-pointer hover:bg-[rgba(255,187,0,0.33)]' />

                        </div>
                       


                    </div>
                  
                    <div className='flex justify-end md:flex lg:hidden'>
    <div className='flex items-center mr-2'>
        <CgShoppingBag className='border p-1.5 w-[41px] h-[41px] nav-border-2 cursor-pointer hover:bg-[rgba(255,187,0,0.33)]' />
        
    </div>
    <Button
        onClick={toggleNavbar}
        className='border p-1.5 w-[41px] h-[41px] nav-border-2 flex items-center justify-center '
    >
        {mobileDrawerOpen ? <X /> : <Menu />}
    </Button>
</div>

                </div>
                

                {mobileDrawerOpen && (
                    <div className='lg:hidden  bg-black text-white rounded-4 rounded-2xl pb-10 p-10 space-y-6'>
                        <ul className='flex flex-col space-y-2 py-5 items-center cursor-pointer gap-4 font-chakra-petch text-[34px] font-bold leading-[20.8px] text-left'>
                            <Link href='/'><li className='p-1 hover:text-yellow-400'>Home</li></Link>
                            <Link href='/collection'><li className='p-1  hover:text-yellow-400'>Collection</li></Link>
                            <Link href='/about'><li className='p-1 hover:text-yellow-400'>About</li></Link>
                           
                        </ul>
                        <div className=' flex flex-col items-center justify-center  '>
                        <div className='mr-2 flex  w-[170px] h-[47px]  '>

                    <Button className="custom-btn "> </Button> 
                       </div>
                       
                        <div className='flex flex-col text-center space-y-6 mt-6 '>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        </div>
                        <div className="flex space-x-8 mt-4  pb-10">
              <Image src="/discord.png" width={38} height={30} alt="" />
              <Image src="/instagram.png" width={30} height={30} alt="" />
              <Image src="/twitter.png" width={30} height={30} alt="" />
              <Image src="/facebook.png" width={30} height={30} alt="" />
            </div>


                    </div>

                        
                      
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar

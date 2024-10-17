"use client"
import { CAROUSEL_HERO } from '@/constants'; 
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Hero = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

  const nextBox = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % (CAROUSEL_HERO.length / 3));
  };

  useEffect(() => {
    const interval = setInterval(nextBox, 3000); 
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='hero-container' >

      <div className='flex flex-wrap '>
        <div className=' nav-border text-white w-[376px] h-[505px] relative lg:top-[120px] lg:left-[140px] p-10 bg-gradient-to-br from-[#373737] via-[#0D0D0D] to-[#0D0D0D] nft-res'>
        <h1 className="font-chakra-petch text-[58px] font-bold leading-[63.8px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] via-[#EBA20B] to-[#FFDE04] bg-clip-text text-transparent mt-4">
            NFT’s Made In Gold
          </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          
          <div className="mt-20">
            <p className="font-chakra-petch text-[18px] font-semibold leading-[23.4px] text-left">Join for future drops</p>
            <div className="flex space-x-8 mt-4">
              <Image src="/discord.png" width={38} height={30} alt="" />
              <Image src="/instagram.png" width={30} height={30} alt="" />
              <Image src="/twitter.png" width={30} height={30} alt="" />
              <Image src="/facebook.png" width={30} height={30} alt="" />
            </div>
          </div>
          
        </div>
        {/* -------------------------------------------section-2----------------------------------- */}
        
         <div className='relative  lg:bottom-96 lg:left-[630px] w-full  carousel-res  '>
           {/* Carousel */}
        <div className="  w-[900px] overflow-hidden    "> 
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {CAROUSEL_HERO.map((item, index) => (
              <div key={index} className="w-[33.33%] flex-shrink-0 flex items-center justify-center   ">
                <div className="nav-border  overflow-clip ">
                  <Image src={item.image} alt="" width={286.33} height={342} className="object-cover " />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" relative left-[440px] lg:left-[320px] lg:top-5 flex space-x-2 dot.res">
            {Array.from({ length: Math.ceil(CAROUSEL_HERO.length / 3) }).map((_, index) => (
              <div key={index} className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-yellow-500'}`} />
            ))}
          </div>
        <div className='nav-border w-[350px] relative lg:w-[670px] lg:h-[103px] lg:top-10 sold-res top-10 text-white  bg-[rgba(255,188,0,0.1)] flex items-center justify-around'>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='font-chakra-petch text-[34px] font-bold leading-[44.2px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent'>130K+</h1>
            <p className='font-chakra-petch text-[18px] font-semibold leading-[23.4px] text-left"'>Users</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='font-chakra-petch text-[34px] font-bold leading-[44.2px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent'>69K+</h1>
            <p className='font-chakra-petch text-[18px] font-semibold leading-[23.4px] text-left"'>NFT’s</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='font-chakra-petch text-[34px] font-bold leading-[44.2px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent'>1.2K+</h1>
            <p className='font-chakra-petch text-[18px] font-semibold leading-[23.4px] text-left"'>Sold</p>
            </div>

          </div>
         </div>
       
        
         
        
        
         
         
        

      </div>
     
       <Image
        className=' hero-border-b lg:w-full w-[500px]  relative lg:bottom-40 lg:right-20 flex items-center'
        width={1440}
        height={37}
        src='/hero-border-b.png'
        
        alt=''
        />
    </div>
  )
}

export default Hero

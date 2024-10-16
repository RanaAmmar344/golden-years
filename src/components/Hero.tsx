"use client"
import { CAROUSEL_HERO } from '@/constants'; 
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBox = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (CAROUSEL_HERO.length / 3));
  };

  useEffect(() => {
    const interval = setInterval(nextBox, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container w-full mx-auto flex">
      <Image src="/hero-side-img.png" width={210} height={726} alt="" />
      
      <div className="flex text-white items-center  flex-wrap my-12">
        <div className="nav-border w-[376px] h-[505px] relative top-28 right-24 p-10 bg-gradient-to-br from-[#373737] via-[#0D0D0D] to-[#0D0D0D]">
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

        {/* Carousel */}
        <div className="relative w-[900px] overflow-hidden  bottom-96 left-96  "> 
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {CAROUSEL_HERO.map((item, index) => (
              <div key={index} className="w-[33.33%] flex-shrink-0 flex items-center justify-center   ">
                <div className="nav-border ">
                  <Image src={item.image} alt="" width={286.33} height={342} className="object-cover" />
                </div>
              </div>
            ))}
          </div>
          
         

        </div>
        
        
          <div className='nav-border w-[670px] h-[103px] absolute top-[560px] left-[598px] bg-[rgba(255,188,0,0.1)] flex items-center justify-around'>
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
          <div className=" relative bottom-48 right-48  flex space-x-2">
            {Array.from({ length: Math.ceil(CAROUSEL_HERO.length / 3) }).map((_, index) => (
              <div key={index} className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-yellow-500'}`} />
            ))}
          </div>
  

            
      </div>
     
    </div>
  );
};

export default Hero;

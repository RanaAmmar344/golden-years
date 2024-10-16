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
    <div className="hero-container w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center">
      <Image src="/hero-side-img.png" width={210} height={726} alt="" className="hidden lg:block" />

      <div className="flex flex-col lg:flex-row text-white items-center lg:items-start lg:justify-between w-full lg:w-auto mt-12 lg:mt-0">
        {/* Left Section */}
        <div className="nav-border w-full lg:w-[376px] h-auto lg:h-[505px] relative p-6 lg:top-28 lg:right-24 bg-gradient-to-br from-[#373737] via-[#0D0D0D] to-[#0D0D0D]">
          <h1 className="font-chakra-petch text-4xl lg:text-[58px] font-bold leading-tight lg:leading-[63.8px] tracking-[0.02em] bg-gradient-to-r from-[#FFDE04] via-[#EBA20B] to-[#FFDE04] bg-clip-text text-transparent mt-4">
            NFT’s Made In Gold
          </h1>
          <p className="text-base lg:text-lg mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          
          <div className="mt-8 lg:mt-20">
            <p className="font-chakra-petch text-lg lg:text-[18px] font-semibold">Join for future drops</p>
            <div className="flex space-x-4 lg:space-x-8 mt-4">
              <Image src="/discord.png" width={38} height={30} alt="" />
              <Image src="/instagram.png" width={30} height={30} alt="" />
              <Image src="/twitter.png" width={30} height={30} alt="" />
              <Image src="/facebook.png" width={30} height={30} alt="" />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full lg:w-[900px] overflow-hidden mt-12 lg:mt-0">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {CAROUSEL_HERO.map((item, index) => (
              <div key={index} className="w-[33.33%] flex-shrink-0 flex items-center justify-center">
                <div className="nav-border">
                  <Image src={item.image} alt="" width={286.33} height={342} className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="nav-border w-full lg:w-[670px] h-auto lg:h-[103px] bg-[rgba(255,188,0,0.1)] flex flex-col lg:flex-row items-center justify-around mt-8 lg:mt-0">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-chakra-petch text-2xl lg:text-[34px] font-bold bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent">130K+</h1>
            <p className="font-chakra-petch text-base lg:text-[18px] font-semibold">Users</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 lg:mt-0">
            <h1 className="font-chakra-petch text-2xl lg:text-[34px] font-bold bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent">69K+</h1>
            <p className="font-chakra-petch text-base lg:text-[18px] font-semibold">NFT’s</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 lg:mt-0">
            <h1 className="font-chakra-petch text-2xl lg:text-[34px] font-bold bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent">1.2K+</h1>
            <p className="font-chakra-petch text-base lg:text-[18px] font-semibold">Sold</p>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex space-x-2 mt-4 lg:mt-8">
          {Array.from({ length: Math.ceil(CAROUSEL_HERO.length / 3) }).map((_, index) => (
            <div key={index} className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-yellow-500'}`} />
          ))}
        </div>

        {/* Border Image */}
        <div className="relative w-full lg:w-auto mt-8 lg:mt-0">
          <Image className="w-full object-cover" width={1440} height={37} src='/hero-border-b.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;

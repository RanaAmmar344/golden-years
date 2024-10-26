'use client';
import { ARTIST } from '@/constants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const ArtistBehind = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState('large'); // 'small', 'medium', or 'large'

  useEffect(() => {
    // Check for screen size
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('small');
      } else if (width >= 768 && width < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    updateScreenSize(); // Initial check
    window.addEventListener('resize', updateScreenSize); // Update on resize

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    if (screenSize === 'small') {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ARTIST.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [screenSize]);

  // Number of items to show based on screen size
  const itemsToShow = screenSize === 'large' ? 4 : screenSize === 'medium' ? 3 : 1;

  // Calculate the transform based on the currentIndex
  const containerTransform = {
    transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
  };

  return (
  
    <div className='artist-container  mx-auto bg-cover bg-center text-white'>
      <div className='flex items-center justify-center flex-col text-center pt-20' data-aos="zoom-in-up">
        <div>
          <h1 className='font-chakra lg:text-[46px] text-[34px] font-bold leading-[55.2px] tracking-[0.02em] text-center'>
            Artist behind the art
          </h1>
          <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-center lg:max-w-lg max-w-sm'>
            We have a brilliant team of artists who have shown their extra-ordinary work in these Golden NFTs collection.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative  ">
          <div
            className={`flex transition-transform duration-500 lg:items-center lg:justify-center w-full`}
            style={containerTransform}
          >
            {ARTIST.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 lg:w-[277px] lg:h-[299px] bg-black text-white lg:m-2   my-4 p-4 rounded-xl`}
                style={{ flexBasis: `${100 / itemsToShow}%` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[70%] object-cover rounded-xl"
                />
                <div className="p-2 text-center">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className='font-inter text-[12px] font-normal leading-[18px] tracking-[0.06em] '>Graphic Designer</p>
                  <div className='flex items-center justify-center mt-2'>
                    <Image className='mr-4' src="/instagram-icon.png" width={18} height={20} alt="" />
                    <Image src="/facebook-icon.png" width={18} height={20} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots for small screens */}
        {screenSize === 'small' && (
          <div className="flex justify-center mt-4">
            {ARTIST.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-yellow-500'}`}
              ></div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ArtistBehind;

'use client';
import { ARTIST } from '@/constants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ArtistBehind = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ARTIST.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  
  const itemsToShow = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 4 : 1;

  
  const containerWidth = itemsToShow === 4 ? 'w-[400%]' : 'w-[100%]';

  return (
    <div className='artist-container mx-auto bg-cover bg-center text-white'>
      <div className='flex items-center justify-center flex-col text-center pt-20'>
        <div>
          <h1 className='font-chakra lg:text-[46px] text-[34px] font-bold leading-[55.2px] tracking-[0.02em] text-center'>
            Artist behind the art
          </h1>
          <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-center lg:max-w-lg max-w-sm'>
            We have a brilliant team of artist who has shown their extra-ordinary work in these Golden NFTs collection
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ${containerWidth}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {ARTIST.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[277px] h-[299px] bg-black text-white m-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[70%] object-cover"
                />
                <div className="p-2 text-center">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div className="flex justify-center mt-4">
          {ARTIST.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-yellow-500'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistBehind;

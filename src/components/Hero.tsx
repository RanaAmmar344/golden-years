"use client";
import { CAROUSEL_HERO } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBox = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_HERO.length);
  };

  useEffect(() => {
    const interval = setInterval(nextBox, 3000);
    return () => clearInterval(interval);
  }, []);

  // Create a new array to display the items in order
  const displayedItems = [
    CAROUSEL_HERO[currentIndex % CAROUSEL_HERO.length],
    CAROUSEL_HERO[(currentIndex + 1) % CAROUSEL_HERO.length],
    CAROUSEL_HERO[(currentIndex + 2) % CAROUSEL_HERO.length],
  ];

  return (
    <div className="hero-container mx-auto flex items-center justify-center flex-col pb-40">
      <Navbar/>
      <div className="flex flex-wrap  mx-auto w-full "  data-aos="fade-left">
        {/* Section 1 */}
        <div className="nav-border text-white  md:w-[600px] md:h-[400px] lg:w-[376px] lg:h-[505px] w-[90%] h-[475px] relative top-[90px] lg:left-[130px] md:left-[100px]  lg:p-10 p-6 bg-gradient-to-br from-[#373737] via-[#0D0D0D] to-[#0D0D0D]">
          <h1 className="font-chakra-petch text-[48px] md:text-[40px] lg:text-[58px] font-bold leading-[63.8px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] via-[#EBA20B] to-[#FFDE04] bg-clip-text text-transparent mt-4">
            NFT’s Made In Gold
          </h1>
          <p className="text-xs md:text-sm lg:text-base mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="mt-10 md:mt-16 lg:mt-20">
            <p className="font-chakra-petch text-[16px] md:text-[18px] font-semibold leading-[23.4px] text-left">
              Join for future drops
            </p>
            <div className="flex space-x-8 mt-4">
              <Image src="/discord.png" width={25} height={25} alt="Discord" />
              <Image src="/instagram.png" width={25} height={25} alt="Instagram" />
              <Image src="/twitter.png" width={25} height={25} alt="Twitter" />
              <Image src="/facebook.png" width={25} height={25} alt="Facebook" />
            </div>
          </div>
        </div>

        {/* Section 2 - Carousel */}
        <div className="relative lg:bottom-[412px] lg:left-[570px] w-full md:mt-20 lg:w-full mx-auto mt-8 lg:mt-0">
          <div className="w-full lg:w-[900px] overflow-hidden">
            <div className="flex transition-transform duration-300 items-center justify-center lg:mt-0 mt-20">
              {displayedItems.map((item, index) => (
                <div
                  key={index}
                  className={`lg:w-[33.33%] flex-shrink-0 flex items-center justify-center ${
                    index < 2 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <div className="nav-border lg:w-[286.33px] lg:h-[342px] md:w-[250px] md:h-[300px] w-[256.79px] h-[307.25px] overflow-clip">
                   
                    <Image
                      src={item.image}
                      alt=""
                      width={256.79} 
                      height={307.25} 
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="relative left-[40%] lg:left-[320px] top-5 flex space-x-2">
            {CAROUSEL_HERO.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-yellow-500 w-[32px] h-[6px]"
                    : "bg-black border border-yellow-500 w-2"
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="nav-border w-[90%] md:w-[600px]   lg:w-[670px] lg:h-[103px] md:h-[90px] relative top-10 lg:right-[335px] text-white bg-[rgba(255,188,0,0.1)] flex items-center justify-around mx-auto">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-chakra-petch text-[30px] md:text-[28px] lg:text-[34px] font-bold leading-[44.2px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent">
                130K+
              </h1>
              <p className="font-chakra-petch text-[16px] md:text-[16px] lg:text-[18px] font-semibold leading-[23.4px] text-left">
                Users
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-chakra-petch text-[30px] md:text-[28px] lg:text-[34px] font-bold leading-[44.2px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent">
                69K+
              </h1>
              <p className="font-chakra-petch text-[16px] md:text-[16px] lg:text-[18px] font-semibold leading-[23.4px] text-left">
                NFT’s
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-chakra-petch text-[30px] md:text-[28px] lg:text-[34px] font-bold leading-[44.2px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent">
                1.2K+
              </h1>
              <p className="font-chakra-petch text-[16px] md:text-[16px] lg:text-[18px] font-semibold leading-[23.4px] text-left">
                Sold
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="w-full lg:w-full relative lg:top-0 top-20 mx-auto">
        <Image width={1440} height={37} src="/hero-border-b.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

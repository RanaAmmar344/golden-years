
'use client';
import Image from 'next/image'
import image1 from '../../../public/misson-1.png'
import image5 from '../../../public/mission-5.png'


import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import { ARTIST } from '@/constants';

import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

const page = () => {
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
  
      updateScreenSize(); 
      window.addEventListener('resize', updateScreenSize); 
  
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
  
    
    const itemsToShow = screenSize === 'large' ? 4 : screenSize === 'medium' ? 3 : 1;
  
   
    const containerTransform = {
      transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
    };
  return (
    <div className='about-container w-full h-full mx-auto bg-black '>
         <div className='ourmission-container mx-auto w-full text-white bg-black lg:h-[800px]  overflow-hidden 'data-aos="zoom-in-left"> 
        <Navbar/>
        
        <div className='ourmisson-res my-20'>
           <div className='text-center flex flex-col items-center justify-center'>
         
            <h1 className='font-chakra text-[46px] font-bold leading-[55.2px] tracking-[0.02em] text-center bg-gradient-to-r from-[#FFDE04] to-[#E7A316] text-transparent  bg-clip-text'>About Us</h1>
            <p className='lg:max-w-xl max-w-sm  px-4'>Let’s learn everything about Golden Year project. How it was themed and ideate. What steps we took, and how these golden NFTs come to life. Also learn the purpose of this project.</p>
            {/* <Image
                        className=' cursor-pointer my-20 '
                        src='/connect-wallet.png'
                        alt=''
                         width={164}
                         height={47}
                        /> */}

<div className='  flex items-center justify-center my-20 w-[170px] h-[47px] '>

<Button  className="custom-btn  "> </Button>
    </div> 



           </div>
          <div className='flex items-center justify-center space-x-7 lg:space-x-16 my-6 '>
          <Image
           className=' relative bottom-[300px]  '
           src={image1}
           width={194.19}
           height={231.94}
           alt=''
           />
           <Image
           className=' lg:w-[154.33px] lg:h-[184.34px]  relative bottom-[150px] w-[89.95px] h-[106.45px]'
           src='/mission-2.png'
           width={154.33}
           height={184.34}
           alt=''
           />
           <Image
           className=' lg:w-[194.19px] lg:h-[231.94px] relative bottom-[40px] w-[113.86px] h-[136px]'
           src='/mission-3.png'
           width={194.19}
           height={231.94}
           alt=''
           />
           <Image
           className=' lg:w-[154.33px] lg:h-[184.34px] relative bottom-[150px] w-[89.95px] h-[106.45px]'
           src='/duck-4.png'
           width={154.33}
           height={184.34}
           alt=''
           />
           <Image
           className='relative bottom-[300px]'
           src={image5}
           width={194.19}
           height={231.94}
           alt=''
           />
          </div>
          <div className=' circlePosition w-[900px] h-[509px] bg-[rgba(255,188,0,1)] rounded-[100%] relative bottom-28 left-[600px]  translate-x-[-50%] translate-y-[50%] blur-[250px] '>


          </div>


        </div>


      
    </div>
    
    {/* ----------------------------------------golden-story----------------------------------------- */}
    <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"data-aos="zoom-out-right">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center space-y-3">
      <h1 className='font-chakra font-semibold text-[22px] leading-[28.6px] tracking-[0.01em] text-left'>Top Secret</h1>
      <h1 className=" sm:text-4xl font-chakra font-bold text-[46px] leading-[55.2px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent  ">Golden Story
        
      </h1>
      <p className="mb-8 leading-relaxed">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
      <div className="flex justify-center">
      <div className=" flex justify-between  space-x-10 mx-auto">
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
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" width={568} height={406} alt="hero" src="/golden-story-img.png"/>
    </div>
  </div>
</section>
    {/* ---------------------------------slider------------------------------------- */}
<div className='mx-auto overflow-hidden w-full h-[252px]  flex items-center justify-center border-t-2 border-b-2 border-yellow-500  bg-[rgba(37,37,37)] ' >
      <div className='flex items-center  justify-center space-x-7 lg:space-x-10  animate-slide   '>
         
          <Image
           className='  '
           src={image1}
           width={194.19}
           height={231.94}
           alt=''
           />
           <Image
           className=' '
           src='/mission-2.png'
           width={154.33}
           height={184.34}
           alt=''
           />
           <Image
           className=' '
           src='/mission-3.png'
           width={194.19}
           height={231.94}
           alt=''
           />
           <Image
           className=' '
           src='/duck-4.png'
           width={154.33}
           height={184.34}
           alt=''
           />
            <Image
           className=' w-[194.19px] h-[231.94px] '
           src='/mission-7.png'
           width={194.19}
           height={231.94}
           alt=''
           />
           <Image
           className=' '
           src="/mission-6.png"
           width={154.33}
           height={184.34}
           alt=''
           />
           <Image
           className=''
           src={image5}
           width={194.19}
           height={231.94}
           alt=''
           />
           {/* ----------------- */}
           <Image
           className=' '
           src='/mission-2.png'
           width={154.33}
           height={184.34}
           alt=''
           />
           <Image
           className='  '
           src={image1}
           width={194.19}
           height={231.94}
           alt=''
           />
             <Image
           className=' '
           src='/duck-4.png'
           width={154.33}
           height={184.34}
           alt=''
           />
           <Image
           className=' '
           src='/mission-3.png'
           width={194.19}
           height={231.94}
           alt=''
           />
            <Image
           className=' '
           src='/mission-6.png'
           width={154.33}
           height={184.34}
           alt=''
           />
        
            <Image
           className=' w-[194.19px] h-[231.94px] '
           src='/mission-7.png'
           width={194.19}
           height={231.94}
           alt=''
           />
          
           <Image
           className=''
           src={image5}
           width={194.19}
           height={231.94}
           alt=''
           />
          </div>
    


</div>
{/* -------------------------------------our-heros--------------------------------- */}
<div className='artist-container  mx-auto bg-cover bg-center mt-20 text-white'>
      <div className='flex items-center justify-center flex-col text-center pt-20'data-aos="zoom-in-up">
        <div>
            <h1 className='font-chakra font-semibold text-[18px] leading-[23.4px] text-center'>Behind the story</h1>
          <h1 className='font-chakra lg:text-[46px] text-[34px] font-bold leading-[55.2px] tracking-[0.02em] text-center'>
          Our Heroes
          </h1>
          <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-center lg:max-w-lg max-w-sm'>
          We have a team of super heroes who did this unbelievable work.
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
    {/* ----------------------------------cards-------------------------- */}
    <div className='container mx-auto flex items-center justify-center mt-20 flex-wrap md:space-x-2    'data-aos="flip-up">
        <div className=' w-[376.36px] h-[227px] lg:w-[572px] lg:h-[345px] bg-cover bg-center text-white lg:space-y-8 space-y-2 p-8 lg:mr-4 golden-tiers-card-2  '>
          <h1 className='font-chakra-petch lg:text-[34px] text-[22px] font-bold lg:leading-[44.2px] tracking-[0.02em]'>Subscribe For The Latest Updates!</h1>
          <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-left'>Lets keep in touch with us by subscribing to our newsletter. Stay up-to-date.</p>
          <div className="flex items-center justify-between space-x-2 border nav-border-2 lg:w-[492px] h-[55px] rounded-xl px-2">
            <input
              type="email"
              placeholder="Enter Email"
              className=" rounded-lg py-2 lg:px-4 bg-black"
            />
            <button className="bg-yellow-500 text-black font-semibold rounded-xl lg:w-[136px]  h-[45px] py-2 px-4 hover:bg-gradient-to-r from-[#FFDE04] to-[#E7A316] [background-image:linear-gradient(98.56deg,#FFDE04 0%,#E7A316 100%)]
 transition">
              Subscribe
            </button>
          </div>


        </div>
        {/* -----------------------------------------section-2------------------------------------------ */}
        <div className=' lg:mt-0 mt-6 md:mt-0  w-[376.36px] h-[227px] lg:w-[572px] lg:h-[345px] bg-cover bg-center text-white space-y-8 p-8 golden-tiers-card-1'>
          <h1 className='font-chakra-petch lg:text-[34px] text-[22px] font-bold leading-[44.2px] tracking-[0.02em]'>Find Us On!</h1>

          <div className="mt-20 ">

            <div className="flex items-center justify-between lg:space-x-0 space-x-4  lg:my-16">
            <div className="w-24 h-full animated-border ">
  <span className="border-icon w-full flex items-center justify-center ">
    <Image className="py-8" src="/discord-icon.png" width={38} height={30} alt="" />
  </span>
</div>
            <div className="w-24 h-full animated-border ">
  <span className="border-icon w-full flex items-center justify-center ">
    <Image className="py-7 " src="/instagram-icon.png" width={38} height={30} alt="" />
  </span>
</div>
            <div className="w-24 h-full animated-border ">
  <span className="border-icon w-full flex items-center justify-center ">
    <Image className="py-8" src="/twiter-icon.png" width={38} height={30} alt="" />
  </span>
</div>
            <div className="w-24 h-full animated-border ">
  <span className="border-icon w-full flex items-center justify-center ">
    <Image className="py-7" src="/facebook-icon.png" width={38} height={30} alt="" />
  </span>
</div>

             


            </div>
          </div>

        </div>



      </div>
<Footer/>
      
    </div>
  )
}

export default page

"use client"
import ArtistBehind from '@/components/ArtistBehind';
import CollectionTwo from '@/components/CollectionTwo';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Countdown from '@/components/Countdown';
import React, { useState } from 'react';
import Footer from '@/components/Footer';

const Page = () => {
    const [currentImage, setCurrentImage] = useState('/collection-sec-2.png'); 

    return (
        <div className='h-full w-full mx-auto bg-black  scroll-smooth '>
            <div className='collection-container'data-aos="fade-left">
                <Navbar />
                <div className='flex items-center justify-center flex-wrap text-white mt-20 '>
                    <div className='space-y-4 p-4 lg:mx-0 mx-auto lg:mr-10 lg:my-0 my-20'>
                        <h3 className='font-chakra text-[22px] font-semibold leading-[28.6px] tracking-[0.01em] text-left'>
                            Let’s begin with our
                        </h3>
                        <h1 className='font-chakra text-[58px] font-bold leading-[63.8px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent'>
                            Golden <br /> Collection
                        </h1>
                        <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-left max-w-sm'>
                            We have a huge collection of premium gold NFT’s made with love for our valuable customers
                        </p>
                        {/* Countdown Timer */}
                        <Countdown />
                    </div>
                    {/* --------------------------------section-2----------------------------- */}
                    <div className='hidden lg:flex flex-col items-center justify-end w-full lg:w-[670px] lg:h-[556px] overflow-hidden'>
                        <div className='w-full lg:w-[670px] lg:h-[386px] rounded-xl border flex items-center justify-center flex-col bg-[rgba(255,188,0,0.05)] backdrop-blur-sm relative lg:top-5 '>
                            {/* Default image */}
                            <div className=' relative bottom-40 w-[500px] h-[402px]  '> 
                                <Image
                                    className='w-full h-full object-cover bg-cover ' 
                                    src={currentImage}
                                    width={299}
                                    height={332}
                                    alt='Current Display'
                                />
                            </div>

                            <div className='flex items-center space-x-20 justify-center relative bottom-28 '>
                                {/* Image 2 */}
                                <div className='flex items-center justify-center flex-col w-[95px]  h-[135px] '
                                    onMouseEnter={() => setCurrentImage('/collection-sec-1.png')} 
                                    onMouseLeave={() => setCurrentImage('/collection-sec-2.png')} 
                                >
                                    <Image
                                        className=' w-full h-full object-cover'
                                        src='/collection-sec-1.png'
                                        width={88}
                                        height={86}
                                        alt='Image 2'
                                    />
                                    <h1 className='font-chakra text-[18px] font-semibold leading-[23.4px] text-center' >Golden Ball</h1>
                                </div>
                                {/* Image 3 */}
                                <div className='flex items-center justify-center flex-col w-[150px]  h-[120px] '
                                    onMouseEnter={() => setCurrentImage('/collection-sec-2.png')} 
                                    onMouseLeave={() => setCurrentImage('/collection-sec-2.png')} 
                                >
                                    <Image
                                        className=' w-full h-full object-cover'
                                        src='/collection-sec-2.png'
                                        width={88}
                                        height={86}
                                        alt='Image 3'
                                    />
                                    <h1 className='font-chakra text-[18px] font-semibold leading-[23.4px] text-center'>Gold Rubiks Cube</h1>
                                </div>
                                {/* Image 4 */}
                                <div className='flex items-center justify-center flex-col  w-[120px]  h-[135px] '
                                    onMouseEnter={() => setCurrentImage('/collection-sec-3.png')} 
                                    onMouseLeave={() => setCurrentImage('/collection-sec-2.png')} 
                                >
                                    <Image
                                        className=' w-full h-full object-cover'
                                        src='/collection-sec-3.png'
                                        width={88}
                                        height={86}
                                        alt='Image 4'
                                    />
                                    <h1 className='font-chakra text-[18px] font-semibold leading-[23.4px] text-center'>Rubber Duck</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CollectionTwo />
            <ArtistBehind />
            <Footer/>
        </div>
    );
};

export default Page;

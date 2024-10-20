import ArtistBehind from '@/components/ArtistBehind'
import CollectionTwo from '@/components/CollectionTwo'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className=' h-full w-full mx-auto bg-black '>
            <div className='collection-container'>  
            <Navbar />
            <div className='flex  items-center justify-center flex-wrap text-white mt-28 '>
                <div className=' space-y-4 p-4 lg:mx-0 mx-auto lg:mr-10 lg:my-0 my-20'>
                    <h3 className='font-chakra text-[22px] font-semibold leading-[28.6px] tracking-[0.01em] text-left'>Let’s begin with our</h3>
                    <h1 className='font-chakra text-[58px] font-bold leading-[63.8px] tracking-[0.02em] text-left bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent'>Golden  <br /> Collection</h1>
                    <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-left max-w-sm'>We have a huge collection of premium gold NFT’s made with love for our valuable customers</p>

                    <div className='collection-subtract  lg:w-[426px]  lg:h-[260px] bg-cover bg-center w-[377px] h-[230.09px] '>
                        <div className='flex flex-col items-center justify-center lg:space-y-3 space-y-1 '>
                            <div className='flex items-center my-4'>

                                <h1 className='mr-4'>Launch Date</h1>
                                <h1 className='nav-border-2 p-1 text-yellow-500 font-semibold lg:w-[162px] lg:h-[31px] text-center '>March 8, 2024.</h1>
                            </div>
                            <div className='flex items-center  space-x-8 border-b-2 pb-4 '>
                                <div className=' border-r border-neutral-600  flex items-center justify-center flex-col pr-10' >
                                    <h1 className='font-chakra text-[28px] font-semibold leading-[36.4px] tracking-[0.02em] text-left'>22</h1>
                                    <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-left'>days</p>

                                </div>
                                <div className='border-r border-neutral-600 flex items-center justify-center flex-col pr-10' >
                                    <h1 className='font-chakra text-[28px] font-semibold leading-[36.4px] tracking-[0.02em] text-left'>13</h1>
                                    <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-left'>hours</p>

                                </div>
                                <div className='border-r border-neutral-600 flex items-center justify-center flex-col pr-10' >
                                    <h1 className='font-chakra text-[28px] font-semibold leading-[36.4px] tracking-[0.02em] text-left'>54</h1>
                                    <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-left'>min</p>

                                </div>
                                <div className='flex items-center justify-center flex-col' >
                                    <h1 className='font-chakra text-[28px] font-semibold leading-[36.4px] tracking-[0.02em] text-left'>02</h1>
                                    <p className='font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-left'>sec</p>

                                </div>

                            </div>
                            <p className='font-chakra text-[18px] font-semibold leading-[23.4px] text-center'>Secure your Slot</p>
                            <Button className='bg-gradient-to-r text-black  from-[#FFDE04] to-[#E7A316] lg:w-[346px] w-[306.2px] h-[44.25px] lg:h-[50px] rounded-xl font-chakra text-[16px] font-bold leading-[20.8px] text-center'>Remind Me!</Button>

                        </div>

                    </div>

                </div>
                {/* --------------------------------section-2----------------------------- */}

                <div className=' hidden lg:flex flex-col items-center justify-end w-full lg:w-[670px] lg:h-[556px] lg:my-10 '>
                    <div className='w-full lg:w-[670px] lg:h-[386px] rounded-xl border flex items-center justify-center flex-col bg-[rgba(255,188,0,0.05)] backdrop-blur-sm '>

                        <Image
                        className='w-full lg:w-[299px] lg:h-[332px] h-full relative bottom-40'
                        src='/Midas-rubiks.png'
                        width={299}
                        height={332}
                        alt=''
                        />
                        <div className='flex items-center space-x-20 relative bottom-28'>
                          <div className='flex items-center justify-center flex-col'>
                          <Image
                          className='w-full h-full lg:w-[88px] lg:h-[86px]'
                            src='/collection-sec-1.png'
                            width={88}
                            height={86}
                            alt=''
                            />
                            <h1>Golden Ball</h1>
                          </div>
                          <div className='flex items-center justify-center flex-col'>
                          <Image
                          className='w-full h-full lg:w-[88px] lg:h-[86px]'
                            src='/collection-sec-2.png'
                            width={88}
                            height={86}
                            alt=''
                            />
                            <h1>Golden Ball</h1>
                          </div>
                          <div className='flex items-center justify-center flex-col'>
                          <Image
                          className='w-full h-full lg:w-[88px] lg:h-[86px]'
                            src='/collection-sec-3.png'
                            width={88}
                            height={86}
                            alt=''
                            />
                            <h1>Golden Ball</h1>
                          </div>
                          
                          

                        </div>


                    </div>

                </div>

            </div>
            </div>


            <CollectionTwo/>
            <ArtistBehind/>

        </div>
    )
}

export default page

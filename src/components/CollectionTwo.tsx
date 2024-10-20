import { COLLECTION_TWO } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { MdKeyboardArrowLeft } from "react-icons/md";


const CollectionTwo = () => {
  return (
    <div className='mx-auto w-full h-full flex items-center justify-center flex-col bg-black overflow-hidden  text-white'>
        <div className=' circlePosition w-[782px] h-[202px] bg-[rgba(255,188,0,1)] rounded-[100%] relative bottom-80 left-[480px]  translate-x-[-50%] translate-y-[50%] blur-[250px] '></div>
<div className='flex items-center justify-center flex-col relative bottom-28'>
    <h3 className='font-chakra text-[22px] font-semibold leading-[28.6px] tracking-[0.01em] text-center'>Golden Year</h3>
    <h1 className='font-chakra text-[46px] font-bold leading-[55.2px] tracking-[0.02em] text-center bg-gradient-to-r from-[#FFDE04] to-[#E7A316] bg-clip-text text-transparent'>Collection</h1>
    <p className='font-inter lg:text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-center'>Golden Year presents a unique 5 Tier based Golden NFT’s for our curated customers.</p>
</div>

{/* ---------------------------------section-2--------------------------------------- */}

<div className="space-y-6 lg:space-y-0 lg:flex">
  {/* nav-2 (top in mobile, original in large) */}
  <div className="tier-nav-2 lg:w-[376px] lg:h-[65px] w-[376px] h-[65px] order-1 lg:order-2 mx-auto">
    <ul className="flex items-center justify-evenly pt-5">
      <li className="font-chakra text-[16px] font-bold leading-[20.8px] hover:text-[rgba(255,222,4,1)] cursor-pointer">Show NFTs:</li>
      <li className="font-chakra text-[16px] font-bold leading-[20.8px] hover:text-[rgba(255,222,4,1)] cursor-pointer">All</li>
      <li className="font-chakra text-[16px] font-bold leading-[20.8px] hover:text-[rgba(255,222,4,1)] cursor-pointer">Minted</li>
      <li className="font-chakra text-[16px] font-bold leading-[20.8px] hover:text-[rgba(255,222,4,1)] cursor-pointer">Not Minted</li>
    </ul>
  </div>

  {/* nav-1 (bottom in mobile, original in large) */}
  <div className="tier-bg lg:w-[768px] lg:h-[65px] w-[456px] h-[65px] lg:mr-4 order-2 lg:order-none">
    <ul className="flex  items-center justify-evenly mt-2 lg:p-0 pt-3  relative px-8 lg:px-0  ">
      <li className="hover:bg-gradient-to-r from-[#FFDE04] to-[#E7A316] hover:text-black cursor-pointer text-white lg:w-[90px] w-full lg:h-[47px] h-[40px] text-center items-center justify-center flex rounded-xl font-chakra text-[16px] font-bold leading-[20.8px]">Tier 1</li>
      <li className="hover:bg-gradient-to-r from-[#FFDE04] to-[#E7A316] hover:text-black cursor-pointer text-white lg:w-[90px] w-full lg:h-[47px] h-[40px] text-center items-center justify-center flex rounded-xl font-chakra text-[16px] font-bold leading-[20.8px]">Tier 2</li>
      <li className="hover:bg-gradient-to-r from-[#FFDE04] to-[#E7A316] hover:text-black cursor-pointer text-white lg:w-[90px] w-full lg:h-[47px] h-[40px] text-center items-center justify-center flex rounded-xl font-chakra text-[16px] font-bold leading-[20.8px]">Tier 3</li>
      <li className="hover:bg-gradient-to-r from-[#FFDE04] to-[#E7A316] hover:text-black cursor-pointer text-white lg:w-[90px] w-full lg:h-[47px] h-[40px] text-center items-center justify-center flex rounded-xl font-chakra text-[16px] font-bold leading-[20.8px]">Tier 4</li>
      <li className="hover:bg-gradient-to-r from-[#FFDE04] to-[#E7A316] hover:text-black cursor-pointer text-white lg:w-[90px] w-full lg:h-[47px] h-[40px] text-center items-center justify-center flex rounded-xl font-chakra text-[16px] font-bold leading-[20.8px]">Tier 5</li>
      <li className="hover:bg-gradient-to-r from-[#FFDE04] to-[#E7A316] hover:text-black cursor-pointer text-white lg:w-[90px] w-full lg:h-[47px] h-[40px] text-center items-center justify-center lg:flex rounded-xl font-chakra text-[16px] font-bold leading-[20.8px] hidden ">Metaverse</li>
    </ul>
  </div>
</div>

       {/* --------------------------------grid---------------------------- */}

       <div className='grid grid-cols-2 lg:grid-cols-4 gap-4  mx-auto '>
  {COLLECTION_TWO.map((item, index) => (
    <div key={index} className='border rounded-xl lg:w-[278px] lg:h-[333px] w-[183px] h-[260px] cursor-pointer mt-10 '>
      <div>
        <Image
          className='lg:w-[276px] lg:h-[249px] w-full h-full'
          src={item.image}
          width={276}
          height={249}
          alt=''
        />
        <div className='flex items-center justify-between p-4 relative lg:bottom-64 bottom-[170px]'>
          <h1 className='border rounded-full backdrop-blur-sm font-inter text-[12px] font-semibold leading-[18px] text-left w-[69px] h-[26px] flex items-center justify-center'>
            Minted
          </h1>
          <Image src='/col-grid-icon.png' width={26} height={26} alt='' />
        </div>
        <div className='flex flex-col relative bottom-10 p-2'>
          <div className='flex items-center justify-between font-inter text-[14px] font-normal leading-[19.6px] tracking-[0.06em] text-center'>
            <h1>Tier 1</h1>
            <h1>Price</h1>
          </div>
          <div className='flex items-center justify-between font-chakra-petch lg:text-[18px] text-sm font-semibold leading-[23.4px] text-center'>
            <h1>BasketBall Hoop</h1>
            <div className='flex items-center space-x-2'>
              <Image src='/crypto.png' width={8.34} height={13.54} alt='' />
              <h1>1.03</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
<div className='flex items-center justify-between mx-auto my-5 space-x-4'>
  <Button className='border rounded-xl w-[83px] h-[40px] text-[16px] font-semibold'> <MdKeyboardArrowLeft />  Prev</Button>
  <h1 className='space-x-4'>1 2 3 4 .....</h1>
  <Button className='bg-[linear-gradient(98.56deg,#FFDE04_0%,#E7A316_100%)] hover:bg-yellow-200 text-black font-semibold rounded-xl w-[83px] h-[40px] text-[16px]
'>Next</Button>
</div>
      
    </div>
  )
}

export default CollectionTwo

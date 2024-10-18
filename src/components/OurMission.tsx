import React from 'react'
import Image from 'next/image'
import image1 from '../../public/misson-1.png'
import image5 from '../../public/mission-5.png'


const OurMission = () => {
  return (
    <div className='ourmission-container mx-auto w-full text-white bg-black lg:h-[800px]  overflow-hidden
 '>
        <div className='ourmisson-res'>
           <div className='text-center flex flex-col items-center justify-center'>
            <h1 className='font-chakra text-[22px] font-semibold leading-[28.6px] tracking-[0.01em] text-center'>Golden words</h1>
            <h1 className='font-chakra text-[46px] font-bold leading-[55.2px] tracking-[0.02em] text-center bg-gradient-to-r from-[#FFDE04] to-[#E7A316] text-transparent  bg-clip-text'>Our Mission</h1>
            <p className='lg:max-w-xl max-w-sm  px-4'>We created a small batch of different options to keep a low circulation of art for a stronger profit margin towards your initial investment. We could have made over 10,000 units, but why over-saturate the rarity of these beauties?</p>
            <Image
                        className=' cursor-pointer my-20 '
                        src='/connect-wallet.png'
                        alt=''
                         width={164}
                         height={47}
                        />
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
  )
}

export default OurMission

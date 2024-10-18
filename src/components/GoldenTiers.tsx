import Image from 'next/image'
import React from 'react'
import Footer from './Footer'

const GoldenTiers = () => {
  return (
    <div className='goldentiers-contaier mx-auto overflow-hidden  '>
        <div className='contienr mx-auto flex lg:items-center lg:justify-around flex-wrap py-28 w-full'>
            <div className='text-white space-y-4 goldtier-text-res '>
                <h1 className='font-[Chakra Petch] text-[34px] font-bold leading-[44.2px] tracking-[0.02em] text-left bg-clip-text text-transparent bg-gradient-to-r from-[#FFDE04] to-[#E7A316]'>5 Golden Tiers </h1>
                <p className='font-inter text-base font-normal leading-6 tracking-[0.04em] lg:text-left lg:max-w-md max-w-xs'>We created a small batch of different options to keep a low circulation of art for a stronger profit margin towards your initial investment. We could have made over 10,000 units, but why over-saturate the rarity of these beauties?</p>
            <Image
            src='/connect-wallet.png'
            width={164}
            height={47}
            alt=''
            />
            </div>
            <div>
                <Image className='lg:w-[497.79px] lg:h-[510.27px] w-[383px] lg:px-auto px-6 '
                src='/goldtier-img.png'
                width={497.79}
                height={510.27}
                alt=''
                />
            </div>

        </div>
        <div className='container mx-auto flex items-center justify-center flex-wrap  '>
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
            <div className=' lg:mt-0 mt-6 w-[376.36px] h-[227px] lg:w-[572px] lg:h-[345px] bg-cover bg-center text-white space-y-8 p-8 golden-tiers-card-1'>
                <h1 className='font-chakra-petch lg:text-[34px] text-[22px] font-bold leading-[44.2px] tracking-[0.02em]'>Find Us On!</h1>
              
                <div className="mt-20 ">
            
            <div className="flex items-center justify-between  lg:my-16">
                <div className='border-t-2 lg:w-20 border-b-2 flex items-center justify-center'>

              <Image className=' py-8' src="/discord-icon.png" width={38} height={30} alt="" />
                </div>
                <div className='border-t-2 lg:w-20 border-b-2 flex items-center justify-center'>

              <Image className=' py-7' src="/instagram-icon.png" width={38} height={30} alt="" />
                </div>
                <div className='border-t-2 lg:w-20 border-b-2 flex items-center justify-center'>

              <Image className=' py-7' src="/twiter-icon.png" width={38} height={30} alt="" />
                </div>
                <div className='border-t-2 lg:w-20 border-b-2 flex items-center justify-center'>

              <Image className=' py-7' src="/facebook-icon.png" width={38} height={30} alt="" />
                </div>
              
            </div>
          </div>

            </div>



        </div>
        <Footer/>
      
    </div>
  )
}

export default GoldenTiers

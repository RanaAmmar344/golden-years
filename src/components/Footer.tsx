import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <div className='footer-contener  mx-auto mt-20  p-4   w-full h-[495px] lg:w-[1160px] lg:h-[223px] bg-cover bg-center   '>
      <div className='flex items-center flex-col justify-center'>
        <Image
          className='w-[365] lg:w-[1087px] lg:h-[95px] lg:my-0 my-4'
          width={1087}
          height={95}
          src='/footer-text.png'
          alt=''
        />

        <div className='w-full '>
          <ul className='lg:flex flex-wrap text-center  lg:space-y-0 space-y-6  border-black border-b-2 items-center my-5 justify-center list-none  lg:space-x-20 font-Chakra_Petch text-[202x] lg:text-[28px] lg:font-semibold font-bold leading-[28px] lg:leading-[36.4px] tracking-[0.02em] lg:text-left'>
            <li className=' cursor-pointer'>Home</li>
            <li className=' cursor-pointer'>Collection</li>
            <li className=' cursor-pointer'>About</li>
            <li className=' cursor-pointer'>Privacy Policy</li>
            <li className=' cursor-pointer'>Terms & Conditions</li>
          </ul>
          <div className='flex  items-center justify-between mt-4 space-y-10 lg:space-y-0'>
            <p className='font-Inter text-[10px] lg:text-[12px] font-normal lg:leading-[16px]  tracking-[0.06em] text-left relative lg:top-0 top-5 w-full  '>
              2024 Golden Year. All Rights Reserved.
            </p>
            <Button className='bg-black text-white relative lg:right-[430px] lg:bottom-0 bottom-12 right-[70px] lg:top-0  rounded-lg lg:w-[120px] w-[168px] h-[30px] lg:mx-auto mx-0'>
              Social Links
            </Button>
            <p className='font-Inter text-[10px] lg:text-[12px] font-normal lg:leading-[16px]  tracking-[0.06em] lg:text-center text-right'>
              Disclaimer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

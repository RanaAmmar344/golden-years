import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <div className='footer-contener  mx-auto mt-20  p-4  max-w-full h-full lg:w-[1160px]  bg-center '>
      <div className='flex items-center flex-col justify-center'>
        <Image
          className=' w-[1087px]  h-full hidden lg:block md:block '
          width={1087}
          height={95}
          src='/footer-text.png'
          alt=''
        />
        <Image
        className='w-[365px]  h-[110px] my-4 block lg:hidden md:hidden'
        src='/footer-text-res.png'
        width={365}
        height={110}
        alt=''

        
        />

        <div className='w-full h-full  '>
          <ul className='lg:flex flex-wrap text-center md:flex md:items-center md:justify-between  lg:space-y-0 space-y-4 lg:pb-0 pb-1  border-black border-b-2 items-center my-5 justify-center list-none  lg:space-x-20 font-Chakra_Petch text-[22px] lg:text-[28px] lg:font-semibold font-bold leading-[28px] lg:leading-[36.4px] tracking-[0.02em] lg:text-left'>
            <li className=' cursor-pointer md:mt-3 lg:mt-0'>Home</li>
            <li className=' cursor-pointer'>Collection</li>
            <li className=' cursor-pointer'>About</li>
            <li className=' cursor-pointer'>Privacy Policy</li>
            <li className=' cursor-pointer'>Terms & Conditions</li>
          </ul>
         
          <div className='flex flex-col lg:flex-row  items-center lg:justify-between space-y-2 lg:space-y-0'>
  
  <p className='font-Inter text-xs lg:text-[12px] font-semibold lg:leading-[16px] lg:text-left text-center lg:order-1 order-3 w-full'>
    2024 Golden Year. All Rights Reserved.
  </p>

 
  <div className='lg:order-2 order-2'>
    <Button className='bg-black text-white rounded-[6px] w-[168px] h-[30px] mx-auto px-10'>
      Social Links
    </Button>
  </div>

  
  <p className='font-Inter text-xs lg:text-[12px] font-semibold lg:leading-[16px] tracking-[0.06em] lg:text-right text-center lg:order-3 order-1 w-full'>
    Disclaimer
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Footer;

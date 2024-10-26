"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import CuratedCollection from '@/components/CuratedCollection'
import GoldenTiers from '@/components/GoldenTiers'
import Hero from '@/components/Hero'
import OurMission from '@/components/OurMission'
import React from 'react'



const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []); 
  return (
    <>
   
    <Hero/>
    <OurMission/>
    <CuratedCollection/>
    <GoldenTiers/>
    
    
    </>
  )
}

export default page

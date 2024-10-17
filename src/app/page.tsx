import CuratedCollection from '@/components/CuratedCollection'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import OurMission from '@/components/OurMission'
import React from 'react'


const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <OurMission/>
    <CuratedCollection/>
    
    </>
  )
}

export default page

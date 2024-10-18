"use client"
import { CURATED_COLLECTION } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";


const CuratedCollection = () => {
    const [currentTopIndex, setCurrentTopIndex] = useState(0);
    const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
    const imagesPerRow = 5;

    const handleNext = () => {
        if (currentBottomIndex < CURATED_COLLECTION.length - 1) {
           
            if (currentTopIndex < imagesPerRow - 1) {
                setCurrentTopIndex(currentTopIndex + 1);
            } else {
                setCurrentTopIndex(0); 
                setCurrentBottomIndex(currentBottomIndex + 1);
            }
        }
    };

    const handlePrev = () => {
        if (currentBottomIndex > 0) {
           
            if (currentTopIndex > 0) {
                setCurrentTopIndex(currentTopIndex - 1);
            } else {
                setCurrentTopIndex(imagesPerRow - 1); 
                setCurrentBottomIndex(currentBottomIndex - 1);
            }
        }
    };

    return (
        <div className='curated-container text-white mx-auto'>
            <div className='blur-background  mx-auto p-10'>
                <h1 className='font-[Chakra Petch] text-[34px] font-bold leading-[44.2px] tracking-[0.02em] text-left cur-text '>Curated Collection</h1>
                <p className='font-[Inter] lg:text-[16px] font-normal leading-[24px] tracking-[0.04em] text-left cur-text lg:max-w-full max-w-sm '>Showing the curated selection of our top  Mintable NFTs.</p>
                <div className="relative right-14 top-10 card-carosel lg:max-w-4xl  mx-auto ">
                    <div className="flex flex-col space-y-4">
                       
                        <div className="flex transition-transform duration-300 ease-in-out">
                            {CURATED_COLLECTION.slice(currentTopIndex, currentTopIndex + imagesPerRow).map((src, index) => (
                                <img key={index} src={src.image} alt={`Image ${index + 1}`} className="lg:w-[203px] lg:h-[192px] w-[190.31px]  p-2" />
                            ))}
                        </div>
                        
                        <div className="flex transition-transform duration-300 ease-in-out">
                            {CURATED_COLLECTION.slice(currentBottomIndex, currentBottomIndex + imagesPerRow).map((src, index) => (
                                <img key={index} src={src.image} alt={`Image ${index + imagesPerRow + 1}`} className="lg:w-[203px] lg:h-[192px] w-[190.31px]  p-2" />
                            ))}
                        </div>
                    </div>
                   
                    <button
                        onClick={handlePrev}
                        className="absolute bottom-[400px] left-[900px] arrow-l-res   text-white px-3 py-2  opacity-75 hover:opacity-50 transition-opacity"
                        disabled={currentBottomIndex === 0}
                    >
                       <HiArrowLongLeft size={30} />

                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute bottom-[400px] left-[950px] arrow-r-res  text-white px-3 py-2  opacity-75 hover:opacity-50 transition-opacity"
                        disabled={currentBottomIndex >= CURATED_COLLECTION.length - imagesPerRow}
                    >
                       <HiArrowLongRight size={30} />
                    </button>
                </div>
             <div className='flex items-center justify-center my-20'>
             <Image
                
                src='/view-collection.png'
                width={164}
                height={47}
                alt=''
                />
             </div>
            </div>
        </div>
    );
}

export default CuratedCollection;

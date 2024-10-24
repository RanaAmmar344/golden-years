"use client"
import { CURATED_COLLECTION } from '@/constants';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const CuratedCollection = () => {
    const [currentTopIndex, setCurrentTopIndex] = useState(0);
    const [currentBottomIndex, setCurrentBottomIndex] = useState(0);
    const [imagesPerRow, setImagesPerRow] = useState(5); // Default for large screens

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) {  // For screens <= 640px (small screens)
                setImagesPerRow(2);
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {  // For md screens (768px - 1023px)
                setImagesPerRow(3); // 3 images per row for md screens
            } else {
                setImagesPerRow(5); // For larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set on initial render

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        if (currentBottomIndex < CURATED_COLLECTION.length - imagesPerRow) {
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
            <div className='blur-background mx-auto  w-[434px] '>
                <div className='relative lg:left-0 left-4  mx-auto w-full'>
                    <div className='relative lg:left-14 left-10 pt-20'>
                        <h1 className='font-[Chakra Petch] lg:text-[34px] text-[30px] font-bold leading-[44.2px] tracking-[0.02em] text-left cur-text'>
                            Curated Collection
                        </h1>
                        <p className='font-[Inter] lg:text-[16px] font-normal leading-[24px] tracking-[0.04em] text-left cur-text lg:max-w-full max-w-xs'>
                            Showing the curated selection of our top Mintable NFTs.
                        </p>
                    </div>

                    {/* Images Section */}
                    <div className="relative lg:right-0 top-10 md:mx-auto your-class-2    m-auto md:right-56 lg:max-w-4xl mx-auto w-full ">
                        <div className="flex flex-col mx-auto w-full   items-start justify-center md:items-center ">
                            {/* Top row of images */}
                            <div className="flex transition-transform duration-300 ease-in-out justify-center md:space-x-4">
                                {CURATED_COLLECTION.slice(currentTopIndex, currentTopIndex + imagesPerRow).map((src, index) => (
                                    <img key={index} src={src.image} alt={`Image ${index + 1}`} 
                                        className="lg:w-[203px] lg:h-[192px] w-[170.31px] p-2 
                                            md:w-[203px] md:h-[192px] 
                                            sm:w-[190.31px] sm:h-[180px] 
                                            xs:w-[80px] xs:h-[80px]" />
                                ))}
                            </div>

                            {/* Bottom row of images */}
                            <div className="flex transition-transform duration-300 ease-in-out justify-center md:space-x-4">
                                {CURATED_COLLECTION.slice(currentBottomIndex, currentBottomIndex + imagesPerRow).map((src, index) => (
                                    <img key={index} src={src.image} alt={`Image ${index + imagesPerRow + 1}`} 
                                        className="lg:w-[203px] lg:h-[192px] w-[170.31px] p-2 
                                            md:w-[203px] md:h-[192px] 
                                             sm:w-[190.31px] sm:h-[180px] 
                                            xs:w-[80px] xs:h-[80px]" />
                                ))}
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        <button
                            onClick={handlePrev}
                            className="absolute bottom-[400px] lg:left-[850px] md:left-[750px] arrow-l-res text-white px-3 py-2 opacity-75 hover:opacity-50 transition-opacity"
                            disabled={currentBottomIndex === 0}
                        >
                            <HiArrowLongLeft size={30} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute bottom-[400px] lg:left-[900px] md:left-[830px] arrow-r-res text-white px-3 py-2 opacity-75 hover:opacity-50 transition-opacity"
                            disabled={currentBottomIndex >= CURATED_COLLECTION.length - imagesPerRow}
                        >
                            <HiArrowLongRight size={30} />
                        </button>
                    </div>

                    {/* View Collection button */}
                    <div className='flex items-center justify-center my-20 md:mt-14 relative lg:right-0 md:right-56'>
                        <Image
                            src='/view-collection.png'
                            width={164}
                            height={47}
                            alt='View Collection'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CuratedCollection;

'use client';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const launchDate = new Date(Date.now() + 86400000);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const currentTime = new Date(); 
        const difference = launchDate.getTime() - currentTime.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: 22, // Fixed to show 22 days
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000); 

        return () => clearInterval(timer); 
    }, []);

    const isLaunched = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    return (
        <div className='collection-subtract lg:w-[426px] lg:h-[260px] bg-cover bg-center w-[377px] h-[230.09px]'>
            <div className='flex flex-col items-center justify-center lg:space-y-2'>
                <div className='flex items-center my-4'>
                    <h1 className='mr-4'>Launch Date</h1>
                    <h1 className='nav-border-2 p-1 text-yellow-500 font-semibold lg:w-[162px] lg:h-[31px] text-center'>
                        March 8, 2024
                    </h1>
                </div>
                <div className='grid grid-cols-4 divide-x border-b divide-gray-500 pb-4 lg:w-[346px] w-full'>
                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='font-chakra text-[28px] font-semibold '>{isLaunched ? "Launched!" : timeLeft.days}</h1>
                        <p className='font-inter text-[14px]'>days</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='font-chakra text-[28px] font-semibold '>{isLaunched ? "Launched!" : timeLeft.hours}</h1>
                        <p className='font-inter text-[14px]'>hours</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='font-chakra text-[28px] font-semibold '>{isLaunched ? "Launched!" : timeLeft.minutes}</h1>
                        <p className='font-inter text-[14px]'>min</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='font-chakra text-[28px] font-semibold '>{isLaunched ? "Launched!" : timeLeft.seconds}</h1>
                        <p className='font-inter text-[14px]'>sec</p>
                    </div>
                </div>
                <p className='font-chakra text-[18px] font-semibold text-center'>Secure your Slot</p>
                <Button className='bg-gradient-to-r text-black from-[#FFDE04] to-[#E7A316] lg:w-[346px] w-[306.2px] h-[44.25px] lg:h-[50px] rounded-xl font-chakra text-[16px] font-bold text-center'>
                    Remind Me!
                </Button>
            </div>
        </div>
    );
};

export default Countdown;

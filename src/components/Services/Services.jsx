'use client'
import React from 'react'
import { SlBadge } from "react-icons/sl";

import { PiPlantFill } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";

const Services = () => {
    return (
        <div id='services' className='flex flex-col justify-center items-center text-center w-[80%] mx-auto gap-14 py-20  '>
            <div className='flex flex-col gap-5 mx-auto items-center text-center'>
                <h1 className='text-5xl font-mono font-semibold text-[gray] underline-offset-4 underline'>Our Services</h1>
                <p className='text-2xl font-outfit w-[70%] font-semibold text-[gray]'> Explore our services designed to make your journey into the world of plants a delight, transforming your space with ease and expertise.</p>
            </div>

            <div className='grid xl:grid-cols-4 sm:grid-cols-2 mx-auto gap-8 grid-cols-1'>

                <div className='flex flex-col items-center text-center gap-5   shadow-xl shadow-greenlight  rounded-2xl py-6 px-3 bg-gradient-to-b from-[white] to-greenlight '>
                    <PiPlantFill className='text-5xl text-greenlight' />
                    <p className='text-3xl font-semibold text-yellowlight font-mono'>Large Assortment</p>
                    <p className='w-[90%] text-xl font-outfit text-[white] font-semibold'>We offer our customer more than 15,000 items of natural and artificial flower,trees and many accessories for history.</p>
                </div>

                <div className='flex flex-col items-center text-center gap-5  shadow-xl shadow-greenlight  rounded-2xl py-6 px-3 bg-gradient-to-b from-[white] to-greenlight '>
                    <SlBadge className='text-5xl text-greenlight'/>
                    <p className='text-3xl font-semibold text-yellowlight font-mono'>Quality</p>
                    <p className='w-[90%] font-outfit text-[white] text-xl font-semibold'>Every plant undergoes meticulous inspection, guaranteeing the delivery of only the healthiest and most vibrant green companions to your doorstep. Trust us for a flourishing and thriving addition to your space.</p>
                </div>

                <div className='flex flex-col items-center text-center gap-5  shadow-xl shadow-greenlight rounded-2xl py-6 px-3 bg-gradient-to-b from-[white] to-greenlight '>
                    <LiaShippingFastSolid className='text-5xl text-greenlight'/>
                    <p className='text-2xl font-semibold text-yellowlight font-mono w-[80%]'>Free & Fast Shipping</p>
                    <p className='w-[90%] font-outfit text-[white] text-xl font-semibold'>We will ship your goods after receipt of funds to the current account. Choose the most conventment from the offered delivery options.</p>
                </div>

                <div className='flex flex-col items-center text-center gap-5  shadow-xl shadow-greenlight  rounded-2xl py-6 px-3 bg-gradient-to-b from-[white] to-greenlight '>
                    <MdSupportAgent className='text-5xl text-greenlight'/>
                    <p className='text-2xl font-semibold text-yellowlight font-mono w-[80%]'>24/7 Customer Support</p>
                    <p className='w-[90%] font-outfit text-[white] text-xl font-semibold'>We work seven days a week and a lunch break. We will be glad to welcome you as our Buyer and thank you for your trust in us.</p>
                </div>

            </div>
        </div>
    )
}

export default Services;
'use client'
import React from 'react'
import { SlBadge } from "react-icons/sl";

import { PiPlantFill } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";

const Services = () => {
    return (
        <div id='services' className='flex flex-col justify-center items-center text-center w-[80%] mx-auto gap-14 py-20  '>
            <div className='flex flex-col gap-5 mx-auto items-center text-center relative '>
                <h1 className='text-4xl sm:text-5xl font-mono font-semibold text-[#FE8162]  '>Our Services</h1>
                <p className='sm:text-2xl font-outfit sm:w-[70%] font-semibold text-[gray]'> Explore our services designed to make your journey into the world of plants a delight, transforming your space with ease and expertise.</p>
            </div>

            <div className='grid xl:grid-cols-4 sm:grid-cols-2 mx-auto gap-12 grid-cols-1'>

                <div className='font-outfit  bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-greendark via-greenlight to-greendark rounded-tl-[30%] rounded-br-[30%] flex flex-col  items-center justify-center px-6 py-7  drop-shadow-md text-[#f3f5f7]'>
                    <PiPlantFill className='text-5xl  text-[#f3f5f7]' />
                    <p className='text-2xl text-yellowlight py-5'>Large Assortment</p>
                    <p className='text-base'>Discover a diverse selection of lush greenery and exotic plants, catering to all tastes. Our carefully curated assortment adds unique beauty to your space.</p>
                </div>
                <div className='font-outfit bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-greendark via-greenlight to-greendark rounded-tl-[30%] rounded-br-[30%] flex flex-col items-center justify-center px-6 py-7  drop-shadow-md text-[#f3f5f7]'>
                    <SlBadge className='text-5xl  text-[#f3f5f7]' />
                    <p className='text-2xl text-yellowlight py-5'>Quality</p>
                    <p className='text-base'>Elevate your surroundings with unparalleled plant quality. Sourced from trusted growers, each leaf, petal, and stem reflects our commitment to excellence.</p>
                </div>
                <div className='font-outfit bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-greendark via-greenlight to-greendark rounded-tl-[30%] rounded-br-[30%] flex flex-col items-center justify-center px-6 py-7  drop-shadow-md text-[#f3f5f7]'>
                    <LiaShippingFastSolid className='text-5xl  text-[#f3f5f7]' />
                    <p className='text-2xl text-yellowlight py-5'>Free & Fast Shipping</p>
                    <p className='text-base'>Enjoy seamless, complimentary shipping for all orders. With efficient logistics, your chosen plants will reach your doorstep swiftly and securely.</p>
                </div>
                <div className='font-outfit bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-greendark via-greenlight to-greendark rounded-tl-[30%] rounded-br-[30%] flex flex-col items-center justify-center px-6 py-7 drop-shadow-md text-[#f3f5f7]'>
                    <MdSupportAgent className='text-5xl  text-[#f3f5f7]' />
                    <p className='text-2xl text-yellowlight py-5'>24/7 Customer Support</p>
                    <p className='text-base'>Access dedicated support anytime. Our experts are ready to assist with plant care, selection advice, or post-purchase guidance, ensuring a thriving indoor garden journey.</p>
                </div>
                {/*
                <div className='flex flex-col items-center text-center gap-5  shadow-xl shadow-greenlight  rounded-2xl py-6 px-3 bg-gradient-to-b from-[white] to-greenlight '>
                    <SlBadge className='text-5xl text-greenlight'/>
                    <p className='text-3xl font-semibold text-gray-500 font-mono'>Quality</p>
                    <p className='w-[90%] font-outfit text-gray-200 text-xl font-semibold'>Every plant undergoes meticulous inspection, guaranteeing the delivery of only the healthiest and most vibrant green companions to your doorstep. Trust us for a flourishing and thriving addition to your space.</p>
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
            */}
            </div>
        </div>
    )
}

export default Services;
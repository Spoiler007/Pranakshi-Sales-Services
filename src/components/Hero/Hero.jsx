'use client'
import React from 'react'


// <video src={require('../../../public/Images/homevideo2.mp4')} autoPlay muted loop className=' video h-[85vh] mx-auto  xs:mx-auto m-auto relative -z-10 w-fit ' />

const Hero = () => {
    return (

        <div id='hero' className='flex flex-col  justify-center items-center '>
            <div className='absolute z-10 ml-[22%] mt-[130px] flex flex-col gap-40 '>

                <h1 className='sm:text-4xl text-2xl text-[white] font-semibold w-[60%]'>Grow your happiness at home – our plants are rooted in making your space blossom with joy !</h1>

                <button className='border-2 font-semibold bg-[transparent] w-fit py-2 text-[white] rounded-md px-3'>Working Demo</button>
            </div>
            <div className='w-full'>
                <iframe
                    src="https://player.cloudinary.com/embed/?public_id=ph4vtcceutnh6bpsaaut&cloud_name=daar1gcw1&player[muted]=true&player[autoplay]=true&player[loop]=true&source[autoplayOnScroll]=false&source[info][title]=Grow%20your%20happiness%20at%20home%20%E2%80%93%20our%20plants%20are%20rooted%20in%20making%20your%20space%20blossom%20with%20joy%20%21&source[info][subtitle]=Working%20Demo"

                    autoPlay
                    className='w-[100%] h-[550px] '
                    muted
                    loop
                    allowfullscreen
                    frameborder="0"
                ></iframe>
            </div>
        </div>

    )
}

export default Hero;
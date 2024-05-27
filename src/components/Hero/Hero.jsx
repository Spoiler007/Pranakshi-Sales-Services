'use client'
import React from 'react'


// <video src={require('../../../public/Images/homevideo2.mp4')} autoPlay muted loop className=' video h-[85vh] mx-auto  xs:mx-auto m-auto relative -z-10 w-fit ' />

const Hero = () => {
    return (

        // <div id='hero' className='flex xl:border-red-500 md:border-green-500 xm:border-blue-600 border flex-col w-fit mx-auto  justify-center scale-125 items-center xm:mt-36 mt-24'>
                <iframe
                    src="https://player.cloudinary.com/embed/?public_id=ph4vtcceutnh6bpsaaut&cloud_name=daar1gcw1&player[muted]=true&player[autoplay]=true&player[loop]=true&source[autoplayOnScroll]=false&source[info][title]=Grow%20your%20happiness%20at%20home%20%E2%80%93%20our%20plants%20are%20rooted%20in%20making%20your%20space%20blossom%20with%20joy%20%21&source[info][subtitle]=Working%20Demo"
                    autoPlay
                    // width="890"
                    // height="500"
            
                    className='rounded-2xl  xm:w-[430px] xm:h-[35vh]  w-[280px] h-[20vh] xl:w-[1010px] md:w-[700px]  xl:h-[70vh]     flex xl:border-red-500 md:border-green-500 xm:border-blue-600 border flex-col  mx-auto  justify-center scale-125 items-center xm:mt-36 mt-24'
                    muted
                    loop
                    allowfullscreen
                    frameborder="0"
                ></iframe>     
        // </div>

    )
}

export default Hero;
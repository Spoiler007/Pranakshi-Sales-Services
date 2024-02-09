'use client'
import React from 'react'


// <video src={require('../../../public/Images/homevideo2.mp4')} autoPlay muted loop className=' video h-[85vh] mx-auto  xs:mx-auto m-auto relative -z-10 w-fit ' />

const Hero = () => {
    return (

        <div id='hero' className='flex  flex-col  justify-center items-center mt-28'>
            {/* <div className='absolute z-10 ml-[22%] mt-[130px] flex flex-col gap-40 '>

                <h1 className='sm:text-4xl text-2xl text-[white] font-semibold w-[60%]'>Grow your happiness at home – our plants are rooted in making your space blossom with joy !</h1>

                <button className='border-2 font-semibold bg-[transparent] w-fit py-2 text-[white] rounded-md px-3'>Working Demo</button>
            </div> */}
            {/* <div className='xl:w-[59%] w-[100%] flex flex-col mx-auto items-center'> */}
                <iframe
                    src="https://player.cloudinary.com/embed/?public_id=ph4vtcceutnh6bpsaaut&cloud_name=daar1gcw1&player[muted]=true&player[autoplay]=true&player[loop]=true&source[autoplayOnScroll]=false&source[info][title]=Grow%20your%20happiness%20at%20home%20%E2%80%93%20our%20plants%20are%20rooted%20in%20making%20your%20space%20blossom%20with%20joy%20%21&source[info][subtitle]=Working%20Demo"
                    autoPlay
                    // width="890"
                    // height="500"
            
                    className='mx-auto w-[300px] sm:w-[1100px] h-[20vh] sm:h-[80vh]'
                    muted
                    loop
                    allowfullscreen
                    frameborder="0"
                ></iframe>

            {/* </div> */}
        </div>

    )
}

export default Hero;
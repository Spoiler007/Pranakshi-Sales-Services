'use client'
import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
const Hero2 = () => {
    return (
        <div id='hero' className=' bg-gradient-to-b from-gray-300  to-white py-24'>
            <div className='grid grid-cols-2 py-[80px] gap-10 w-[80%] mx-auto border-gray-400 border px-10 '>
                <div className='flex flex-col '>
                    <h1 className='text-3xl font-semibold font-outfit text-green-800'>Grow your happiness at home – our plants are rooted in making your space blossom with joy !</h1>
                    <img src='/Images/home2.png' alt='hero' className=' ' />

                </div>
                <div className='flex flex-col gap-12'>
                    <p className='font-mono text-gray-500 font-semibold '>Transform your living spaces into flourishing green sanctuaries with our carefully curated selection of plants. Elevate your home with the timeless beauty of nature, as each plant we offer is a testament to the transformative power of greenery. Whether you're seeking the air-purifying qualities of leafy companions or the aesthetic charm of botanical decor, our website is your gateway to a world where every room becomes a vibrant oasis.</p>
                    {/* <p className='font-mono text-gray-500 font-semibold '>Transform your living spaces into flourishing green sanctuaries with our carefully curated selection of plants. Elevate your home with the timeless beauty of nature, as each plant we offer is a testament to the transformative power of greenery. Whether you're seeking the air-purifying qualities of leafy companions or the aesthetic charm of botanical decor, our website is your gateway to a world where every room becomes a vibrant oasis.</p>
                
                   <p className='font-outfit w-[90%]'>Explore the possibilities of creating a home that not only captivates the eye but also rejuvenates the spirit. Welcome to a place where the art of living is intertwined with the artistry of nature – because a house truly becomes a home when it blooms with the vitality of plants.</p>*/}
                </div>
            </div>


            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem itemId={1}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
                    <MDBCarouselCaption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    )
}

export default Hero2;
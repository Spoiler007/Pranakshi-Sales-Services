'use client'
import Image from 'next/image'
import './category.css'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Category = () => {


    return (
        <div className='w-[80%] gap-7 mx-auto flex flex-col py-20' id='category'>
            <h1 className='mx-auto text-3xl sm:text-5xl font-semibold text-[#FE8162] '>Category</h1>
            <p className='sm:w-[70%] text-center font-semibold text-gray-500 mx-auto sm:text-2xl font-outfit'>Explore our curated plant categories, tailored for indoor and outdoor gardening enthusiasts. Delight in 'Green Haven's' selection, featuring lush options for both interior sanctuaries and outdoor spaces.</p>
            {/* <div className='grid xl:grid-cols-3 mx-auto gap-10 grid-cols-1 w-[95%]'> */}
            <div className='flex mx-auto w-[95%] sm:scale-100 scale-110 gap-10'>
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className='relative mx-auto xl:w-[1050px] xl:h-[450px]  h-[250px] w-[95%] ' >
                            <Image
                                src="/Images/garden0.jpg"
                                fill={true}
                                alt={"Background Image"}
                                className='rounded-xl '
                            />
                            <h1 className='z-10 absolute bg-yellowlight rounded-br-lg sm:px-10 px-5 sm:text-xl py-1 font-semibold text-white'>Gardening</h1>
                            <div className='w-[80%] pt-5'
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 1,
                                }}
                            >
                                <Link href="/gardening" className='text-white underline-offset-1 underline text-xl sm:text-2xl  font-mono font-semibold'>Level up your gardening game and turn your green space into a thriving masterpiece!</Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='relative mx-auto xl:w-[1050px] xl:h-[450px]  w-[95%] h-[250px]' >
                            <Image
                                src="/Images/indoor.webp"
                                fill={true}
                                alt={"Background Image"}
                                className='rounded-xl'
                            />
                            <h1 className='z-10 absolute bg-yellowlight rounded-br-lg px-5 sm:px-10 sm:text-xl py-1 font-semibold text-white'>Indoor</h1>
                            <div className='w-[80%]'
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 1,
                                }}
                            >
                                <Link href="/indoor" className='text-white underline-offset-1 underline text-xl sm:text-2xl font-mono font-semibold'>Transform your space with indoor plant magic – master the art of plant care!</Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className='relative mx-auto xl:w-[1050px] xl:h-[450px]  w-[95%] h-[250px]'>
                            <Image
                                src="/Images/outdoor0.jpg"
                                fill={true}
                                alt={"Background Image"}
                                className='rounded-xl'
                            />
                            <h1 className='z-10 absolute bg-yellowlight rounded-br-lg px-5 sm:px-10 py-1 font-semibold sm:text-xl text-white'>Outdoor</h1>
                            <div className='w-[80%]'
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 1,
                                }}
                            >
                                <Link href="/outdoor" className='text-white text-xl sm:text-2xl underline-offset-1 underline font-mono font-semibold'>Step into the world of outdoor plant enchantment and unleash the secret to vibrant gardens</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Category;
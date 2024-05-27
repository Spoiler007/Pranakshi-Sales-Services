import React from 'react'
import Marquee from "react-fast-marquee";



const Testimonial = () => {
    return (
        <div id='testimonials' className=''>
            <div className='w-[80%] mx-auto text-center justify-center flex flex-col gap-5 mt-10'>
                <p className='font-outfit font-bold text-3xl sm:text-5xl'>Hear from our<span className='text-[#FE8162] '> Satisfied</span> clients</p>
                <p className='text-[#767575] font-inter mx-auto sm:w-[50%] text-center text-xl font-semibold'>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</p>
            </div>

            <Marquee direction='right'>
                <div className=" flex w-[1700px] ml-10 gap-10 my-4 mt-20">

                    <div className='border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10 '>
                        <p className='font-inter text-[#1c1c1c] text-lg font-semibold   w-[80%]'> 
                        "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity."
                        </p>

                        <div className='flex items-center gap-3'>
                            <img src='/Images/prof1.webp' alt='' className='w-[50px]' />
                            <div className='flex flex-col font-inter'>
                                <p className='text-lg font-semibold'>David</p>
                                <p className='text-[#767575] font-semibold'> Freelancer</p>
                            </div>
                        </div>
                    </div>

                    <div className=' border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10'>
                        <p className='font-inter text-[#1c1c1c] text-lg font-semibold  w-[90%]'> "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks. "</p>

                        <div className='flex items-center gap-3'>
                            <img src='/Images/prof2.webp' alt='' className='w-[50px]' />
                            <div className='flex flex-col font-inter'>
                                <p className='text-lg font-semibold'>  Alex</p>
                                <p className='text-[#767575] font-semibold'>  IT Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className=' border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10'>
                        <p className='font-inter text-[#1c1c1c] text-lg font-semibold w-[90%]'> "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
                        </p>

                        <div className='flex items-center gap-3'>
                            <img src='/Images/prof3.webp' alt='' className='w-[50px]' />
                            <div className='flex flex-col font-inter'>
                                <p className='text-lg font-semibold'>Emily</p>
                                <p className='text-[#767575] font-semibold'> Art Director</p>
                            </div>
                        </div>
                    </div>

                    <div className=' border-2 border-[#EDEDFA] rounded-3xl flex flex-col w-1/4 px-5  py-10 gap-10'>
                        <p className='font-inter text-[#1c1c1c] text-lg font-semibold  w-[90%]'> "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.
                        </p>

                        <div className='flex items-center gap-3'>
                            <img src='/Images/prof4.webp' alt='' className='w-[50px]' />
                            <div className='flex flex-col font-inter'>
                                <p className='text-lg font-semibold'> Sarah</p>
                                <p className='text-[#767575] font-semibold'>Project Manager</p>
                            </div>
                        </div>
                    </div>



                </div>
            </Marquee>
        </div>
    )
}

export default Testimonial;
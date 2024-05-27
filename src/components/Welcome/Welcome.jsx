"use client"
import React from 'react'

const Welcome = () => {
    return (
        <div className='flex flex-col mt-24' id='home'>
                <img src='/Images/welcome.png' alt='welcome' className='xm:w-[300px] w-[200px] mx-auto'/>
            <div className='flex flex-col text-center w-[80%] sm:w-[70%] py-5 mx-auto  gap-3'>
                {/* <h1 className='text-3xl font-bold font-mono text-green-600'> Welcome</h1> */}
                <section className='flex flex-col xm:flex-row mx-auto gap-5'>
                    <p className='text-xl font-mono text-[#FE8162] font-bold'>to</p>
                    <h1 className='text-3xl sm:text-5xl font-bold font-mono bg-gradient-to-t from-greenlight to-yellowlight inline-block text-transparent bg-clip-text'> Pranakshi Sales & Services</h1>
                </section>
                <h1 className='text-xl font-outfit text-[#FE8162] '> - your premier destination for plant sales and services.</h1>
                <p className='text-xl font-outfit text-justify'>Step into a world of green enchantment with us, As your dedicated botanical partner, we offer an extensive range of vibrant and healthy plants for sale, carefully curated to breathe life into your spaces. Whether you're looking to transform your home, office, or commercial establishment, our diverse selection caters to every green aspiration. Beyond providing top-tier plants, we take pride in offering personalized maintenance plans, ensuring your botanical investments thrive over time.</p>           
                <img src='/Images/home2.png' alt='home'className='sm:scale-100 scale-125'/>
                <p className='text-xl font-outfit text-justify'> Our team of passionate plant experts is committed to not only delivering exceptional service but also sharing their expertise to make your plant journey enjoyable and sustainable. From creative landscaping ideas to in-depth care tips, we're here to support your green vision. At "Pranakshi Sales & Services", we don't just sell plants; we cultivate lasting relationships and help you create lush, inviting landscapes. Join us in making your world greener and more vibrant. Explore the possibilities with us, where every plant is a promise of a flourishing future.</p>
            </div>


            {/* <div className='flex flex-col text-center mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>What are indoor plants ?</h1>
                        <p className='text-xl  font-outfit'>
                            Indoor plants are plants that grow indoors. There are a variety of tropical plants, like palms, that thrive in indoor environments.
                        </p>
            </div> */}

        </div>
    )
}

export default Welcome;
'use client'
import Image from 'next/image'
import './category.css'
import Link from 'next/link'



const Category = () => {
    

    return (
        <div className='w-[80%] gap-7 mx-auto flex flex-col py-20' id='category'>
            <h1 className='mx-auto  text-5xl font-semibold text-greendark'>Category</h1>
            <p className='w-[70%] text-center font-semibold text-gray-500 mx-auto text-2xl font-outfit'>Explore our curated plant categories, tailored for indoor and outdoor gardening enthusiasts. Delight in 'Green Haven's' selection, featuring lush options for both interior sanctuaries and outdoor spaces.</p>
            <div className='grid xl:grid-cols-3 mx-auto gap-10 grid-cols-1 w-[95%]'>
                <div className='relative xl:w-[350px] mx-auto xl:h-[200px]  w-[95%] h-[300px] ' >
                    <Image
                        src="/Images/gardening.jpeg"
                        fill={true}
                        alt={"Background Image"}
                        className=''
                    />
                    <h1 className='z-10 absolute bg-yellowlight rounded-br-lg px-5 py-1 font-semibold text-white'>Gardening</h1>
                    <div className='w-[80%] pt-5'
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }}
                    >
                    <Link href="/gardening" className='text-white  underline-offset-1 underline text-xl  font-mono font-semibold'>Level up your gardening game and turn your green space into a thriving masterpiece!</Link>
                    </div>
                </div>

                <div className='relative mx-auto xl:w-[350px] xl:h-[200px] w-[95%] h-[300px]' >
                    <Image
                        src="/Images/indoor.webp"
                        fill={true}
                        alt={"Background Image"}
                    />
                    <h1 className='z-10 absolute bg-yellowlight rounded-br-lg px-5 py-1 font-semibold text-white'>Indoor</h1>
                    <div className='w-[80%]'
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }}
                    >
                     <Link href="/indoor" className='text-white underline-offset-1 underline text-xl font-mono font-semibold'>Transform your space with indoor plant magic – master the art of plant care!</Link>
                    </div>
                </div>

                <div className='relative mx-auto xl:w-[350px] xl:h-[200px] w-[95%] h-[300px]'>
                    <Image
                        src="/Images/outdoor.jpeg"
                        fill={true}
                        alt={"Background Image"}
                    />
                    <h1 className='z-10 absolute bg-yellowlight rounded-br-lg px-5 py-1 font-semibold text-white'>Outdoor</h1>
                    <div className='w-[80%]'
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }}
                    >
                        <Link href="/outdoor" className='text-white text-xl underline-offset-1 underline font-mono font-semibold'>Step into the world of outdoor plant enchantment and unleash the secret to vibrant gardens</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Category;
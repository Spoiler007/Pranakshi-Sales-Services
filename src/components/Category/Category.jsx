'use client'
import Image from 'next/image'
import './category.css'
import Link from 'next/link'



const Category = () => {
    

    return (
        <div className='w-[80%] mx-auto flex flex-col py-20'>
            <h1 className='mx-auto py-10 text-4xl font-semibold text-gray-500'>Category</h1>
            <div className='grid xl:grid-cols-3 mx-auto gap-10 grid-cols-1 w-[95%]'>
                <div className='relative xl:w-[350px] mx-auto xl:h-[200px]  xm:w-[90%] xm:h-[300px]' >
                    <Image
                        src="/Images/gardening.jpeg"
                        fill={true}
                        alt={"Background Image"}
                        className=''
                    />
                    <h1 className='z-10 absolute  bg-yellowlight px-5 py-1 font-semibold text-white'>Gardening</h1>
                    <div className='w-[80%] pt-5'
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                           
                        }}
                    >
                    <Link href="/gardening" className='text-white  underline-offset-1 underline text-xl font-mono font-semibold'>Level up your gardening game and turn your green space into a thriving masterpiece!</Link>
                    </div>
                </div>


                <div className='relative mx-auto xl:w-[350px] xl:h-[200px] w-[90%] h-[300px]' >
                    <Image
                        src="/Images/indoor.webp"
                        fill={true}
                        alt={"Background Image"}
                    />
                    <h1 className='z-10 absolute bg-yellowlight px-5 py-1 font-semibold text-white'>Indoor</h1>
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


                <div className='relative mx-auto xl:w-[350px] xl:h-[200px] w-[90%] h-[300px]'>
                    <Image
                        src="/Images/outdoor.jpeg"
                        fill={true}
                        alt={"Background Image"}
                    />
                    <h1 className='z-10 absolute bg-yellowlight px-5 py-1 font-semibold text-white'>Outdoor</h1>
                    <div className='w-[80%] pt-5'
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }}
                    >
                          <Link href="/outdoor" className='text-white underline-offset-1 underline text-xl font-mono font-semibold'>Unlock outdoor plant magic – elevate your green paradise!</Link>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Category;
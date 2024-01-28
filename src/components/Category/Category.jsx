'use client'
import Image from 'next/image'
import './category.css'




const Category = () => {

    return (
        <div className='w-[80%] mx-auto flex flex-col py-20'>
            <h1 className='mx-auto py-10 text-4xl font-semibold text-gray-500'>Category</h1>
            <div className='grid xl:grid-cols-3 mx-auto gap-10 grid-cols-1'>
                <div className='relative xl:w-[350px] xl:h-[200px] w-[700px] h-[300px]' >
                    <Image
                        src="/Images/gardening.jpeg"
                        fill={true}
                        alt={"Background Image"}
                        className=''
                    />
                    <h1 className='z-10 absolute  bg-yellowlight px-5 py-1 font-semibold text-white'>Gardening</h1>
                    <div className=''
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }}
                    >
                        <a href='' className='text-white'> Gardening</a>
                    </div>
                </div>


                <div className='relative w-[350px] h-[200px]' >
                    <Image
                        src="/Images/indoor.webp"
                        fill={true}
                        alt={"Background Image"}
                    />
                    <h1 className='z-10 absolute bg-yellowlight px-5 py-1 font-semibold text-white'>Indoor</h1>
                    <div className=''
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }}
                    >
                        <a href='' className='text-white'> Gardening</a>
                    </div>
                </div>


                <div className='relative w-[350px] h-[200px]' >
                    <Image
                        src="/Images/outdoor.jpeg"
                        fill={true}
                        alt={"Background Image"}
                    />
                    <h1 className='z-10 absolute bg-yellowlight px-5 py-1 font-semibold text-white'>Outdoor</h1>
                    <div className=''
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }}
                    >
                        <a href='' className='text-white'> Gardening</a>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Category;
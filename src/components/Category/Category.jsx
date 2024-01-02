'use client'
import Image from 'next/image'
import './category.css'


const Category = () => {
    return (
        <div className='flex flex-col mx-auto py-24 w-[80%] justify-center text-center items-center' id='category '>
        <h1 className='mx-auto py-10 text-[gray] text-4xl  font-semibold underline underline-offset-4 '>Category</h1>
            <div className='grid xl:grid-cols-3 grid-cols-1   gap-10 mx-auto '>

                <div className='garden mx-auto w-[800px] rounded-lg '>
                    <div className='px-5 flex flex-col gap-16 py-3 '>
                        <p className='text-[white] border-2 w-fit  bg-greenlight px-3 rounded-xl'>Gardening</p>
                        <a href='https://en.wikipedia.org/wiki/Soil_quality' target='__blank' className='text-[white]  w-[80%] hover:underline-offset-3 hover:underline hover:text-[white]  font-semibold text-xl'><a href='#'>How to choose your high quality soil for your gardens.</a></a>
                    </div>
                </div>


                <div className='indoor mx-auto w-[720px]'>
                   
                    <div className='px-5 flex flex-col gap-16 py-3  '>
                        <p className='text-[white]  border-2 w-fit  bg-greenlight px-3 rounded-xl'>Indoor</p>
                        <a href='#' target='__blank' className='text-[white] w-[80%] hover:underline-offset-3 hover:underline hover:text-[white]   font-semibold text-xl'>What would be the best way for you to maintain indoor plants.</a>
                    </div>
                </div>


                <div className='outdoor mx-auto w-[700px]'>
                  
                    <div className='flex flex-col px-5  gap-16 py-3 '>
                        <p className='text-[white]  border-2 w-fit bg-greenlight px-3 rounded-xl'>Outdoor</p>
                        <a href='#' target='__blank' className='text-[white]  w-[80%] hover:underline-offset-3 hover:underline hover:text-[white]  ml-3 font-semibold text-xl'>What are the strategies for outdoor plant care.</a>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Category;
'use client'
import React from 'react'
// import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { FcAlarmClock } from "react-icons/fc";
import { CgCalendarDates } from "react-icons/cg";
import { ImLocation2 } from "react-icons/im";


const Location = () => {
    return (       
            <div className='grid xl:grid-cols-2 grid-cols-1  w-[80%] mx-auto gap-5 py-20'>
                <div className='flex flex-col mb-10 items-center shadow-inner shadow-gray-600 rounded-xl py-3 px-6'>
                    <div className='flex flex-col gap-5 py-10'>
                        <div className='grid sm:grid-cols-2 grid-cols-1 pb-5 items-center mx-auto sm:w-[70%]'>
                            <img src='Images/logo3.png' alt='logo3' className='xs:w-[180px] w-[100px] mx-auto' />
                            <h1 className='xs:text-2xl text-xl text-[gray]  font-semibold '>Pranakshi Sales & Services</h1>
                        </div>
                        <p className='flex items-center text-gray-500 font-semibold font-outfit text-xl gap-2'><FcAlarmClock className='text-4xl'/><span className='text-greenlight '>Open : </span> 9:00 Am - 4:30 PM </p>
                        <p className='flex items-center text-gray-500 font-semibold font-outfit text-xl gap-2'><CgCalendarDates className='text-4xl text-[brown]' /><span className='text-greenlight'>Close Date : </span> Sunday</p>
                        <p className='flex text-center text-gray-500 font-semibold font-outfit text-xl gap-2'><ImLocation2  className='sm:text-4xl text-[60px] text-[brown]'/><span className='ml-4'> B-3/0/3 , Balaka Abasan , Action Area 1 , New Town , Kolkata-700156</span></p>
                    </div>
                </div>

                <div className=" flex w-[100%] ">
                    <iframe
                        className="w-[100%] h-[300px] xl:h-[420px]"
                        frameBorder="0"
                        scrolling="no"
                        title='Pranakshi Sales & Services'
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=900&amp;hl=en&amp;q=B-3/0/3%20Balaka%20Abasan%20Action%20Area%20%201,%20New%20Town%20%20Kolkata%20%20700156+(Pranakshi%20Sales%20&amp;%20Services)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                    <a href="https://www.maps.ie/population/" target="_blank" rel="noreferrer">
                    Calculate population in area
                    </a>
                    </iframe>
                </div>
            </div>
        
    )
}

export default Location;
'use client'
import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

const StickyChat = () => {
  return (
    <div className='w-[50px] sm:ml-[95%] ml-[85%] z-20 fixed mt-[250px] flex animate-pulse '>
  {  /*  <a href='' className='justify-end flex text-center items-center gap-2 mx-auto'><BsWhatsapp />Chat </a>*/}
 <a href='https://wa.me/918336833666' className='justify-end flex text-center items-center gap-2 mx-auto'>
 <img src='Images/whatsapp.png' alt=''/>
 </a>
  
    </div>
  )
}

export default StickyChat
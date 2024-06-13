"use client"
import React from 'react'

const Stickysocial = () => {
  return (
    <div className=' md:-ml-[2%] -ml-[6%] z-20 fixed mt-[200px] flex w-fit rounded-tr-xl rounded-br-xl shadow-2xl xl:hidden bg-green-400 pr-1'>
         <div className="flex  gap-8 py-3">
                    {/* <h1 className="text-xl  text-yellowlight font-semibold underline underline-offset-2">Follow</h1> */}
                    <div className="flex font-outfit flex-col pl-7 gap-5 justify-center items-center pb-2">
                        <a href="https://youtube.com/@PranakshiSalesService?si=rHi1YtfelV9Nny9A" target="__blank"  className="flex items-center gap-2"><img src="Images/icons8-youtube-64.png" className="w-[40px]"/></a>
                        <a href="https://www.facebook.com/profile.php?id=61554907633405" target="__blank"  className="flex items-center gap-2"><img src="Images/icons8-facebook-64.png" className="w-[40px]"/></a>
                        <a href="https://www.instagram.com/pranakshi.sales?utm_source=qr&igsh=MWlyczhhb3RsMTdpcQ==" target="__blank"  className="flex items-center gap-2"><img src="Images/icons8-instagram-64.png" className="w-[40px]"/></a>

                    </div>
                </div>
   
    
      </div>
  )
}

export default Stickysocial
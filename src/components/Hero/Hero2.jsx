"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero2 = () => {
    var settings = {
        // dots:true,
        infinite:true,
        speed:500,
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2800,
    };
  return (
   <Slider  {...settings}  className="mt-24 w-[90%]  md:w-[80%]  mx-auto">
    
<div><img src="/Images/heroslide3.png" alt="" className="sm:h-[70vh] xm:h-[40vh] h-[30vh] sm:w-full mx-auto rounded-xl"/></div>
<div><img src="/Images/heroslide2.png" alt="" className="sm:h-[70vh] xm:h-[40vh] h-[30vh] sm:w-full mx-auto rounded-xl"/></div>
<div><img src="/Images/heroslide3.png" alt="" className="sm:h-[70vh] xm:h-[40vh] h-[30vh] sm:w-full mx-auto rounded-xl"/></div>
<div><img src="/Images/heroslide4.png" alt="" className="sm:h-[70vh] xm:h-[40vh] h-[30vh] sm:w-full mx-auto rounded-xl"/></div>
<div><img src="/Images/heroslide1.png" alt="" className="sm:h-[70vh] xm:h-[40vh] h-[30vh] sm:w-full mx-auto rounded-xl"/></div>
   </Slider>
  )
};
export default Hero2;


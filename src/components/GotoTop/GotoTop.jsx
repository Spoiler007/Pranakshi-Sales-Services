"use client"
import React,{useState,useEffect} from 'react'
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpDoubleFill } from "react-icons/ri";


{/*const GotoTop = ()=>{
    return (
        <div>
        <h1>Hello, world!</h1>
        <div style={{ marginTop: "15vh" }} />
        <ScrollToTop smooth  top="20"/>
      </div>
    );
}

export default GotoTop;*/}


const GotoTop = () => {

const [backtoTop, setbacktoTop] = useState(false);

useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
            setbacktoTop(true)
        }
        else{
            setbacktoTop(false)
        }
    },[])

})
const scrollup = () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
return (
    
 <div className='flex items-center text-center my-auto  icon-style justify-center  fixed  cursor-pointer text-white mt-[82vh]   ml-[3%]  z-20' onClick={scrollup}>
   {backtoTop && (
   <img src='Images/uparrow.png' alt='' className='z-20 border-transparent w-20 h-20 border-none  my-auto '/>

   )}
   
   </div>
   
  )
};



export default GotoTop;



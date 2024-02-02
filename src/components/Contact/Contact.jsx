
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";
import { TfiInstagram } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io5";



const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const Contact = () => {

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);

    const handleClick = (value) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    return (
        <div id="contact" className="grid grid-cols-1  gap-10 py-10 w-[85%] mx-auto  xl:grid-cols-3">

            <div className="shadow-2xl shadow-gray-500 rounded-xl px-3  flex flex-col gap-5  bg-gradient-to-b from-[#A7C957] to-[#6A994E] sm:w-[430px] w-[300px] mx-auto">
                <div className='grid grid-cols-1 mx-auto text-center  items-center'>
                    <img src='Images/logo.png' alt='logo3' className='w-[120px] mx-auto  rounded-xl' />
                    <h1 className='text-2xl text-greendark font-semibold'>Pranakshi Sales & Services</h1>
                </div>
                <p className="w-[80%] font-outfit mx-auto pb-5 text-white  text-xl text-justify font-semibold "> <span className="text-yellowlight">Pranakshi Sales & Services </span>is a leading sales and service company specializing in premium plants. We provide tailored solutions, from expert plant sales to comprehensive maintenance services. <br/><br/> Our team is committed to creating thriving green environments, whether for homes, offices, or commercial spaces. Experience excellence in plant care with Pranakshi Sales & Services .</p>
            </div>

            <div className="flex flex-col gap-8 items-center">
                <h1 className="text-xl font-semibold text-[gray] font-outfit underline underline-offset-2">Importants Links</h1>
                <div className="flex font-outfit flex-col gap-5 justify-center items-center text-[gray] font-semibold ">
                    <a href="#hero" id="hero" className="hover:underline-offset-4 hover:underline hover:text-yellowlight"> Home</a>
                    <a href="#services" id="services" className="hover:underline-offset-4 hover:underline hover:text-yellowlight"> Services</a>
                    <a href="#gallery" id="gallery" className="hover:underline-offset-4 hover:underline hover:text-yellowlight">Gallery</a>
                    <a href="#category" id="category" className="hover:underline-offset-4 hover:underline hover:text-yellowlight">Category</a>
                    <a href="#contact" id="contact" className="hover:underline-offset-4 hover:underline hover:text-yellowlight">Contact Us</a>
                </div>

                <div className="flex flex-col font-outfit gap-8 mt-10">
                    <h1 className="text-xl text-[gray] font-semibold underline underline-offset-2">Social Media</h1>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <a href="https://youtube.com/@PranakshiSalesService?si=rHi1YtfelV9Nny9A" target="__blank"  className="flex items-center gap-2"><img src="Images/icons8-youtube-64.png" className="w-[40px]"/><span className="text-gray-500 font-semibold">You tube</span></a>
                        <a href="https://www.facebook.com/profile.php?id=61554907633405" target="__blank"  className="flex items-center gap-2"><img src="Images/icons8-facebook-64.png" className="w-[40px]"/><span className="text-gray-500 font-semibold">Facebook</span></a>
                        <a href="https://www.instagram.com/pranakshi.sales?utm_source=qr&igsh=MWlyczhhb3RsMTdpcQ==" target="__blank"  className="flex items-center gap-2"><img src="Images/icons8-instagram-64.png" className="w-[40px]"/><span className="text-gray-500 font-semibold">Instagram</span></a>

                    </div>
                </div>
            </div>

            <div className="flex flex-col font-outfit items-center ">
                <h1 className="text-xl  text-[gray] font-bold text-transparent  bg-clip-text bg-gradient-to-r from-yellowlight to-yellowdark">Give Your valuable Feedback</h1>
                <form className="flex pt-8 pb-14 flex-col border gap-4 rounded-xl mt-5 px-5 bg-gradient-to-b from-[#A7C957] to-[#6A994E]"
                 action="https://formspree.io/f/xgegobdw"
                 method="POST"
                >
                    <div className="flex flex-col gap-5 mx-auto ">
                        <h2 className="text-xl text-white font-semibold text-center">Rate Our services </h2>
                        <div className="flex flex-row">
                            {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={24}
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                        color={
                                            (hoverValue || currentValue) > index
                                                ? colors.orange
                                                : colors.white
                                        }
                                        className="mr-7 cursor-pointer text-white"
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <input placeholder="Name" type="text" name="name" required className=" py-2 px-2 rounded-md  bg-gray-200 placeholder:font-outfit" />
                    <input placeholder="Email" type="email" name="email" required className="py-2 px-2 rounded-md bg-gray-200" />
                    <textarea name="message" placeholder="What's your experience?" required className="bg-gray-200 rounded-md pr-10 pl-2 pt-3 pb-10 h-min-[250px] w-[300px] text-gray-800 border-none placeholder:font-outfit" />
                    <button type="submit" className=" mt-5 bg-transparent shadow-inner shadow-gray-500 text-gray-200 text-xl font-semibold py-2 rounded-md w-[300px] hover:animate-bounce hover:shadow-gray-500">Submit</button>
                </form>
            </div>


        </div>





    )
}


export default Contact;
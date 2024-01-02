'use client'
import React, { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import { PiPhoneCall } from "react-icons/pi";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const menus = [{
        name: "Home",
        link: "#hero"
    },
    {
        name: "Services",
        link: "#services"
    },

    
    {
        name: "Gallery",
        link: "#gallery"
    },

    {
        name:"Category",
        link:"#category"
    },

    {
        name: "Contact Us",
        link: "#contact"
    },
    ]

    const handleNavbarOpen = () => {
        setNavbarOpen(true)
    }
    const handleNavbarClose = () => {
        setNavbarOpen(false)
    }

    return (
        <>

            {navbarOpen ?
                <div className="flex flex-col w-full py-4 px-6 bg-[white] fixed  z-30 overflow-hidden"
                    key={"open"}
                    initial={{ height: "auto" }}
                    animate={{ height: "100vh" }}
                    exit={{ height: 'auto' }}
                    transition={{
                        ease: "linear"
                    }}
                >
                    <div className="flex items-center justify-between  ">
                        <div className="flex items-center justify-center font-bold text-lg "><img src="/Images/logo.png" alt="logo" height={100} width={100} className="mr-2" /> <span className="md:inline sm:text-3xl text-center text-greenlight">Pranakshi Sales & Services</span></div>
                        <div className="md:hidden text-4xl text-red-800 cursor-pointer" onClick={handleNavbarClose}><FiX /></div>
                    </div>
                    <div className="flex flex-col items-center  z-20 justify-center gap-10 text-xl font-semibold text-primaryblack pt-8">
                        {
                            menus.map((menu) => {
                                return <a key={menu.name} href={menu.link}>{menu.name}</a>
                            })
                        }
                        <div className="bg-white text-greenlight rounded-xl px-5 py-2 font-bold font-outfit border-2 border-yellowlight hover:border-2 flex gap-2 items-center"> <PiPhoneCall className="text-3xl text-greendark "/> 24/7 Support</div>
                    </div>
                </div>
                :
                <div className=" sticky border-none shadow-gray-500 z-50 w-full bg-gradient-to-b from-greendark to-greenlight shadow-2xl  flex items-center justify-between py-4 px-16 " key={"close"}>

                    <div className="logo flex items-center justify-center font-bold text-lg font-[sans-serif]"><img src="/Images/logo.png" alt="logo" height={100} width={100} className="mr-2 rounded-xl" /> <span className="md:inline"></span></div>
                    <div className="2xl:gap-8 text-md font-semibold text-[white] items-center hidden md:flex">
                        {
                            menus.map((menu) => {
                                return <a key={menu.name} href={menu.link} className="flex items-center gap-6 mr-10 cursor-pointer hover:text-yellowlight hover:underline-offset-2 hover:underline duration-500 ease-in-out transition-all"><div className="h-1 w-1 bg-gray-300"></div>{menu.name}</a>
                            })
                        }
                        <div className="bg-[white]  rounded-xl px-5 py-2 font-bold font-outfit border-2 border-[white] text-greenlight hover:border-yellowlight hover:border-2 flex gap-2 items-center"> <PiPhoneCall className="text-2xl text-greenlight "/> 24/7 Support</div>
                    </div>
                    <div className="md:hidden text-3xl cursor-pointer" onClick={handleNavbarOpen}><FiMenu /></div>
                </div>}

        </>
    )
}

export default Navbar;
'use client'
import React, { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import { PiPhoneCall } from "react-icons/pi";
import useScrollPosition from "../Services/UseScrollPosition";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const menus = [{
        name: "Home",
        link: "#home"
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
        name: "Category",
        link: "#category"
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
    const scrollY = useScrollPosition();
    const [lastScrollY, setLastScrollY] = useState(scrollY);
    const [showNav, setShowNav] = useState(true);
    useEffect(() => {
        // console.log(scrollY,lastScrollY,showNav)
        if (scrollY < 20 || lastScrollY > scrollY)
            setShowNav(true);
        else if (scrollY > 30) {
            setShowNav(false);
        }
        else {
            setShowNav(false);
        }
        setLastScrollY(scrollY)
    }, [scrollY])
    return (
        <>
            {navbarOpen ?
                <div className="flex flex-col w-full py-4 px-6 fixed border bg-black/90 z-50 overflow-hidden"
                    key={"open"}
                    initial={{ height: "auto" }}
                    animate={{ height: "100vh" }}
                    exit={{ height: 'auto' }}
                    transition={{
                        ease: "linear"
                    }}
                >
                    <div className="flex items-center justify-between  ">
                        <div className="flex items-center justify-center font-bold text-lg "><img src="/Images/logo2.png" alt="logo" height={100} width={130} className="mr-2" /> <span className="md:inline font-mono xs:text-2xl text-center text-greenlight mt-10">Sales & Services</span></div>
                        <div className="xl:hidden mb-16  text-4xl border border-yellowlight rounded-sm text-red-800 cursor-pointer" onClick={handleNavbarClose}><FiX /></div>
                    </div>
                    <div className="flex flex-col items-center z-20 justify-center gap-10 text-2xl font-semibold  pt-8">
                        {
                            menus.map((menu) => {
                                return <a key={menu.name} href={menu.link} className="border-none rounded-lg w-full py-2 bg-black/50 hover:text-yellowlight font-mono text-white text-center mx-auto">{menu.name}</a>
                            })
                        }
                        <div className=" text-greenlight backdrop-blur-sm bg-black/20 rounded-xl px-5 py-2 font-semibold  border-2 border-yellowlight font-mono hover:border-2 flex gap-2 items-center"> <PiPhoneCall className="text-4xl text-greenlight " /> 24/7 Support</div>
                    </div>
                </div>
                :
                <div className={` ${!showNav ? "-translate-y-20" : "translate-y-0"} transition-all duration-500 fixed border-none shadow-gray-500 z-50 w-full bg-gradient-to-b from-greendark to-greenlight shadow-2xl  flex items-center justify-between py-3 px-5 sm:px-16`} key={"close"}>
                    <div className="logo flex  items-center justify-center font-semibold text-lg font-outfit"><img src="/Images/logo2.png" alt="logo" height={90} width={130} className="mr-2 border bg-white/70 backdrop-blur-sm  rounded-xl" /> <span className="md:inline font-mono text-yellowlight mt-10 sm:flex hidden text-2xl">Sales & Services</span></div>
                    <div className="2xl:gap-8 text-xl font-semibold text-[white] items-center hidden xl:flex">
                        {
                            menus.map((menu) => {
                                return <a key={menu.name} href={menu.link} className="flex items-center gap-6 mr-10 cursor-pointer font-mono hover:text-yellowlight  duration-500 ease-in-out transition-all">{menu.name}</a>
                            })
                        }
                        <div className="bg-white/30 backdrop-blur-sm  rounded-xl px-3 py-2 md:px-5 md:py-2 font-bold font-mono border-2 border-[white]  text-white hover:border-yellowlight hover:border-2 flex gap-2 items-center"> <PiPhoneCall className="text-3xl text-white " /> 24/7 Support</div>
                    </div>
                    <div className="xl:hidden text-yellowlight text-4xl border px-1 rounded-md cursor-pointer" onClick={handleNavbarOpen}><FiMenu /></div>
                </div>}

        </>
    )
}

export default Navbar;
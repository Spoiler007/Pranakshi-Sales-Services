'use client'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Hero2 from '@/components/Hero/Hero2'
import Hero3 from '@/components/Hero/Hero3'
import Services from '@/components/Services/Services'
import Gallery from '@/components/[Galery]/Gallery'
import Category from '@/components/Category/Category'
import Testimonial from '@/components/Testimonial/Tesimonial'
import Location from '@/components/Location/Location'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import GotoTop from '@/components/GotoTop/GotoTop'
import { BrowserRouter } from 'react-router-dom';
import { useRef } from 'react'
import { Stick } from 'next/font/google'
import StickyChat from '@/components/StickyChat/StickyChat'
import Welcome from '@/components/Welcome/Welcome'

export default function Home() {

  return (
    <main className="  ">
    <Navbar id="navbar" />
    {/* <Hero /> */}
    <Hero2/>
    <Welcome/>
    <Services />
    <StickyChat/>
    <Gallery />
    <Category />
    <Testimonial />
    <Location />
    <Contact />
    <GotoTop />
    <Footer />    

    </main>
  )
}

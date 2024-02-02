"use client"
import React from 'react'
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Location from '@/components/Location/Location';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import GotoTop from '@/components/GotoTop/GotoTop';
import StickyChat from '@/components/StickyChat/StickyChat';
import Stickysocial from '@/components/Stickysocial/Stickysocial';
import { motion, Variants } from "framer-motion";









const Gardening = () => {
    return (
        <div>
            <GotoTop />
            <StickyChat />
            <Stickysocial />
            <div className=' '>
                <div className="flex border-2 px-10 shadow-gray-200 rounded-bl-2xl rounded-br-2xl shadow-xl w-[85%] bg-gray-100 mx-auto gap-8  text-center items-center justify-between">
                    <div className=' flex py-2'>

                        <img src='/Images/logo2.png' alt='logo' className='md:w-[170px] w-[100px]' />

                        <h1 className='text-center my-auto md:text-2xl mt-8 md:mt-14 font-semibold text-gray-500'> Sales<span className='text-greenlight text-4xl'> & </span>Services</h1>
                    </div>
                    <div className=' hidden xl:block'>
                        <div className="flex xl:visible gap-5 justify-center items-center">
                            <h1 className="text-xl text-[gray]  font-semibold underline underline-offset-2">Follow us on :</h1>
                            <a href="https://youtube.com/@PranakshiSalesService?si=rHi1YtfelV9Nny9A" target="__blank" className="flex items-center gap-2"><img src="Images/icons8-youtube-64.png" className="w-[40px]" /><span className="text-gray-500 font-semibold">You tube</span></a>
                            <a href="https://www.facebook.com/profile.php?id=61554907633405" target="__blank" className="flex items-center gap-2"><img src="Images/icons8-facebook-64.png" className="w-[40px]" /><span className="text-gray-500 font-semibold">Facebook</span></a>
                            <a href="https://www.instagram.com/pranakshi.sales?utm_source=qr&igsh=MWlyczhhb3RsMTdpcQ==" target="__blank" className="flex items-center gap-2"><img src="Images/icons8-instagram-64.png" className="w-[40px]" /><span className="text-gray-500 font-semibold">Instagram</span></a>

                        </div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col gap-10 py-10'>
                <h1 className='mx-auto md:text-6xl text-3xl font-bold text-greenlight '>Gardening</h1>
                <p className='w-[70%] mx-auto text-center md:text-2xl font-semibold font-mono text-gray-600'>Starting to build a garden can be both exciting and daunting. It all starts with a sad patch of grass and as you keep growing, it transforms into a beautiful garden with flowers, fruit trees, veggie beds, raised beds, and garden art.</p>
                <img src='/Images/garden1.webp' alt='garden1' className='w-[90%] max-h-[70vh] mx-auto' />
            </div>
            <div className='w-[70%] mx-auto gap-14 flex flex-col py-10'>
                <h1 className='w-[70%] text-center mx-auto text-xl font-semibold text-greendark font-outfit'>Garden beautifies your home and is an excellent way to spend your time after work. If you’re new to gardening, start building your garden with these easy to follow steps:</h1>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>1.Pick the right spot</h1>
                    <p className='text-xl font-outfit'>It is always better to take small steps towards big wins. Pick a small space to start building your garden.

                        Ensure that the space you choose receives 5-6 hours of direct sunlight. Avoid a space that receives strong winds, it could knock over your young and budding plants. The wind will also keep pollinators from doing their job.

                        Some crops such as lettuce and spinach, and other greens will grow well in your partially sunny spots, but sun-loving plants like tomatoes and peppers need as much light as possible.</p>
                </div>

                <motion.div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>2.Pick a type</h1>
                    <div  className='flex gap-10 xl:flex-row flex-col-reverse '>
                        <p className='text-xl font-outfit'>Once you identify the right spot for your garden, the next step in your journey to gardening is choosing what type of garden you want.
                            Will it be a beautiful sea full of flowers, a gorgeous spread of herbs, a kitchen garden for the budding chef in you, or a nutritious vegetable garden to keep you fit and healthy? No matter what you choose, take small steps to paint the picture of your perfect garden.
                            <br /> A location near your house will make it easier for you to tend your plot regularly and will also make it convenient to run out and pick what you need for a meal.
                        </p>
                        <img src='/Images/garden2.webp' alt=' garden2' className='h-[200px] md:h-[100%]' />
                    </div>
                </motion.div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>3.Work on the Soil</h1>
                    <p className='text-xl font-outfit'>Plants always benefit from the nutrient-rich gardening soil. Take your first step by examining the texture of your soil, it should be easily shovelled and crumble in your hands.

                        If your soil is hard and the texture is clay-like, it will be difficult for all the plants to grow their roots. If you have rocky soil, till the soil and remove the rocks.

                        Improving the quality of the soil is not as hard a task as you think, it comes with great benefits. Add organic compost made of tea compost, vegetable peels, to your soil to improve its quality.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>4.Grab basic gardening tools</h1>
                    <p className='text-xl font-outfit'>   Once you have a plan in place, you’ll need some basic gardening tools to get started. We’re listing a handful of tools required for gardening.</p>
                    <div className='flex gap-10 xl:flex-row flex-col-reverse '>
                        <p className='text-xl font-outfit'>
                            <span className='font-bold'> You will require:</span>
                            <br />
                            <span className='font-bold'>(i).</span> The must-haves: One tool that every gardener should own is a pair of pruning scissors. You will be using these to cut back plants and bushes, as well as maintain their health by cutting off the dead parts of these plants.
                            <br />
                            <span className='font-bold'>(ii).</span> Tools for digging: You will need a couple of tools for digging and preparing your soil to start planting your greens. You will need a spade, a trowel, and a garden fork. The spade and trowel are used to dig the holes for your plants, whereas the garden fork is used for breaking the large clumps of soil or for clearing the roots of old plants and weeds.
                            <br />
                            <span className='font-bold'>(iii).</span> Tools for watering: The best tools for generously watering your garden are garden hose (pipe) and a watering can. Garden hose is perfect for bigger tasks such as watering trees and larger areas. For delicate and small plants, a watering can is preferred. Your young plants cannot take the high pressure and will thank you for the gentle sprinkling.
                            <br />
                            <span className='font-bold'>(iv).</span> Tools for weeding: To tackle the weed problem and get rid of these unwanted plants, you will require a forked trowel and a gardening knife. These two handy tools will allow you to keep the invading plants away.
                        </p>
                        <img src='/Images/garden3.webp' alt='garden3' className='h-[50%] xl:my-auto' />
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>5.Pick your plants</h1>
                    <p className='text-xl font-outfit'>Now comes the most exciting part of the gardening process - picking your greens. Before you rush to a conclusion on what to grow in your garden, take some time to study the plants.

                        Some plants like direct sunlight while others prefer shade. You can check your plant seed package for this information. Picking the plants that are native to your area can make your life very easy, especially when you are about to become a plant parent.

                        You can also take a peek at your neighbours garden to see what plants are growing well in their garden or read our guide on which are the best vegetables to grow by month.

                        These methods will give you a fair idea of what type of plants will thrive in your garden.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>6.Plan It Out</h1>
                    <p className='text-xl font-outfit'>Before getting your hands dirty and starting to plant your greens, plan it out!
                        <br />
                        <span className='font-bold underline-offset-2 underline'> Planning:</span>  Map out where each and every plant will go, paying detailed attention to spacing. Like us, plants also need their own space. If you place young plants too close to each other, their growth can get affected, they will be more prone to diseases, or may simply die.
                        <br />
                        <span className='font-bold underline-offset-2 underline'> Labelling:</span>  We are all forgetful in nature. To ensure that you know what is planted where in your garden and to identify these plants, take some time to make small labels and place them alongside your plants. You can even get creative with your labels and come up with some unique ways to label your plants.
                        <br />
                        <span className='font-bold underline-offset-2 underline'> Organizing:</span>  Another great piece of advice for beginners is to make their own garden scrapbook and chart out the progress of the garden. You can add sketches, pictures, labels, and notes to keep a track of how each plant progressed in different parts of your garden and then make a progress report to understand the nature of these plants.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>7.Garden Beds</h1>
                    <div className='flex gap-10 xl:flex-row flex-col '>
                        <p className='text-xl font-outfit'>Once you’re done with the planning, decide on the type and the size of the garden beds. Raised beds are attractive to look at and raised beds make it easier for you to work in your garden.

                            Gardening in blocks or beds is more convenient than gardening in single rows. Beds should be 3-4 feet across, narrow enough for you to reach the centre from either side. Beds should be about 8-10 feet long, so you can easily move around without stepping on the planting area.

                            Start small and give each plant its own space to grow. The seeds and transplants are small but fully-grown plants can get big, making the area overcrowded, making it difficult for the plants to thrive.

                            Within the garden beds, place your greens in rows or a grid pattern. The goal is to minimize walkways and maximize the growing space. You also save time and money by only adding fertilizer and soil amendments to the planting area.</p>
                        <img src='/Images/garden4.jpg' alt='garden4' />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>8.Seeds or plants ?</h1>
                    <div className='flex gap-10 xl:flex-row flex-col '>
                        <p className='text-xl font-outfit'>
                            Most garden vegetables can be directly seeded where they are to grow—lettuce, beans, carrots, beets, chard, spinach, peas, cucumbers, and squash. Things that take longer to produce an edible fruit do better with a head start. Purchase transplants for tomatoes, peppers, eggplant, and melons or start your own indoors 6 to 8 weeks before planting them outside.
                        </p>
                        <img src='/Images/garden10.jpg' alt='garden4' className='h-[100%] xl:h-[250px]' />
                    </div>
                </div>


                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>9.Plant With Care</h1>
                    <p className='text-xl font-outfit'>Once you’re done with the groundwork, you need to jump in and start planting. Most of our seed packets come with basic planting instructions. Give it a try and you’ll master the art of planting as you go.
                        <br /><br />
                        <span className='font-bold'>  Rules of thumb for planting in your garden:</span>
                        <br />

                        <span className='font-bold'>(i).</span> Plant seeds about 3-4 times as deep as the diameter of the seed unless otherwise written on the packaging of the seed. Cover the seeds with the soil and water them thoroughly ensuring that you do not expose the seeds.
                        <br />
                        <span className='font-bold'>(ii).</span> For transplanting the young plants growing in the pot or containers to their final spot, dig up a hole twice as wide as the root ball. Fluff up the soil and add some organic fertilizer to boost the growth of your plant. Place the root ball and cover the roots entirely with the soil. Water your plants gently after transplantation.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>10.Water your plants right</h1>
                    <div className='flex gap-10 xl:flex-row flex-col '>
                        <p className='text-xl font-outfit'>The goal of watering your plants is to give them enough water to sustain but overwatering your plants can lead to waterlogging which can damage your plants.

                            The best way to water your plants is slowly, allowing the water to reach deep into the soil. Ideally, the soil should get moist at about 3-4 inches beneath the surface. Plants need more water in the summer heat. Read our guide on watering plants in summer for optimal plant growth in summer.

                            Plants at different stages of development also require different dosages of water. Young plants will need to be watered every day to encourage the growth of the plant and healthy roots, whereas developed plants will need to be watered once every 2-3 days, depending on the weather conditions.</p>

                        <img src='/Images/garden8.jpg' alt='garden9' />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>11.Nurture with organic fertilizers</h1>
                    <p className='text-xl font-outfit'>There's an old saying, “The fertilizer is the gardener's best friend.” Make your own organic fertilizer to give your plants the extra boost to grow.

                        Start with compost - organic material that can be added to your garden to help your plants grow. This can be anything from tea bags, grounded coffee, lawn trimmings, crushed fruit peels, etc. Adding these organic fertilizers to your soil will help it to retain moisture, stimulate good bacteria growth, and fight pests and diseases. It will also help you to reduce your carbon footprint.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold font-mono'>12.Keep pests and diseases away</h1>
                    <div className='flex gap-10 xl:flex-row flex-col '>
                        <p className='text-xl font-outfit'>Pests and diseases are more attracted to plants that are stressed or have some deficiency. If you have healthy, well-nourished plants, your pest and disease problems should be lesser. If your plants get infected, chances are there's an organic solution.

                            It's easy to make up homemade pest control for the yard and garden that use plant compounds and soap to knock out the bugs feasting on your plants. Mix up some neem oil, water and a few drops of dish soap. Shake it well and spray it on your plants once every two weeks to keep the pests away!</p>
                        <img src='/Images/garden9.jpg' alt='garden9' />
                    </div>
                </div>


            </div>

            {/* <Location /> */}
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default Gardening;
"use client"
import React from 'react'
import Navbar from '@/components/Navbar/Navbar';
import Location from '@/components/Location/Location';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import GotoTop from '@/components/GotoTop/GotoTop';
import StickyChat from '@/components/StickyChat/StickyChat';
import Stickysocial from '@/components/Stickysocial/Stickysocial';
const Indoor = () => {
    return (
        <div>
            {/* <Navbar/> */}

            <GotoTop />
            <StickyChat />
            <Stickysocial />
            <div className="flex border-2 px-10 shadow-gray-200 rounded-bl-2xl rounded-br-2xl shadow-xl w-[85%]  mx-auto gap-8  text-center items-center justify-between">
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

            <div>
                <div className='flex flex-col gap-10 py-10'>
                    <h1 className='mx-auto md:text-6xl text-3xl font-bold text-greenlight '>Indoor Plants</h1>
                    <p className='w-[80%]  mx-auto text-center md:text-xl font-semibold font-outfit text-gray-600'>Indoor plants should be an essential component of every interior design. Greenery brightens up indoor spaces and is known to have mood-boosting qualities.

                        Indoor plants are popular because they are relatively easy to take care of, provide health benefits and can be used in a variety of indoor decor themes.
                        <br /> <br />
                        <img src='/Images/ind1.jpeg' alt='ind1' className='w-full  max-h-[80vh] mx-auto' />
                        <br />
                        Indoor plants are a great option for those who have little yard space for an outdoor garden or for those who live in climates with severely cold winters.

                        <br />  <br /> So, if you’re caring for indoor plants for the first time, our ultimate guide will provide you with the necessary information to allow your green friends to thrive.

                        <br /> <br /> To provide you with expert insight, you can asked our Senior Horticulturist at "<span className='text-3xl text-greenlight'>Pranakshi Sales & Services</span>" to answer the most frequently asked questions about indoor plants.</p>
                </div>

                <div className='flex flex-col gap-10 py-14'>
                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>What are indoor plants ?</h1>
                        <p className='text-xl  font-outfit'>
                            Indoor plants are plants that grow indoors. There are a variety of tropical plants, like palms, that thrive in indoor environments.
                        </p>
                    </div>
                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>How do you plant indoor plants ?</h1>
                        <p className='text-xl font-outfit'>
                            Most of the time, indoor plants are already in containers, so there is no need to plant them. There are typically only two reasons you need to plant an indoor plant.
                            <br /><br />
                            <span className='font-semibold'>(i). </span>If your plant is getting too big, then you will need to replant it into a larger container.
                            <br /><span className='font-semibold'>(ii). </span>If you wanted to grow bulbs indoors, then you will need to plant the bulbs yourself.
                        </p>
                    </div>
                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>How much light do indoor plants need ?</h1>
                        <p className='text-xl font-outfit'>
                            Succulents and cacti need continuous, daily sunlight. Plants with foliage need roughly 8 hours of light per day. The amount of light depends on the plants you are growing, so we suggest doing research on the specific plants you are growing.
                        </p>
                        <img src='/Images/ind2.webp' alt='ind2' className='max-h-[70vh]' />
                    </div>

                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>What qualities make for a good indoor plant ?</h1>
                        <div className='flex gap-10 xl:flex-row flex-col-reverse '>
                            <p className='text-xl font-outfit'>

                                There are several qualities to look for when selecting an indoor plant.

                                <br /><br />
                                <span className='font-semibold'>(i). A good root system :- </span>This is incredibly important when choosing a plant. It’s not practical to pull a plant out of its pot to check its roots but if it is a small plant, this can be done. Healthy roots are thick and light in color.
                                <br /><span className='font-semibold'>(ii). Foliage :- </span>Here’s a good rule of thumb when it comes to plant foliage, if you can’t see through it, the foliage is thick enough.
                                <br /><span className='font-semibold'>(iii). Check for disease :- </span> Some signs of a plant with pests or disease are: white dots, sticky residue on the leaves and a bad odor.
                            </p>
                            <img src='/Images/ind3.webp' alt='ind3' className='max-h-[40vh]' />
                        </div>
                    </div>



                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>Which indoor plants require low light ?</h1>
                        <div className='flex gap-10 font-outfit text-xl flex-col '>


                            Indoor plants that need little light could be good fits for locations where light is dimmer. Some plants that require low light are:
                            <div className='flex flex-col gap-5 xl:flex-row'>
                                <p><span className='font-semibold'>(i). Philodendron :- </span>A very common indoor plant that rarely attracts pests. It’s a hearty plant that is adaptable to various environments.
                                    <br /><span className='font-semibold'>example :</span> Heartleaf Philodendron , Brasil Philodendron, Philodendron Micans, Lemon Lime Philodendron, Philodendron Birkin, Philodendron Erubescens, Imperial Green Philodendron, Philodendron Black Cardinal, Philodendron white Knight, Tree Philodendron, Philodendron Xanadu, Philodendron Verrucosum, Philodendron Florida Green, Black Gold Philodendron, Philodendron gloriosum, Philodendron Mamei etc.
                                </p>
                                <img src='/Images/ind4.jpg' alt='ind4' className='max-h-[40vh]' />
                            </div>
                            <div className='flex flex-col-reverse gap-5 xl:flex-row'>
                                <img src='/Images/ind5.jpg' alt='ind4' className='max-h-[40vh]' />
                                <p><span className='font-semibold'>(ii). Pothos or Devil’s Ivy :- </span>A plant with colorful and vibrant leaves. This plant does great in a variety of environments, thriving in low light or in bright, indirect light.
                                    <br /><br /><span className='font-semibold'>example :</span> golden pothos, Ceylon creeper, hunter's robe, ivy arum, silver vine, Solomon Islands ivy, and taro vine etc.
                                </p>
                            </div>

                            <div className='flex flex-col gap-5 xl:flex-row'>
                                <p> <span className='font-semibold'>(iii). Dracaena :- </span>This is another popular indoor plant with long green leaves. This is one indoor plant you will want to prune if foliage gets too long.
                                    <br /><br /><span className='font-semibold'>example :</span> Coloroma, Magenta, Tarzan, Tricolor , Cintho, Dorado, Haswaiian Sunshine , Lemon Lime, Limelight, White Jewel, Dracaena reflexa, Dracaena trifasciata, Dracaena sanderiana, white stripe, Milky Way,Dracaena cinnabari, Dracaena draco etc.
                                </p>
                                <img src='/Images/ind6.jpeg' alt='ind6' className='max-h-[40vh]' />
                            </div>


                            <div className='flex flex-col gap-5 '>
                                <p><span className='font-semibold'>(iv). Peace Lily :- </span>This plant thrives best when the soil is moist, but not overwatered. If you want flowers to appear on your peace lily plant, move your plant to a darker room.
                                </p>
                                <img src='/Images/ind7.jpg' alt='ind6' className='max-h-[60vh]' />
                            </div>

                        </div>
                    </div>


                    <div className='w-[70%] grid grid-cols-1 xl:grid-cols-2 mx-auto gap-5 '>
                        <div className='flex flex-col px-5 py-5 mx-auto border border-greenlight gap-3'>
                            <h1 className='text-3xl font-bold font-mono'>Which indoor plants are the easiest to take care of ?</h1>
                            <p className='text-xl font-outfit'>
                                Below is a list of indoor plants that are easy to take care of:
                                <br /><br />
                                <span className='font-semibold'>(i). </span>Sansevieria
                                <br /><span className='font-semibold'>(ii). </span>Philodendron
                                <br /><span className='font-semibold'>(iii). </span>Most succulents
                                <br /><span className='font-semibold'>(iv). </span>Pothos
                                <br /><span className='font-semibold'>(v). </span>ZZ plant
                            </p>
                        </div>

                        <div className='flex flex-col border border-greenlight px-5 py-5 mx-auto  gap-3'>
                            <h1 className='text-3xl font-bold font-mono'>Which plants are considered indoor plants ?</h1>
                            <p className='text-xl font-outfit mx-auto'>
                                Plants that require a low amount of light and water to thrive are typically known as indoor plants. Ambius considers these plants as examples of common indoor plants:
                                <br /><br />
                                <span className='font-semibold'>(i). </span>Dracaena
                                <br /><span className='font-semibold'>(ii). </span>Hedera Helix
                                <br /><span className='font-semibold'>(iii). </span>Sansevieria Zeylanica Superba
                                <br /><span className='font-semibold'>(iv). </span>Scindapsus
                            </p>
                        </div>
                    </div>

                    {/* <div className='w-[70%] grid grid-cols-1 xl:grid-cols-2 mx-auto gap-5 '>
                        <div className='flex flex-col px-5 py-5 mx-auto border gap-3'>
                            <h1 className='text-2xl font-bold font-mono'>What are examples of some common indoor plants ?</h1>
                            <p className='text-xl'>
                            More examples of common indoor plants include the following:
                                <div className='grid grid-cols-2'>
                               <p> <span className='font-semibold'>(i). </span>Aglaonema</p>
                               <p> <span className='font-semibold'>(ii). </span>Dracaena</p>
                               <p> <span className='font-semibold'>(iii). </span>Ferns</p>
                               <p><span className='font-semibold'>(iv). </span>Philodendrons</p>
                               <p><span className='font-semibold'>(v). </span>Palms</p>
                               <p> <span className='font-semibold'>(vi). </span>Pothos</p>
                               <p><span className='font-semibold'>(vii). </span>Spathiphyllum</p>
                               <p> <span className='font-semibold'>(viii). </span>Succulents</p>
                                </div>
                            </p>
                        </div>

                        <div className='flex flex-col border px-5 py-5 mx-auto  gap-3'>
                            <h1 className='text-2xl font-bold font-mono'>How do you re-pot indoor plants ?</h1>
                            <p className='text-xl  mx-auto'>
                            Unless your indoor plant has become too large for the pot it is in, you typically don’t need to re-pot indoor plants. For steps and tips on how to properly re-pot plants, check out our blog on re-potting plants.
                                <br /><br />
                                <span className='font-semibold'>(i). </span>Dracaena
                                <br /><span className='font-semibold'>(ii). </span>Hedera Helix
                                <br /><span className='font-semibold'>(iii). </span>Sansevieria Zeylanica Superba
                                <br /><span className='font-semibold'>(iv). </span>Scindapsus
                            </p>
                        </div>

                    </div> */}

                    <div className='flex flex-col w-[70%]  py-5 mx-auto  gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>How do you re-pot indoor plants ?</h1>
                        <div className='flex flex-col gap-5 xl:flex-row'>
                        <p className='text-xl font-outfit mx-auto'>
                            Simple Steps to Repot Your Plant
                            <br /><br />
                            <span className='font-semibold'>(i). Remove the plant from its current planter or grow pot :-</span>Turn your plant sideways, hold it gently by the stems or leaves, and tap the bottom of its current vessel until the plant slides out. You might need to give it a bit of help with a couple of gentle tugs on the base of the stems.
                            <br /><span className='font-semibold'>(ii).  Loosen the roots :-</span>Loosen the plant’s roots gently with your hands. You can prune off any threadlike roots that are extra long, just make sure to leave the thicker roots at the base of the foliage. If your plant is root bound—the roots are growing in very tight circles around the base of the plant—unbind the roots as best you can and give them a trim.
                            <br /><span className='font-semibold'>(iii). Remove the old potting mix :-</span>Remove about one-third or more of the old potting mix surrounding the plant's roots. As it grew, your plant removed some or all of the nutrients in the current mix, so you'll want to give it fresh potting mix or soil.
                        <img src='/Images/ind8.webp' alt='ind8' className='max-h-[50vh] w-full xl:w-[90%] mx-auto'/>
                            <br /><span className='font-semibold'>(iv). Add new potting mix :-</span>Pour a layer of fresh potting soil into the empty planter and pack it down, removing any air pockets. If your planter doesn’t have a drainage hole, layer the bottom with lava rocks or similar (rocks, gravel, etc.) before adding the potting mix. The goal is to create crevices for the extra water to pool into, away from your plant’s roots.
                            <br /><span className='font-semibold'>(v). Add your plant :-</span>Set your plant on top of the fresh layer of mix in the planter, making sure it's centered, then add more potting mix around the plant until it is secure. Be sure not to pack too much soil into the planter: you want the roots to have space to breathe.
                            <br /><span className='font-semibold'>(vi). Water and enjoy :-</span>Even out the potting soil on top and water well! It's worth noting that a freshly repotted plant does not need to be fed fertilizer.
                        </p>
                        </div>
                    </div>


                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>How long do indoor plants typically live ?</h1>
                        <p className='text-xl font-outfit'>
                            On average, indoor house plants last 2-5 years. After that, plants stop thriving and it’s best to invest in another plant.
                        </p>

                    </div>

                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>Which interior plants improve air quality the most ?</h1>
                        <p className='text-xl font-outfit'>
                            All plants can act as air purifiers but these plants are more beneficial than others.
                            <br /><br />
                            <span className='font-semibold'>(i). </span>Red-Edged Dracaena
                            <br /><span className='font-semibold'>(ii). </span>Weeping Fig
                            <br /><span className='font-semibold'>(iii). </span>Bamboo Palm
                        </p>
                    </div>
                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>What are some of the common reasons indoor plants die ?</h1>
                        <p className='text-xl font-outfit'>
                            Some of the most common reasons plants die are:
                            <br /><br />
                            <span className='font-semibold'>(i). </span>Overwatering or underwatering
                            <br /><span className='font-semibold'>(ii). </span>Light Levels (either not enough light or too much light)
                            <br /><span className='font-semibold'>(iii). </span>Neglect
                        </p>
                    </div>


                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>How do indoor plants affect people’s moods ?</h1>
                        <p className='text-xl font-outfit'>
                            People are often surprised at how beneficial indoor plants are. Not only do plants clean the air, but they also reduce noise levels and stress in the workplace. For more information on the benefits of indoor plants.
                        </p>

                    </div>
                    <div className='flex flex-col mx-auto w-[70%] gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>Are indoor plants expensive ?</h1>
                        <p className='text-xl font-outfit'>
                            Indoor plants are known for being very affordable. The smaller the plant, the less expensive it will be. We do warn customers from buying plants from large retailers. Oftentimes, large retailers will sell coconut or palm trees, which are large indoor plants sold at a relatively low price.
                            <br />
                            Just because a plant is large and sold for a low price does not mean you are getting the best deal. We recommend doing some research prior to buying or speaking with a salesperson at a gardening center.
                        </p>

                    </div>


                    <div className='flex flex-col w-[70%]  py-5 mx-auto  gap-3'>
                        <h1 className='text-3xl font-bold font-mono'>How do I know when to water my indoor plant ?</h1>
                        <div className='flex flex-col gap-5 xl:flex-row'>
                        <p className='text-xl font-outfit mx-auto'>
                        Over-watering is a common mistake, and you will want to make sure the plant actually requires water now or if it should wait until later. Here are some ways to see if it’s time to water:
                            <br /><br />
                            <span className='font-semibold'>(i). Soil probe :-</span>This probe will draw out soil, which will help you understand how dry the soil is below the surface.
                            <br /><span className='font-semibold'>(ii). Moisture meter :-</span>This tool tells you, on a scale, how dry soil is.
                            <br /><span className='font-semibold'>(iii). Lifting the plant up :-</span> Heaviness signifies the plant has enough water, but lightness signifies the plant is dry.
                        <img src='/Images/garden5.webp' alt='ind8' className='max-h-[50vh] w-full xl:w-[80%] mx-auto'/>
                            <br /><span className='font-semibold'>(iv). Wilting :-</span>Wilting typically happens because the plant is not getting sufficient water. Lift the plant to see if it is light in weight or if it’s heavy.
                            <br /><span className='font-semibold'>(v). Tipping :-</span> If the leaf edges begin browning and are crispy to the touch, the plant likely needs water. If the leaf edges are becoming brown but feel mushy, the plant has likely gotten too much water.
                            <br /><span className='font-semibold'>(vi). Yellow leaves :-</span>Yellow leaves may also signify that a plant has too much or too little water, but this is not always the case.
                        </p>
                        </div>
                    </div>


                </div>

            </div>

            {/* <Location/>
<Contact/> */}
            <Footer />
        </div>
    )
}

export default Indoor;
"use client"
import React from 'react'
import Navbar from '@/components/Navbar/Navbar';
import Location from '@/components/Location/Location';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import GotoTop from '@/components/GotoTop/GotoTop';
import StickyChat from '@/components/StickyChat/StickyChat';
import Stickysocial from '@/components/Stickysocial/Stickysocial';


const Outdoor = () => {
    return (
        <div>

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
                    <h1 className='mx-auto md:text-6xl text-3xl font-bold text-greenlight '>Outdoor Plants</h1>
                    <p className='w-[80%]  mx-auto text-center md:text-xl font-semibold font-outfit text-gray-600'>Indoor plants should be an essential component of every interior design. Greenery brightens up indoor spaces and is known to have mood-boosting qualities.
                        Trees are a crucial part of our ecosystem across the planet. Trees offer necessary resources to protect us from harsh weather conditions, clean our air, and offer enjoyment. We should all consider planting trees as a massive investment. How well that investment is, depends on many factors, including the kind of tree grown, its location, and the care offered.
                        <br />
                        Getting your new tree off to a healthy beginning will help the tree mature to its full size and ensure that it will provide economic, environmental, and social benefits throughout its lifetime.
                        <br />
                        <img src='/Images/out2.webp' alt='out2' className='w-full  max-h-[80vh] mx-auto' />
                        <br />
                        When you plant a tree, you don’t just plant a sapling but hope. We have learned the hard way that trees are significant for our survival. We first resorted to deforestation and made space for more buildings on earth. Later, when we saw the environment getting seriously affected, we were introduced to “afforestation,” a simple process of planting more trees for a better future.

                        <br />  <br />Trees are essentially the livestock of humankind and other living organisms. They unconditionally provide us with food, oxygen, and many other necessities for human sustainability, such as shelter, medicines, tools, and many more. Unfortunately, trees still do not get adequately treated with such rich values and importance. Instead, they are cut down, eliminating any life around the area.

                        <br /> <br /> However, with each passing day, the relevance and importance of planting trees have only increased. Therefore, it has to be a combined mission of all humanity to plant more trees to save our ailing planet.

                    </p>
                </div>

                <div className='flex flex-col mx-auto w-[70%] gap-3'>
                    <h1 className='text-3xl font-bold font-mono'>Planning</h1>
                    <div className='flex gap-10 xl:flex-row flex-col-reverse '>
                        <p className='text-xl font-outfit'>

                            Getting ready to plant takes some planning, investigation, and analysis. This is a beautiful opportunity to learn more about your community or surroundings. This section will walk you through the planning phases. It is recommended to spend about two weeks in your planning stages, depending on where you wish to plant your trees.

                            <br /><br />
                            Assessing the site where trees are to be planted helps choose the most appropriate plant for the location – the right plant for the right place. In addition, every tree planting should have diversity. Overplanting any one variety of trees results in a monoculture that often encourages the build-up of insect populations or diseases that can destroy entire planning.

                        </p>
                        <img src='/Images/out3.png' alt='out3' className='max-h-[40vh] ' />
                    </div>
                </div>

                <div className='flex flex-col py-5 mx-auto w-[70%] gap-3'>
                    <h1 className='text-3xl font-bold font-mono'>Assessing the Planting Area – Below Ground</h1>
                    <p className='text-xl font-outfit mx-auto'>
                        <span className='font-semibold'>(i). Surfaces or Surrounding Buildings :-</span>Asphalt, concrete, mirrored, and other building surfaces increase the reflected and reradiated heat load on a tree and cause more rapid water loss from its leaves. Therefore, if one of these surfaces is present, you might need to go for a different tree species.
                        <br /><span className='font-semibold'>(ii). Overhead Wires :-</span>Physical barriers like overhead high-tension wires can necessitate a tree that will not interfere with these structures. You might need to go for a tree with a different growth habit.
                        <br /><span className='font-semibold'>(iii). Exposure  :-</span>Plants in excessively windy sites may need supplemental watering to prevent drying out quickly. Most trees require full sun, but certain varieties may tolerate somewhat less.
                        <br /><span className='font-semibold'>(iv). Compaction :-</span>These occur as a result of construction or pedestrian traffic. A simple test is to dig a small pit and gauge the difficulty of hand searching. Then, repeat the text at several spots on the site. Compaction reduces drainage and causes the soil to be so dense that root growth can be restricted.
                        <br /><span className='font-semibold'>(v). Drainage :-</span>Poor drainage caused by compaction, soils, or underground obstacles can be estimated easily. First, dig the dirt to a depth of 12-14 inches. If there is grey mottling or a foul odor, that indicates poor drainage.
                    </p>
                </div>
                <div className='flex flex-col py-5 mx-auto w-[70%] gap-3'>
                    <h1 className='text-3xl font-bold font-mono'>Planting</h1>
                    <p className='text-xl font-outfit mx-auto'>
                        It has been said that anyone can plant a tree. While this may be true, not everyone knows how to plant a tree properly. Below are some points to be kept in mind:
                        <br />
                        <span className='font-semibold'>(i). Planting Season :-</span>In India, monsoon is the best season to plant a tree. Be sure the weather conditions are excellent and allow time for new plants to establish roots in the new location before the harsh Indian summer sets in.
                        <br /><span className='font-semibold'>(ii). Transpoting :-</span>Trees can get damaged during the trip home from the nursery. Take special care to reduce injuries by using a proper vehicle when loading or unloading the tree. Before transporting, always cover the buds and needles.
                        <br /><span className='font-semibold'>(iii). Temporary Storage :-</span>Plant your tree as soon as possible. If you must store it before planting, place it on the north side of a building away from direct sunlight.
                    </p>
                </div>
                <div className='flex flex-col py-5 mx-auto w-[70%] gap-3'>
                    <h1 className='text-3xl font-bold font-mono'>You can follow the below-mentioned steps to help your tree set quickly at its new location:</h1>
                    <p className='text-xl font-outfit mx-auto'>
                        <span className='font-semibold'>(i). </span>The Trunk flare is where the trunk expands at the base. Make sure the trunk flare is partially visible after the tree is planted.
                        <br /><span className='font-semibold'>(ii). </span>Dig a broad and shallow planting hole.
                        <br /><span className='font-semibold'>(iii). </span>If covered, remove any cover around the root ball and trunk to facilitate root growth.
                        <br /><span className='font-semibold'>(iv). </span>Position the tree in the proper light.
                        <br /><span className='font-semibold'>(v). </span>Straighten the tree in the hole. Before filling the gap, have someone examine the tree from different angles.
                        <br /><span className='font-semibold'>(vi). </span>Fill the hole gently but firmly—place soil around the base of the root ball to stabilize it. Fill the gap firmly to eliminate any air pockets. Further, decrease the air pockets by watering daily.
                        <br /><span className='font-semibold'>(vii). </span>Mulch the tree base by placing a 2–3-inch layer of mulch, but be sure not to pile much right against the trunk.
                        <br /><span className='font-semibold'>(viii). </span>Keep in mind the follow-up care. Always keep the soil moist by watering at least once a week, barring rain, and often during windy or hot weather.
                    </p>
                </div>
                <div className='flex flex-col py-5 mx-auto w-[70%] gap-3'>
                    <h1 className='text-3xl font-bold font-mono'>Challenges</h1>
                    <p className='text-xl font-outfit mx-auto'>
                        <span className='font-semibold'>(i). Land set up for planting trees :-</span>This is a challenge that many organizations face while planting trees on the set premises. Hence, it’s best to consult professionals like Nelda for the same. We do the soil test, hole digging, and fulfill other requirements to grow as many trees as possible.
                        <br /><br /><span className='font-semibold'>(ii). Finding the right place for planting trees :-</span>With so many mobile towers, high-tension wires, underground utility lines, and gas pipelines, sometimes it becomes difficult to search for a suitable site for planting trees, especially in a crowded city like Pune.
                        <br /><br /><span className='font-semibold'>(iii). Finding the right tree :-</span>We at Nelda recommend the best trees suitable for your planting site in the available conditions. In addition, our tree surveys enable us to determine the compliant trees for your property.
                        <br /><br /><span className='font-semibold'>(iv). Tree Health :-</span>A significant concern during tree life is tree health with successfully planted trees. Trees require daily check-ups to grow correctly. It is best to connect with plant healthcare services in such a situation.
                        <br /><span className='font-semibold'>(v). Poor Drainage :-</span>Poor drainage is a common cause of unsatisfactory tree setup. The soil associated with poor drainage is either too wet or too dry. In an urban environment, construction is usually the cause of drainage issues. As a result, oxygen levels will be deficient in the bottom of the hole, which is not conducive to root growth. This situation can be resolved by establishing raised planting beds or subsurface drainage techniques.
                    </p>
                </div>

                <div className='flex flex-col py-5 mx-auto w-[70%] gap-3'>
                    <h1 className='text-3xl font-bold font-mono'>How to keep your new tree alive and fresh!</h1>
                    <p className='text-xl font-outfit mx-auto'>
                        Newly planted trees require routine and thorough watering, particularly during the dry summer months. Water the trees daily for at least three years after planting. Soil and weather conditions and the amount of competing grass around the trees dictate how much water to give and how often. In general, trees require an equivalent of 1 inch of rainfall per week from June through September.
                        <br /><br />
                        <span className='font-semibold'>(i). Watering in the Winter Season :-</span>Always remember that trees use water even during the winter season. Give your periodic tree watering during mild winters, where the temperatures are above average and the ground thaws.
                        <br /><br /><span className='font-semibold'>(ii). How to water  :-</span>Before you water, examine the soil moisture 4 to 7 inches deep. If the soil feels dry or just slightly damp, it needs water. Well-drained, sandy soils will need more water more often than clay soil. The ideal way to water a newly planted tree is to place a garden hose at the tree’s base. Run a slow trickle of water for hours or until the soil is thoroughly soaked. To help hold or direct the water around the root system, build a temporary soil berm.
                        <br /> <br /><span className='font-semibold'>(iii). Mulching  :-</span>Using mulch around the tree base is essential for long-term tree care. The mulch keeps the soil moist, limits weed growth, and discourages injury to the tree from lawnmowers. Bark and wood chips are excellent mulching materials. You can use porous landscape fabric as a weed barrier underneath the chips, but never use plastic as it can suffocate the roots.

                        <br />Apply a 3-to-6-inch layer of mulch and spread it to form a circle at least 3 feet away from the trunk. Keep the mulch from direct contact with the tree trunk. Some bark mulches may contain contaminants that can harm the new tree. Maintain the mulch ring to keep the grasses from competing with the tree.

                        <br /> <br />Organic mulches include leaves, wood chips, straw, and decomposed leaves. They keep the ground cool and moist and discourage weeds. It is ideal for keeping the mulch off the root ball for several months after planting so that enough water reaches the roots. After mulching, watering thoroughly and only as needed will encourage a deep and healthy root system that better withstands environmental stresses.

                    </p>
                </div>
                <div className='flex flex-col py-5 mx-auto w-[70%] gap-3'>
                    <h1 className='text-3xl font-bold font-mono'>Importance of Planting Trees </h1>
                    <p className='text-xl font-outfit mx-auto'>
                        Since the very beginning, trees have given us the gift of life’s essentials, such as food and oxygen. Many generations passed, and we discovered many other uses of trees and exploited them for our survival. To begin with, the wood from the trees was used as fuel, and humans consumed the fruits. The shade was used to escape heat and fire to escape cold.
                        <br />
                        As we evolved and started having modern problems, trees remained the same but catered to our current issues. A tree, in its entirety, can contribute each of its parts to sustain life. From its leaves to the roots and its bark, every aspect of a tree has something to offer and has profound value.
                        <br /><br />
                        <span className='font-semibold'>(i). Ecological and Environmental Significance :-</span>Trees significantly contribute to their environment by providing oxygen, supporting wildlife, improving air quality, conserving water, preserving soil, and climate amelioration. By only performing its primary function of photosynthesis, it contributes more than it takes. Trees take in the carbon dioxide in the air and produce oxygen for living, breathing organisms around them.

                        <br />They also conserve warmth by acting as a shield from harsh winds, heavy rain, sleet, and hail. Therefore, trees can manage and influence wind speed and direction to maintain a balanced atmosphere.
                        <br /><br /><span className='font-semibold'>(ii).  Social and Community Value  :-</span>Trees play an essential part in every community, and one must make considerable efforts to maintain them. The number of trees can determine the quality of your life. Trees bring natural elements and wildlife habitats into the urban settlements and make them worth living. We all use the shade provided by trees during the day for family picnics and afternoon outdoor activities. The presence of trees in a community can elevate the importance of planting trees and the quality of life.
                        <br /> <br /><span className='font-semibold'>(iii). Practical and Commercial Value  :-</span>Trees have always been the reason for the subsistence of life on earth. Throughout our existence, trees have given us more than just life but also the means to sustain it. Another reason every day should be tree plantation day is that they have practical and commercial uses.
                        <br />Wood procured from the trees was among the first fuel discovered by humans and is still widely used by many people for cooking and heating. It is an ancient practice that still holds ground. Apart from that, trees provide timber that can be used for the construction of buildings, manufacturing furniture, tools, equipment for sports, and many other household items that you use on a day-to-day basis.
                        <br /> <br /><span className='font-semibold'>(iv). Property Value and Economic Value  :-</span>Trees individually have a great value and contribute to savings, but a collection of well-maintained trees can make a real economic impact. The most direct way trees help economically is by cutting energy costs. For example, a well-shaded house by trees will have lower cooling prices than any other house.
                        <br />Similarly, by acting as a windbreak, heating costs can also be lowered with the help of trees, preferably deciduous trees that can allow the sun to pass through and keep your house warm. Proper placement of trees around your house can keep your space cool in the summers and warm in the winters while helping you save up to 20- 50 % on energy.

                    </p>
                </div>





            </div>




            <Footer />
        </div>
    )
}

export default Outdoor;
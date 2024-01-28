'use client'
import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { menu } from './Assests.jsx'
import { menu2 } from './Assests.jsx'






const Galery = () => {

  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  const [items, setItems] = useState(menu);
  const [items2, setItems2] = useState(menu2);



  const filterItem = (categoryItem,categoryItem2) => {
    const updatedItems = menu.filter((currElem) => {
      return currElem.category == categoryItem;
    });
    setItems(updatedItems);

    const updatedItems2 = menu2.filter((currElem2) => {
      return currElem2.category == categoryItem2;
    });
    setItems2(updatedItems2);

    
  }

  return (

    <div id='gallery' className='flex flex-col'>
      <h1 className='mx-auto py-10 text-greendark text-4xl font-semibold'>Gallery</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 mx-auto gap-7 py-10 '>
        <button className=' px-8 py-2 rounded-md  shadow-inner focus:animate-bounce shadow-greenlight text-2xl font-semibold font-mono text-greenlight' onClick={() => filterItem('garden')}>Garden</button>
        <button className=' px-8 py-2 rounded-md  shadow-inner focus:animate-bounce duration-75 shadow-greenlight text-2xl font-semibold font-mono text-greenlight' onClick={() => filterItem('indoor')}>Indoor</button>
        <button className=' px-8 py-2 rounded-md  shadow-inner focus:animate-bounce duration-75 shadow-greenlight text-2xl font-semibold font-mono text-greenlight' onClick={() => filterItem('outdoor')}>Outdoor</button>
        <button className=' px-8 py-2 rounded-md  shadow-inner focus:animate-bounce duration-75 shadow-greenlight text-2xl font-semibold font-mono text-greenlight' onClick={() => setItems(menu)}>All</button>
      </div>

      <div className='grid grid-cols-1 xm:grid-cols-2 mx-auto w-[80%] gap-5 xl:grid-cols-4'>
        {
          items.map((elem) => {
            const {id, name, category, image } = elem;
            return (
              <div className='overflow-hidden mx-auto w-fit rounded-md'>
                <img src={image} alt='img' key={id} className='w-[300px] h-[200px]  hover:scale-110 transition duration-500 cursor-pointer' />
              </div>
            )
          })
        }
      </div>
      <div className='flex flex-col '>
        <section {...getCollapseProps()}>
          <div className='grid grid-cols-1 xm:grid-cols-2 xl:grid-cols-4 mx-auto w-[80%] gap-5 mt-5'>
            {
              items2.map((element) => {
                const { id, name, category, image } = element;
                return (
                  <div className='overflow-hidden mx-auto w-fit rounded-md'>
                    <img src={image} alt='img' key={id} className='w-[300px] h-[200px]  hover:scale-110 transition duration-500 cursor-pointer' />
                  </div>
                )
              })
            }

          </div>

        </section>


        <div className='flex justify-end '
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded ?
            <div className='flex items-center px-3 gap-2 text-greenlight mr-10 border-2 mt-5'>
              <p className='text-xl font-semibold'>Show Less</p>
              <SlArrowUp className='mb-5 w-fit text-2xl mt-5 mx-auto text-greendark' />
            </div>
            :
            <SlArrowDown className=' w-fit mt-6 text-5xl text-yellowlight mx-auto' />}
        </div>

      </div>


    </div>
  )
}

export default Galery;
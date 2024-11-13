import React, { useRef, useState } from 'react';
import data from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay } from 'swiper/modules';
function FeaturedCars() {

  
    const breakpoint = {
      600: {
        slidesPerView: 3,
      }
    }
  return (
    <div className='pt-20 z-0'>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-3xl font-extrabold'>Featured <span className='text-orange-600 font-extrabold'>Cars</span></h3>
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, amet.</p>
        </div>
        <div>
        <Swiper
        breakpoints={breakpoint}
        slidesPerView={1}
        spaceBetween={30}
        speed={6000}
        modules={[Autoplay]}
        autoplay={true}
        className='z-0'
      >
        {data.map(item => (
          <SwiperSlide className='ease-linear' key={item.id}>
            <div className='flex justify-center items-center mt-5'>
              <div className=' w-[90%] flex flex-col justify-center items-center gap-1 pt-12 border-2 border-solid border-black shadow-xl py-5 rounded-xl z-0'>
                <div>
                  <img className='w-[15em]' src={item.img} alt="car" />
                </div>
                <p className='text-xl font-bold text-orange-600 tracking-wider pt-5'>{item.name}</p>
                <p className='text-base tracking-wider font-semibold'>Starting at ${item.price}</p>
              </div>
            </div>
            
            
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
    </div>
  )
}

export default FeaturedCars
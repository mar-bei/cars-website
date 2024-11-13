import image1 from './assets/img/news2.jpg';
import image2 from './assets/img/news3.jpg';
import image3 from './assets/img/news4.jpg';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay } from 'swiper/modules';
function News() {
    const data = [
        {
            id: 1,
            img: image1,
            des: 'BMW Group India clocks best-ever annual sales in 2023, leads luxury electric',
        },
        {
            id: 2,
            img: image2,
            des: 'MC Astor 2024 launched in India, price starts at Rs 9.80 lakh',
        },
        {
            id: 3,
            img: image3,
            des: 'Kia Sonet facelift launched in India at Rs 7.99 lakh, Tata Nexon & Maruti Suzuki Brezza rival',
        },
        
    ]
    const breakpoint = {
        600:{
            slidesPerView: 3,
        }
    }
  return (
    <div className='pt-20 overflow-hidden'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h3 className='text-4xl font-extrabold text-center'>Cars <span className='text-orange-600 font-extrabold'>News & Advices</span></h3>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, blanditiis.</p>
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
              <div className=' w-[90%] h-[22em] flex flex-col items-center gap-2 border-2 border-solid border-black shadow-xl pt-2 pb-5 rounded-xl z-0'>
                <div>
                  <img className='w-[20em] lg:w-[18em]  object-cover rounded-xl' src={item.img} alt="car" />
                </div>
                <p className='text-xl lg:text-lg tracking-widest font-semibold px-4'>{item.des}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
    </div>
  )
}

export default News
import React from 'react'
import homeImg from './assets/img/hero.jpg';
function Home() {
  return (
    <div className='lg:w-[100%] flex flex-col lg:flex-row h-screen justify-center items-center gap-8 bg-black text-white pt-20 lg:pt-5'>
        <div className='lg:w-[50%] pl-5 pr-2 flex flex-col gap-2 lg:gap-5'>
            <div>
                <h3 className='text-4xl font-bold lg:text-5xl'>Find Your Perfect Ride Tody</h3>
            </div>
            <p className='text-lg font-semibold'>Over 1000+ New Cars Available Here</p>
            <p className='text-sm font-meduim'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam adipisci perspiciatis consectetur harum quia.</p>
            <div className='flex gap-4 pt-3'>
                <span className='px-5 py-1 rounded-sm flex justify-center items-center bg-orange-600 lg:cursor-pointer hover:bg-transparent hover:border-2 hover:border-solid hover:border-orange-600 duration-[.2s]'>Explore More</span>
                <span className='px-5 py-1 rounded-sm flex justify-center items-center bg-transparent border-2 border-solid border-orange-600 lg:cursor-pointer hover:bg-orange-600 duration-[.2s]'>See Cars</span>
            </div>
        </div>
        <div className='lg:w-[50%]'>
            <img className='w-[100%] lg:w-[100%] object-contain' src={homeImg} alt="homeimg" />
        </div>
    </div>
  )
}

export default Home
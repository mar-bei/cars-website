import React from 'react'
import products from './products'
import Header from '../components/Header'
import Footer from '../components/Footer'
function OurCars() {
  return (
    <div className='flex flex-col gap-3'>
        <Header/>
        <div className='mt-16'>
            <h3 className='text-center text-4xl font-extrabold'>Our <span className='text-orange-600 font-extrabold'>Cars</span></h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 place-items-center lg:px-16'>
            {products.map(product => (
                <div className='w-[90%] flex flex-col justify-center gap-2 items-center border-2 border-solid border-black rounded-2xl p-3 lg:hover:bg-gray-700 lg:cursor-pointer lg:hover:text-white' key={product.id}>
                    <div>
                        <img className='w-[17em]' src={product.img} alt="product1" />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-2xl text-orange-600 font-extrabold'>{product.name}</h3>
                        <p className='tracking-wider'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, consequuntur!</p>
                        <div className='flex justify-between items-center pt-3'>
                           <p className='text-xl font-bold'>${product.price}</p>
                           <span className='bg-black text-white px-2 py-1 rounded-lg'>Book Now</span>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
        <Footer/>
    </div>
  )
}

export default OurCars
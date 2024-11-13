import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <div className='fixed top-0 w-[100%] overflow-hidden lg:flex lg:items-center lg:justify-between lg:bg-gray-700 lg:text-white z-30'>
           <div className='flex items-center justify-between text-2xl p-3 bg-gray-700 lg:bg-transparent text-white'>
                <Link to='/'>WheelsDeal</Link>
                <i className="ri-menu-unfold-fill lg:hidden"  onClick={() => setOpen(!open)}></i> 
            </div>
            
            <ul className={open ? 'flex flex-col w-[100%] h-screen items-center translate-x-[0] pt-12 gap-12 bg-black text-white duration-[.3s]': 'hidden translate-x-[300em] duration-[.3s] lg:flex lg:flex-row lg:translate-x-0 lg:p-3 lg:gap-12'}>
                <li className='text-2xl lg:text-base hover:text-orange-600 duration-[.2s]'><Link to='/'>Home</Link></li>
                <li className='text-2xl lg:text-base hover:text-orange-600 duration-[.2s]'><Link to='/aboutus'>About Us</Link></li>
                <li className='text-2xl lg:text-base hover:text-orange-600 duration-[.2s]'><Link to='/ourcars'>Our Cars</Link></li>
                <li className='text-2xl lg:text-base hover:text-orange-600 duration-[.2s]'><Link to='/ourservices'>Services</Link></li>
                <div>
                    <span className='text-2xl lg:text-base lg:border-2 lg:border-solid lg:border-orange-600 lg:px-2 py-1 lg:cursor-pointer lg:hover:bg-orange-600 lg:duration-[.2s]'>Sign In</span>
                </div>
            </ul>
        </div>
        
    </div>
  )
}

export default Header
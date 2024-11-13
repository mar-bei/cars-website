import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className="mt-20 bg-gray-700 lg:flex lg:flex-col lg:gap-20">
        <div className=" text-white pt-9 px-3 flex flex-col gap-7 lg:gap-20 lg:flex-row lg:justify-center lg:items-center lg:relative">
            <div className="flex flex-col gap-2 lg:w-[18%] ">
            <h3 className=" text-2xl lg:font-extrabold lg:text-base">WheelsDeal</h3>
            <p className="text-xs font-meduim">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim praesentium nobis, delectus architecto ab quibusdam.</p>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className=" text-2xl lg:font-extrabold lg:text-base">Pages Links</h3>
            <ul className="flex flex-col gap-2">
                <li className="text-xs font-meduim"><Link to='/'>Home</Link></li>
                <li className="text-xs font-meduim"><Link to='/aboutus'>About Us</Link></li>
                <li className="text-xs font-meduim"><Link to='/ourcars'>Our Cars</Link></li>
                <li className="text-xs font-meduim"><Link to='/ourservices'>Services</Link></li>
            </ul>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className=" text-2xl lg:font-extrabold lg:text-base">Used Cars For Sales</h3>
            <ul className="flex flex-col gap-2">
                <li className="text-xs font-meduim"><Link>Toyota Camry</Link></li>
                <li className="text-xs font-meduim"><Link>Chevrole Corvette</Link></li>
                <li className="text-xs font-meduim"><Link>Volkswagen Golf</Link></li>
                <li className="text-xs font-meduim"><Link>Nissan Rogue</Link></li>
            </ul>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className=" text-2xl lg:font-extrabold lg:text-base">Leran More</h3>
            <ul className="flex flex-col gap-2">
                <li className="text-xs font-meduim"><Link>User-friendly</Link></li>
                <li className="text-xs font-meduim"><Link>Search and Filter</Link></li>
                <li className="text-xs font-meduim"><Link>Secure Payment</Link></li>
                <li className="text-xs font-meduim"><Link>Geolocation Services</Link></li>
            </ul>
        </div>
        </div>
        
        <div>
            <h4 className="text-center text-xs font-meduim text-white py-9 px-8">@copyright developed by <span className="text-orange-600">champion programmers</span> | All rights reserved</h4>
        </div>
    </div>
  )
}

export default Footer
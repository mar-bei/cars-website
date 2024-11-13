import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { GiAutoRepair } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { FaCarAlt } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import Header from '../components/Header'
import Footer from '../components/Footer'
function Services() {
    const services = [
        {
            id: 1,
            icon: <GiCarWheel />,
            name: 'Tires & Wheels',
        },
        {
            id: 2,
            icon: <SiGoogleearthengine />,
            name: 'Exhaust System',
        },
        {
            id: 3,
            icon: <GiAutoRepair />,
            name: 'Cars Maintenance',
        },
        {
            id: 4,
            icon: <IoSettings />,
            name: 'Brake Repairs',
        },
        {
            id: 5,
            icon: <FaCarAlt />,
            name: 'Body Service',
        },
        {
            id: 6,
            icon: <SiCoronaengine />,
            name: 'Engine Services',
        },
    ];
  return (
    <div>
        <Header/>
        <div className="mt-20">
            <h3 className="text-center text-4xl font-extrabold">Our <span className="text-orange-600 font-extrabold">Services</span></h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:px-16 place-items-center mt-5'>
            {services.map(item => (
                <div className=' w-[90%] flex flex-col justify-center items-center gap-1 border-2 border-solid border-black shadow-xl py-7 px-7 rounded-2xl lg:hover:bg-gray-700 lg:cursor-pointer lg:hover:text-white' key={item.id}>
                    <div className='text-6xl lg:text-5xl text-orange-600'>
                        {item.icon}
                    </div>
                    <p className='text-2xl lg:text-xl font-bold text-orange-600 tracking-wider pt-5 lg:pt-2'>{item.name}</p>
                    <p className='text-lg lg:text-base text-center tracking-wider font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vel facilis fugit eligendi ad reiciendis incidunt laudantium recusandae quam officiis!</p>
                </div>
            ))}
            </div>
        <Footer/>
    </div>
  )
}

export default Services
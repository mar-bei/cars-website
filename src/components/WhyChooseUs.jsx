import 'remixicon/fonts/remixicon.css';
function WhyChooseUs() {
    const features = [
        {
            id: 1,
            icon: <i className="ri-wallet-fill"></i>,
            name: 'Financing Options',
        },
        {
            id: 2,
            icon: <i className="ri-group-3-fill"></i>,
            name: 'Satisfied Customers',
        },
        {
            id: 3,
            icon: <i className="ri-caravan-fill"></i>,
            name: 'Fast & Easy Booking',
        },
    ];

  return (
    <div className='pt-20 items-center overflow-hidden'>
       <div className='flex flex-col justify-center items-center gap-2'>
          <h3 className='text-3xl text-center tracking-wide font-extrabold'>Why choose <span className='text-orange-600 font-extrabold'>WheelsDeal</span> ?</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, saepe.</p>
        </div>
        <div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center mt-5 lg:px-12'>
            {features.map(item => (
                <div className=' w-[90%] flex flex-col justify-center items-center gap-1 border-2 border-solid border-black shadow-xl py-7 px-4 rounded-2xl lg:hover:bg-gray-700 lg:cursor-pointer lg:hover:text-white' key={item.id}>
                    <div className='text-5xl text-orange-600'>
                        {item.icon}
                    </div>
                    <p className='text-xl font-bold text-orange-600 tracking-wider pt-5'>{item.name}</p>
                    <p className='text-base text-center tracking-wider font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vel facilis fugit eligendi ad reiciendis incidunt laudantium recusandae quam officiis!</p>
                </div>
            ))}
              
            </div>
        </div>

        
    </div>
  )
}

export default WhyChooseUs
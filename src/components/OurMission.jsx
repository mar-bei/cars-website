import image from './assets/img/mission.jpg';
function OurMission() {
  return (
    <div className='pt-20'>
        <div>
            <h3 className='text-center text-3xl tracking-wider font-extrabold'>Our <span className='text-orange-600 font-extrabold'>Mission</span></h3>
        </div>
        <div className='pt-7 lg:px-3 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-7'>
            <div className='lg:w-[53%] flex justify-center items-center lg:justify-start'>
                <img className='w-[90%] lg:w-[100%]' src={image} alt="img" />
            </div>
            <div className='w-[90%] lg:w-[45%] flex flex-col justify-center items-center gap-4 lg:gap-3'>
                <h4 className='text-2xl lg:text-xl text-orange-600 tracking-wider font-extrabold'>To create a community where every journey is extraordinary</h4>
                <p className='text-xl lg:text-lg font-extrabold'>Empower individuals to achieve sustainables mobility solutions and inspire a positive impact on the environment</p>
                <p className='lg:text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, voluptatem?</p>
                <p className='lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos deleniti harum eligendi exercitationem at, est laudantium! Debitis, consequuntur similique rem doloribus, eligendi cupiditate modi sapiente, rerum velit autem eius.</p>
            </div>
            
        </div>
    </div>
  )
}

export default OurMission
import image1 from '../components/assets/img/vision.jpg';
import Header from '../components/Header';
import image2 from '../components/assets/img/approch.jpg';
import Footer from '../components/Footer';
function AboutUs() {
  return (
    <div className='mt-12 flex flex-col gap-9'>
        <Header/>
        <div>
            <h3 className='text-center text-3xl lg:text-4xl font-extrabold'>About <span className='text-orange-600 font-extrabold'>Us</span></h3>
        </div>
        <div className='flex flex-col justify-center items-center lg:flex-row justify-center items-center gap-4 lg:gap-7'>
            <div className='lg:w-[50%] flex justify-center items-center lg:justify-start'>
                <img className='w-[90%] lg:w-[100%]'  src={image1} alt="vision" />
            </div>
            <div className='w-[90%] lg:w-[45%] flex flex-col justify-center items-center gap-4 lg:gap-5'>
                <div className='flex justify-start items-start w-[100%]'>
                    <h4 className='text-3xl pt-3 lg:text-4xl lg:pt-0 tracking-wider font-extrabold'>Our Vision</h4>
                </div>
                <p className='text-xl lg:text-xl font-extrabold'>Empower individuals to achieve sustainables mobility solutions and inspire a positive impact on the environment</p>
                <p className='lg:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, voluptatem?</p>
                <p className='lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos deleniti harum eligendi exercitationem at, est laudantium! Debitis, consequuntur similique rem doloribus, eligendi cupiditate modi sapiente, rerum velit autem eius.</p>
            </div>
        </div>

        <div className='mt-9 flex flex-col justify-center items-center lg:flex-row justify-center items-center gap-4 lg:gap-7'>
            <div className='lg:w-[50%] flex justify-center items-center lg:justify-start'>
                <img className='w-[90%] lg:w-[100%]'  src={image2} alt="vision" />
            </div>
            <div className='w-[90%] lg:w-[45%] flex flex-col justify-center items-center gap-4 lg:gap-5'>
                <div className='flex justify-start items-start w-[100%]'>
                    <h4 className='text-3xl pt-3 lg:text-4xl lg:pt-0 tracking-wider font-extrabold'>Our Approach</h4>
                </div>
                <p className='text-xl lg:text-xl font-extrabold'>Empower individuals to achieve sustainables mobility solutions and inspire a positive impact on the environment</p>
                <p className='lg:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, voluptatem?</p>
                <p className='lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos deleniti harum eligendi exercitationem at, est laudantium! Debitis, consequuntur similique rem doloribus, eligendi cupiditate modi sapiente, rerum velit autem eius.</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default AboutUs
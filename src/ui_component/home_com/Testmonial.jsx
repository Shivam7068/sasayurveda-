import React from 'react'
import Heading from '../common_comp/Heading'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { testimonials } from '../../data/testimonials';
const Testimonials = () => {

    // Crousel settings
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };


    return (
        <div className='w-full relative'>

            <div className='flex flex-col w-full m-auto md:my-8 my-5'>
                {/* heading  */}
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <Heading name={"Testimonials"} />
                </div>

                {/* Crousel */}
                <div className='w-full my-10'>
                    <Slider {...settings}>
                        {
                            testimonials.map((obj, i) => (
                                <div key={i} className='flex w-full flex-col bg-[#eee] border-none rounded-xl items-center justify-center  relative '>

                                    {/* testimonial image  */}
                                    <div className=' flex outline-none border-none w-full justify-center items-center'>

                                        <div className='flex w-[150px] h-[150px] rounded-full mt-2 overflow-hidden z-[99] border-4 border-white '>

                                            <img className='h-full w-full' src={obj.image} alt="" />

                                        </div>

                                    </div>
                                    {/* name and quote */}
                                    <div className='text-center flex flex-col gap-5 p-6'>
                                        <h1 className='text-lg font-bold text-blue-500'>
                                            {obj.name}
                                        </h1>
                                        <p className='border-t-2 py-[20px] border-dashed border-gray-600'>
                                            {obj.quote}
                                        </p>
                                    </div>
                                </div>

                            ))
                        }
                    </Slider >
                </div>
            </div>

        </div>
    )
}

export default Testimonials
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import front1 from "/assets/gallery/image1.avif";
import front2 from "/assets/gallery/image2.avif";
import front3 from "/assets/gallery/image3.avif";
import front4 from "/assets/gallery/image4.avif";

const SingleCrousel = () => {
    const heroimages = [front1, front2, front3, front4];

    return (
        <div className="relative">
            <Carousel
                showArrows
                infiniteLoop
                showThumbs={false}
                showIndicators={false}
                useKeyboardArrows
                autoPlay
                interval={5000}
                stopOnHover
            >
                {heroimages.map((image, index) => (
                    <div key={index} className='relative'>
                        <img
                            className="h-[85vh] w-full object-cover"
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center px-4 py-6">
                            <div className="bg-black bg-opacity-50 p-6 rounded text-white text-center w-full max-w-4xl">
                                <span className='block text-lg md:text-xl font-bold mb-2'>Embark on a Journey of Healing with</span>
                                <h1 className='font-bold text-4xl md:text-6xl mb-4 leading-tight'>Ayurveda</h1>
                                <p className="text-md md:text-lg">
                                    ADMISSIONS ARE NOW OPEN FOR 2024-2025
                                </p>
                            </div>
                        </div>
                        <div className='bg-black'>

                            <div className=" fixed top-[50vh] w-[100vw] md:w-[100vw] bg-white h-[35vh] text-white flex flex-col right_clip ">

                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default SingleCrousel;

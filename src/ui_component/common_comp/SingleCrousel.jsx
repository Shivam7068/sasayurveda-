import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lab from "/assets/lab.avif";
import front from "/assets/lab.avif";
import top from "/assets/lab.avif";
import body from "/assets/lab.avif";
import students from "/assets/lab.avif";
import inner from "/assets/lab.avif";



const SingleCrousel = () => {
    const heroimages = [front, front, front];

    // , students, body, top, lab, inner
    return (
        <div className="relative">
            <Carousel showArrows infiniteLoop showThumbs={false} showIndicators={false}>
                {heroimages.map((image, index) => (
                    <div key={index} className='relative'>
                        <img
                            className="h-[85vh] w-full object-cover"
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="absolute left-0 inset-0 flex items-start justify-start">
                            <div className="bg-black bg-opacity-50 p-4 rounded text-white w-full h-full ">
                                <span className=' md:text-[1.5rem] font-bold'>Embark on a Journey of Healing with</span>
                                <h1 className='font-bold md:text-[6rem]'>Ayurveda</h1>
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
    )
}

export default SingleCrousel




{/* <span className=' md:text-[1.5rem] font-bold'>Embark on a Journey of Healing with</span>
<h1 className='font-bold md:text-[6rem]'>Ayurveda</h1>
<p
    style={{
        fontSize: "1.2rem",
        fontWeight: "500",
        marginTop: "10px",
    }}
>
    ADMISSIONS ARE NOW OPEN FOR 2024-2025
</p> */}
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
    const heroimages = [front, front, front, front];

    // , students, body, top, lab, inner
    return (
        <div className="hero hero-img relative ">
            <Carousel showArrows infiniteLoop showThumbs={false} autoPlay={true} >
                {heroimages.map((image, index) => (

                    <div key={index} className=''>
                        <img
                            className=" h-[100vh] w-[100vw]"
                            src={image}
                        />

                        <div className='bg-black'>

                            <div className="right_clip absolute top-0 w-[100vw] md:w-[40vw] bg-[linear-gradient(279deg,_#000000a8,black)] h-full text-white flex flex-col  justify-center">
                                <span className=' md:text-[1.5rem] font-bold'>Embark on a Journey of Healing with</span>
                                <h1 className='font-bold md:text-[6rem]'>Ayurveda</h1>
                                <p
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "500",
                                        marginTop: "10px",
                                    }}
                                >
                                    ADMISSIONS ARE NOW OPEN FOR 2024-2025
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default SingleCrousel

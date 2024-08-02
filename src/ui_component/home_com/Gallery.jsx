import React from 'react'
import Heading from '../common_comp/Heading';

const Gallery = () => {
    const items = [
        { id: 2, imgSrc: '/assets/gallery/Icu.avif', title: 'ICU' },
        { id: 1, imgSrc: '/assets/gallery/image1.avif', title: 'Campus' },
        { id: 3, imgSrc: '/assets/gallery/lab.avif', title: 'Lab' },
        { id: 4, imgSrc: '/assets/gallery/herbal.avif', title: 'Herbal Garden' },
    ];
    return (
        <div className='h-auto bg-white p-4  rounded-lg z'>
            <Heading name="Gallery" />

            <div className='flex flex-col mt-8 gap-5 h-full '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 justify-center overflow-hidden '>

                    {
                        items.map((obj, i) => (


                            <div key={i} className={` relative bg-black overflow-hidden ${i + 1 == 1 && "md:col-span-2 md:h-[45vh] "} ${i + 1 == 2 && "md:row-span-2"} rounded-lg group border-2 border-gray-800`}>

                                <img className=' w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105' src={obj.imgSrc} alt="" />

                                <div className='absolute inset-0 flex flex-wrap justify-between items-center m-auto px-8 opacity-0   hover:opacity-100  
                        transition-opacity duration-300 bg-black bg-opacity-60 font-extrabold text-white text-center rounded-lg '>

                                    <div className=' p-2 rounded-r-md bg-green-700'>
                                        {obj.title}
                                    </div>
                                </div>
                            </div>

                        ))
                    }


                </div>

            </div>
        </div >
    )
}

export default Gallery
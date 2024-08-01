import React from 'react'
import SingleCrousel from '../ui_component/common_comp/SingleCrousel'
import About from '../ui_component/home_com/About'
import IconCard from '../ui_component/common_comp/IconCard'
import Testimonials from '../ui_component/home_com/Testmonial'
import Gallery from '../ui_component/home_com/Gallery'
import Footer from '../ui_component/common_comp/Footer'
import Trust from '../ui_component/home_com/Trust'
import NewsBoard from '../ui_component/home_com/NewsBoard'

const   Home = () => {
    return (
        <div className=''>
            <SingleCrousel />
            <div className='w-[90%] flex flex-col  m-auto gap-8'>
                <About />
                <IconCard />
                <Gallery />
                {/* <Trust /> */}
                <NewsBoard />
                <Testimonials />
            </div> 
        </div>
    )
}

export default Home

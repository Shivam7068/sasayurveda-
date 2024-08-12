import React from 'react'
import Heading from '../common_comp/Heading';

const VideoTestimonial = () => {
    const items = [
        { id: 1, videoSrc: 'https://www.youtube.com/embed/lk7Df63dJU8?si=xvlfIMABdhNF8F4W', title: 'College campus tour' },
        { id: 2, videoSrc: 'https://www.youtube.com/embed/HZA7SE37NcQ?si=Z8fRzuHBTsTOyguJ', title: 'Introduction Video' },
        { id: 3, videoSrc: 'https://www.youtube.com/embed/bGW4uhZGs6E?si=4V9QD36-XubClPVR', title: 'Tour Video' },
        { id: 4, videoSrc: 'https://www.youtube.com/embed/JxgsdFJTGfc?si=_YgWf2IbqYsv57Sc', title: 'Event Highlights' },
    ];
    return (
        <div className='h-auto bg-white p-4 rounded-lg'>
            <Heading name="Video Testimonials" />

            <div className='mt-8'>
                {/* Full-width video */}
                <div className='w-full mb-4  '>
                    <div className='relative bg-black md:h-[75vh] overflow-hidden rounded-lg group border-2 border-gray-800'>
                        <iframe
                            className='w-full h-full bg-cover '
                            src={items[0].videoSrc}
                            title={items[0].title}
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Row of three videos */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {items.slice(1).map((obj, i) => (
                        <div
                            key={i}
                            className='relative bg-black overflow-hidden rounded-lg group border-2 border-gray-800'
                        >
                            <iframe
                                className='w-full h-40 md:h-60'
                                src={obj.videoSrc}
                                title={obj.title}
                                allowFullScreen
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VideoTestimonial


import React from 'react';
import Heading from './Heading';

const GalleryPage = ({ galleryData, name }) => {
    return (
        <div>
            <Heading name={name} />

            <div className="h-auto m-16 gap-4 grid grid-cols-2 md:grid-cols-3 ">
                {galleryData.map(({ imageLink }, index) => (
                    <div key={index} className="relative overflow-hidden">
                        <img
                            className="h-auto w-full max-w-full rounded-lg object-cover object-center transform transition-transform duration-300 hover:scale-110"
                            src={imageLink}
                            loading="lazy"
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;

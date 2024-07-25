import React from 'react';
import introductionImage from '/assets/lab.avif'; // Make sure to replace with the correct path to your image

const IntroductionPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <img src={introductionImage} alt="Introduction" className="rounded-lg mb-6 w-full h-64 object-cover" />
                <h1 className="text-4xl font-bold mb-4 text-green-500 text-center">Welcome to Our College</h1>
                <p className="text-gray-700 mb-6 text-center">
                    Our college is committed to providing a high-quality education that fosters the growth and development of each student. We offer a wide range of programs and activities to help you achieve your academic and personal goals.
                </p>
                <div className="flex justify-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IntroductionPage;

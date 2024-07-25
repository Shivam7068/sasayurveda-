import React from 'react';

const CollegeHostelPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className=" mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 text-green-900">College & Hostel Introduction</h1>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">College</h2>
                    <p className="text-gray-700 mb-4">
                        SAS Ayurvedic Medical College is providing holistic development of students. SAS Ayurvedic College comprises highly qualified and experienced faculty drawn from the best Ayurvedic medical college like Banaras Hindu University, National Institute of Ayurveda etc. Curriculum aligned with industry needs makes students employable and job ready. SAS Ayurvedic College is committed to make students job-ready by providing skill based value additions. All programmes are supported by laboratories, equipment’s, libraries, computer laboratories and other infrastructural needs for meeting the demands of the programmes.
                    </p>
                    <h3 className="text-2xl font-semibold text-green-600 mb-2">Salient Features:</h3>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>A spacious college building with ultra-modern equipment and well-furnished departments</li>
                        <li>60 bed Hospital Facility</li>
                        <li>Highly qualified & experienced teaching staff</li>
                        <li>A spacious & peaceful yoga hall</li>
                        <li>A beautiful and resourceful herbal garden</li>
                        <li>Separate hostel facility for boys & girls</li>
                        <li>Research & Development Centre</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CollegeHostelPage;

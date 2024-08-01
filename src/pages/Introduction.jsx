import React from 'react';
import introductionImage from '/assets/lab.avif'; // Make sure to replace with the correct path to your image

const IntroductionPage = () => {
    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-4 ">
            <div className="p-8 rounded-lg w-full shadow-lg shadow-orange-200">
                <img src={introductionImage} alt="Introduction" className="rounded-lg mb-6 w-full h-64 object-cover" />
                <h1 className="text-4xl font-bold mb-4 text-green-500 text-center">Welcome to Our College</h1>
                <p className="text-gray-700 mb-6">
                    The SAS Ayurvedic Medical College & Hospital was established in 2013 by Dr. Ashok Pandey as “SAS Ayurvedic Hospital” governed by “Society of Advanced Studies.”

                    SAS Ayurvedic Hospital is established for enrich the research knowledge about the Indian System of Medicine but after the certain time Management committee decide to open an Ayurvedic College namely “SAS Ayurvedic Medical College & Hospital Rameshwar Road, Harhua, Varanasi, Uttar Pradesh Pin -221105”

                    The main objective of the Society is to promote the health awareness and care by Ayurvedic System of Medicine, because these are the ancient systems of medicine which are easily available & less side effect in comparison to the western system of medicine.

                    The SAS Ayurvedic Medical College & Hospital imparts Bachelor Degree Courses in Ayurvedic Medicines (B.A.M.S.). The courses have already been recognized by the National Commission for Indian System of Medicine, New Delhi (N.C.I.S.M) and affiliated with Mahayogi Guru Gorakhnath AYUSH University Gorakhpur, College Code (AUVA005) with recognition of Govt. of U.P.

                    All the 14 Departments are well equipped with Laboratory and Museum.
                </p>
            </div>
        </div>
    );
};

export default IntroductionPage;

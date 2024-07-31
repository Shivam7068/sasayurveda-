import React from 'react'
import Heading from '../common_comp/Heading'

const About = () => {
    return (
        <div className='flex flex-col w-full p-4'>
            <Heading name={"About Us"} />
            <div className='flex flex-col md:flex-row flex-wrap w-full justify-between m-auto items-center h-full gap-4'>
                {/* Image Section */}
                <div className='flex bg-blue-600 md:w-[calc(30%-10px)] w-full h-[60vh] shadow-lg shadow-slate-500 overflow-hidden'>
                    <img className='object-cover w-full h-full' src="/assets/lab.avif" alt="SAS Ayurvedic Medical College & Hospital" />
                </div>
                {/* Content Section */}
                <div className='flex flex-col md:w-[calc(65%-10px)] w-full text-[18px] font-normal p-4 bg-white shadow-lg rounded-lg'>
                    <p>
                        The <span className='font-bold text-blue-600'>SAS Ayurvedic Medical College & Hospital</span> was established in 2013 by Dr. Ashok Pandey as “SAS Ayurvedic Hospital” governed by “Society of Advanced Studies.”
                    </p>
                    <p className='mt-4'>
                        SAS Ayurvedic Hospital is established to enrich the research knowledge about the Indian System of Medicine. After some time, the Management Committee decided to open an Ayurvedic College namely “SAS Ayurvedic Medical College & Hospital Rameshwar Road, Harhua, Varanasi, Uttar Pradesh Pin -221105.”
                    </p>
                    <p className='mt-4'>
                        The main objective of the Society is to promote health awareness and care through the Ayurvedic System of Medicine, as these are ancient systems of medicine that are easily available and have fewer side effects compared to the western system of medicine.
                    </p>
                    <p className='mt-4'>
                        The SAS Ayurvedic Medical College & Hospital imparts Bachelor Degree Courses in Ayurvedic Medicines (B.A.M.S.). The courses are recognized by the National Commission for Indian System of Medicine, New Delhi (N.C.I.S.M), and affiliated with Mahayogi Guru Gorakhnath AYUSH University Gorakhpur, College Code (AUVA005) with recognition from the Govt. of U.P.
                    </p>
                    <p className='mt-4'>
                        All the 14 Departments are well equipped with Laboratories and Museums.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About



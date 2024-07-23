import React from 'react'
import Heading from '../common_comp/Heading'

const About = () => {
    return (
        <div className='flex flex-col w-full'>
            <Heading name={"About Us"} />
            <div className='flex flex-wrap w-full justify-between m-auto items-center '>
                <div className='flex bg-blue-600 w-[calc(30%-10px)]'>
                    <img src="/assets/lab.avif" alt="" srcset="" />
                </div>
                <div className='flex w-[calc(65%-10px)] text-[18px] font-normal pt-4'>
                    The SAS Ayurvedic Medical College & Hospital was established in 2013 by Dr. Ashok Pandey as “SAS Ayurvedic Hospital” governed by “Society of Advanced Studies.”

                    SAS Ayurvedic Hospital is established for enrich the research knowledge about the Indian System of Medicine but after the certain time Management committee decide to open an Ayurvedic College namely “SAS Ayurvedic Medical College & Hospital Rameshwar Road, Harhua, Varanasi, Uttar Pradesh Pin -221105”

                    The main objective of the Society is to promote the health awareness and care by Ayurvedic System of Medicine, because these are the ancient systems of medicine which are easily available & less side effect in comparison to the western system of medicine.

                    The SAS Ayurvedic Medical College & Hospital imparts Bachelor Degree Courses in Ayurvedic Medicines (B.A.M.S.). The courses have already been recognized by the National Commission for Indian System of Medicine, New Delhi (N.C.I.S.M) and affiliated with Mahayogi Guru Gorakhnath AYUSH University Gorakhpur, College Code (AUVA005) with recognition of Govt. of U.P.

                    All the 14 Departments are well equipped with Laboratory and Museum.
                </div>
            </div>
        </div>
    )
}

export default About

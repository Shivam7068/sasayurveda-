import React from 'react'
import { MdLocalHospital } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import Heading from './Heading';

const IconCard = () => {

    const whyChooseUs = [
        {
            icon: <PiStudentFill />,
            title: 'Quality Education',
            description: 'We provide a comprehensive education in Ayurvedic medicine, focusing on practical skills, ethical practices, and personalized mentorship to ensure student success.'
        },
        {
            icon: <FaChalkboardTeacher />,
            title: 'Experienced Faculty',
            description: 'Our expert faculty bring a wealth of knowledge, skills, and real-world experience to enhance students learning journeys.'
        },
        {
            icon: <FaBuilding />,
            title: 'Modern Infrastructure',
            description: 'Our college features state-of-the-art infrastructure, equipped with advanced facilities to support both the academic and practical learning needs of our students.'
        },
        {
            icon: <FaHospitalAlt />,
            title: 'State Of The Art Hospital',
            description: 'Our Goal is to delivers holistic healthcare services grounded in traditional Ayurvedic principles, emphasizing patient wellness and natural remedies.'
        }
    ];
    return (
        <div className='flex flex-col gap-10 w-full'>
            <Heading name={"Why Choose Us"} />
            <div className='main max-w-screen w-full grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center items-stretch m-auto'>
                {whyChooseUs.map((pro, i) => (
                    <div key={i} className='bg-gray-200 p-2 w-full m-auto rounded-md gap-3 grid hover:bg-green-700 hover:text-white justify-center items-center'>
                        <div className='text-[35px] group-hover:text-white'>
                            {pro.icon}
                        </div>
                        <h1 className='font-bold text-xl group-hover:text-white'>
                            {pro.title}
                        </h1>
                        <p className='group-hover:text-white'>
                            {pro.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default IconCard
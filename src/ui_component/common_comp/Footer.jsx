
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt } from "react-icons/fa"
import { about, footer, social } from '../../data/footerLinks'
const Footer = () => {
    return (

        <footer className="w-[90%] m-auto ">
            <hr className=" border-black sm:mx-auto mt-6" />

            <div className="m-auto w-full ">
                <div className="md:flex md:justify-between my-4 gap-5">
                    <div className="mb-6 md:mb-0">
                        {/* <Link to={"/"} className="flex items-center justify-center ">
                            <img src="/assets/react.svg" className=" h-16 me-3" alt="Logo" />
                        </Link> */}

                        <div className=' '>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d461413.69138620474!2d82.9111585!3d25.3782041!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x398e2cb4aeaef9a9%3A0x12269b5f9fae7372!2sHarhua%20Uttar%20Pradesh%20221105!3m2!1d25.378204099999998!2d82.9111585!5e0!3m2!1sen!2sin!4v1721797887893!5m2!1sen!2sin" width="820" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                    {/* Links */}
                    <div className="flex justify-between md:flex-row flex-col">
                        <div className='flex flex-col mx-5'>
                            <h2 className="mb-3 md:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
                            <ul className="text-black dark:text-gray-400 flex flex-col gap-2">
                                {
                                    footer.map((obj, i) => (
                                        <Link key={i} to={obj.link} className=" hover:opacity-75 ">{obj.title}</Link>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='flex flex-col ml-5 my-4 md:ml-12 md:my-0'>
                            <h2 className="mb-3 md:mb-6 text-sm font-semibold text-gray-700 uppercase  dark:text-white">About us</h2>
                            <ul className="text-black dark:text-gray-400  flex flex-col gap-2">
                                {
                                    about.map((obj, i) => (
                                        <Link key={i} to={obj.to} className=" hover:opacity-75 ">{obj.title}</Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                {/* copyright section */}
                <hr className=" border-gray-500 sm:mx-auto mt-6" />

                <div className="sm:flex sm:items-center sm:justify-between py-4">
                    <h3 className='text-center'>
                        © 2024 SAS AYURVEDIC MEDICAL COLLEGE AND HOSPITAL
                    </h3>

                    {/* social media links */}
                    <div className="flex mt-4 md:mt-0 gap-8 justify-center">
                        <a className="text-xl text-[#15803d] hover:text-[#407654]" href="https://www.facebook.com/bamchmau/">
                            <FaFacebook />
                        </a>
                        <a className="text-xl text-[#15803d] hover:text-[#15803d]" href="https://www.instagram.com/explore/locations/105861897750708/bapu-ayurvedic-medical-college-and-hospital-mau/">
                            <FaInstagram />
                        </a>
                        <a className="text-xl text-[#15803d] hover:text-[#15803d]" href="https://www.youtube.com/@BapuAyurvedicMedicalCollege">
                            <FaYoutube />
                        </a>
                        <a className="text-xl text-[#15803d] hover:text-[#15803d]" href="#">
                            <FaTwitter />
                        </a>
                    </div>
                    {/* social link ended  */}

                </div>
            </div>

        </footer >

    )
}

export default Footer

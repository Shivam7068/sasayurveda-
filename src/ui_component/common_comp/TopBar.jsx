import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import Whatsapp from './WhatsApp'

const TopBar = () => {
    return (
        <div className='bg-[#598a88] p-1 flex md:flex-row flex-col'>
            <div className='md:w-[80%] w-full flex justify-between m-auto md:flex-row flex-col gap-5'>
                <a href='/apply-now' target='_blank' className='md:flex hidden items-center text-white text-bold text-xl gap-10 md:m-0 m-auto'>
                    BAMS Admissions are now open
                </a>

                <div className='flex flex-col items-center text-white text-bold text-md gap-2 '>
                    <a href='tel:' className='flex items-center gap-3'>
                        <span>For Admissions Contact Us At :-</span>
                        <div>
                            <span className='flex  justify-center items-center gap-3'>

                                <FaPhoneAlt />
                                +91- 7785055690
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TopBar
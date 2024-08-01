import React from 'react';
import { facilitiesData, investigationData, panchkarmaTherapyCharges, shalyaOTCharges, striPrasutiOTCharges } from '../data/charges';
import Heading from '../ui_component/common_comp/Heading';

const Charges = () => {
    return (
        <div className="container p-4 flex flex-col items-center gap-10 px-[50px]">
            <Heading name={"Hospital Charges"} />
            <table className="min-w-full bg-white border-collapse border border-black">
                <thead>
                    <tr className="bg-gray-200 border-b border-black">
                        <th className="w-1/12 text-left py-2 px-3 border border-black">SR NO.</th>
                        <th className="w-7/12 text-left py-2 px-3 border border-black">FACILITIES</th>
                        <th className="w-4/12 text-left py-2 px-3 border border-black">CHARGE</th>
                    </tr>
                </thead>
                <tbody>
                    {facilitiesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className='border border-black'>
                                <td className="py-2 px-3 border border-black">{index + 1}</td>
                                <td className="py-2 px-3 border border-black">{item.facility}</td>
                                <td className="py-2 px-3 border border-black">{item.charge || '-'}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            <Heading name={"Panchkarma Therapy Charges"} />
            <table className="min-w-full bg-white border-collapse border border-black">
                <thead>
                    <tr className="bg-gray-200 border-b border-black">
                        <th className="w-1/12 text-left py-2 px-3 border border-black">SR NO.</th>
                        <th className="w-7/12 text-left py-2 px-3 border border-black">FACILITIES</th>
                        <th className="w-4/12 text-left py-2 px-3 border border-black">CHARGE</th>
                    </tr>
                </thead>
                <tbody>
                    {panchkarmaTherapyCharges.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className='border border-black'>
                                <td className="py-2 px-3 border border-black">{index + 1}</td>
                                <td className="py-2 px-3 border border-black">{item.facility}</td>
                                <td className="py-2 px-3 border border-black">{item.charge || '-'}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            <Heading name={"Shalya-OT"} />
            <table className="min-w-full bg-white border-collapse border border-black">
                <thead>
                    <tr className="bg-gray-200 border-b border-black">
                        <th className="w-1/12 text-left py-2 px-3 border border-black">SR NO.</th>
                        <th className="w-7/12 text-left py-2 px-3 border border-black">FACILITIES</th>
                        <th className="w-4/12 text-left py-2 px-3 border border-black">CHARGE</th>
                    </tr>
                </thead>
                <tbody>
                    {shalyaOTCharges.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className='border border-black'>
                                <td className="py-2 px-3 border border-black">{index + 1}</td>
                                <td className="py-2 px-3 border border-black">{item.facility}</td>
                                <td className="py-2 px-3 border border-black">{item.charge || '-'}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            <Heading name={"Stri Prasuti-OT"} />
            <table className="min-w-full bg-white border-collapse border border-black">
                <thead>
                    <tr className="bg-gray-200 border-b border-black">
                        <th className="w-1/12 text-left py-2 px-3 border border-black">SR NO.</th>
                        <th className="w-7/12 text-left py-2 px-3 border border-black">FACILITIES</th>
                        <th className="w-4/12 text-left py-2 px-3 border border-black">CHARGE</th>
                    </tr>
                </thead>
                <tbody>
                    {striPrasutiOTCharges.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className='border border-black'>
                                <td className="py-2 px-3 border border-black">{index + 1}</td>
                                <td className="py-2 px-3 border border-black">{item.facility}</td>
                                <td className="py-2 px-3 border border-black">{item.charge || '-'}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            <Heading name={"Investigation Charges"} />
            <table className="min-w-full bg-white border-collapse border border-black">
                <thead>
                    <tr className="bg-gray-100 border-b border-black">
                        <th className="w-1/12 text-left py-2 px-3 border border-black">SR NO.</th>
                        <th className="w-7/12 text-left py-2 px-3 border border-black">INVESTIGATION</th>
                        <th className="w-4/12 text-left py-2 px-3 border border-black">CHARGE</th>
                    </tr>
                </thead>
                <tbody>
                    {investigationData.map((item, index) => (
                        <tr key={index} className='border border-black'>
                            <td className="py-2 px-3 border border-black">{item.srNo}</td>
                            <td className="py-2 px-3 border border-black">{item.investigation}</td>
                            <td className="py-2 px-3 border border-black">{item.charge}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Charges;

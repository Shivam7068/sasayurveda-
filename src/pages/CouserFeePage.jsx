import React from 'react';

const CourseFeePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 text-green-900">Course & Fee</h1>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Course of Study</h2>
                    <p className="text-gray-700">Bachelor of Ayurvedic Medicine and Surgery - B.A.M.S (Duration 4.5 years +1 year Internship)</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Eligibility:</h2>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>12th examination pass with PCB (Physics, Chemistry & Biology) subjects</li>
                        <li>Aggregate minimum 50% marks in Physics, Chemistry & Biology subject for appearing in entrance examination.</li>
                        <li>Qualified NEET Examination or any other examination as decided by Central or State Government.</li>
                        <li>By the counselling conducted by Central Government (for 15% seat for all India students) and by State Government (for rest 85% seat for Uttar Pradesh students).</li>
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Examining Body:</h2>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Mahatma Gandhi Kashi Vidyapeeth, Varanasi for batch (2017-18, 2018-19, 2019-20 & 2020-21)</li>
                        <li>Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur (Applicable From Batch 2021-22)</li>
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Course & Other Fee:</h2>
                    <p className="text-gray-700">As per the rules of NCISM, New Delhi & UP government</p>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Course fee: ₹2,55,500/- per Annum (applicable for one academic session)</li>
                        <li>Examination fee: As decided by Mahatma Gandhi Kashi Vidyapeeth</li>
                        <li>Security Money: ₹50,000/- one time at the time of admission (Refundable after completion of Course)</li>
                        <li>Other fee: As decided by College Management</li>
                        <li>The Letter Dated 15th January 2021 Was Received From The Govt. of  AYUSH Section,  Director And Ayurveda Services, Lucknow, In Which It Is Written That The Fee of Our Organization (SAS Ayurvedic Medical College and Hospital)  Has Been Fixed At 255500 (Two Lakh Fifty five Thousand five hundred only) for Student.
                        </li>
                        <li className='text-red-600 font-medium'>
                            <a href="" target='_blank'>
                                Click to See Decided Fee Govt. of AYUSH, Director, Lucknow
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Fee Structure:</h2>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Tuition Fee per year – ₹2,55,500</li>
                        <li>Hostel fee (Including Mess, Non-AC) per year – ₹85,000</li>
                        <li>Lab Fee (For 4 ½ year) – ₹5,000</li>
                        <li>Cultural/Sports fee (4 ½ year) – ₹6,000</li>
                        <li>A.C./Warmer Allowance Fee per year (Optional) – ₹12,500</li>
                        <li>Security Money (refundable) – ₹50,000</li>
                        <li>Prospectus Fee – ₹1,000</li>
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Hostel Facilities:</h2>
                    <p className="text-gray-700">Hostel available in the College Campus for girls and boys. Charges of hostel on double occupancy in a single room:</p>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Residence and mess charge: ₹90,000/- Per Student Per Annum (including food)</li>
                        <li>Hostel Charges will have to be paid in advance annually</li>
                    </ul>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Intake Capacity:</h2>
                    <p className="text-gray-700">60 students per year intake capacity permitted by NCISM</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Necessary Documents:</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                        <li>Neet Admit Card</li>
                        <li>Neet Score Card</li>
                        <li>Registration Copy of Counselling</li>
                        <li>Counselling Letter</li>
                        <li>Allotment Letter</li>
                        <li>High School Mark-Sheet</li>
                        <li>High School Certificate</li>
                        <li>Intermediate Mark-Sheet</li>
                        <li>Intermediate Certificate</li>
                        <li>Domicile Certificate</li>
                        <li>Adhar Card</li>
                        <li>Passport Size Photo (6)</li>
                        <li>T.C. (Transfer Certificate)</li>
                        <li>Character Certificate</li>
                        <li>Migration Certificate</li>
                        <li>All certificates of examinations passed (Only original Certificate/Marks sheet/documents will be produced at the time of admission).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseFeePage;

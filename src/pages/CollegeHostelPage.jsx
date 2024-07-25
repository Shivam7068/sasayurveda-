import React from 'react';

const CollegeCouncilPage = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="container mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12 border border-gray-300">
          <h1 className="text-4xl font-extrabold text-center text-green-900 mb-8">College Council Meeting</h1>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">Committee Details</h2>
            <p className="text-gray-700 mb-1"><strong>Date:</strong> 25-01-2021</p>
            <p className="text-gray-700 mb-1"><strong>Time:</strong> 11:00 AM</p>
            <p className="text-gray-700 mb-4"><strong>Venue:</strong> Meeting Hall</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-green-800 mb-2">In Attendance:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Prof. Mukesh Rai (HOD, Rachana Sharir)</li>
              <li>Dr. Chhaya Gupta (HOD, Rasa Shastra)</li>
              <li>Dr. Suvarana Kale (HOD, Stri Prasooti)</li>
              <li>Dr. Asha Ram Verma (HOD, Agad Tantra)</li>
              <li>Dr. Priyanka Rai (HOD, Bal-Roga)</li>
              <li>Dr. Hariom Singh (HOD, Shalya)</li>
              <li>Dr. Pawan Sharma (HOD, Shalakya)</li>
              <li>Dr. Vinod Kumar Singh (HOD, Kaya Chikitsa)</li>
              <li>Dr. Ravi Shukla (HOD, Kriya Sharir)</li>
              <li>Dr. Monika Agrawal (HOD, Panchkarma)</li>
              <li>Dr. V.N. Tripathi (HOD, Swasth Vritta)</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-green-800 mb-2">As a Guest:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Dr. Ashok Kumar Pandey (Chairman)</li>
              <li>Dr. D.N. Sharma (Principal/Medical Superintendent)</li>
              <li>Dr. Geeta Pandey (Gen. Secretary)</li>
              <li>Dr. Anish Pandey (Society Member)</li>
              <li>Dr. Yash Pandey (Society Member)</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Agenda:</h2>
            <p className="text-gray-700 mb-4">
              Regarding the decided fee structure from the BAMS (2020-21) Batch. 
              <br />
              In this meeting, all Faculty members and society members decided to increase the fee for BAMS as per the govt. letter of AYUSH, Lucknow dated 15-01-2021. In this regard, all council members decided to set the fee from the 2020-21 batch at ₹2,55,500 (Two Lakh Fifty-Five Thousand Five Hundred Only) and also decided on an extra fee for all students at the time of admission (one time in 4 ½ years).
            </p>
            <a href="#" className="text-green-600 underline font-semibold hover:text-green-800 mb-4 inline-block">Click To See Govt. letter of AYUSH, Lucknow</a>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">Fee Details:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Tuition Fee per year – ₹2,55,500</li>
              <li>Hostel fee (Including Mess, Non-AC) per year – ₹85,000</li>
              <li>Lab Fee (For 4 ½ years) – ₹5,000</li>
              <li>Cultural/Sports fee (4 ½ years) – ₹6,000</li>
              <li>A.C./Warmer Allowance Fee per year (Optional) – ₹12,500</li>
              <li>Security Money (refundable) – ₹50,000</li>
              <li>Prospectus Fee – ₹1,000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCouncilPage;

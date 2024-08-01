import React from 'react';

const HostelInfrastructure = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Infrastructure of Hostel</h1>
        <section>
          <h1 className=' flex  justify-center items-center font-bold text-2xl p-6'>Hostel</h1>
          <p className='p-5'>SAS Ayurvedic Medical College has two separate hostels as per the requirement of Students. Boys and Girls Hostel is situated in the college campus.</p>
        </section>
        {/* Girls Hostel Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">GIRLS HOSTEL</h2>
          <p className="mb-4">
            Girls Hostel of SAS Ayurvedic College is situated inside the college campus area at Harhua. It was started in year 2017.
          </p>

          <h3 className="text-xl font-semibold mb-2">Facilities</h3>
          <ul className="list-disc list-inside mb-4">
            <li>The hostel is equipped with 45 rooms, each of 2 bed capacity, a dormitory which can accommodate 10 students, study hall, mess hall, kitchen and a guest room.</li>
            <li>Mess facility available and run by management with the association with residing students.</li>
            <li>24X7 hours availability of cleaning staffs.</li>
            <li>Water supply is from bore well with water purifier and cooler for the common use, situated in the college campus.</li>
            <li>Common Room available with LCD TV for entertainment and some indoor game facilities.</li>
          </ul>
          
          <p className="font-semibold">Hostel Warden: Mrs. Dolly (Contact No. – +918765624982)</p>
        </section>

        {/* Boys Hostel Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">BOYS HOSTEL</h2>
          <p className="mb-4">
            Boys Hostel of SAS Ayurvedic College is situated in the college campus area at Harhua. It was started in year 2019.
          </p>

          <h3 className="text-xl font-semibold mb-2">Facilities</h3>
          <ul className="list-disc list-inside mb-4">
            <li>The hostel is equipped with 37 rooms, each of 2 bed capacity, study hall, mess hall, kitchen and a guest room.</li>
            <li>Mess facility available and run by management with the association with residing students.</li>
            <li>24X7 hours availability of cleaning staffs.</li>
            <li>Water supply is from bore well with water purifier and cooler for the common use, situated in the college campus.</li>
            <li>Common Room available with LCD TV for entertainment and some indoor game facilities.</li>
            <li>Outdoor Game facilities like Volleyball also available.</li>
          </ul>

          <p className="font-semibold">Hostel Warden: Mr. Ajit (Contact No. – +918765624985)</p>
        </section>
      </div>
    </div>
  );
};

export default HostelInfrastructure;

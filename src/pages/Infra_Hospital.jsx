import React from 'react';
import Heading from '../ui_component/common_comp/Heading';

const InfrastructureDetails = () => {
  const adminBlockDetails = [
    { id: 1, department: 'Superintendent Room', area: 20 },
    { id: 2, department: 'Deputy Superintendent Room', area: 10 },
    { id: 3, department: 'Medical Officers Room (For 2 Resident Medical / Surgical Officer)', area: 15 },
    { id: 4, department: 'Matron Room', area: 10 },
    { id: 5, department: 'Assistant Matron Room (For 2)', area: 10 },
    { id: 6, department: 'Reception & Registration Room', area: 40 },
  ];

  const opBlockDetails = [
    { id: 1, department: 'Kayachikitsa OPD', area: 20 },
    { id: 2, department: 'Shalya OPD', area: 20 },
    { id: 3, department: 'Shalakya OPD', area: 20 },
    { id: 4, department: 'Stree Roga Evam Prasuti Tantra OPD', area: 20 },
    { id: 5, department: 'Kaumarbhritya (Balroga)', area: 15 },
    { id: 6, department: 'Swastharakshan & Yoga OPD', area: 15 },
    { id: 7, department: 'Atyayik (Casualty) Section', area: 20 },
    { id: 8, department: 'Dressing & First-Aid Room, Ksharsutra Room', area: 20 },
    { id: 9, department: 'Dispensary', area: 20 },
    { id: 10, department: 'Waiting space for patients', area: 90 },
    { id: 11, department: 'Store', area: 10 },
    { id: 12, department: 'Male & Female Toilet for Patients', area: 30 },
  ];

  const ipdBlockDetails = [
    { id: 1, department: 'Kayachikitsa Male Ward', area: 200 },
    { id: 2, department: 'Kayachikitsa Female Ward', area: 100 },
    { id: 3, department: 'Panchakarma Male Ward', area: 50 },
    { id: 4, department: 'Panchakarma Female Ward', area: 50 },
    { id: 5, department: 'Shalya Male Ward', area: 75 },
    { id: 6, department: 'Shalya Female Ward', area: 75 },
    { id: 7, department: 'Shalakya Tantra Ward', area: 75 },
    { id: 8, department: 'Prasooti evum Stri Roga Ward', area: 150 },
    { id: 9, department: 'Kaumar Bhritya (Balaroga) Ward', area: 50 },
    { id: 10, department: 'Doctors duty room one for each department', area: 25 },
    { id: 11, department: 'Nursing staff duty rooms, one in each ward', area: 25 },
    { id: 12, department: 'Store room for linen, etc.', area: 25 },
  ];

  const otBlockDetails = [
    { id: 1, department: 'Major Operation Theatre', area: 30 },
    { id: 2, department: 'Minor Operation Theatre', area: 20 },
    { id: 3, department: 'Shalakya Operation Theatre', area: 10 },
    { id: 4, department: 'Labour Room with attached toilet and bath room', area: 20 },
    { id: 5, department: 'Neonatal care room', area: 15 },
    { id: 6, department: 'Central sterilisation/autoclave unit', area: 10 },
    { id: 7, department: 'Scrub room', area: 15 },
    { id: 8, department: 'Two Recovery room', area: 10 },
    { id: 9, department: 'Doctors duty room with attached toilet and bath room', area: 10 },
    { id: 10, department: 'Interns/house officer/resident doctors room with attached toilet and bath room', area: 10 },
    { id: 11, department: 'Nursing staff room with attached toilet and bath room', area: 10 },
  ];

  const panchkarmaDetails = [
    { id: 1, department: 'Snehana Kaksha (Male)', area: 15 },
    { id: 2, department: 'Snehana Kaksha (Female)', area: 15 },
    { id: 3, department: 'Swedana Kaksha (Male)', area: 15 },
    { id: 4, department: 'Swedana Kaksha (Female)', area: 15 },
    { id: 5, department: 'Shirodhara Kaksha (Male)', area: 15 },
    { id: 6, department: 'Shirodhara Kaksha (Female)', area: 15 },
    { id: 7, department: 'Vamana Kaksha (Male)', area: 10 },
    { id: 8, department: 'Vamana Kaksha (Female)', area: 10 },
    { id: 9, department: 'Virechana Kaksha (Male)', area: 10 },
    { id: 10, department: 'Virechana Kaksha (Female)', area: 10 },
    { id: 11, department: 'Basti Kaksha (Male)', area: 10 },
    { id: 12, department: 'Basti Kaksha (Female)', area: 10 },
    { id: 13, department: 'Rakta Mokshana, Jalaukavacharana, Agnikarma, Pracchanna etc Kaksha', area: 10 },
    { id: 14, department: 'Panchakarma therapist/Physician’s room', area: 20 },
    { id: 15, department: 'Panchakarma store room', area: 10 },
    { id: 16, department: 'Four attached toilet-baths for males and four for females with wash basin and geyser facility in each', area: 20 },
  ];

  const physiotherapyDetails = [
    { id: 1, department: 'Physiotherapy Room', area: 50 },
    { id: 2, department: 'Physiotherapist Room', area: 25 },
  ];

  const labDetails = [
    { id: 1, department: 'Well equipped and spacious area of hundred square meter with separate sections for Pathology, Biochemistry and Micro-biology', area: 75 },
    { id: 2, department: 'Attached toilet shall be there for collection of urine samples', area: 5 },
    { id: 3, department: 'Other diagnostic tools for ECG or TMT etc', area: 20 },
  ];

  const radiologyDetails = [
    { id: 1, department: 'Radiologist chamber', area: 5 },
    { id: 2, department: 'X-ray room', area: 15 },
    { id: 3, department: 'Dark room', area: 5 },
    { id: 4, department: 'Film drying room', area: 5 },
    { id: 5, department: 'Store room', area: 5 },
    { id: 6, department: 'Ultra Sonography Room', area: 5 },
    { id: 7, department: 'Patients waiting and dressing room', area: 5 },
    { id: 8, department: 'Reception or registration or report room', area: 5 },
  ];

  const kitchenDetails = [
    { id: 1, department: 'Kitchen and Canteen', area: 100 },
  ];

  const storeDetails = [
    { id: 1, department: 'Store/Mortuary', area: 25 },
  ];

  const otherInfrastructureDetails = [
    { id: 1, department: 'Ambulance Service', available: 'Yes' },
    { id: 2, department: 'Sitting arrangement for visitors/patients', available: 'Yes' },
    { id: 3, department: 'Animal House', available: 'No' },
    { id: 4, department: 'Central Research Laboratory', available: 'No' },
  ];

  const renderTable = (data) => (
    <table className="min-w-full border border-gray-300 mt-4">
      <thead className="bg-gray-200">
        <tr>
          <th className="border border-gray-300 px-4 py-2">S.No</th>
          <th className="border border-gray-300 px-4 py-2">Name of the Departments</th>
          <th className="border border-gray-300 px-4 py-2">Available Area (in Sq. mtr.)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border border-gray-300 px-4 py-2">{item.id}</td>
            <td className="border border-gray-300 px-4 py-2">{item.department}</td>
            <td className="border border-gray-300 px-4 py-2">{item.area}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderOtherInfrastructureTable = (data) => (
    <table className="min-w-full border border-gray-300 mt-4">
      <thead className="bg-gray-200">
        <tr>
          <th className="border border-gray-300 px-4 py-2">S.No</th>
          <th className="border border-gray-300 px-4 py-2">Facility</th>
          <th className="border border-gray-300 px-4 py-2">Available</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border border-gray-300 px-4 py-2">{item.id}</td>
            <td className="border border-gray-300 px-4 py-2">{item.department}</td>
            <td className="border border-gray-300 px-4 py-2">{item.available}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Introduction with Infrastructure</h1> */}
      <Heading name={"Introduction with Infrastructure"}/>
      <p className="my-7 mx-7">
        The SAS Ayurvedic Hospital consists of a 60 bedded Hospital with OPD and IPD Facilities, Panchakarma Unit, Central Laboratory, Primary Emergency Care Unit, General Wards, Operation Theatres, Consultation Rooms, X-ray Room, ECG Room, Sonography Room, Physio Therapy Facility, etc.
      </p>
      <p className="my-7 mx-7">
        The main objective of the Hospitals is to provide medical care through the Ayurvedic System of Medicine to the suffering humanity. The Institute is engaged in excellent activities in the field of Patient Care through its OPD, IPD, Panchakarma Therapies, Primary Emergency Care Unit, Central Laboratory, various Specialty Clinics, and facilities like Pathological Tests, Bio-chemical Tests, X-ray, ECG, Ultra Sound, Treatment of Anorectal, Jalokavacharan, Agnikarma, Pregnancy Test, Vaccination Unit, etc. Special treatment facilities are available for various eye diseases and disorders, and other ENT-related disorders. There is an Ambulance available in the hospital to take care of patients in emergency situations.
      </p>

      {/* <h2 className="text-xl font-bold mt-4">Infrastructure</h2> */}
      <Heading name={"Infrastructure"}/>

      {/* <h3 className="text-lg font-bold mt-4">Admin Block Details</h3> */}
      {renderTable(adminBlockDetails)}

      <h3 className="text-lg font-bold mt-4"></h3>
      <Heading name={"Hospital OPD Block Details"}/>
      {renderTable(opBlockDetails)}

      {/* <h3 className="text-lg font-bold mt-4">Hospital IPD </h3> */}
      <Heading name={"Hospital IPD Block Details"}/>
      {renderTable(ipdBlockDetails)}

      {/* <h3 className="text-lg font-bold mt-4">Hospital OT </h3> */}
      <Heading name={"Operation Theatre Block Details"}/>
      {renderTable(otBlockDetails)}
 
      <Heading name={"Panchkarma Department Details"}/>
      {renderTable(panchkarmaDetails)}
 
      <Heading name={"Hospital Physiotherapy Unit Details"}/>
      {renderTable(physiotherapyDetails)}
 
      <Heading name={"Hospital Clinical Laboratory Details"}/>
      {renderTable(labDetails)}
 
      <Heading name={"Hospital Radiology/Sonography Block Detail"}/>
      {renderTable(radiologyDetails)}
 
      <Heading name={"Hospital Kitchen and Canteen Block Details"}/>
      {renderTable(kitchenDetails)}
 
      <Heading name={"Hospital Store/Mortuary Block Details"}/>
      {renderTable(storeDetails)}

      <Heading name={"Other Infrastructure Details"}/>
      {renderOtherInfrastructureTable(otherInfrastructureDetails)}
    </div>
  );
};

export default InfrastructureDetails;

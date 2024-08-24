import React from 'react';

const CollegeFacilities = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-center mb-8">College & Hostel Facilities</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Clinical Facility</h2>
        <p className="text-gray-700">
          SAS Ayurvedic College runs a hospital with 60 beds on the campus, with all departments and amenities.
          A complete unit of Panchkarma is established as a separate unit.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Laboratories</h2>
        <p className="text-gray-700">
          All the Laboratories relating to their respective subjects namely Physiology, Pathology, Anatomy, 
          Pharmacognosy, Pharmacy, Panchkarma, etc. are well equipped with adequate equipment.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Library</h2>
        <p className="text-gray-700">
          The library has more than 7500 books related to Ayurveda. Plenty of modern subject books are also 
          available in the library to understand the knowledge of modern medicine. We are planning subscription 
          to a good number of medical journals and magazines, and the library is digitally equipped with computer 
          services to ensure easy search, study, and research activities with Wi-Fi facility.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Herbal Garden</h2>
        <p className="text-gray-700">
          The herbal garden provides herbs on a large scale for imparting knowledge about their identification 
          and pharmacopoeia. The herbal garden has more than 200 medicinal plants and a small nursery to develop 
          medicinal plants. Herbal Garden comprises an area of 2680.4 sq. meters. A small demonstration room is 
          also situated in the herbal garden.
        </p>
      </section>
    </div>
  );
};

export default CollegeFacilities;

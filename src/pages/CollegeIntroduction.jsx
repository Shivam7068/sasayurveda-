import React from 'react';
import Heading from '../ui_component/common_comp/Heading';

const CollegeIntroduction = () => {
  const salientFeatures = [
    "A spacious college building with ultra-modern equipment and well-furnished departments",
    "60 bed Hospital Facility",
    "Highly qualified & experienced teaching staff",
    "A spacious & peaceful yoga hall",
    "A beautiful and resourceful herbal garden",
    "Separate hostel facility for boys & girls",
    "Research & Development Centre",
  ];

  return (
    <div className="p-4 flex flex-col gap-10">
      {/* <h1 className="text-2xl font-bold mb-4"></h1> */}
      <Heading name={"College & Hostel Introduction"}/>

      <section className="mb-6 md:mx-6 mx-4">
        <h2 className="text-xl font-bold mb-2">College</h2>
        <p className="mb-4">
          SAS Ayurvedic Medical College is providing holistic development of students. SAS Ayurvedic College comprises highly qualified and experienced faculty drawn from the best Ayurvedic medical college like Banaras Hindu University, National Institute of Ayurveda etc. Curriculum aligned with industry needs makes students employable and job ready. SAS Ayurvedic College is committed to make students job-ready by providing skill based value additions. All programmes are supported by laboratories, equipment’s, libraries, computer laboratories and other infrastructural needs for meeting the demands of the programmes.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold mb-2 mx-6">Salient Features:</h3>
        <ul className="list-disc pl-6">
          {salientFeatures.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CollegeIntroduction;

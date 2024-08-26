import React from 'react'
import Header from './ui_component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import CollegeCouncil from './pages/CollegeHostelPage'
import IntroductionPage from './pages/Introduction'
import CourseFeePage from './pages/CouserFeePage'
import RulesRegulationPage from './pages/RulesRegulationPage'
import Footer from './ui_component/common_comp/Footer'
import CollegeHostelPage from './pages/CourseIntroduction'
import Affiliation from './pages/Affiliation'
import PermissionLetters from './pages/Permission_letter'
import GalleryPage from './ui_component/common_comp/GalleryPage'
import { award, cme, conference, extraCarri } from './data/gallery'
import InfrastructureDetails from './pages/Infra_Hospital'
import CollegeIntroduction from './pages/CollegeIntroduction'
import Charges from './pages/Charges'
import Whatsapp from './ui_component/common_comp/WhatsApp'
import TopBar from './ui_component/common_comp/TopBar'
import HostelInfrastructure from './pages/HostelInfrastructure'
import CollegeFacilities from './pages/College_Facility'
import Apply from './pages/Apply'

const App = () => {
  return (
    <>
      <BrowserRouter className='relative'>
        <TopBar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/introduction' element={<IntroductionPage />} />
          <Route path='/about/course-fee' element={<CourseFeePage />} />
          <Route path='/about/rule-regulation' element={<RulesRegulationPage />} />
          <Route path='/college/college-council' element={<CollegeCouncil />} />
          <Route path='/college/college-hostel-facilities' element={<CollegeFacilities />} />
          <Route path='/college/introduction' element={<CollegeHostelPage />} />
          <Route path='/university-affiliation' element={<Affiliation />} />
          <Route path='/permission-letter' element={<PermissionLetters />} />
          <Route path='/infra_hospital' element={<InfrastructureDetails />} />
          <Route path='/gallery/cme' element={<GalleryPage galleryData={cme} name={"Continuous Medical Education(CME)"} />} />
          <Route path='/gallery/conference' element={<GalleryPage galleryData={conference} name={"Conference"} />} />
          <Route path='/gallery/award' element={<GalleryPage galleryData={award} name={"Award and Achivements"} />} />
          <Route path='/gallery/extra-carricular' element={<GalleryPage galleryData={extraCarri} name={"Games and other extra curricular activities"} />} />
          <Route path='/college/intro' element={<CollegeIntroduction />} />
          <Route path='/hospital/charges' element={<Charges />} />
          <Route path='/college/hostelInfra' element={<HostelInfrastructure />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/apply-now' element={<Apply />} />


        </Routes>
        <Whatsapp />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

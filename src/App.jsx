import React from 'react'
import Navbar from './ui_component/Navbar'
import Header from './ui_component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UsefulLinks from './ui_component/home_com/UsefulLinks'
import Contact from './pages/Contact'
import CollegeCouncil from './pages/CollegeHostelPage'
import IntroductionPage from './pages/Introduction'
import Fee from './pages/CouserFeePage'
import CourseFeePage from './pages/CouserFeePage'
import RulesRegulationPage from './pages/RulesRegulationPage'
import Footer from './ui_component/common_comp/Footer'
import CollegeHostelPage from './pages/CourseIntroduction'
import Affiliation from './pages/Affiliation'
import PermissionLetters from './pages/Permission_letter'
import HospitalInfrastructure from './pages/Infra_Hospital'
import GalleryPage from './ui_component/common_comp/GalleryPage'
import { award, cme, conference, extraCarri } from './data/gallery'
import InfrastructureDetails from './pages/Infra_Hospital'
import CollegeIntroduction from './pages/CollegeIntroduction'
import Charges from './pages/Charges'

const App = () => {
  return (
    <>
      <BrowserRouter className='relative'>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/about/introduction' element={<IntroductionPage />} />
          <Route path='/about/course-fee' element={<CourseFeePage />} />
          <Route path='/about/rule-regulation' element={<RulesRegulationPage />} />
          <Route path='/College/college-council' element={<CollegeCouncil />} />
          <Route path='/college/introduction' element={<CollegeHostelPage />} />
          <Route path='/university-affiliation' element={<Affiliation />} />
          <Route path='/permission-letter' element={<PermissionLetters />} />
          <Route path='/infra_hospital' element={<InfrastructureDetails />} />
          <Route path='/gallery/cme' element={<GalleryPage galleryData={cme} name={"Continuous Medical Education(CME)"} />} />
          <Route path='/gallery/conference' element={<GalleryPage galleryData={conference} name={"Conference"} />} />
          <Route path='/gallery/award' element={<GalleryPage galleryData={award} name={"Award and Achivements"} />} />
          <Route path='/gallery/extra-carricular' element={<GalleryPage galleryData={extraCarri} name={"Games and other extra curricular activities"} />} />
          <Route path='/college/intro' element={<CollegeIntroduction/>} />
          <Route path='/hospital/charges' element={<Charges />} />

        </Routes>
        <UsefulLinks />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

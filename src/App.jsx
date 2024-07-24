import React from 'react'
import Navbar from './ui_component/Navbar'
import Header from './ui_component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UsefulLinks from './ui_component/home_com/UsefulLinks'

const App = () => {
  return (
    <>
      <BrowserRouter className='relative'>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <UsefulLinks />
      </BrowserRouter>
    </>
  )
}

export default App

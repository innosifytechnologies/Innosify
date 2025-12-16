import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import ServiceDetails from './pages/ServiceDetails'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'

// Service Pages
import { STEMEducation, EngineeringSolutions, ITServices } from './pages/services'

const App = () => {
  return (
    <div className='min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden'>
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/services/:id" element={<ServiceDetails />} />

          {/* Service Pages */}
          <Route path="/services/stem-education" element={<STEMEducation />} />
          <Route path="/services/engineering-solutions" element={<EngineeringSolutions />} />
          <Route path="/services/it-services" element={<ITServices />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
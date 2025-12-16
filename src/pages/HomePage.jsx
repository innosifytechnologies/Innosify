import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="bg-[#0a0a0f]">
      <Hero />
      <Features />
      <Stats />
      <div id="services">
        <Services />
      </div>
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default HomePage
import React from 'react'
import HeroSection from '../components/HeroSection'
import TestimonialSection from '../components/TestimonialSection'
import FooterSection from '../components/FooterSection'
import FeaturesSection from '../components/FeaturesSection'

const LandingPage = () => {
  return (
    <div>
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <TestimonialSection />
          <FooterSection/>
    </div>
  )
}

export default LandingPage


import HeroSection from '../components/HeroSection'
import TestimonialSection from '../components/TestimonialSection'
import FooterSection from '../components/FooterSection'
import FeaturesSection from '../components/FeaturesSection'
import Navbar from '../components/Navbar'
import EventPageComponent from '../components/EventPage'

const LandingPage = () => {
  return (
    <div className='bg-[#bba5ea]'>
      
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <TestimonialSection />
          <FooterSection/>
          <EventPageComponent />
    </div>
  )
}

export default LandingPage

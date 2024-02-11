import Navbar from './Navbar';
import Testimonials from './Testimonials';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSection';
import FooterSection from './FooterSection';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      {/* <Testimonials /> */}
      <FooterSection />
    </>
  );
}

export default LandingPage;

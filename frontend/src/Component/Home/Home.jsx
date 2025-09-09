import React from 'react'
import HeroSection from './Hero'
import HomeAbout from './HomeAbout'
import ServicesSection from './HomeService'
import VisionSection from './VisionSection'
import WhoWeAre from './WhoWeAre'
import PortfolioSection from './Portfolio'
import TestimonialsSection from './Testimonial'
import ProcessSection from './Process'
import ContactSection from './ContactSection'


const Home = () => {
  return (
    <div>
     <HeroSection />
     <HomeAbout />
     <VisionSection />
     <ServicesSection />
     <WhoWeAre />
     <PortfolioSection />
     <TestimonialsSection/>
     <ProcessSection />
     <ContactSection />
    </div>
  )
}

export default Home

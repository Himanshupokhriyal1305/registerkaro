import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import TrustedBy from './Component/TrustedBy/TrustedBy'
import ServicesComponent from './Component/ServicesComponent/ServicesComponent'
import AboutSection from './Component/AboutSection/AboutSection'
import WhyChooseUs from './Component/WhyChooseUs/WhyChooseUs'
import VideoIntro from './Component/VideoIntro/VideoIntro'
import Footer from './Component/Footer/Footer'
import HeroSection from './Component/HeroSection/HeroSection'
import Trusted from './Component/Trusted/Trusted'
import Statistics from './Component/Statistics/Statistics'
import HeaderBar from './Component/HeaderBar/HeaderBar'
import Testimonials from './Component/Testimonials/Testimonials'

function App() {
  return (
    <div>
    <HeaderBar/>
      <Navbar/>
      <Banner/>
      <TrustedBy/>
      <ServicesComponent/>
      <AboutSection/>
      <Testimonials/>
      
      <WhyChooseUs/>
      <VideoIntro/>
      <HeroSection/>
      <Statistics/>
      <Trusted/>
      <Footer/>

    </div>
  )
}

export default App

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

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <TrustedBy/>
      <ServicesComponent/>
      <AboutSection/>
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

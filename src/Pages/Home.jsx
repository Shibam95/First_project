import React from 'react'
import Banner from '../Components/Core/Home/Banner'
import About from '../Components/Core/Home/About'
import Testimonials from '../Components/Core/Home/Testimonials'
import TourPackage from '../Components/Core/Home/TourPackage'
import Guider from '../Components/Core/Home/Guider'
import Services from '../Components/Core/Home/Services'
import Destination from './Destinations/Destination'
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'
import Blog from '../Components/Core/Home/Blog'

const Home = () => {
  return (
    <>
    <Navbar/>
      <div style={{ backgroundImage: 'url("https://png.pngtree.com/background/20210711/original/pngtree-travel-together-white-minimalist-banner-picture-image_1095592.jpg")'}}>
        <Banner />
        <About />
        <TourPackage />
        <Destination/>
        <Services />
        <Guider />
        <Blog/>
        <Testimonials />
      </div>
      <Footer/>
    </>
  )
}

export default Home
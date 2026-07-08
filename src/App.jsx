import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Stats from './components/stats/Stats'
import Services from './components/services/Services'
import Destinations from './components/destinations/Destinations'
import Packages from './components/packages/Packages'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import BookingForm from './components/booking/BookingForm'
import Gallery from './components/gallery/Gallery'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Destinations />
      <Packages />
      <Testimonials />
      <Footer />
      <BookingForm />
      <Gallery />
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './components/Navigation_bar'
import HeroSection from './components/Hero_section'
import Chatbot from './components/Chatbot'
import ServicesSection from './components/Services'
import AppointmentBooking from './components/Appointment_booking'
import InteractiveServices from './components/Interactive_services'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Chatbot/>
      <ServicesSection/>
      <AppointmentBooking/>
      <InteractiveServices/>
    </div>
  )
}

export default App
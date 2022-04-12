import React from 'react'
import Header from '../components/Header'
import HeaderSection from '../components/HeaderSection'
import AnimatedCardRight from '../components/AnimatedCardsRight'
import AnimatedCardleft from '../components/AnimatedCardLeft'
import InfoSection from '../components/InfoSection'
import ServiceSection from '../components/ServiceSection'

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeaderSection />
      <AnimatedCardRight/>
      <AnimatedCardleft/>
      <ServiceSection />
      <InfoSection />
    </div>
  )
}

export default HomePage

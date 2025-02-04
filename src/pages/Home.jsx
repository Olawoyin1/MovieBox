import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import Pricing from '../components/Pricing'
import Trial from '../components/Trial'
import Cat from '../components/Cat'

const Home = () => {
  return (
    <div>
        <Hero />
        <Cat />
        <Services />
        <FAQ />
        <Pricing />
        <Trial />
    </div>
  )
}

export default Home
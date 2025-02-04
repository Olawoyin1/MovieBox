import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import Pricing from '../components/Pricing'
import Trial from '../components/Trial'
import Cat from '../components/Cat'

const Home = () => {
    const data = [
        {
          id: 1,
          category: "Our Genres",
          title: "Action",
          image: "../../Images/mix.png",
        },
        {
          id: 1,
          category: "Our Genres",
          title: "Adventure",
          image: "../../Images/mix1.png",
        },
        {
          id: 1,
          category: "Our Genres",
          title: "Comedy",
          image: "../../Images/container (10).png",
        },
        {
          id: 1,
          category: "Our Genres",
          title: "Drama",
          image: "../../Images/container (11).png",
        },
        {
          id: 1,
          category: "Our Genres",
          title: "Horror",
          image: "../../Images/container (12).png",
        },
    ];
  return (
    <div>
        <Hero />
        <Cat 
          data={data} header={"Explore our wide variety of categories"} 
          desc={"Whether you're looking for a comedy to make you laugh, a drama  to make you think, or a documentary to learn something new"} 
          arrow={true}
        />
        <Services />
        <FAQ />
        <Pricing />
        <Trial />
    </div>
  )
}

export default Home
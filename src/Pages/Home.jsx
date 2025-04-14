import React from 'react'
import CarouselPage from '../Components/CarouselPage'
import BakeryApproach from '../Components/BrakeryApproach'
import FeaturedCakes from '../Components/FeaturedCakes'
import ServicesWeOffer from '../Components/ServicesWeOffer'
import ChefsSection from '../Components/ChefsSection'
import RealTaste from '../Components/RealTaste'
import TestimonialCarousel from '../Components/TestimonialCarousel'
import LatestBlogSection from '../Components/LatestBlogSection'

const Home = () => {
  return (
    <>
    <CarouselPage/>
    <BakeryApproach/>
    <FeaturedCakes/>
    <ServicesWeOffer/>
    <ChefsSection/>
    <RealTaste/>
    <TestimonialCarousel/>
    <LatestBlogSection/>
    </>
  )
}

export default Home
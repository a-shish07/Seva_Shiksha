import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import CoursesSection from '../components/home/CoursesSection'
import ServicesSection from '../components/home/ServicesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import StatsSection from '../components/home/StatsSection'
import UniversitiesSection from '../components/home/UniversitiesSection'
import GallerySection from '../components/home/GallerySection'
import VideosSection from '../components/home/VideosSection'
import HonoursSection from '../components/home/HonoursSection'
import RegistrationSection from '../components/home/RegistrationSection'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [location])

  return (
    <div className="pt-20"> {/* Account for fixed navbar */}
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ServicesSection />
      <HonoursSection />
      <TestimonialsSection />
      {/* <RegistrationSection /> */}
      <VideosSection />
      <UniversitiesSection />
      <GallerySection />
      <StatsSection />
    </div>
  )
}

export default Home
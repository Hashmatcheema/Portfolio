'use client';

import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ClarrieShowcase from '../components/ClarrieShowcase'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <ClarrieShowcase />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
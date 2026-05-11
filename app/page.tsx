import Nav from './components/Nav'
import Hero from './components/Hero'
import HowIWork from './components/HowIWork'
import WhatIDo from './components/WhatIDo'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowIWork />
        <WhatIDo />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

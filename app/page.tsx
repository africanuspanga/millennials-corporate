import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MissionVision from '@/components/MissionVision'
import Values from '@/components/Values'
import Services from '@/components/Services'
import Leadership from '@/components/Leadership'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Values />
      <Services />
      <Leadership />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

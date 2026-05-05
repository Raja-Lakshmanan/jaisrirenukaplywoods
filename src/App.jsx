import About from './components/About'
import AnimatedBackground from './components/AnimatedBackground'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Reviews from './components/Reviews'
import WhatsAppButton from './components/WhatsAppButton'
import WhyChoose from './components/WhyChoose'

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChoose />
        <Brands />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App

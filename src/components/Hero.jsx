import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

const doorSpring = {
  stiffness: 72,
  damping: 24,
  mass: 0.72,
}

function Hero() {
  const heroRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 1024px)').matches)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 620px)').matches)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const doorOpenRange = isDesktop ? 0.07 : 0.18
  const doorFadeStart = isDesktop ? 0.08 : 0.12
  const doorFadeEnd = isDesktop ? 0.16 : 0.28
  const revealStart = isDesktop ? 0.025 : 0.16
  const revealEnd = isDesktop ? 0.08 : 0.32
  const lightEnd = isDesktop ? 0.12 : 0.24
  const leftDoorRotate = useSpring(useTransform(scrollYProgress, [0, doorOpenRange], [0, -72]), doorSpring)
  const rightDoorRotate = useSpring(useTransform(scrollYProgress, [0, doorOpenRange], [0, 72]), doorSpring)
  const leftDoorX = useSpring(useTransform(scrollYProgress, [0, 0.18], ['0%', '-72%']), doorSpring)
  const rightDoorX = useSpring(useTransform(scrollYProgress, [0, 0.18], ['0%', '72%']), doorSpring)
  const doorOpacity = useSpring(useTransform(scrollYProgress, [doorFadeStart, doorFadeEnd], [1, 0]), doorSpring)
  const revealOpacity = useSpring(useTransform(scrollYProgress, [revealStart, revealEnd], [0, 1]), doorSpring)
  const revealY = useSpring(useTransform(scrollYProgress, [revealStart, revealEnd], [24, 0]), doorSpring)
  const lightScale = useSpring(useTransform(scrollYProgress, [0, lightEnd], [0.86, 1.14]), doorSpring)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const mediaQuery = window.matchMedia('(max-width: 620px)')
    const updateDesktopState = (event) => setIsDesktop(event.matches)
    const updateMobileState = (event) => setIsMobile(event.matches)

    desktopQuery.addEventListener('change', updateDesktopState)
    mediaQuery.addEventListener('change', updateMobileState)
    return () => {
      desktopQuery.removeEventListener('change', updateDesktopState)
      mediaQuery.removeEventListener('change', updateMobileState)
    }
  }, [])

  return (
    <section id="home" className="hero-section hero-wrapper section" ref={heroRef}>
      <div className="hero-bg-texture" />

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...premiumTransition, duration: 0.85 }}
        >
          <p className="eyebrow">Premium Materials for Modern Interiors</p>
          <h1>Jai Sri Renuka Plywoods</h1>
          <p>
            Plywood shop in Madurai offering MDF boards, laminates, veneers, wooden doors, PVC sheets,
            louvers, adhesives, charco panels, acrylic mica, wooden floorings, and interior materials.
          </p>
          <div className="hero-actions">
            <a href="tel:+918489719447" className="btn btn-gold" aria-label="Call Jai Sri Renuka Plywoods">
              <FaPhoneAlt />
              Call Now
            </a>
            <a
              href="https://wa.me/918489719447"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Jai Sri Renuka Plywoods on WhatsApp"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a href="#products" className="btn btn-light">
              View Products
            </a>
          </div>
        </motion.div>

        <div className="premium-door-scene">
          <motion.div className="warm-light" style={{ scale: lightScale, opacity: revealOpacity }} aria-hidden="true" />
          <motion.div className="showroom-glow" style={{ opacity: revealOpacity, y: revealY }} aria-hidden="true">
            <span />
            <span />
            <span />
          </motion.div>
          <div className="door-frame door-scene">
            <div className="door-reveal-content">
              <h3>Jai Sri Renuka Plywoods</h3>
              <p>Premium Plywood &amp; Interior Solutions</p>
            </div>
            <motion.div
              className="door-panel left-door"
              style={isMobile ? { x: leftDoorX, opacity: doorOpacity } : { rotateY: leftDoorRotate, opacity: doorOpacity }}
            >
              <div className="door-inset" />
              <div className="door-verticals">
                <span />
                <span />
                <span />
              </div>
              <div className="door-handle left-handle" />
            </motion.div>
            <motion.div
              className="door-panel right-door"
              style={isMobile ? { x: rightDoorX, opacity: doorOpacity } : { rotateY: rightDoorRotate, opacity: doorOpacity }}
            >
              <div className="door-inset" />
              <div className="door-verticals">
                <span />
                <span />
                <span />
              </div>
              <div className="door-handle right-handle" />
            </motion.div>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

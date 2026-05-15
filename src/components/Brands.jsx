import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import main1 from '../assets/main.png'
import green from '../assets/green.png'
import advance from '../assets/advance.jpg'
import tree from '../assets/tree.png'
import virgo from '../assets/virgo.jpeg'
import glo from '../assets/gio.jpeg'
import ivas from '../assets/ivas.png'
import brown from '../assets/brown.jpg'
import century from '../assets/century.png'
import merino from '../assets/merino.png'
import fine from '../assets/fine.jpg'
import kit from '../assets/kit.png'
import saron from '../assets/saron.png'
import sai from '../assets/sai.png'
import kan from '../assets/kanb.png'
import pr from '../assets/pr.png'
import euro from '../assets/euro.jpg'
import pebble from '../assets/pebble.png'
import virMdfLogo from '../assets/images.jpg'
import actionTesaLogo from '../assets/download.png'
import greenpanelLogo from '../assets/images (1).png'
import corelamLogo from '../assets/download (1).png'
import rel from '../assets/relwood_logo.jpg'
import pare from '../assets/pare.webp'
const brandCategories = [
  'All',
  'Main Dealers',
  'Plywood',
  'Mica',
  'Doors',
  'Interior',
  'Veneers',
  'MDF',
]

const brands = [
  {
    name: 'Magnus Plywoods',
    category: 'Plywood',
    isMainDealer: true,
    logo: main1,
    tag: 'Plywood',
  },
  {
    name: 'Greenply',
    category: 'Plywood',
    isMainDealer: false,
    logo: green,
    tag: 'Plywood',
  },
  {
    name: 'Kitply',
    category: 'Plywood',
    isMainDealer: false,
    logo: kit,
    tag: 'Plywood',
  },
  {
    name: 'Sharon',
    category: 'Plywood',
    isMainDealer: false,
    logo: saron,
    tag: 'Plywood',
  },
  {
    name: 'Sainik 710',
    category: 'Plywood',
    isMainDealer: false,
    logo: sai,
    tag: 'Plywood',
  },
  {
    name: 'Fine Plywoods',
    category: 'Plywood',
    isMainDealer: false,
    logo: fine,
    tag: 'Plywood',
  },
  {
    name: 'Advance Decorative Laminates',
    category: 'Mica',
    isMainDealer: true,
    logo: advance,
    tag: 'Mica',
  },
  {
    name: 'Virgo',
    category: 'Mica',
    isMainDealer: false,
    logo: virgo,
    tag: 'Mica',
  },
  {
    name: 'Treelam',
    category: 'Mica',
    isMainDealer: false,
    logo: tree,
    tag: 'Mica',
  },
  {
    name: 'Glorio',
    category: 'Mica',
    isMainDealer: false,
    logo: glo,
    tag: 'Mica',
  },
  {
    name: 'Brown Paper',
    category: 'Mica',
    isMainDealer: false,
    logo: brown,
    tag: 'Mica',
  },
  {
    name: 'IVAS',
    category: 'Mica',
    isMainDealer: false,
    logo: ivas,
    tag: 'Mica',
  },
  {
    name: 'Century Laminates',
    category: 'Veneers',
    isMainDealer: false,
    logo: century,
    tag: 'Veneers',
  },
  {
    name: 'Merino',
    category: 'Mica',
    isMainDealer: false,
    logo: merino,
    tag: 'Mica',
  },
  {
    name: 'Kan_B',
    category: 'Doors',
    isMainDealer: false,
    logo: kan,
    tag: 'Doors',
  },
  {
    name: 'Pravesh Doors',
    category: 'Doors',
    isMainDealer: false,
    logo: pr,
    tag: 'Doors',
  },
  {
    name: 'VIR MDF',
    category: 'MDF',
    isMainDealer: false,
    logo: virMdfLogo,
    tag: 'MDF',
  },
  {
    name: 'Action TESA',
    category: 'MDF',
    isMainDealer: false,
    logo: actionTesaLogo,
    tag: 'MDF',
  },
  {
    name: 'Greenpanel',
    category: 'MDF',
    isMainDealer: false,
    logo: greenpanelLogo,
    tag: 'MDF',
  },
  {
    name: 'CoreLAM',
    category: 'MDF',
    isMainDealer: false,
    logo: corelamLogo,
    tag: 'MDF',
  },
 
  {
    name: 'Euro Pratik',
    category: 'Interior',
    isMainDealer: false,
    logo: euro,
    tag: 'Interior',
  },
  {
    name: 'Glorio',
    category: 'Interior',
    isMainDealer: false,
    logo: glo,
    tag: 'Interior',
  },
  {
    name: 'Pebble',
    category: 'Interior',
    isMainDealer: false,
    logo: pebble,
    tag: 'Interior',
  },
  {
    name: 'Relwood',
    category: 'Interior',
    isMainDealer: false,
    logo: rel,
    tag: 'Interior',
  },
  {
    name: 'Pare',
    category: 'Interior',
    isMainDealer: false,
    logo: pare,
    tag: 'Interior',
  },
]

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

function Brands() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isPaused, setIsPaused] = useState(false)
  const brandScrollRef = useRef(null)
  const animationRef = useRef(null)
  const resumeTimer = useRef(null)
  const isHovering = useRef(false)
  const brandRepeatCount = 8

  const filteredBrands = useMemo(() => (
    activeCategory === 'All'
      ? brands
      : activeCategory === 'Main Dealers'
        ? brands.filter((brand) => brand.isMainDealer)
        : brands.filter((brand) => brand.category === activeCategory)
  ), [activeCategory])

  const shouldAutoScroll = filteredBrands.length > 4

  const repeatedBrands = useMemo(() => (
    shouldAutoScroll && filteredBrands.length > 0
      ? Array.from({ length: brandRepeatCount }, () => filteredBrands).flat()
      : []
  ), [filteredBrands, shouldAutoScroll])

  const displayBrands = shouldAutoScroll ? repeatedBrands : filteredBrands

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setIsPaused(false)
    setTimeout(() => {
      if (brandScrollRef.current) {
        brandScrollRef.current.scrollLeft = 0
      }
    }, 50)
  }

  const pauseTemporarily = () => {
    setIsPaused(true)
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current)
    }
    resumeTimer.current = setTimeout(() => {
      if (!isHovering.current) {
        setIsPaused(false)
      }
    }, 3000)
  }

  const handleManualScroll = (direction) => {
    if (!shouldAutoScroll) return

    pauseTemporarily()
    const carousel = brandScrollRef.current
    if (!carousel) return

    const segmentWidth = getLoopSegmentWidth()
    if (segmentWidth > 0 && direction < 0 && carousel.scrollLeft <= 5) {
      carousel.scrollLeft += segmentWidth
    }

    carousel.scrollBy({
      left: direction * carousel.clientWidth * 0.72,
      behavior: 'smooth',
    })
  }

  const getLoopSegmentWidth = () => {
    const carousel = brandScrollRef.current
    const firstCard = carousel?.querySelector('[data-loop-index="0"]')
    const nextSetFirstCard = carousel?.querySelector(`[data-loop-index="${filteredBrands.length}"]`)

    if (firstCard && nextSetFirstCard) {
      return nextSetFirstCard.offsetLeft - firstCard.offsetLeft
    }

    return carousel ? carousel.scrollWidth / brandRepeatCount : 0
  }

  useEffect(() => () => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current)
    }
  }, [])

  useEffect(() => {
    if (brandScrollRef.current) {
      brandScrollRef.current.scrollLeft = 0
    }
  }, [activeCategory])

  useEffect(() => {
    const carousel = brandScrollRef.current
    const prefersReducedMotion = typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!shouldAutoScroll || !carousel || prefersReducedMotion || filteredBrands.length === 0) return undefined

    const speed = 0.45

    const animate = () => {
      const el = brandScrollRef.current
      if (!el) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      if (!isPaused) {
        const segmentWidth = getLoopSegmentWidth()
        if (segmentWidth > 0) {
          el.scrollLeft += speed
          if (el.scrollLeft >= segmentWidth) {
            el.scrollLeft -= segmentWidth
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [activeCategory, filteredBrands.length, isPaused, shouldAutoScroll])

  return (
    <section id="brands" className="section section-dark brands-section">
      <div className="container">
        <div className="section-heading">
          <h2>Brands We Deal With</h2>
          <p>Explore our trusted plywood, mica, doors, interior, veneers, and MDF brands.</p>
        </div>

        <div className="brand-filters" aria-label="Brand categories">
          {brandCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`brand-carousel-wrap ${shouldAutoScroll ? 'auto-carousel-wrap' : 'static-brands-wrap'}`}
          onMouseEnter={() => {
            isHovering.current = true
            setIsPaused(true)
          }}
          onMouseLeave={() => {
            isHovering.current = false
            setIsPaused(false)
          }}
          onTouchStart={() => {
            setIsPaused(true)
            if (resumeTimer.current) {
              clearTimeout(resumeTimer.current)
            }
          }}
          onTouchEnd={pauseTemporarily}
        >
          {shouldAutoScroll && (
            <button
              className="brand-arrow brand-arrow-left"
              type="button"
              aria-label="Previous brands"
              onClick={() => handleManualScroll(-1)}
            >
              {'\u2039'}
            </button>
          )}

          <div
            className={`brand-scroll-wrapper brand-carousel ${shouldAutoScroll ? 'auto-carousel' : 'static-brands'}`}
            ref={brandScrollRef}
          >
            <motion.div layout className="brand-grid">
              <AnimatePresence mode="popLayout">
                {displayBrands.map((brand, index) => (
                  <motion.article
                    layout
                    key={`${brand.name}-${index}`}
                    className="brand-card"
                    data-loop-index={index}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ ...premiumTransition, delay: (index % filteredBrands.length) * 0.025 }}
                  >
                    <div className="brand-logo-box" aria-label={`${brand.name} logo`}>
                      {brand.logo ? (
                        <img src={brand.logo} alt={`${brand.name} logo`} />
                      ) : (
                        <span aria-hidden="true">{brand.name.charAt(0)}</span>
                      )}
                    </div>
                    {brand.isMainDealer && (
                      <span className="main-dealer-badge">Main Dealer</span>
                    )}
                    <h3>{brand.name}</h3>
                    <p>{brand.tag}</p>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {shouldAutoScroll && (
            <button
              className="brand-arrow brand-arrow-right"
              type="button"
              aria-label="Next brands"
              onClick={() => handleManualScroll(1)}
            >
              {'\u203a'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Brands

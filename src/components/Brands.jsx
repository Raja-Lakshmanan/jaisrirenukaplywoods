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
    logo: null,
    tag: 'Plywood',
  },
  {
    name: 'Sharon',
    category: 'Plywood',
    isMainDealer: false,
    logo: null,
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
    name: 'Masonite',
    category: 'Doors',
    isMainDealer: false,
    logo: null,
    tag: 'Doors',
  },
  {
    name: 'Action Tesa',
    category: 'MDF',
    isMainDealer: false,
    logo: null,
    tag: 'MDF',
  },
  {
    name: 'Greenpanel',
    category: 'MDF',
    isMainDealer: false,
    logo: null,
    tag: 'MDF',
  },
  {
    name: 'Durian',
    category: 'Veneers',
    isMainDealer: false,
    logo: null,
    tag: 'Veneers',
  },
  {
    name: 'Natural Veneers',
    category: 'Veneers',
    isMainDealer: false,
    logo: null,
    tag: 'Veneers',
  },
  {
    name: 'Rehau',
    category: 'Interior',
    isMainDealer: false,
    logo: null,
    tag: 'Interior',
  },
  {
    name: 'Hettich',
    category: 'Interior',
    isMainDealer: false,
    logo: null,
    tag: 'Interior',
  },
  {
    name: 'Fevicol',
    category: 'Interior',
    isMainDealer: false,
    logo: null,
    tag: 'Interior',
  },
  {
    name: 'Pidilite',
    category: 'Interior',
    isMainDealer: false,
    logo: null,
    tag: 'Interior',
  },
  {
    name: 'Ebco',
    category: 'Interior',
    isMainDealer: false,
    logo: null,
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

  const repeatedBrands = useMemo(() => (
    filteredBrands.length > 0
      ? Array.from({ length: brandRepeatCount }, () => filteredBrands).flat()
      : []
  ), [filteredBrands])

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

    if (!carousel || prefersReducedMotion || filteredBrands.length === 0) return undefined

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
  }, [activeCategory, filteredBrands.length, isPaused])

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
          className="brand-carousel-wrap"
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
          <button
            className="brand-arrow brand-arrow-left"
            type="button"
            aria-label="Previous brands"
            onClick={() => handleManualScroll(-1)}
          >
            {'\u2039'}
          </button>

          <div className="brand-scroll-wrapper brand-carousel" ref={brandScrollRef}>
            <motion.div layout className="brand-grid">
              <AnimatePresence mode="popLayout">
                {repeatedBrands.map((brand, index) => (
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
                    <div className="brand-logo-box" aria-label={`${brand.name} logo placeholder`}>
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

          <button
            className="brand-arrow brand-arrow-right"
            type="button"
            aria-label="Next brands"
            onClick={() => handleManualScroll(1)}
          >
            {'\u203a'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Brands

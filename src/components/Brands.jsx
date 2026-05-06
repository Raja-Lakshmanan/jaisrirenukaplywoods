import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import main1 from '../assets/main.png'
import green from '../assets/green.png'
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
    name: 'Merino',
    category: 'Mica',
    isMainDealer: true,
    logo: null,
    tag: 'Mica',
  },
  {
    name: 'Greenlam',
    category: 'Mica',
    isMainDealer: false,
    logo: null,
    tag: 'Mica',
  },
  {
    name: 'Sunmica',
    category: 'Mica',
    isMainDealer: false,
    logo: null,
    tag: 'Mica',
  },
  {
    name: 'Century Doors',
    category: 'Doors',
    isMainDealer: true,
    logo: null,
    tag: 'Doors',
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
    isMainDealer: true,
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
    isMainDealer: true,
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
    isMainDealer: true,
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

  const filteredBrands = useMemo(() => (
    activeCategory === 'All'
      ? brands
      : activeCategory === 'Main Dealers'
        ? brands.filter((brand) => brand.isMainDealer)
        : brands.filter((brand) => brand.category === activeCategory)
  ), [activeCategory])

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
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="brand-grid">
          <AnimatePresence mode="popLayout">
            {filteredBrands.map((brand, index) => (
              <motion.article
                layout
                key={brand.name}
                className="brand-card"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ ...premiumTransition, delay: index * 0.025 }}
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
    </section>
  )
}

export default Brands

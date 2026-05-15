import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import mica from '../assets/mica.png'
import mdf from '../assets/mdf boards.webp'
import com from '../assets/commercial.jpg'
import  water from '../assets/water.jpg'

const filters = ['All', 'Plywood', 'MDF Boards', 'Laminates', 'Doors', 'Interior Panels']

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

const products = [
  { image: com, name: 'Commercial Plywood', category: 'Plywood', desc: 'Reliable and budget-friendly sheets for daily interior works.' },
  { image: water, name: 'Waterproof Plywood', category: 'Plywood', desc: 'Engineered for durability in high-humidity spaces.' },
  { image: mdf, name: 'MDF Boards', category: 'MDF Boards', desc: 'Smooth, dense board ideal for routing and furniture finishing.' },
  { image: mica, name: 'Laminates / Mica', category: 'Laminates', desc: 'Decorative and scratch-resistant surface sheets.' },
  { image: 'https://tse2.mm.bing.net/th/id/OIP.2J0D5rMb0EY-PxKr_R2FegHaHa?pid=Api&h=220&P=0', name: 'Entrance Doors', category: 'Doors', desc: 'Strong, weather-resistant entrance door solutions with premium style and durability.' },
  { image: 'https://tse2.mm.bing.net/th/id/OIP._cn1OI5EJ7tztCYuzTx4IwHaHa?pid=Api&h=220&P=0', name: 'Bedroom Doors', category: 'Doors', desc: 'Elegant, termite-resistant bedroom door solutions for modern interiors.' },
  { image: 'https://tse2.mm.bing.net/th/id/OIP.ct7-jPDt5-dIZx9toWugYAHaFM?pid=Api&P=0&h=220', name: 'WPC Doors', category: 'Doors', desc: 'Termite-proof, water-resistant modern door solutions.' },
  { image: 'https://www.durbi.in/img/flush-door.jpg', name: 'Flush Doors', category: 'Doors', desc: 'Strong and elegant options for residential and office interiors.' },
  { image: 'https://tse3.mm.bing.net/th/id/OIP.gsIo4MJLDY4m1TAUioGLFQHaHa?pid=Api&h=220&P=0', name: 'Charcoal Panels', category: 'Interior Panels', desc: 'Contemporary textured wall panels with premium aesthetics.' },
  { image: 'https://tse2.mm.bing.net/th/id/OIP.oDPgsmDyG6fAaiTaHs218AHaFi?pid=Api&P=0&h=220', name: 'Wooden Flooring', category: 'Interior Panels', desc: 'Warm natural look flooring with easy maintenance.' },
  {
    image: 'https://tse1.mm.bing.net/th/id/OIP.PIkVSVW0rqeQrLgp7CibAwHaE7?pid=Api&P=0&h=220',
    name: 'Louvers',
    category: 'Interior Panels',
    desc: 'Stylish decorative wall panels for modern interiors, partitions, and ceiling designs.'
  },
  {
    image: 'https://tse2.mm.bing.net/th/id/OIP.L7bnhEUEOVVZeVrWTOM63gHaHa?pid=Api&h=220&P=0',
    name: 'Alabaster Sheets',
    category: 'Interior Panels',
    desc: 'Stylish decorative wall panels for modern interiors, partitions, and ceiling designs.'
  },
]

function Products() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(() => {
    if (activeFilter === 'All') {
      return products
    }
    return products.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="products" className="section section-dark">
      <div className="container">
        <h2>Products</h2>
        <p className="section-lead">Explore our complete range of plywood and interior materials.</p>

        <div className="filter-row">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`chip ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filtered.map((product, index) => (
            <motion.article
              key={product.name}
              className="product-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...premiumTransition, delay: index * 0.04 }}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="product-image"><img src={product.image} alt={product.name} /></div>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

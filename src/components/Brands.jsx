import { motion } from 'framer-motion'

const brands = ['Century Ply', 'Greenply', 'Sharon', 'Kitply', 'Merino', 'Action Tesa', 'Fevicol']

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

function Brands() {
  return (
    <section id="brands" className="section section-dark">
      <div className="container">
        <h2>Brands</h2>
        <p className="section-lead">Proudly dealing in trusted and market-leading material brands.</p>
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              className="brand-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...premiumTransition, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands

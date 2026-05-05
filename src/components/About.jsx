import { motion } from 'framer-motion'
import { FaCheckCircle, FaShieldAlt, FaTags, FaTruck } from 'react-icons/fa'

const trustCards = [
  { title: 'Quality Materials', icon: <FaCheckCircle />, text: 'Certified and long-lasting products for every project.' },
  { title: 'Trusted Brands', icon: <FaShieldAlt />, text: 'Only reputed plywood and interior material manufacturers.' },
  { title: 'Affordable Price', icon: <FaTags />, text: 'Competitive rates with transparent product guidance.' },
  { title: 'Fast Delivery', icon: <FaTruck />, text: 'Reliable dispatch for site work and urgent requirements.' },
]

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={premiumTransition}
        >
          About Our Shop
        </motion.h2>
        <motion.p
          className="section-lead"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...premiumTransition, delay: 0.06 }}
        >
          We supply high-quality plywood, laminates, MDF boards, doors, adhesives, and interior materials
          for residences, offices, and commercial spaces with dependable service and practical guidance.
        </motion.p>
        <div className="about-grid">
          {trustCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...premiumTransition, delay: index * 0.07 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

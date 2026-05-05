import { motion } from 'framer-motion'
import { FaBoxes, FaHeadset, FaLayerGroup, FaMoneyBillWave, FaShippingFast, FaUserTie } from 'react-icons/fa'

const points = [
  { icon: <FaLayerGroup />, title: 'Premium Quality' },
  { icon: <FaMoneyBillWave />, title: 'Best Market Price' },
  { icon: <FaUserTie />, title: 'Expert Guidance' },
  { icon: <FaShippingFast />, title: 'Fast Delivery' },
  { icon: <FaBoxes />, title: 'Wide Product Range' },
  { icon: <FaHeadset />, title: 'Customer Support' },
]

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

function WhyChoose() {
  return (
    <section className="section" id="why-choose">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          {points.map((item, index) => (
            <motion.article
              key={item.title}
              className="glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...premiumTransition, delay: index * 0.06 }}
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose

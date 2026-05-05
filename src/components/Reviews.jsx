import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const reviews = [
  { name: 'Arun K.', text: 'Excellent quality marine plywood and honest pricing. Delivery was on time.', rating: 5 },
  { name: 'Neha S.', text: 'Great guidance while selecting laminates and charcoal panels for our home.', rating: 5 },
  { name: 'Ravindra P.', text: 'Very professional support for office interior material requirements.', rating: 4 },
  { name: 'Mahesh D.', text: 'Wide product range and genuine brands in one place.', rating: 5 },
]

const premiumTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}

function Reviews() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 3600)
    return () => clearInterval(timer)
  }, [])

  const current = reviews[index]

  return (
    <section className="section section-dark">
      <div className="container">
        <h2>Customer Reviews</h2>
        <AnimatePresence mode="wait">
          <motion.article
            key={current.name}
            className="review-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={premiumTransition}
          >
            <div className="stars">
              {Array.from({ length: current.rating }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>
            <p>{current.text}</p>
            <h3>{current.name}</h3>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Reviews

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const images = Array.from({ length: 8 }).map((_, idx) => ({
  id: idx + 1,
  title: `Interior Sample ${idx + 1}`,
}))

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>Gallery</h2>
        <p className="section-lead">Recent shop materials and interior finishing inspirations.</p>
        <div className="gallery-grid">
          {images.map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              className="gallery-item"
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...premiumTransition, delay: index * 0.04 }}
            >
              <span>{item.title}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="modal-close" onClick={() => setSelected(null)}>
                <FaTimes />
              </button>
              <div className="modal-image">{selected.title}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery

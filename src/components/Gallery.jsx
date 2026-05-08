import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaImage, FaTimes, FaVideo } from 'react-icons/fa'

// ================= GALLERY IMAGE IMPORTS =================
// import showroom1 from '../assets/gallery/images/showroom1.jpg'
// import plywood1 from '../assets/gallery/images/plywood1.jpg'
// import door1 from '../assets/gallery/images/door1.jpg'

// ================= GALLERY VIDEO IMPORTS =================
// import showroomVideo from '../assets/gallery/videos/showroom-video.mp4'
// import productVideo from '../assets/gallery/videos/product-demo.mp4'

// Add your real gallery files in:
// src/assets/gallery/images/
// src/assets/gallery/videos/
//
// Example after adding image:
// import showroom1 from '../assets/gallery/images/showroom1.jpg'
//
// {
//   id: 1,
//   type: 'image',
//   title: 'Showroom Photo',
//   description: 'Our showroom collection',
//   src: showroom1,
//   placeholder: false
// }

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Showroom Photo',
    description: 'Add showroom image here',
    src: null,
    placeholder: true
  },
  {
    id: 2,
    type: 'image',
    title: 'Product Display',
    description: 'Add product image here',
    src: null,
    placeholder: true
  },
  {
    id: 3,
    type: 'video',
    title: 'Showroom Video',
    description: 'Add showroom video here',
    src: null,
    placeholder: true
  },
    {
    id: 4,
    type: 'images',
    title: 'Showroom Images',
    description: 'Add showroom images here',
    src: null,
    placeholder: true
  },
   {
    id: 5,
    type: 'image',
    title: 'Product Display',
    description: 'Add product image here',
    src: null,
    placeholder: true
  }
]

const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

function Gallery() {
  const [selected, setSelected] = useState(null)

  const renderGalleryMedia = (item) => {
    if (item.src && item.type === 'image') {
      return <img src={item.src} alt={item.title} />
    }

    if (item.src && item.type === 'video') {
      return <video src={item.src} muted preload="metadata" />
    }

    const PlaceholderIcon = item.type === 'video' ? FaVideo : FaImage

    return (
      <div className="gallery-placeholder">
        <span className="gallery-badge">Coming Soon</span>
        <PlaceholderIcon />
        <span className="gallery-add-label">
          {item.type === 'video' ? 'Add Video' : 'Add Image'}
        </span>
      </div>
    )
  }

  const renderModalMedia = () => {
    if (selected.src && selected.type === 'image') {
      return <img src={selected.src} alt={selected.title} />
    }

    if (selected.src && selected.type === 'video') {
      return <video src={selected.src} controls autoPlay />
    }

    return (
      <div className="modal-placeholder">
        <span>Media will be added soon</span>
      </div>
    )
  }

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>Gallery</h2>
        <p className="section-lead">Recent shop materials and interior finishing inspirations.</p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
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
              <div className="gallery-media">
                {renderGalleryMedia(item)}
              </div>
              <div className="gallery-copy">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
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
              <div className="modal-image">
                {renderModalMedia()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery

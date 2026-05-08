import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaImage, FaPlay, FaTimes, FaVideo } from 'react-icons/fa'
import showroomPhoto1 from '../assets/gallery/images/unnamed.webp'
import showroomPhoto2 from '../assets/gallery/images/unnamed (1).webp'
import showroomPhoto3 from '../assets/gallery/images/unnamed (2).webp'
import showroomPhoto4 from '../assets/gallery/images/unnamed (3).webp'
import showroomPhoto5 from '../assets/gallery/images/unnamed (4).webp'
import showroomPhoto6 from '../assets/gallery/images/unnamed (5).webp'
import showroomVideo from '../assets/gallery/videos/WhatsApp Video 2025-12-23 at 7.17.01 PM.mp4'
import renukaPlywoodsVideo from '../assets/gallery/videos/Renuka Plywoods.mp4'

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Showroom Photo',
    description: 'Shop display and material collection',
    src: showroomPhoto1,
  },
  {
    id: 2,
    type: 'image',
    title: 'Product Display',
    description: 'Plywood and interior finishing range',
    src: showroomPhoto2,
  },
  {
    id: 3,
    type: 'image',
    title: 'Material Collection',
    description: 'Recent shop materials and finishes',
    src: showroomPhoto3,
  },
  {
    id: 4,
    type: 'image',
    title: 'Showroom Images',
    description: 'In-store plywood shop display',
    src: showroomPhoto4,
  },
  {
    id: 5,
    type: 'image',
    title: 'Interior Finishes',
    description: 'Finishing inspirations and product views',
    src: showroomPhoto5,
  },
  {
    id: 6,
    type: 'image',
    title: 'Plywood Selection',
    description: 'Quality plywood and laminate options',
    src: showroomPhoto6,
  },
  {
    id: 7,
    type: 'video',
    title: 'Showroom Video',
    description: 'A quick look at our showroom',
    src: showroomVideo,
  },
  {
    id: 8,
    type: 'video',
    title: 'Renuka Plywoods Video',
    description: 'Shop and product highlights',
    src: renukaPlywoodsVideo,
  },
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
      return (
        <>
          <video src={item.src} muted preload="metadata" />
          <span className="gallery-play-icon" aria-hidden="true">
            <FaPlay />
          </span>
        </>
      )
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
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="gallery-header">
          <span className="eyebrow">Showroom Moments</span>
          <h2>Gallery</h2>
          <p>Recent shop materials, interior finishes, and showroom highlights from our plywood collection.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              className="gallery-card"
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...premiumTransition, delay: index * 0.04 }}
            >
              <div className="gallery-media">
                {renderGalleryMedia(item)}
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
              <div className="modal-caption">
                <h3>{selected.title}</h3>
                <p>{selected.description}</p>
              </div>
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

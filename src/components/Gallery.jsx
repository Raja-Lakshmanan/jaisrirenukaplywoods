import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaPlay, FaTimes } from 'react-icons/fa'
import showroomPhoto1 from '../assets/gallery/images/unnamed.webp'
import showroomPhoto2 from '../assets/gallery/images/unnamed (1).webp'
import showroomPhoto3 from '../assets/gallery/images/unnamed (2).webp'
import showroomPhoto7 from '../assets/gallery/images/unnamed (3).webp'
import showroomPhoto8 from '../assets/gallery/images/unnamed (4).webp'
import showroomPhoto4 from '../assets/gallery/images/unnamed(6).jpg'
import showroomPhoto5 from '../assets/gallery/images/unnamed(7).jpg'
import showroomPhoto6 from '../assets/gallery/images/unnamed (5).webp'
import bedroomPhoto2 from '../assets/gallery/images/bedroom2.jpg'
import bedroomPhoto3 from '../assets/gallery/images/bedroom3.jpg'
import bedroomPhoto1 from '../assets/gallery/images/bedroom1.jpg'
import hallPhoto1 from '../assets/gallery/images/hall.jpg'
import hallPhoto2 from '../assets/gallery/images/hall2.jpg'
import hallPhoto3 from '../assets/gallery/images/hall3.jpg'
import kitchenPhoto1 from '../assets/gallery/images/kitchen1.avif'
import kitchenPhoto2 from '../assets/gallery/images/kitchen2.avif'
import kitchenPhoto3 from '../assets/gallery/images/kitchen3.avif'
import showroomVideo from '../assets/gallery/videos/WhatsApp Video 2025-12-23 at 7.17.01 PM.mp4'
import renukaPlywoodsVideo from '../assets/gallery/videos/Renuka Plywoods.mp4'

const imageGroups = [
  {
    id: 1,
    title: 'Showroom Gallery',
    category: 'Showroom',
    description: 'Explore our showroom, product displays, door collections, plywood, laminates, and interior material photos.',
    images: [
      {
        title: 'Showroom Photo',
        description: 'Shop display and material collection',
        src: showroomPhoto2,
      },
      {
        title: 'Material Collection',
        description: 'Recent shop materials and finishes',
        src: showroomPhoto1,
      },
      {
        title: 'Product Display',
        description: 'Plywood and interior finishing range',
        src: showroomPhoto3,
      },
      {
        title: 'Plywood Selection',
        description: 'Quality plywood and laminate options',
        src: showroomPhoto5,
      },
      {
        title: 'Showroom Images',
        description: 'In-store plywood shop display',
        src: showroomPhoto4,
      },
      {
        title: 'Showroom Material View',
        description: 'Additional showroom material photo',
        src: showroomPhoto6,
      },
      {
        title: 'Gallery Photo 2',
        description: 'Additional material photo',
        src: showroomPhoto8,
      },
    ],
  },
  {
    id: 2,
    title: 'Bedroom Gallery',
    category: 'Bedroom',
    description: 'Bedroom interior materials, wardrobes, doors, panels, and finish ideas.',
    images: [
      {
        title: 'Bedroom Interior 1',
        description: 'Bedroom interior material inspiration',
        src: bedroomPhoto1,
      },
      {
        title: 'Bedroom Interior 1',
        description: 'Bedroom interior material inspiration',
        src: bedroomPhoto2,
      },
      {
        title: 'Bedroom Interior 2',
        description: 'Bedroom finishing inspiration',
        src: bedroomPhoto3,
      },
    ],
  },
  {
    id: 3,
    title: 'Kitchen Gallery',
    category: 'Kitchen',
    description: 'Kitchen cabinet materials, laminates, plywood, and modular kitchen finish ideas.',
    images: [
      {
        title: 'Kitchen Interior 1',
        description: 'Kitchen cabinet material inspiration',
        src: kitchenPhoto1,
      },
      {
        title: 'Kitchen Interior 2',
        description: 'Kitchen laminate finish inspiration',
        src: kitchenPhoto2,
      },
      {
        title: 'Kitchen Interior 3',
        description: 'Modular kitchen finish inspiration',
        src: kitchenPhoto3,
      },
    ],
  },
  {
    id: 4,
    title: 'Hall Gallery',
    category: 'Hall',
    description: 'Hall interior materials, TV units, wall panels, doors, and premium finish ideas.',
    images: [
      {
        title: 'Hall Interior 1',
        description: 'Hall interior material inspiration',
        src: hallPhoto1,
      },
      {
        title: 'Hall Interior 2',
        description: 'Hall finishing inspiration',
        src: hallPhoto2,
      },
      {
        title: 'Hall Interior 3',
        description: 'Hall design inspiration',
        src: hallPhoto3,
      },
    ],
  },
]

const videoItems = [
  {
    id: 1,
    type: 'video',
    title: 'Showroom Walkthrough',
    description: 'A quick look at our showroom',
    src: showroomVideo,
  },
  {
    id: 2,
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
          {/* <span className="eyebrow">Showroom Moments</span> */}
          <h2>Gallery</h2>
          <p>Explore our showroom, products, doors, and interior material collections.</p>
        </div>
        <div className="gallery-subheading">
          <h3>Photo Gallery</h3>
          <p>Explore our showroom, bedroom, kitchen, and hall collections.</p>
        </div>
        <div className="image-gallery-grid">
          {imageGroups
            .filter((group) => group.images && group.images.length > 0)
            .map((group, index) => (
            <ImageGalleryCard
              key={group.id}
              group={group}
              index={index}
              onOpen={setSelected}
            />
            ))}
        </div>
        <div className="gallery-subheading video-heading">
          <h3>Video Gallery</h3>
          <p>Watch our showroom and product videos.</p>
        </div>
        <div className="video-gallery-grid">
          {videoItems.map((video, index) => (
            <VideoGalleryCard
              key={video.id}
              video={video}
              index={index}
              onOpen={setSelected}
            />
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

function ImageGalleryCard({ group, index, onOpen }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = group.images[activeIndex]

  const next = () => {
    setActiveIndex((current) => (current + 1) % group.images.length)
  }

  const prev = () => {
    setActiveIndex((current) => (current - 1 + group.images.length) % group.images.length)
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.x <= -45) next()
    if (info.offset.x >= 45) prev()
  }

  return (
    <motion.article
      className="gallery-group-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...premiumTransition, delay: index * 0.04 }}
    >
      <div className="gallery-slider">
        <AnimatePresence mode="wait">
          <motion.button
            type="button"
            key={`${group.id}-${activeIndex}`}
            className="gallery-slide"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            drag={group.images.length > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={handleDragEnd}
            onClick={() => onOpen({ ...activeImage, type: 'image' })}
            aria-label={`Open ${activeImage.title}`}
          >
            <img src={activeImage.src} alt={activeImage.title} />
          </motion.button>
        </AnimatePresence>

        {group.images.length > 1 && (
          <>
            <button type="button" className="gallery-card-arrow left" onClick={prev} aria-label={`Previous ${group.title} media`}>
              {'\u2039'}
            </button>
            <button type="button" className="gallery-card-arrow right" onClick={next} aria-label={`Next ${group.title} media`}>
              {'\u203a'}
            </button>
          </>
        )}

        <div className="gallery-card-overlay">
          <h3>{group.title}</h3>
          <p>{group.description}</p>
        </div>
      </div>

      <div className="gallery-card-dots" aria-label={`${group.title} media selector`}>
        {group.images.map((image, dotIndex) => (
          <button
            type="button"
            key={image.title}
            className={dotIndex === activeIndex ? 'active' : ''}
            aria-label={`Show ${image.title}`}
            aria-current={dotIndex === activeIndex}
            onClick={() => setActiveIndex(dotIndex)}
          />
        ))}
      </div>
    </motion.article>
  )
}

function VideoGalleryCard({ video, index, onOpen }) {
  return (
    <motion.button
      type="button"
      className="video-gallery-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...premiumTransition, delay: index * 0.04 }}
      onClick={() => onOpen(video)}
      aria-label={`Open ${video.title}`}
    >
      <div className="video-gallery-media">
        <video src={video.src} muted preload="metadata" />
        <span className="gallery-play-icon" aria-hidden="true">
          <FaPlay />
        </span>
      </div>
      <div className="video-gallery-copy">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </motion.button>
  )
}

export default Gallery

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { SOCIAL_IMGS } from '../../data/siteData'
import styles from './Social.module.css'
import fallbackImg from '../../assets/hero_img.jpeg'

export default function Social() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [slideDirection, setSlideDirection] = useState('next')

  const total = SOCIAL_IMGS.length

  // Lock body scroll while the lightbox is open, and support keyboard nav
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
      if (e.key === 'ArrowLeft') scroll(-1)
      if (e.key === 'ArrowRight') scroll(1)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const scroll = (dir) => {
    setSlideDirection(dir === 1 ? 'next' : 'prev')
    setCurrentIndex((prev) => {
      let next = prev + dir
      if (next < 0) next = total - 1
      if (next >= total) next = 0
      return next
    })
  }

  // Show 3 images at a time
  const visibleImages = [0, 1, 2].map((offset) => {
    const index = (currentIndex + offset) % total
    return { index, src: SOCIAL_IMGS[index] }
  })

  const openImage = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied) return
    event.currentTarget.dataset.fallbackApplied = 'true'
    event.currentTarget.src = fallbackImg
  }

  // Progress: currentIndex / total — actual position based
  const progressPercent = ((currentIndex + 1) / total) * 100

  return (
    <section className={`section ${styles.section}`} id="social">
      <div className="container">
        <div className="section-head">
          <span className={`section-label ${styles.tag}`}>Social Moments</span>
          <h2>GET SOCIAL <span style={{ color: 'var(--primary)' }}>#livefreehostels</span></h2>
          <p>Tag us on Instagram and you might end up on our wall 📸</p>
        </div>
      </div>

      {/* Slider: Left Arrow | 3 Images | Right Arrow */}
      <div className={styles.previewContainer}>
        <div className={styles.sliderWrapper}>
          <button
            className={styles.arrowBtn}
            onClick={() => scroll(-1)}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={`${styles.previewGrid} ${styles[`slide-${slideDirection}`]}`}>
            {visibleImages.map(({ index, src }) => (
              <button
                key={`${index}-${currentIndex}`}
                className={styles.previewBox}
                onClick={() => openImage(index)}
                aria-label={`Open social image ${index + 1}`}
              >
                <img
                  src={src}
                  alt={`Social preview ${index + 1}`}
                  loading="lazy"
                  onError={handleImageError}
                />
              </button>
            ))}
          </div>

          <button
            className={styles.arrowBtn}
            onClick={() => scroll(1)}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Bar — moves with currentIndex */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Modal Slideshow */}
      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close">
            <X size={24} />
          </button>

          <button className={`${styles.modalBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); scroll(-1) }} aria-label="Previous image">
            <ChevronLeft size={28} />
          </button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={SOCIAL_IMGS[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              onError={handleImageError}
            />
          </div>

          <button className={`${styles.modalBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); scroll(1) }} aria-label="Next image">
            <ChevronRight size={28} />
          </button>

          <div className={styles.slideCounter}>
            {currentIndex + 1} / {total}
          </div>
        </div>
      )}
    </section>
  )
}

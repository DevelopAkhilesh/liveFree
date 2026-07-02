import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Coffee, Laptop2, MessageCircle, PartyPopper, Sun, Wifi } from 'lucide-react'
import styles from './Workation.module.css'

const stays = [
  'The Hosteller Bir',
  'The Hosteller Rishikesh',
  'The Hosteller Varanasi',
  'The Hosteller Dehradun',
]

const badges = [
  { label: 'Free Wifi', icon: Wifi, className: 'badgeWifi' },
  { label: 'Inhouse Cafe', icon: Coffee, className: 'badgeCafe' },
  { label: '', icon: Sun, className: 'badgeSun' },
  { label: '', icon: Laptop2, className: 'badgeLaptop' },
  { label: 'Lots of fun', icon: PartyPopper, className: 'badgeFun' },
]

export default function Workation() {
  const [stay, setStay] = useState('')
  const [checkIn, setCheckIn] = useState('2026-06-29')
  const [checkOut, setCheckOut] = useState('2026-07-06')

  const handleBook = () => {
    console.log({ stay, checkIn, checkOut })
  }

  return (
    <section id="workation" className={styles.section}>
      <div className="container">
        <div className={styles.topEyebrowRow}>
          <span className={styles.eyebrow}>Workations</span>
        </div>

        <div className={styles.inner}>
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0.9, 0.4, 1] }}
          >
            <h2>Escape the office<br></br>Keep the Wi-Fi</h2>
            {/* <p className={styles.tagline}>Escape the office. Keep the Wi-Fi.</p> */}

            <h3>Enjoy 15–25% off when you book for 7+ nights.</h3>
            <p>
              Upgrade your office chair to a hammock, your commute to a sunrise
              hike, and your lunch desk to a rooftop with mountain views. Our
              Workation Package gives remote workers everything they need to
              stay productive and actually enjoy where they are.
            </p>

            <div className={styles.whyBox}>
              <h4>Why Here?</h4>
              <p>
                Start your day tirelessly. Take your lunch break on a hiking
                trail. Finish your workday with a cold beer and a sunset you
                didn't have to scroll past.
              </p>
              <p>This isn't a vacation — it's your life, just with better scenery.</p>
            </div>

            <div className={styles.bookingCard}>
              <div className={styles.fieldsRow}>
                <div className={styles.field}>
                  <label htmlFor="stay-select">Select your stay</label>
                  <div className={styles.selectWrap}>
                    <select
                      id="stay-select"
                      value={stay}
                      onChange={(e) => setStay(e.target.value)}
                    >
                      <option value="" disabled>
                        Eg: The Hosteller Bir
                      </option>
                      {stays.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className={styles.selectChevron} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="check-in">Check-in</label>
                  <input
                    id="check-in"
                    type="date"
                    className={styles.dateInput}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="check-out">Check-out</label>
                  <input
                    id="check-out"
                    type="date"
                    className={styles.dateInput}
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>

              <button type="button" className={styles.ctaBtn} onClick={handleBook}>
                Book now
              </button>
            </div>

            {/* <button type="button" className={styles.groupEnquiry}>
              <MessageCircle size={18} />
              Send enquiry for group booking
            </button> */}
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.9, 0.4, 1] }}
          >
            <div className={styles.photoWrap}>
              <span className={styles.glow} aria-hidden="true" />

              {/* <span className={`${styles.leaf} ${styles.leafTopRight}`} aria-hidden="true">
                <LeafIcon />
              </span>
              <span className={`${styles.leaf} ${styles.leafLeft}`} aria-hidden="true">
                <LeafIcon />
              </span>
              <span className={`${styles.leaf} ${styles.leafBottomLeft}`} aria-hidden="true">
                <LeafIcon />
              </span>
              <span className={`${styles.leaf} ${styles.leafBottomRight}`} aria-hidden="true">
                <LeafIcon />
              </span>

              <span className={`${styles.quoteMark} ${styles.quoteTopLeft}`} aria-hidden="true">
                "
              </span>
              <span className={`${styles.quoteMark} ${styles.quoteBottomRight}`} aria-hidden="true">
                "
              </span> */}

              <div className={styles.photoCircle}>
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Two remote workers collaborating on a laptop"
                />
              </div>

              {badges.map(({ label, icon: Icon, className }, i) => (
                <span key={i} className={`${styles.badge} ${styles[className]}`}>
                  <span className={styles.badgeIcon}>
                    <Icon size={15} />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg width="34" height="80" viewBox="0 0 34 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 80V0" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="17" cy="14" rx="9" ry="13" fill="currentColor" />
      <ellipse cx="6" cy="32" rx="8" ry="11" fill="currentColor" transform="rotate(-25 6 32)" />
      <ellipse cx="28" cy="32" rx="8" ry="11" fill="currentColor" transform="rotate(25 28 32)" />
      <ellipse cx="6" cy="54" rx="8" ry="11" fill="currentColor" transform="rotate(-25 6 54)" />
      <ellipse cx="28" cy="54" rx="8" ry="11" fill="currentColor" transform="rotate(25 28 54)" />
      <ellipse cx="17" cy="72" rx="7" ry="9" fill="currentColor" />
    </svg>
  )
}
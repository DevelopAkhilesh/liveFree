import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, Send, Heart } from 'lucide-react'
import styles from './ContactPage.module.css'

const LOCATIONS = [
  {
    id: 'rishikesh',
    city: 'Rishikesh',
    address: 'Tapovan, Rishikesh, Uttarakhand 249192',
    phone: '+91 99990 20248',
    email: 'rishikesh@livefreehostel.com',
    mapQuery: 'Tapovan, Rishikesh, Uttarakhand',
  },
  {
    id: 'dehradun',
    city: 'Dehradun',
    address: 'Rajpur Road, Dehradun, Uttarakhand 248001',
    phone: '+91 99990 20248',
    email: 'dehradun@livefreehostel.com',
    mapQuery: 'Rajpur Road, Dehradun, Uttarakhand',
  },
  {
    id: 'varanasi',
    city: 'Varanasi',
    address: 'Assi Ghat, Varanasi, Uttar Pradesh 221005',
    phone: '+91 99990 20248',
    email: 'varanasi@livefreehostel.com',
    mapQuery: 'Assi Ghat, Varanasi, Uttar Pradesh',
  },
]

const SOCIALS = [
  { icon: Instagram, url: 'https://instagram.com/livefreehostel', label: 'Instagram' },
  { icon: Facebook, url: 'https://facebook.com/livefreehostel', label: 'Facebook' },
  { icon: Linkedin, url: 'https://linkedin.com/company/livefreehostel', label: 'LinkedIn' },
  { icon: Youtube, url: 'https://youtube.com/@livefreehostel', label: 'YouTube' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI only for now — backend integration later
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.head}>
          <span className="section-label">Get In Touch</span>
          <h2 className={styles.title}>Let's talk travel.</h2>
          <p className={styles.subtitle}>
            Questions about a stay, a group booking, or just want to say hi — we're here for it.
          </p>
        </div>

        <div className={styles.topGrid}>
          {/* Contact Form */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={16} />
              </button>
              {submitted && (
                <motion.p
                  className={styles.successMsg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thanks! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Reach us directly</h3>
            <a href="mailto:reservation@livefreehostel.com" className={styles.infoRow}>
              <Mail size={18} />
              <span>reservation@livefreehostel.com</span>
            </a>
            <a href="tel:+919999020248" className={styles.infoRow}>
              <Phone size={18} />
              <span>+91 99990 20248</span>
            </a>

            <div className={styles.socialRow}>
              {SOCIALS.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialBtn}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

{/* Tagline Banner */}
{/* Tagline Banner */}
        <div className={styles.taglineBanner}>
          <div className={styles.bgText}>
            <span> HOME AWAY FROM HOME • </span>
          </div>
          <div className={styles.fgText}>
            <span className={styles.fgLine1}>follow</span>
            <span className={styles.fgLine2}>
              your
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif"
                alt="❤"
                className={styles.fgHeart}
              />
            </span>
          </div>
        </div>

        {/* Locations */}
        <div className={styles.locHead}>
          <span className="section-label">Our Properties</span>
          <h2 className={styles.title}>Find us here</h2>
        </div>

        <div className={styles.locGrid}>
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.id}
              className={styles.locCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.mapWrap}>
                <iframe
                  title={`${loc.city} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className={styles.locBody}>
                <h4>{loc.city}</h4>
                <p className={styles.locAddress}>
                  <MapPin size={15} /> {loc.address}
                </p>
                <a href={`tel:${loc.phone}`} className={styles.locLine}>
                  <Phone size={14} /> {loc.phone}
                </a>
                <a href={`mailto:${loc.email}`} className={styles.locLine}>
                  <Mail size={14} /> {loc.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
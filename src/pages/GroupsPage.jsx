import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Send, Phone, Mail } from 'lucide-react'
import styles from './GroupsPage.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.2, 0.9, 0.4, 1] },
})

const GROUP_TYPES = ['Students', 'Sports Team', 'Work / Corporate', 'Family & Friends', 'Others']
const MEAL_OPTIONS = ['Breakfast', 'Lunch', 'Dinner', 'Lunch Box']
const PROPERTIES = ['Rishikesh', 'Dehradun', 'Varanasi']

export default function GroupsPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', people: '', groupName: '',
    property: '', checkin: '', checkout: '', groupType: '', meals: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const toggleMeal = meal => setForm(f => ({
    ...f,
    meals: f.meals.includes(meal) ? f.meals.filter(m => m !== meal) : [...f.meals, meal],
  }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: 12,
    border: '1.5px solid #d0d0d0', fontSize: '1rem', fontFamily: 'var(--font-body)',
    outline: 'none', color: 'var(--text)', background: '#fff', boxSizing: 'border-box',
  }

  return (
    <>
      {/* 1. HERO BANNER */}
      <section style={{ position: 'relative', minHeight: 'calc(75vh + 90px)', paddingTop: 90, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80" alt="Groups" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,80,60,0.5) 0%, rgba(0,80,60,0.25) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ maxWidth: 700 }}>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 24, fontFamily: 'var(--font-display)' }}>
              Plan Your Group Trip Without Stress
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: 40, maxWidth: 600 }}>
              Organizing a large group can be a challenge, but we'll take care of the rest! Whether it's friends, students, colleagues, a sports team, or a large family, we have everything you need to make your stay easy, comfortable, and unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TWO-COLUMN: IMAGE LEFT, CONTENT RIGHT */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className={styles.twoCol}>
            <motion.div {...fadeUp(0)} className={styles.twoColImage}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Group activities" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15, marginBottom: 28, fontFamily: 'var(--font-display)' }}>
                Why Book With Us?
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 32 }}>
                Travelling in a group should be fun, not complicated! Our team helps with everything from finding the best room configuration and choosing dates to organizing exclusive events for your group or personalised meal options and extras. With our experience, the hardest part of the trip is on us.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  'Flexible accommodation for groups of various sizes',
                  'Shared and private room options tailored to your needs',
                  'Dedicated support from first contact to check-in',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800, fontSize: '1rem', color: '#fff' }}>
                      ✓
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE OFFER - NUMBERED */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 70 }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 20, fontFamily: 'var(--font-display)' }}>
              What We Offer
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
              Complete support for your group travel needs
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {[
              { num: '1', title: 'Flexible accommodation', desc: 'for groups of various sizes.' },
              { num: '2', title: 'Shared and private room options', desc: 'tailored to your needs.' },
              { num: '3', title: 'Dedicated support', desc: 'from the first contact to check-in.' },
              { num: '4', title: 'Suggestions for activities and logistics', desc: '(from transfers to local tips)' },
              { num: '5', title: 'Discounts and special conditions', desc: 'for group bookings (subject to availability)' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                style={{ padding: 32, background: '#f9f9f9', borderRadius: 16, border: '1px solid #e8e8e8' }}
              >
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--primary)', marginBottom: 16 }}>
                  {item.num}.
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPLIT FORM SECTION */}
      <section style={{ padding: '100px 0', background: '#f5f5f5' }}>
        <div className="container">
          <div className={styles.formSplit}>
            {/* LEFT PANEL */}
            <div className={styles.formLeftPanel}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, color: '#fff', marginBottom: 24, lineHeight: 1.2, fontFamily: 'var(--font-display)' }}>
                FORM
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: 32 }}>
                Tell us who you are, when you want to come, and what you're looking for so we can prepare a tailored quote for your group. The more details you give us now, the faster we can respond with a personalized proposal!
              </p>
              <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                <p>📧 Email us</p>
                <p style={{ fontWeight: 700 }}>groups@livefree.com</p>
              </div>
            </div>

            {/* RIGHT PANEL - FORM */}
            <div className={styles.formRightPanel}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: 12, color: 'var(--text)' }}>
                    We've got your request!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                    Our team will review your details and get back to you within 24 hours with a personalised group proposal. Can't wait to host you!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Name *" style={inputStyle} />
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="E-mail *" style={inputStyle} />
                  </div>

                  <div className={styles.formRow}>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number *" style={inputStyle} />
                    <input type="number" name="people" value={form.people} onChange={handleChange} required placeholder="Number of people *" min="5" style={inputStyle} />
                  </div>

                  <div className={styles.formRow}>
                    <input type="text" name="groupName" value={form.groupName} onChange={handleChange} placeholder="Group name *" style={inputStyle} />
                    <select name="property" value={form.property} onChange={handleChange} style={inputStyle}>
                      <option value="">What is the unit? *</option>
                      {PROPERTIES.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div className={styles.formRow}>
                    <input type="date" name="checkin" value={form.checkin} onChange={handleChange} placeholder="Check-in *" style={inputStyle} />
                    <input type="date" name="checkout" value={form.checkout} onChange={handleChange} placeholder="Checkout *" style={inputStyle} />
                  </div>

                  <div className={styles.formRow}>
                    <select name="groupType" value={form.groupType} onChange={handleChange} style={inputStyle}>
                      <option value="">Group type *</option>
                      {GROUP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <select name="meals" value={form.meals} onChange={handleChange} style={inputStyle}>
                      <option value="">Meals *</option>
                      {MEAL_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>

                  <textarea name="notes" value={form.notes} onChange={handleChange} rows="4" placeholder="Additional information" style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }} />

                  <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #f28c38 0%, var(--primary) 55%, var(--primary-dark) 100%)', color: '#fff', border: 'none', padding: '16px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: 'var(--font-body)', transition: 'opacity 0.2s', boxShadow: '0 14px 30px rgba(232, 93, 58, 0.28)' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    TO SEND
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
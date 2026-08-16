import { motion } from 'framer-motion'
import Awards from '../components/Awards/Awards'
import CTABanner from '../components/CTABanner/CTABanner'
import { Helmet } from 'react-helmet-async'

export default function AwardsPage() {
  const title = 'Awards & Recognition | LiveFree Hostel'
  const description = 'Recognition and awards earned by LiveFree Hostel for hospitality across Rishikesh, Varanasi, and Dehradun.'
  const url = 'https://livefreehostels.com/awards'
  const image = 'https://livefreehostels.com/og-images/default.jpg'
  return (
    <>
     <Helmet>
        {/* Standard */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content="LiveFree Hostel" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <div style={{ padding: '120px 0 80px', background: 'linear-gradient(160deg, var(--bg) 60%, #fce4db 100%)', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">🏆 Awards</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800, margin: '16px 0 20px', lineHeight: 1.1 }}>
              Recognition & Awards
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Years of warm hospitality, recognized by the world's leading travel platforms.
            </p>
          </motion.div>
        </div>
      </div>
      <Awards />
      
    </>
  )
}

import Hero from '../components/Hero/Hero'
import WhyLiveSection from '../components/WhyLiveSection/WhyLiveSection'
import Stats from '../components/Stats/Stats'
import Destinations from '../components/Destinations/Destinations'
import Testimonials from '../components/Testimonials/Testimonials'
import Workation from '../components/Workation/Workation'
import Social from '../components/Social/Social'
import Awards from '../components/Awards/Awards'
import CTABanner from '../components/CTABanner/CTABanner'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'


export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) {
        // small delay lets the page finish rendering/painting first
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
      }
      // clear the state so refreshing or revisiting '/' doesn't re-trigger the scroll
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  const title = 'LiveFree Hostel | Backpacker Hostels in Rishikesh, Varanasi & Dehradun'
  const description = 'Budget hostels for backpackers in Rishikesh, Varanasi & Dehradun — dorms, private rooms, rooftop cafes, and a built-in adventure community.'
  const url = 'https://livefreehostel.com/'
  const image = 'https://livefreehostels.com/og-images/home.jpg'
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

      <Hero />
      <WhyLiveSection />
      <Stats />
      <Destinations />
      <Workation />
      <Testimonials />
      <Social />
      <Awards />
      <CTABanner />
    </>
  )
}

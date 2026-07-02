import Hero from '../components/Hero/Hero'
import WhyLiveSection from '../components/WhyLiveSection/WhyLiveSection'
import Stats from '../components/Stats/Stats'
import Destinations from '../components/Destinations/Destinations'
import Testimonials from '../components/Testimonials/Testimonials'
import Workation from '../components/Workation/Workation'
import Social from '../components/Social/Social'
import Awards from '../components/Awards/Awards'
import CTABanner from '../components/CTABanner/CTABanner'

export default function HomePage() {
  return (
    <>
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

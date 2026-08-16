import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import BackToTop from './components/BackToTop/BackToTop'
import { Helmet } from 'react-helmet-async'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
       <Helmet>
        <title>LiveFree Hostel | Stay Free. Live Bold.</title>
        <meta name="description" content="LiveFree Hostel — budget-friendly, pet-friendly hostels in Rishikesh, Dehradun & Varanasi." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://developakhilesh.github.io/liveFree/og-default.jpg" />
      </Helmet>
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </>
  )
}
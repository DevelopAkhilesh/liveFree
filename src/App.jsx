import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PetFriendlyPage from './pages/PetFriendlyPage'
import AwardsPage from './pages/AwardsPage'
import DestinationPage from './pages/DestinationPage'
import GroupsPage from './pages/GroupsPage'
import ExperiencePage from './pages/ExperiencePage'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ContactPage from './pages/ContactPage'
import HostelPolicy from './pages/HostelPolicy'

import LegalPage from './pages/LegalPage'
import TermsConditions from './pages/TermsConditions'
import DataProtectionGuidelines from './pages/DataProtectionGuidelines'
import BlogPage from './pages/BlogPage'


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pet-friendly" element={<PetFriendlyPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/rishikesh" element={<DestinationPage city="rishikesh" />} />
          <Route path="/dehradun" element={<DestinationPage city="dehradun" />} />
          <Route path="/varanasi" element={<DestinationPage city="varanasi" />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hostel-policy" element={<HostelPolicy />} />
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/data-protection-guidelines" element={<DataProtectionGuidelines />} />
          <Route path="/blog-page" element={<BlogPage/>}/>
          
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
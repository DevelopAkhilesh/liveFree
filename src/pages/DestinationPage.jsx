import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, X, ChevronLeft, ChevronRight, ChevronDown, Check,
  Globe, ParkingCircle, ConciergeBell, UtensilsCrossed, BedDouble,
  Wifi, Wind, PawPrint, KeyRound, ImageOff, ExternalLink,
  Train, Car, Plane,
} from 'lucide-react'
import { DESTINATIONS, CITY_ROOMS, CITY_ITINERARY, CITY_PROPERTY_POLICY, CITY_MUST_READS } from '../data/siteData'
import styles from './DestinationPage.module.css'

const GALLERY_FALLBACKS = [
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
]

// ── Room details shown inside the expandable "Room Details" panel ──
const ROOM_CAPACITY = {
  Dormitory: '1 Guest/Bed',
  Private: '2 Guest',
}

const ROOM_AMENITIES_BY_TYPE = {
  Dormitory: [
    'Bathroom', 'Curtains', 'Towels/Sheets (extra fee)', 'Bath or Shower', 'Toilet', 'Fan', 'Free Wi-Fi',
    'Hair dryer', 'Comfortable Beds', 'Tile/Marble floor', 'Lockers', 'Shower', 'Cleaning service',
    'Non-smoking rooms', 'Air Conditioner', 'Private entrance', 'Linen', 'Air conditioning',
  ],
  Private: [
    'Tile/Marble floor', 'In-Room Coffee / Tea', 'Non-smoking rooms', 'Cable TV', 'Wifi',
    'Bath or Shower', 'Toilet', 'Fan', 'Coffee Maker',
    'Wardrobe', 'Beds', 'Curtains', 'Air Conditioner', 'LCD TV', 'Bathroom', 'Shower', 'Cleaning service', 'Free Wi-Fi',
    'Towel', 'Hair dryer', 'Comfortable Beds', 'TV', 'Private entrance', 'Balcony', 'Linen', 'Air conditioning',
  ],
}

const HOTEL_AMENITIES = {
  Standard: [
    "Dustbin", "Daily Housekeeping", "Non Smoking Room", "Lockers", "Wi-fi",
    "Bed Curtains", "Ceiling Fan", "Bed Fan", "Air Conditioner", "Ensuite Bathroom",
    "Hot Water", "Hair Dryer", "Towel Rental", "Toilet", "Shower", "Toilet Paper",
    "Non-feather Pillows", "Linen", "Socket Near the Bed", "Bedside Lamp", "Work Desk"
  ],
  Deluxe: [
    "Dustbin", "Daily Housekeeping", "Non Smoking Room", "Clothes Rack", "Linen",
    "Electric Kettle", "Tea/ Coffee Sachets", "Wi-fi", "Flat Screen TV", "Ceiling Fan",
    "Air Conditioner", "Ensuite Bathroom", "Toiletries", "Hair Dryer", "Hot Water",
    "Towels", "Toilet", "Shower", "Toilet Paper", "Non-feather Pillows", "Linen",
    "Socket Near the Bed", "Bedside Lamp", "Coffee Table Set"
  ]
}

const CLD = 'https://res.cloudinary.com/dtksfqdju/image/upload'
const cld = (id) => `${CLD}/${id}`

const CITY_META = {
  rishikesh: {
    tagline: 'Uttarakhand - Land of Spirituality and Adventure',
    address: 'Laxman Jhula Road, Rishikesh.',
    about: `Located in Tapovan, just 400 meters away from Lakshman Jhula, Live Free Hostel perfectly blends high-energy adventure with mindful relaxation. Our expansive rooftop terrace offers panoramic views of the rolling green Himalayan foothills and the sacred Ganga River, serving as an idyllic backdrop for morning sunbathing or peaceful rooftop yoga classes.
Throughout our vibrant and colorful multi-story property, active common areas invite travelers to bond over guitar sessions, shared board games, or competitive foosball and table tennis tournaments. Choose from spacious, bright dorms designed with individual privacy curtains and power outlets, or retreat to comfortable private rooms with ensuite bathrooms after a long day out.
As a preferred launchpad and trusted base camp for massive “India Hikes” trekking expeditions, our expertly trained team makes transitioning between work and play effortless. Whether you are sipping espresso at our ground-floor, in-house cafe or coordinating a white-water rafting trip from our travel desk, this hostel transforms your mountain escape into an immersive community experience.`,
    checkIn: '13:00 until 23:59',
    checkOut: 'until 10:00',
    highlights: ['Riverside yoga & meditation', 'White-water river rafting', 'Bungee jumping & zip-lining', 'Laxman Jhula & Ram Jhula', 'Sunset Ganga aarti', 'Beatles Ashram trek'],
    video: 'sPQQLwdT1rQ',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.82505972936!2d78.3251937!3d30.127819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091644ee11e80d%3A0x9f80ed977d1916c6!2sLive%20Free%20Hostel%20Rishikesh!5e0!3m2!1sen!2sin!4v1779344624890!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Jolly Grant Airport (DED), then taxi to Live Free Rishikesh (~35 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Haridwar Railway Station, then bus or taxi to Rishikesh (~30 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Delhi: NH334 via Haridwar. GPS: Live Free Hostel Rishikesh.' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'Pets allowed', icon: PawPrint },
    ],
    characteristics: [
      { label: 'INTERNET CONNECTION', icon: Globe, items: ['Wi-Fi'] },
      { label: 'PARKING', icon: ParkingCircle, items: ['Limited Parking Slots Available'] },
      { label: 'SERVICES', icon: ConciergeBell, items: ['24-hour reception', 'Online check-in/-out', 'Night security', 'Luggage storage', 'Laundry', 'City Activity assistance'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'PRIVATE ROOM HAS', icon: BedDouble, items: ['AC', 'En-suite Bathroom', 'Double Bed', 'WiFi'] },
    ],
  },
  dehradun: {
    tagline: 'Uttarakhand · Gateway to Himalayas',
    address: 'Rajpur Road, Dehradun, Uttarakhand 248001',
    about: `Dehradun is a city of pine forests, colonial architecture, and mountain air. Nestled in the Doon Valley between the Ganges and Yamuna rivers, it serves as the perfect basecamp for exploring the Himalayas. Live Free Dehradun brings the same community-driven spirit to this vibrant city — where remote workers, backpackers, and wanderers find a warm home away from home.`,
    checkIn: 'from 13:00 until 23:59',
    checkOut: 'until 10:00',
    highlights: ["Robber's Cave", "Sahastradhara waterfalls", "Mussoorie day-trip", "Forest Research Institute", "Paltan Bazaar", "Mountain biking"],
    video: null,
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.7862564688057!2d78.07051957618397!3d30.385426802333587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d798eee5f1b5%3A0xb57a22052215b674!2sLive%20Free%20Hostel%20Dehradun!5e0!3m2!1sen!2sin!4v1779344677046!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Jolly Grant Airport (DED), then taxi to Live Free Dehradun (~45 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Dehradun Railway Station, then auto/cab to Live Free (~10–15 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Delhi: NH58 via Haridwar. GPS: Live Free Hostel Dehradun.' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'No pets', icon: PawPrint },
    ],
    characteristics: [
      { label: 'INTERNET CONNECTION', icon: Globe, items: ['Wi-Fi'] },
      { label: 'PARKING', icon: ParkingCircle, items: ['Limited Parking Slots Available'] },
      { label: 'SERVICES', icon: ConciergeBell, items: ['24-hour reception', 'Online check-in/-out', 'Night security', 'Luggage storage', 'Laundry', 'City Activity assistance'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'PRIVATE ROOM HAS', icon: BedDouble, items: ['AC', 'En-suite Bathroom', 'King Bed', 'WiFi', 'Mountain View'] },
    ],
  },
  varanasi: {
    tagline: 'Uttar Pradesh · City of Light',
    address: 'Near Assi Ghat, Varanasi, Uttar Pradesh 221005',
    about: `One of the oldest living cities on earth, Varanasi pulses with ancient ritual, colour, and sound. The city lives and breathes on the banks of the Ganges, where life and death coexist in the most poetic way imaginable. Live Free Varanasi puts you right in the middle of it all — close to the ghats, the temples, and the unforgettable energy that makes this city like no other.`,
    checkIn: 'from 13:00 until 23:59',
    checkOut: 'until 10:00',
    highlights: ['Sunrise boat ride', 'Evening Ganga aarti', 'Vishwanath Temple', 'Sarnath ruins', 'Silk shopping', 'Street food walk'],
    video: 'B7QUA2zZsQ8',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5776986113897!2d83.00443047605633!3d25.284787728146224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33ba110bfd13%3A0x16133790c1ae2c19!2sLive%20Free%20Hostel%20Varanasi!5e0!3m2!1sen!2sin!4v1779344741618!5m2!1sen!2sin',
    cancellationPolicy: 'Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable. No-show will be charged the full amount.',
    directions: {
      air: { label: 'By Air', icon: Plane, content: 'Lal Bahadur Shastri Airport (VNS), then taxi to Live Free Varanasi (~30 mins).' },
      train: { label: 'By Train', icon: Train, content: 'Varanasi Junction, then auto/cab to the hostel (~20 mins).' },
      road: { label: 'By Road', icon: Car, content: 'From Lucknow: NH30. From Allahabad: NH19. GPS: Live Free Hostel Varanasi.' },
    },
    features: [
      { label: 'Wi-Fi', icon: Wifi },
      { label: '24-hour reception', icon: ConciergeBell },
      { label: 'Express check-in/-out', icon: KeyRound },
      { label: 'Air conditioning', icon: Wind },
      { label: 'No pets', icon: PawPrint },
    ],
    characteristics: [
      { label: 'INTERNET CONNECTION', icon: Globe, items: ['Wi-Fi'] },
      { label: 'PARKING', icon: ParkingCircle, items: ['Limited Parking Slots Available'] },
      { label: 'SERVICES', icon: ConciergeBell, items: ['24-hour reception', 'Online check-in/-out', 'Night security', 'Luggage storage', 'Laundry', 'City Activity assistance'] },
      { label: 'FOOD', icon: UtensilsCrossed, items: ['In-house Cafe', 'Freshly brewed coffee'] },
      { label: 'PRIVATE ROOM HAS', icon: BedDouble, items: ['AC', 'En-suite Bathroom', 'Double Bed', 'WiFi'] },
    ],
  },
}

const CITY_PHOTOS = {
  varanasi: {
    'Varanasi Main': ['Main_1_hru0d7', 'Main_2_akh0p1', 'LFV7_kbja74', 'LFV8_ogbg7n', 'LFV4_vmjkuh', 'LFV22_hls0gf', 'LFV2_amyqdp', 'LFV1_c8auvu'],
    'Property': ['IMG_20231126_175041_vsorfl', 'IMG_20231126_175143_pabnyb', 'GOPR4866-01_cvdl7a', 'IMG_2680_dd2twv', 'DSC09140_vjitra', 'GOPR4897_gqv3az', 'IMG_7282-Edit-01-01_hfzdxi', '1652357644808_image_6483441_t1ncgf'],
    'Common Area': ['IMG_8959_djblsl', 'IMG_2680_c07en4', '_6__0021_-_Copy_ebjgid', '_6__0053_vtwnvh', 'IMG_20231013_125201_jgit5d', 'Live_Music_vioifo', 'IMG_20230218_113337_1_e4ucvi', 'Valentines_day_ibke4i', 'sandup_comedy_hydrbo', 'communal_dinner_ejkrjq', '1653632535675-01_ql75el', 'Holi_celebration_adpyxz'],
    'Deluxe Private': ['IMG_7254_cfopvv', '2_kfjrez', 'IMG_7029_xbgwwn', '1_llvmn5', '4_e9icrp', 'GOPR4881_m3csgi', 'GOPR4887_kamabj', 'bathroom_ftf16o', 'main_wfcf2o'],
    'Reception': ['main_zcjmir', '_6__0135_1_dbnwhs', '_6__0154_zk9pq9', '_6__0198_weykzc'],
    '10-bed Dorm': ['bathroom_2_lkci6f', '2_vbrtl2', '1_qyrxzf', 'bathroom_3_ls12af', 'main_sehe7c', 'bathroom_1_sihzhb'],
    '6-bed Dorm': ['main_d279el', '2_z7hkg2', 'GOPR4927_fuimtw', '1_muwyuu', 'bathroom_t4paqi'],
    '6-bed Female Dorm': ['3_uqieao', 'bathroom_uohqot', 'main_b6t8xi', '1_etla21', '2_hisbqs'],
    '8-bed Dorm': ['IMG_7251_kggfn6', 'bathroom_2_alk4e3', 'IMG_7250_zjglss', 'main_wmda7j', 'bathroom_1_wujawj'],
  },
  dehradun: {
    '4 Bed Dorm': ['image_9ec3b750_n1jctt', 'IMG_20251128_142909_00_033_jsebve', 'IMG_20251128_143221_00_039_jnvwul', 'IMG_20251128_143107_00_037_x7ko4y', 'IMG_4323_ekaxct'],
    '6 Bed Dorm': ['LFD9_30_lwqbbg', 'IMG_4180_lk6w4w', 'IMG_4182_gtyk5u', 'IMG_4178_iigosg', 'IMG_4181_ojoohj', 'LFD3_mnqkrj'],
    '8 Bed Dorm': ['IMG_20251207_125040_00_267_zwlvck', 'IMG_20251207_124703_00_259_2_byt4eb', 'LFD2_aiy5a5', 'IMG_4226_brdugj'],
    'Building': ['IMG_20251128_173843_00_091_bip88g', 'IMG_20251128_163832_00_084_qff8uu', 'LFD9_1_daulbb', 'LFD9_2_lmsjty'],
    'Cafe': ['LFD12_pkazl4', 'LFD10_jtfjui', 'LFD9_3_hn6fbk', 'LFD9_5_zi4cfh'],
    'Deluxe Private': ['IMG_20251128_160103_00_051_stsrhw', 'IMG_20251128_155735_00_046_mbtptk', 'IMG_20251128_160315_00_055_cc6htr'],
    'Family Private': ['IMG_4355_lntw4e', 'IMG_4365_vyfli1', 'IMG_4364_pcjwqc', 'IMG_4357_injjsn'],
    'Female Dorm': ['LFD6_cut51z', 'IMG_20251128_141714_00_027_fbblwk', 'LFD9_20_payhsn'],
  },
  rishikesh: {},
}

// ── SINGLE LightBox — with category tabs ──
function LightBox({ images, index, onClose, photosByCategory, allPhotos }) {
  const thumbContainerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [localIndex, setLocalIndex] = useState(index)

  const categories = ['All', ...Object.keys(photosByCategory)]
  const currentPhotos = activeCategory === 'All' ? allPhotos : (photosByCategory[activeCategory] || [])

  useEffect(() => { setLocalIndex(index) }, [index])
  useEffect(() => { setLocalIndex(0) }, [activeCategory])

  useEffect(() => {
    if (thumbContainerRef.current) {
      const activeThumb = thumbContainerRef.current.children[localIndex]
      if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [localIndex])

  const goPrev = () => setLocalIndex(i => (i - 1 + currentPhotos.length) % currentPhotos.length)
  const goNext = () => setLocalIndex(i => (i + 1) % currentPhotos.length)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPhotos.length])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        style={{ background: '#111', borderRadius: 16, maxWidth: '90vw', maxHeight: '90vh', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* TOP BAR — category tabs + close */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: '#1a1a1a', overflowX: 'auto', flexShrink: 0, scrollbarWidth: 'none' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: '6px 14px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: 'none', whiteSpace: 'nowrap', flexShrink: 0, background: activeCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.1)', color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.6)', transition: 'all 0.2s' }}>
              {cat} ({cat === 'All' ? allPhotos.length : (photosByCategory[cat] || []).length})
            </button>
          ))}
          <button onClick={onClose} style={{ marginLeft: 'auto', flexShrink: 0, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={16} />
          </button>
        </div>

        {/* MAIN IMAGE */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px', position: 'relative', minHeight: 0 }}>
          <button className={styles.lightboxNavBtn} onClick={e => { e.stopPropagation(); goPrev() }} style={{ position: 'absolute', left: 8, background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <ChevronLeft size={22} />
          </button>
          <img src={cld(currentPhotos[localIndex])} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: 8 }} />
          <button className={styles.lightboxNavBtn} onClick={e => { e.stopPropagation(); goNext() }} style={{ position: 'absolute', right: 8, background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <ChevronRight size={22} />
          </button>
          <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.6)', padding: '2px 12px', borderRadius: 20, color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 500 }}>
            {localIndex + 1} / {currentPhotos.length}
          </div>
        </div>

        {/* THUMBNAIL STRIP */}
        <div ref={thumbContainerRef} style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', padding: '10px 16px', display: 'flex', gap: 8, scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) transparent', flexShrink: 0, height: 100, background: 'rgba(0,0,0,0.3)' }} onClick={e => e.stopPropagation()}>
          {currentPhotos.map((id, i) => (
            <div key={id} className={styles.lightboxThumb} onClick={() => setLocalIndex(i)} style={{ flex: '0 0 auto', width: 80, height: 80, borderRadius: 6, overflow: 'hidden', border: i === localIndex ? '3px solid var(--primary)' : '3px solid transparent', transition: 'all 0.2s', cursor: 'pointer', transform: i === localIndex ? 'scale(1.05)' : 'scale(1)' }}>
              <img src={cld(id)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Gallery ──
function GallerySection({ photosByCategory, allPhotos, onOpenLightbox }) {
  const hasPhotos = allPhotos.length > 0
  return (
    <div className={styles.galleryWrap}>
      {hasPhotos ? (
        <div style={{ position: 'relative' }}>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryMainBox} onClick={() => onOpenLightbox(allPhotos, 0)}>
              <img src={cld(allPhotos[0])} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className={styles.gallerySub}>
              {[1, 2, 3, 4].map(i => {
                const photo = allPhotos[i]
                const imgSrc = photo ? cld(photo) : GALLERY_FALLBACKS[i - 1]
                return (
                  <div key={i} className={styles.galleryImgBox} onClick={() => onOpenLightbox(allPhotos, i < allPhotos.length ? i : 0)}>
                    <img src={imgSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={e => { e.currentTarget.src = GALLERY_FALLBACKS[i - 1] }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <button
            className={styles.seeAllBtn}
            onClick={() => onOpenLightbox(allPhotos, 0)}
            style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(0, 0, 0, 0)', borderRadius: 8, padding: '10px 22px', cursor: 'pointer', color: '#1a1a1a', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 16px rgba(0, 0, 0, 0)' }}
          >
            <span>📷</span> See all photos ({allPhotos.length})
          </button>
        </div>
      ) : (
        <div className={styles.galleryEmpty}>
          <ImageOff size={36} style={{ color: 'var(--primary)' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)' }}>Photos Coming Soon</p>
        </div>
      )}
    </div>
  )
}

// ── Hostel Name + Address + About ──
function HeroInfoSection({ dest, meta }) {
  return (
    <section style={{ padding: '44px 0 32px', background: '#fff' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', marginBottom: 10, lineHeight: 1.15 }}>
          Live Free Hostel, {dest.name}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, color: '#888', fontSize: '0.92rem' }}>
          <MapPin size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>{meta.address}</span>
        </div>
        <p style={{ fontSize: '0.96rem', color: '#555', lineHeight: 1.9, width: '100%', marginBottom: 28 }}>{meta.about}</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#travel-itinerary" onClick={e => { e.preventDefault(); document.getElementById('travel-itinerary')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, background: 'var(--primary)', color: '#fff', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >View Travel Itinerary →</a>
          <a href="/blogs"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, border: '1.5px solid rgba(0,0,0,0.15)', color: 'var(--text)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', background: '#fff', transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
          >Read Our Blogs →</a>
        </div>
      </div>
    </section>
  )
}

// ── Good to Know ──
function GoodToKnowSection({ meta }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ padding: '0 0 44px', background: '#ffffff' }}>
      <div className="container">
        <div style={{ border: '1.5px solid #e8e8e8', borderRadius: 16, overflow: 'hidden' }}>
          <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', background: 'linear-gradient(135deg, #fffaf7, #fff9f6)', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 10 }}><span>ℹ️</span> Good to Know</span>
            <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.25s', color: 'var(--primary)', flexShrink: 0 }} />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
                <div style={{ padding: '28px 28px 32px', borderTop: '1px solid #f0f0f0' }} className={styles.goodToKnowGrid}>
                  <div style={{ padding: '0 32px 0 0' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Check-in</span>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', display: 'block' }}>{meta.checkIn}</span>
                  </div>
                  <div className={styles.goodToKnowDivider} style={{ height: 48, background: '#eee' }} />
                  <div style={{ padding: '0 0 0 32px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bbb', display: 'block', marginBottom: 8 }}>Check-out</span>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', display: 'block' }}>{meta.checkOut}</span>
                  </div>
                    <ul style={{ marginTop: 10, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none' }}>
                    <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.6 }}>
                      
                      Extra bed – ₹700 (only 1 bed allowed in a room)
                    </li>
                    <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.6 }}>
                      
                      This is not a party hostel — silent hours after 11 PM are strictly observed.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// ── Select Room ──
function SelectRoomSection({ rooms, photosByCategory, onOpenLightbox }) {
  const [showAllRooms, setShowAllRooms] = useState(false)
  const [imgIndex, setImgIndex] = useState({})
  const [detailsOpen, setDetailsOpen] = useState({})

  const FALLBACK_IMGS = [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  ]

  const AMENITY_ICONS = {
    'WiFi': '📶', 'AC': '❄️', 'Personal Locker': '🔒', 'Common Bathroom': '🚿',
    'En-suite Bathroom': '🛁', 'Double Bed': '🛏️', 'King Bed': '🛏️',
    'Privacy Curtain': '🪟', 'Mountain View': '🏔️', 'Female Only': '👩',
    'Charging Points': '🔌', 'Housekeeping': '🧹', 'Hot Water': '🚿',
  }

  const displayedRooms = showAllRooms ? rooms : rooms.slice(0, 3)
  const origPrice = (price) => Math.round(price / 0.80)

  return (
    <section id="select-room" style={{ padding: '40px 0 56px', background: '#fff', borderTop: '1px solid #efefef' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: 28, color: '#c0c0c0', textAlign: 'center' }}>SELECT ROOM</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          {displayedRooms.map((room, roomIdx) => {
            const categoryPhotos = Object.entries(photosByCategory).find(([k]) =>
              k.toLowerCase().includes(room.id.replace(/-/g, ' ').toLowerCase()) ||
              room.name.toLowerCase().includes(k.toLowerCase())
            )
            const roomPhotos = categoryPhotos ? categoryPhotos[1] : []
            const currentImgIdx = imgIndex[room.id] || 0
            const displayImg = roomPhotos.length > 0 ? cld(roomPhotos[currentImgIdx % roomPhotos.length]) : FALLBACK_IMGS[roomIdx % FALLBACK_IMGS.length]
            const isSoldOut = room.soldOut || false
            const availText = room.availability || '2 BEDS AVAILABLE'
            const orig = origPrice(room.price)

            return (
             <div key={room.id} className={styles.roomCard}>
                <div className={styles.roomImageWrap} onClick={() => roomPhotos.length > 0 && onOpenLightbox(roomPhotos, currentImgIdx)}>
                  <img src={displayImg} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {roomPhotos.length > 1 && (
                    <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5 }}>
                      {roomPhotos.slice(0, 5).map((_, i) => (
                        <button key={i} onClick={e => { e.stopPropagation(); setImgIndex(prev => ({ ...prev, [room.id]: i })) }}
                          style={{ width: 6, height: 6, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', background: i === currentImgIdx ? '#fff' : 'rgba(255,255,255,0.45)', transition: 'background 0.2s' }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.roomBody}>
                  <div className={styles.roomHeadRow}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', lineHeight: 1.3, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.3px' }}>{room.name}</h3>
                      <div style={{ width: 36, height: 2, background: 'var(--primary)', marginBottom: 8 }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', color: '#888', marginBottom: 4 }}>
                        
                      </div>
                      <p style={{ color: '#999', fontSize: '0.82rem', lineHeight: 1.5 }}>{room.desc}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', marginBottom: 2 }}>
                       
                        <span style={{ fontSize: '0.82rem', color: '#bbb', textDecoration: 'line-through' }}>₹{orig.toLocaleString()}</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>₹{room.price.toLocaleString()}</span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#bbb', textAlign: 'right' }}>1 night</div>
                      {isSoldOut
                        ? <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#e85c3a', marginTop: 6, textAlign: 'right', letterSpacing: '0.5px' }}>SOLD OUT</div>
                        : <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2d9b5a', marginTop: 6, textAlign: 'right' }}>{availText}</div>
                      }
                    </div>
                  </div>
  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, gap: 12 }}>
                    <button
                      type="button"
                      onClick={() => setDetailsOpen(prev => ({ ...prev, [room.id]: !prev[room.id] }))}
                      style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text)' }}
                    >
                      Room Details
                      <ChevronDown size={15} style={{ color: 'var(--primary)', transform: detailsOpen[room.id] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                    {!isSoldOut && (
                      <a href={room.bookingUrl} target="_blank" rel="noreferrer"
                        style={{ display: 'inline-block', background: '#1a1a1a', color: '#fff', fontWeight: 700, fontSize: '0.82rem', padding: '11px 28px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.3px', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--primary)'}
                        onMouseLeave={e => e.currentTarget.style.background = '#1a1a1a'}
                      >Book Now</a>
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {detailsOpen[room.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ gridColumn: '1 / -1', overflow: 'hidden', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}
                    >
                      <div style={{ padding: '24px 28px 28px' }}>
                        <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 4 }}>Room Description</h4>
                        <p style={{ fontSize: '0.88rem', color: '#777', marginBottom: 20 }}>{room.roomdesc}</p>

                        <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 4 }}>Room Capacity</h4>
                        <p style={{ fontSize: '0.88rem', color: '#777', marginBottom: 20 }}>{ROOM_CAPACITY[room.type] || ROOM_CAPACITY.Dormitory}</p>

                        {/* <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 12 }}>Room Amenities</h4>
                        <div className={styles.roomDetailsGrid} style={{ marginBottom: 24 }}>
                          {(ROOM_AMENITIES_BY_TYPE[room.type] || ROOM_AMENITIES_BY_TYPE.Dormitory).map(item => (
                            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.86rem', color: '#444' }}>
                              <Check size={14} style={{ color: '#2d9b5a', flexShrink: 0 }} /> {item}
                            </span>
                          ))}
                        </div> */}

                        <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 12 }}>Hotel Amenities</h4>
                        <div className={styles.roomDetailsGrid}>
                          {(room.type.includes('Private') ? HOTEL_AMENITIES.Deluxe : HOTEL_AMENITIES.Standard).map(item => (
                            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.86rem', color: '#444' }}>
                              <Check size={14} style={{ color: '#2d9b5a', flexShrink: 0 }} /> {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
        {rooms.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button onClick={() => setShowAllRooms(!showAllRooms)} className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>
              {showAllRooms ? 'Show Less ↑' : `Show All ${rooms.length} Rooms +`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// ── Features ──
function FeaturesSection({ meta }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container" style={{ padding: '0 28px' }}>
        <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ fontWeight: 800, fontSize: '0.78rem', letterSpacing: '3.5px', textTransform: 'uppercase', color: '#aaa' }}>FEATURES / CONVENIENCES</span>
          <span style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '1.2rem', fontWeight: 300, flexShrink: 0, transition: 'all 0.25s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 24 }}>
                {meta.features.map(f => {
                  const Icon = f.icon
                  return (
                    <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.87rem', color: 'var(--text)', fontWeight: 500, border: '1px solid #e8e8e8', borderRadius: 8, padding: '9px 16px', background: '#fff' }}>
                      <Icon size={15} style={{ color: '#888', flexShrink: 0 }} /> {f.label}
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// ── Characteristics ──
function CharacteristicsSection({ meta }) {
  return (
    <section style={{ padding: '48px 0', background: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container">
        <div className={styles.charGrid}>
          {meta.characteristics.map(cat => {
            const Icon = cat.icon
            return (
              <div key={cat.label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Icon size={17} style={{ color: '#555', flexShrink: 0 }} />
                  <span style={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#333' }}>{cat.label}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#ccc', flexShrink: 0, marginTop: 7 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── How to Reach Us ──
function ReachUsSection({ meta, dest }) {
  return (
    <section style={{ padding: '64px 0', background: '#fff' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '1.4rem', marginBottom: 12, color: 'var(--text)' }}>How to Reach Us</h2>
        <p style={{ color: '#999', fontSize: '0.92rem', marginBottom: 36 }}>Live Free Hostel, {dest.name} — and the best spots nearby.</p>
        <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', marginBottom: 40, background: '#000' }}>
          <div className={styles.mapFrameWrap}>
            <iframe src={meta.mapSrc} width="100%" height="100%" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Live Free ${dest.name}`} />
          </div>
          <div className={styles.mapInfoCard} style={{ background: 'rgba(26,26,26,0.92)', backdropFilter: 'blur(4px)', borderRadius: 14, padding: '24px 26px', color: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <MapPin size={18} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: '1rem' }}>Live Free Hostel</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: 20 }}>{meta.address}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {meta.highlights.slice(0, 5).map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                  <span style={{ color: 'var(--primary-light)', flexShrink: 0 }}>📍</span> {h}
                </div>
              ))}
            </div>
            {/* <div style={{ marginTop: 20, fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>Nearby attractions shown on map →</div> */}
          </div>
        </div>
        <div className={styles.directionsGrid}>
          {Object.values(meta.directions).map(({ label, icon: Icon, content }) => (
            <div key={label} style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: 12, padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 8, background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={18} style={{ color: 'var(--primary)' }} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text)' }}>{label}</span>
              </div>
              <p style={{ fontSize: '0.87rem', color: '#777', lineHeight: 1.7 }}>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Travel Itinerary ──
function ItinerarySection({ itinerary, dest, meta }) {
  const [expanded, setExpanded] = useState(false)
  const previewText = `${meta.about.substring(0, 200)}...`
  return (
    <section id="travel-itinerary" style={{ padding: '64px 0', background: '#fdf6f0' }}>
      <div className={`container ${styles.itineraryGrid}`}>
        <div>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 28px rgba(0,0,0,0.1)', aspectRatio: '4/3' }}>
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80" alt="Travel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ marginTop: 20, padding: '24px 28px', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, margin: 0 }}>{expanded ? meta.about : previewText}</p>
            <button type="button" onClick={() => setExpanded(v => !v)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18, padding: '10px 18px', borderRadius: 999, background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: '#fff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', boxShadow: '0 10px 24px rgba(232,93,58,0.22)', transition: 'transform 0.22s ease, box-shadow 0.22s ease', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(232,93,58,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(232,93,58,0.22)' }}
            >{expanded ? 'Show Less' : 'Read More'}</button>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--text)' }}>Travel </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--primary)', fontStyle: 'italic' }}>Itinerary</span>
          </div>
          <p style={{ color: '#999', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: 28 }}>Wake up to fresh mornings, friendly faces, and an energy that is unique to the cities we call home.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {itinerary.map((day, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: '3px solid var(--primary)' }}
              >
                <h4 style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 12, color: 'var(--text)' }}>{day.day}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {day.activities.map((a, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: '0.87rem', color: '#777' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />{a}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Accordion ──
function AccordionSection({ title, children, bg = '#fff' }) {
  const [open, setOpen] = useState(false)
  return (
    <section style={{ background: bg, borderTop: '1px solid #eee' }}>
      <div className="container" style={{ padding: '0 28px' }}>
        <button onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>{title}</span>
          <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s', color: 'var(--primary)', flexShrink: 0 }} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
              <div style={{ paddingBottom: 24 }}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CancellationSection({ meta }) {
  return (
    <AccordionSection title="Cancellation Policy">
      <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.8 }}>{meta.cancellationPolicy}</p>
    </AccordionSection>
  )
}

function PropertyPolicySection({ city }) {
  const policies = CITY_PROPERTY_POLICY?.[city] || []
  if (!policies.length) return null
  return (
    <AccordionSection title="Property Policy">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {policies.map((p, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, marginTop: 8 }} />{p}
          </li>
        ))}
      </ul>
    </AccordionSection>
  )
}

function MustReadsSection({ city }) {
  const reads = CITY_MUST_READS?.[city] || []
  if (!reads.length) return null
  return (
    <section style={{ padding: '56px 0 64px', background: '#fafafa', borderTop: '1px solid #eee' }}>
      <div className="container">
        <h2 style={{ fontWeight: 800, fontSize: '0.8rem', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: 32, color: 'var(--text)' }}>MUST READS</h2>
        <div className={styles.mustReadsGrid}>
          {reads.map((item, i) => (
            <motion.a key={i} href={item.link} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.09 }} viewport={{ once: true }}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', borderRadius: 14, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 14px rgba(0,0,0,0.07)', border: '1px solid #eee', transition: 'transform 0.25s, box-shadow 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.11)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.07)' }}
            >
              <div style={{ height: 200, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span style={{ position: 'absolute', top: 14, left: 14, background: 'var(--primary)', color: '#fff', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 11px', borderRadius: 99 }}>{item.tag}</span>
              </div>
              <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 10, lineHeight: 1.45, flex: 1 }}>{item.title}</h3>
                <p style={{ fontSize: '0.84rem', color: '#999', lineHeight: 1.65, marginBottom: 16 }}>{item.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
                  Read more <ExternalLink size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── MAIN PAGE ──
export default function DestinationPage({ city }) {
  const dest = DESTINATIONS.find(d => d.id === city)
  const meta = CITY_META[city]
  const rooms = CITY_ROOMS?.[city] || []
  const itinerary = CITY_ITINERARY?.[city] || []
  const photosByCategory = CITY_PHOTOS[city] || {}
  const allPhotos = Object.values(photosByCategory).flat()

  const [lightboxPhotos, setLightboxPhotos] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (photos, i) => { setLightboxPhotos(photos); setLightboxIndex(i) }
  const closeLightbox = () => setLightboxIndex(null)

  if (!dest || !meta) return null

  return (
    <>
      <GallerySection photosByCategory={photosByCategory} allPhotos={allPhotos} onOpenLightbox={openLightbox} />
      <HeroInfoSection dest={dest} meta={meta} />
      <GoodToKnowSection meta={meta} />
      <SelectRoomSection rooms={rooms} photosByCategory={photosByCategory} onOpenLightbox={openLightbox} />
      <FeaturesSection meta={meta} />
      <CharacteristicsSection meta={meta} />
      <ReachUsSection meta={meta} dest={dest} />
      {itinerary.length > 0 && <ItinerarySection itinerary={itinerary} dest={dest} meta={meta} />}
      <CancellationSection meta={meta} />
      <PropertyPolicySection city={city} />
      <MustReadsSection city={city} />
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightBox
            images={lightboxPhotos}
            index={lightboxIndex}
            onClose={closeLightbox}
            photosByCategory={photosByCategory}
            allPhotos={allPhotos}
          />
        )}
      </AnimatePresence>
    </>
  )
}
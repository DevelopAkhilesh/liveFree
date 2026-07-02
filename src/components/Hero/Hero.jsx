// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { MapPin, Calendar, LogIn, LogOut } from 'lucide-react'
// import styles from './Hero.module.css'
// import heroImg from '../../assets/hero_img.jpeg'

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 32 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.72, delay, ease: [0.2, 0.9, 0.4, 1] },
// })

// export default function Hero() {
//   const [location, setLocation] = useState('')
//   const [checkin, setCheckin] = useState('')
//   const [checkout, setCheckout] = useState('')

//   const scrollToFeatures = () =>
//     document.getElementById('why-livefree')?.scrollIntoView({ behavior: 'smooth' })

//   return (
//     <section className={styles.hero} id="home">
//       {/* Background */}
//       <div className={styles.bg}>
//         <img src={heroImg} alt="LiveFree Hostel" className={styles.bgImg} />
//       </div>
//       <div className={styles.overlay} />

//       {/* Main content */}
//       <div className={styles.content}>
//         <motion.span className={styles.eyebrow} {...fadeUp(0.1)}>
//           Live Free Hostel
//         </motion.span>

//         <motion.h1 className={styles.headline} {...fadeUp(0.22)}>
//           Your basecamp for freedom
//         </motion.h1>

//         <motion.p className={styles.subline} {...fadeUp(0.34)}>
//           Cozy stays, welcoming faces, and unforgettable memories across Rishikesh, Varanasi & Dehradun.
//         </motion.p>

//         {/* Booking Panel */}
//         <motion.div className={styles.bookingPanel} {...fadeUp(0.46)}>
//           <div className={styles.bookingField}>
//             <label className={styles.bookingLabel}>
//               <MapPin size={13} /> Location
//             </label>
//             <select
//               className={styles.bookingInput}
//               value={location}
//               onChange={e => setLocation(e.target.value)}
//             >
//               <option value="">Select property</option>
//               <option value="rishikesh">Rishikesh</option>
//               <option value="dehradun">Dehradun</option>
//               <option value="varanasi">Varanasi</option>
//             </select>
//           </div>
//           <div className={styles.bookingDivider} />
//           <div className={styles.bookingField}>
//             <label className={styles.bookingLabel}>
//               <LogIn size={13} /> Check-in
//             </label>
//             <input
//               type="date"
//               className={styles.bookingInput}
//               value={checkin}
//               onChange={e => setCheckin(e.target.value)}
//             />
//           </div>
//           <div className={styles.bookingDivider} />
//           <div className={styles.bookingField}>
//             <label className={styles.bookingLabel}>
//               <LogOut size={13} /> Check-out
//             </label>
//             <input
//               type="date"
//               className={styles.bookingInput}
//               value={checkout}
//               onChange={e => setCheckout(e.target.value)}
//             />
//           </div>
//           <button className={styles.bookingBtn}>
//             Book Now
//           </button>
//         </motion.div>
//       </div>

//       {/* Scroll cue */}
//       <div className={styles.scrollCue} onClick={scrollToFeatures} style={{ cursor: 'pointer' }}>
//         <div className={styles.scrollLine} />
//         <span>Scroll</span>
//       </div>
//     </section>
//   )
// }

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { MapPin, Calendar } from 'lucide-react'
// import styles from './Hero.module.css'
// import heroImg from '../../assets/hero_img.jpeg'

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 32 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.72, delay, ease: [0.2, 0.9, 0.4, 1] },
// })

// export default function Hero() {
//   const [location, setLocation] = useState('')
//   const [checkin, setCheckin] = useState('')
//   const [checkout, setCheckout] = useState('')

//   const scrollToFeatures = () =>
//     document.getElementById('why-livefree')?.scrollIntoView({ behavior: 'smooth' })

//   return (
//     <section className={styles.hero} id="home">
//       {/* Background */}
//       <div className={styles.bg}>
//         <img src={heroImg} alt="LiveFree Hostel" className={styles.bgImg} />
//       </div>
//       <div className={styles.overlay} />

//       {/* Main content */}
//       <div className={styles.content}>
//         <motion.span className={styles.eyebrow} {...fadeUp(0.1)}>
//           Live Free Hostel
//         </motion.span>

//         <motion.h1 className={styles.headline} {...fadeUp(0.22)}>
//           Your basecamp for freedom
//         </motion.h1>

//         <motion.p className={styles.subline} {...fadeUp(0.34)}>
//           Cozy stays, welcoming faces, and unforgettable memories across Rishikesh, Varanasi & Dehradun.
//         </motion.p>

//         {/* Booking Panel */}
//         <motion.div className={styles.bookingPanel} {...fadeUp(0.46)}>
//           <div className={styles.bookingField}>
//             <label className={styles.bookingLabel}>
//               <MapPin size={13} /> Location
//             </label>
//             <select
//               className={styles.bookingInput}
//               value={location}
//               onChange={e => setLocation(e.target.value)}
//             >
//               <option value="">Select property</option>
//               <option value="rishikesh">Rishikesh</option>
//               <option value="dehradun">Dehradun</option>
//               <option value="varanasi">Varanasi</option>
//             </select>
//           </div>

//           <div className={styles.bookingDivider} />

//           <div className={styles.bookingField}>
//             <label className={styles.bookingLabel}>
//               Check-in
//             </label>
//               <input
//                 type="date"
//                 className={styles.bookingInput}
//                 value={checkin}
//                 onChange={e => setCheckin(e.target.value)}
//               />
//               {/* <Calendar size={15} className={styles.calendarIcon} /> */}
            
//           </div>

//           <div className={styles.bookingDivider} />

//           <div className={styles.bookingField}>
//             <label className={styles.bookingLabel}>
//               Check-out
//             </label>
//               <input
//                 type="date"
//                 className={styles.bookingInput}
//                 value={checkout}
//                 onChange={e => setCheckout(e.target.value)}
//               />
//               {/* <Calendar size={15} className={styles.calendarIcon} /> */}
            
//           </div>

//           <button className={styles.bookingBtn}>
//             Book Now
//           </button>
//         </motion.div>
//       </div>

//       {/* Scroll cue */}
//       <div className={styles.scrollCue} onClick={scrollToFeatures} style={{ cursor: 'pointer' }}>
//         <div className={styles.scrollLine} />
//         <span>Scroll</span>
//       </div>
//     </section>
//   )
// }

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'   // Calendar removed
import styles from './Hero.module.css'
import heroImg from '../../assets/hero_img.jpeg'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease: [0.2, 0.9, 0.4, 1] },
})

export default function Hero() {
  const [location, setLocation] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')

  const scrollToFeatures = () =>
    document.getElementById('why-livefree')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <img src={heroImg} alt="LiveFree Hostel" className={styles.bgImg} />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.span className={styles.eyebrow} {...fadeUp(0.1)}>
          Live Free Hostel
        </motion.span>

        <motion.h1 className={styles.headline} {...fadeUp(0.22)}>
          Your basecamp for freedom
        </motion.h1>

        <motion.p className={styles.subline} {...fadeUp(0.34)}>
          Cozy stays, welcoming faces, and unforgettable memories across Rishikesh, Varanasi & Dehradun.
        </motion.p>

        {/* Booking Panel */}
        <motion.div className={styles.bookingPanel} {...fadeUp(0.46)}>
          <div className={styles.bookingField}>
            <label className={styles.bookingLabel}>
              <MapPin size={13} /> Location
            </label>
            <select
              className={styles.bookingInput}
              value={location}
              onChange={e => setLocation(e.target.value)}
            >
              <option value="">Select property</option>
              <option value="rishikesh">Rishikesh</option>
              <option value="dehradun">Dehradun</option>
              <option value="varanasi">Varanasi</option>
            </select>
          </div>

          <div className={styles.bookingDivider} />

          <div className={styles.bookingField}>
            <label className={styles.bookingLabel}>Check-in</label>
            <input
              type="date"
              className={styles.bookingInput}
              value={checkin}
              onChange={e => setCheckin(e.target.value)}
            />
          </div>

          <div className={styles.bookingDivider} />

          <div className={styles.bookingField}>
            <label className={styles.bookingLabel}>Check-out</label>
            <input
              type="date"
              className={styles.bookingInput}
              value={checkout}
              onChange={e => setCheckout(e.target.value)}
            />
          </div>

          <button className={styles.bookingBtn}>Book Now</button>
        </motion.div>
      </div>

      <div className={styles.scrollCue} onClick={scrollToFeatures} style={{ cursor: 'pointer' }}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
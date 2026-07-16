// ============================================================
//  LIVE FREE — SITE DATA
// ============================================================
import RishikeshFemaleDorm from '../assets/Rishikesh_Female_Dorm.jpeg'
import RishikeshMixDorm4 from"../assets/Rishikesh_4_Bed_Mix.jpeg";
import RishikeshMixDorm6 from"../assets/Rishikesh_6_Bed_Mix.jpeg";
import RishikeshDeluxe from "../assets/Rishikesh_Deluxe_Bed.jpeg";
import RishikeshPrivate from "../assets/Rishikesh_Private_Bed.jpeg";

export const FEATURES = [
  {
    id: 'Prime Locations',
    icon: 'MapPin',
    title: 'Prime Location',
    desc: 'Every Live Free property is strategically situated to offer breathtaking aesthetics and unmatched convenience for backpackers. Positioned steps away from major transport hubs, vibrant old-town markets, local cafés, and iconic spiritual centres, we are your perfect exploration launchpad. Step out to discover hidden gems, or return to recharge in style.',
  },
  {
    id: 'cafe',
    icon: 'Coffee',
    title: 'The Live Free Café',
    desc: 'Our Café is the cozy, high-energy heart of our hostel. Designed with shared tables and plush cushions, it’s where casual afternoon coffees turn into late-night travel plans with global friends. We serve 100% fresh, made-to-order dishes—from nutritious, home-style Indian comfort food to global backpacker staples—perfectly fueling your daily adventures on a budget.',
  },
  {
    id: 'events',
    icon: 'Sofa',
    title: 'Your Space, Your Vibe',
    desc:`Our expansive common areas adapt to your mood. Seek out a sunlit corner for focused deep-work, strum a guitar with creators, or gather for high-stakes card games. Packed with foosball, table tennis, and diverse board games, our lounges effortlessly provide the perfect social backdrop for every type of traveler.`,
  },
  {
    id: 'wifi',
    icon:'PartyPopper',
    title:'Unforgettable Hostel Events ',
    desc:`The fun never stops with our rotating calendar of community activities. Bond over vibrant in-house dinners, showcase your talent at open-mic acoustic nights, or dive into competitive trivia and board games. From morning yoga to sunset hikes, our curated gatherings ensure you leave with new friends and lifelong memories.`
  },
  {
    id: 'travel',
    icon: 'Sunset',
    title: 'Built for Digital Nomads ',
    desc: 'We ensure your work never suffers while you travel. Our properties feature reliable, fast Wi-Fi across all communal spaces, alongside robust power backup systems. Access dedicated workspaces equipped with desks and multiple socket points across our seating areas—the perfect environment to network and collaborate with a thriving global creative community.',
  },
  {
    id:'comfort',
    icon:'PawPrint',
    title:'Inclusivity',
    desc:`At Live Free, everyone is welcome. Whether you are traveling with family, kids, as a young backpacker, or a solo explorer, our property suits every journey. Our multiple, diverse common areas naturally bring people together, making it incredibly easy to connect, share stories, and mingle with similar, like-minded groups throughout your stay.`
  },
]

export const STATS = [
  { value: 200000 , suffix: '+', label: 'Guests Hosted', prefix: '' },
  { value: 10, suffix: '+', label: 'Years of Experience', prefix: '' },
  { value: 100, suffix: '+', label: 'Nationalities', prefix: '' },
  { value: 8.5, suffix: '+', label: 'Average Rating', prefix: '' },
]
import rishikeshImg from '../assets/Live_Free-23(1).png'

export const DESTINATIONS = [
  {
    id: 'rishikesh',
    // name: 'Rishikesh',
    tagline: 'Rishikesh - Your Spiritual & Adventure Hub',
    desc: 'Located in Tapovan near Lakshman Jhula, our top-rated hostel offers a rooftop yoga space, live music, and hammocks—the perfect base camp for rafting and meeting backpackers.',
    path: '/rishikesh',
    img: rishikeshImg,
    color: '#e2f0dd',
  },
  {
    id: 'varanasi',
    // name: 'Varanasi',
    tagline: 'Varanasi - Soulful Vibe by the Ganges',
    desc: 'A five-minute walk from Assi Ghat, our Varanasi hub immerses you in spiritual culture. Enjoy Ganga Aarti, explore alleyways, and connect with global travelers.',
    path: '/varanasi',
    img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800&q=85',
    color: '#fdf3ec',
  },
  {
    id: 'dehradun',
    // name: 'Dehradun',
    tagline: 'Dehradun - The Perfect Getaway Town',
    desc: 'Nestled in the valley, our Dehradun property is the perfect place to explore the city and a Mussoorie stopover. Featuring AC rooms, Wi-Fi, social zones, and quiet nooks, it unites all travelers.',
    path: '/dehradun',
    img: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=85',
    color: '#fce4db',
  },
]

export const ROOMS = [
  {
    id: 'private',
    theme: 'green',
    headline: 'Private Rooms',
    sub: 'Your own sanctuary — en‑suite, climate‑controlled, and designed to feel like home.',
    cta: 'Explore Rooms →',
  },
  {
    id: 'dorms',
    theme: 'dark',
    headline: 'Shared Dorms',
    sub: 'Thoughtfully designed pods with privacy curtains, personal lockers, and charging points.',
    cta: 'View Dorms →',
  },
  {
    id: 'experiences',
    theme: 'warm',
    headline: 'Experiences',
    sub: 'Yoga at dawn, river rafting, local food tours, and curated adventures every day.',
    cta: 'Join the Tribe →',
  },
]

export const GUIDELINES = [
  {
    icon: 'Moon',
    title: 'Quiet Hours',
    desc: 'Lights out at 11 PM. Common areas stay calm from 11 PM to 7 AM so everyone rests well.',
  },
  {
    icon: 'Users',
    title: 'Respect Community Space',
    desc: 'Shared lounges, kitchens, and terraces are for everyone. Leave them as beautiful as you found them.',
  },
  {
    icon: 'Smile',
    title: 'Friendly Hostel Culture',
    desc: 'Say hello, share a meal, swap stories. Kindness is the one policy we never compromise on.',
  },
  {
    icon: 'Sparkles',
    title: 'Cleanliness Expectations',
    desc: 'Keep your bunk and common areas tidy. Our team maintains high standards — please match them.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safety First',
    desc: 'Secure your valuables in provided lockers. Guests‑only policy after 10 PM. Emergency help always nearby.',
  },
  {
    icon: 'Ban',
    title: 'No Smoking Indoors',
    desc: 'Smoking and vaping are restricted to designated outdoor zones to keep the air fresh for all.',
  },
]

export const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Absolutely stunning hostel! The service was impeccable and the community vibe is unmatched. Truly a 5‑star experience.',
    author: 'Sarah Johnson',
    country: 'Canada',
  },
  {
    stars: 5,
    text: 'Best hostel experience in India. The rooftop nights, friendly staff, and spotless spaces made my trip unforgettable.',
    author: 'Rajesh Kumar',
    country: 'India',
  },
  {
    stars: 5,
    text: 'I came for a weekend and stayed for two weeks. The community, the café, the views — everything is just perfect.',
    author: 'Mia Schulz',
    country: 'Germany',
  },
]

export const AWARDS = [
  {
    emoji: '🏆',
    platform: "TripAdvisor Travellers' Choice",
    year: '2023',
    property: 'Live Free Hostel · Rishikesh',
    theme: 'light',
  },
  {
    emoji: '⭐',
    platform: 'Booking.com Review Award',
    year: '2023 — 8.5 / 10',
    property: 'Live Free Hostel · Rishikesh',
    theme: 'blue',
  },
  {
    emoji: '⭐',
    platform: 'Booking.com Review Award',
    year: '2023 — 8.7 / 10',
    property: 'Live Free Hostel · Varanasi',
    theme: 'blue',
  },
  {
    emoji: '🌟',
    platform: 'Hostelworld — Superb 9.2',
    year: 'Best Hostels India',
    property: 'Live Free Hostel Network',
    theme: 'dark',
  },
]

export const SOCIAL_IMGS = [
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541336032412-2048a6785400?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1523239369189-4ed2aefc3a63?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&q=80',
]

// ============================================================
//  CITY ROOM TYPES — Update prices & booking links below
// ============================================================

export const CITY_ROOMS = {
  rishikesh: [
    {
      id: 'female-dorm-4',
      name: '4 Bed Female Dorm',
      type: 'Dormitory',
      desc: 'A cozy, secure, and spacious shared sanctuary designed exclusively for female solo travellers seeking privacy and community.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Privacy Curtain', 'Personal Locker', 'AC', 'WiFi'],
      roomdesc: "2  Bunk Beds",
      images:RishikeshFemaleDorm,
    },
    {
      id: 'dorm-4',
      name: '4 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'A small, intimate mixed dorm that perfectly balances a social backpacker vibe with ample personal space.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Personal Locker', 'AC', 'WiFi', 'Common Bathroom'],
      roomdesc: "2 Bunk Beds",
      images:RishikeshMixDorm4,
    },
     {
      id: 'dorm-6',
      name: '6 Bed Mixed Dorm',
      type: 'Dormitory',
      desc: 'A lively and budget-friendly shared room ideal for making friends and sharing stories with fellow globetrotters.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Personal Locker', 'AC', 'WiFi', 'Common Bathroom'],
      roomdesc: "3 Bunk Beds",
      images:RishikeshMixDorm6,
    },
    {
      id: 'private',
      name: 'Private Room',
      type: 'Private',
      desc: 'A clean, peaceful, and comfortable private space offering the perfect quiet escape after a day of adventure.',
      price: 599,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['En‑suite Bathroom', 'AC', 'WiFi', 'Double Bed'],
      roomdesc:"1 Queen Size Bed",
      images:RishikeshPrivate
    },
    {
      id: 'DeluxePrivate',
      name: 'Deluxe Private Room',
      type: 'Private',
      desc: 'A premium, spacious well ventilated retreat featuring seating furniture &  extra comfort for ultimate relaxation.',
      price: 599,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['En‑suite Bathroom', 'AC', 'WiFi', 'Double Bed'],
      roomdesc:"1 King Size Bed ",
      images:RishikeshDeluxe,
    },
  ],

  dehradun: [
    {
      id: 'dorm-4',
      name: '4 Bed Dormitory',
      type: 'Dormitory',
      desc: 'Comfortable bunk beds with privacy curtains, personal lockers, and charging points.',
      price: 599,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Privacy Curtain', 'Personal Locker', 'AC', 'WiFi'],
    },
    {
      id: 'dorm-6',
      name: '6 Bed Dormitory',
      type: 'Dormitory',
      desc: 'Budget-friendly dorm with all essentials — perfect for solo travelers.',
      price: 499,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Personal Locker', 'AC', 'WiFi', 'Common Bathroom'],
    },
    {
      id: 'dorm-8',
      name: '8 Bed Dormitory',
      type: 'Dormitory',
      desc: 'Great value dorm for backpackers with secure lockers and clean bathrooms.',
      price: 399,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Personal Locker', 'WiFi', 'Common Bathroom'],
    },
    {
      id: 'deluxe-private',
      name: 'Deluxe Private Room',
      type: 'Private',
      desc: 'Spacious private room with premium amenities and mountain views.',
      price: 1999,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['En‑suite Bathroom', 'AC', 'WiFi', 'King Bed', 'Mountain View'],
    },
    {
      id: 'family-private',
      name: 'Family Private Room',
      type: 'Private',
      desc: 'Perfect for families — spacious room with multiple beds and all comforts.',
      price: 2499,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['En‑suite Bathroom', 'AC', 'WiFi', 'Multiple Beds'],
    },
    {
      id: 'female-dorm',
      name: 'Female Only Dormitory',
      type: 'Dormitory',
      desc: 'Safe and comfortable female-only dorm with extra privacy.',
      price: 549,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Female Only', 'Personal Locker', 'AC', 'WiFi'],
    },
  ],

  varanasi: [
    {
      id: 'dorm-6',
      name: '6 Bed Dormitory',
      type: 'Dormitory',
      desc: 'Budget-friendly dorm with all essentials — perfect for solo travelers.',
      price: 499,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Personal Locker', 'AC', 'WiFi', 'Common Bathroom'],
    },
    {
      id: 'dorm-6-female',
      name: '6 Bed Female Dormitory',
      type: 'Dormitory',
      desc: 'Safe and comfortable female-only dorm near the ghats.',
      price: 549,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Female Only', 'Personal Locker', 'AC', 'WiFi'],
    },
    {
      id: 'dorm-8',
      name: '8 Bed Dormitory',
      type: 'Dormitory',
      desc: 'Great value dorm for backpackers with secure lockers.',
      price: 399,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Personal Locker', 'WiFi', 'Common Bathroom'],
    },
    {
      id: 'dorm-10',
      name: '10 Bed Dormitory',
      type: 'Dormitory',
      desc: 'Most affordable option — great for budget backpackers.',
      price: 349,        // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['Personal Locker', 'WiFi', 'Common Bathroom'],
    },
    {
      id: 'deluxe-private',
      name: 'Deluxe Private Room',
      type: 'Private',
      desc: 'Spacious private room with premium amenities near the ghats.',
      price: 1999,       // TODO: Update price
      bookingUrl: 'https://www.booking.com',  // TODO: Update booking link
      amenities: ['En‑suite Bathroom', 'AC', 'WiFi', 'Double Bed'],
    },
  ],
}

// ============================================================
//  CITY ITINERARY — Update days & activities below
// ============================================================

export const CITY_ITINERARY = {
  rishikesh: [
    {
      day: 'Day 1 · Arrive & Explore',
      activities: [
        'Check-in at Live Free Hostel',  // TODO: Update activities
        'Local market Exploration - Ram Jhula & Laxman Jhula.',
        'Sunset Ganga aarti at Triveni Ghat/ Parmarth Niketan.',
      ],
    },
    {
      day: 'Day 2 · Adventure Day',
      activities: [
        'Sunrise at Kunjapuri Temple.',          // TODO: Update activities
        'Cafe hopping in Tapovan.',
        'Spend evening at Ganga Ghat.',
      ],
    },
    {
      day: 'Day 3 · Culture & Chill',
      activities: [
        'Beatles Ashram visit.',          // TODO: Update activities
        'Trip to Vashisth Gufa.',
        'Live Music night at the hostel',
      ],
    },
  ],

  dehradun: [
    {
      day: 'Day 1 · Arrive & Settle',
      activities: [
        'Check-in at Live Free Hostel',   // TODO: Update activities
        'Explore Paltan Bazaar',
        'Dinner at a local dhaba',
      ],
    },
    {
      day: 'Day 2 · Nature & History',
      activities: [
        "Robber's Cave (Guchupani)",      // TODO: Update activities
        'Forest Research Institute',
        'Sahastradhara waterfalls',
      ],
    },
    {
      day: 'Day 3 · Mussoorie Day Trip',
      activities: [
        'Drive up to Mussoorie',          // TODO: Update activities
        'Mall Road & Kempty Falls',
        'Back to hostel by evening',
      ],
    },
  ],

  varanasi: [
    {
      day: 'Day 1 · Arrive & Absorb',
      activities: [
        'Check-in at Live Free Hostel',   // TODO: Update activities
        'Evening boat ride on the Ganges',
        'Dashashwamedh Ghat aarti',
      ],
    },
    {
      day: 'Day 2 · Culture & Food',
      activities: [
        'Sunrise boat ride',              // TODO: Update activities
        'Vishwanath Temple & narrow lanes',
        'Street food & chai walk',
      ],
    },
    {
      day: 'Day 3 · History & Shopping',
      activities: [
        'Sarnath Buddhist ruins',         // TODO: Update activities
        'Banarasi silk shopping',
        'Farewell dinner by the ghats',
      ],
    },
  ],
}

// ============================================================
//  PROPERTY POLICY — Update per city below
//  Each city has an array of policy points.
//  Edit the text inside each string as needed.
// ============================================================

export const CITY_PROPERTY_POLICY = {
  rishikesh: [
    // TODO: Replace with actual property policies for Rishikesh
    'Guests must present a valid government-issued ID at check-in.',
    'Quiet hours are strictly observed from 11:00 PM to 7:00 AM.',
    'No outside alcohol is permitted on the premises.',
    'Smoking is only allowed in designated outdoor areas.',
    'Common areas must be kept clean — please wash your dishes after use.',
    'Visitors (non-guests) are not allowed inside dormitory areas.',
    'The hostel is not responsible for loss of valuables — use the provided lockers.',
    'Pets are not allowed anywhere on the property.',
  ],
  dehradun: [
    // TODO: Replace with actual property policies for Dehradun
    'Guests must present a valid government-issued ID at check-in.',
    'Quiet hours are strictly observed from 11:00 PM to 7:00 AM.',
    'No outside alcohol is permitted on the premises.',
    'Smoking is only allowed in designated outdoor areas.',
    'Common areas must be kept clean — please wash your dishes after use.',
    'Visitors (non-guests) are not allowed inside dormitory areas.',
    'The hostel is not responsible for loss of valuables — use the provided lockers.',
    'Pets are not allowed anywhere on the property.',
  ],
  varanasi: [
    // TODO: Replace with actual property policies for Varanasi
    'Guests must present a valid government-issued ID at check-in.',
    'Quiet hours are strictly observed from 11:00 PM to 7:00 AM.',
    'No outside alcohol is permitted on the premises.',
    'Smoking is only allowed in designated outdoor areas.',
    'Common areas must be kept clean — please wash your dishes after use.',
    'Visitors (non-guests) are not allowed inside dormitory areas.',
    'The hostel is not responsible for loss of valuables — use the provided lockers.',
    'Pets are not allowed anywhere on the property.',
  ],
}

// ============================================================
//  MUST READS — Helpful articles/tips shown on property page
//  Each city has an array of cards.
//  Edit title, desc, and link for each card.
//  'tag' is a small label shown on the card (e.g. 'Tips', 'Guide')
// ============================================================

export const CITY_MUST_READS = {
  rishikesh: [
    {
      // TODO: Replace with real article title
      title: 'Top 10 Things to Do in Rishikesh',
      // TODO: Replace with real description
      desc: 'From sunrise yoga to river rafting — here is your complete guide to experiencing the best of Rishikesh.',
      tag: 'Guide',                         // TODO: Update tag (e.g. 'Tips', 'Guide', 'Food', 'Adventure')
      img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'Best Cafes Near Laxman Jhula',
      // TODO: Replace with real description
      desc: 'A curated list of cozy cafes with river views, great chai, and the perfect backpacker vibe.',
      tag: 'Food',                          // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'River Rafting in Rishikesh: Everything You Need to Know',
      // TODO: Replace with real description
      desc: 'Safety tips, best operators, ideal season, and what to expect on the rapids.',
      tag: 'Adventure',                     // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
  ],
  dehradun: [
    {
      // TODO: Replace with real article title
      title: "A Traveller's Guide to Dehradun",
      // TODO: Replace with real description
      desc: 'Explore colonial architecture, pine forests, and the gateway to the great Himalayas.',
      tag: 'Guide',                         // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'Day Trip to Mussoorie from Dehradun',
      // TODO: Replace with real description
      desc: 'Everything you need for a perfect day trip to the Queen of Hills — timings, transport, must-stops.',
      tag: 'Day Trip',                      // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: "Robber's Cave & Sahastradhara: Nature Escapes Near Dehradun",
      // TODO: Replace with real description
      desc: 'Two iconic natural spots just a short ride from the hostel — perfect for a half-day adventure.',
      tag: 'Nature',                        // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
  ],
  varanasi: [
    {
      // TODO: Replace with real article title
      title: 'The Soul of Varanasi: A First-Timer\'s Guide',
      // TODO: Replace with real description
      desc: 'Ancient ghats, morning rituals, and the electric energy of the oldest living city on earth.',
      tag: 'Guide',                         // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'Best Street Food in Varanasi',
      // TODO: Replace with real description
      desc: 'Kachori sabzi, banarasi paan, lassi, and more — the ultimate food walk guide.',
      tag: 'Food',                          // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1523239369189-4ed2aefc3a63?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
    {
      // TODO: Replace with real article title
      title: 'Sarnath Day Trip: Buddhism\'s Birthplace Near Varanasi',
      // TODO: Replace with real description
      desc: 'A peaceful half-day escape to where the Buddha gave his first sermon after enlightenment.',
      tag: 'History',                       // TODO: Update tag
      img: 'https://images.unsplash.com/photo-1541336032412-2048a6785400?w=600&q=80', // TODO: Replace with real image
      link: '#',                            // TODO: Replace with real article link
    },
  ],
}

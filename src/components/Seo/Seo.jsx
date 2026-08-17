import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://livefreehostels.com'
const DEFAULT_IMAGE = '/og-images/default.jpg'

const propertyData = {
  '/rishikesh': {
    name: 'Live Free Hostel Rishikesh',
    street: 'Laxman Jhula Rd, near Anand Dham, Tapovan',
    city: 'Rishikesh',
    state: 'Uttarakhand',
    postalCode: '249192',
    image: '/og-images/rishikesh.jpg', // currently a copy of default.jpg — swap when you have a real photo
  },
  '/varanasi': {
    name: 'Live Free Hostel Varanasi',
    street: 'Nagwa Rd, Dumraon Colony',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    postalCode: '221005',
    image: '/og-images/varanasi.jpg',
  },
  '/dehradun': {
    name: 'Live Free Hostel Dehradun',
    street: '88, Village Sinola, Malsi, Mussoorie Road',
    city: 'Dehradun',
    state: 'Uttarakhand',
    postalCode: '248009',
    image: '/og-images/dehradun.jpg',
  },
}

export default function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
}) {
  const canonicalUrl = `${SITE_URL}${path}`
  const property = propertyData[path]
  const resolvedImage = image || property?.image || DEFAULT_IMAGE
  const fullImageUrl = resolvedImage.startsWith('http')
    ? resolvedImage
    : `${SITE_URL}${resolvedImage}`
  const breadcrumbName = title.split('|')[0].trim()

  // Build the list of schema objects that apply to this page
  const schemas = []

  if (path === '/') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'LiveFree Hostels',
      url: SITE_URL,
      description: 'LiveFree Hostels - Stay Free. Live Bold. Premium hostels in Rishikesh, Varanasi & Dehradun.',
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LiveFree Hostel',
      url: SITE_URL,
      logo: `${SITE_URL}/og-images/default.jpg`,
      sameAs: [
        'https://www.instagram.com/livefreehostels',
        'https://www.facebook.com/livefreehostels',
        'https://www.linkedin.com/company/livefreehostels',
        'https://www.youtube.com/@livefreehostels',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919999020248',
        email: 'reservation@livefreehostels.com',
        contactType: 'customer service',
      },
    })
  }

  if (property) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Hostel',
      name: property.name,
      description,
      url: canonicalUrl,
      image: fullImageUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: property.street,
        addressLocality: property.city,
        addressRegion: property.state,
        postalCode: property.postalCode,
        addressCountry: 'IN',
      },
    })
  }

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      ...(path !== '/'
        ? [{ '@type': 'ListItem', position: 2, name: breadcrumbName, item: canonicalUrl }]
        : []),
    ],
  })

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="LiveFree Hostels" />
      <meta property="og:image" content={fullImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* All JSON-LD schemas combined into ONE script tag — avoids Helmet's script dedup */}
      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  )
}
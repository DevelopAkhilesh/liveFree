import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import blogPosts from '../data/blogPosts.json'
import styles from './BlogPage.module.css'

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stories from the Road
        </motion.h1>
        <p>Travel guides, local tips &amp; everything happening around our hostels in Rishikesh, Varanasi &amp; Dehradun.</p>
      </section>

      <section className={styles.grid}>
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
          >
            <Link to={`/blog/${post.slug}`} className={styles.cardLink}>
              {post.cover && (
                <div className={styles.imgWrap}>
                  <img src={post.cover} alt={post.title} loading="lazy" />
                </div>
              )}
              <div className={styles.cardBody}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className={styles.readMore}>
                  Read more <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </section>
    </div>
  )
}

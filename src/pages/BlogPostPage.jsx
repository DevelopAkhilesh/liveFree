import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import blogPosts from '../data/blogPosts.json'
import styles from './BlogPostPage.module.css'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) document.title = `${post.title} | Live Free Hostels Blog`
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/blog" className={styles.back}>
          <ArrowLeft size={16} /> All posts
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {post.title}
        </motion.h1>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {related.length > 0 && (
          <div className={styles.related}>
            <h3>More stories</h3>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className={styles.relatedCard}>
                  {r.cover && <img src={r.cover} alt={r.title} loading="lazy" />}
                  <span>{r.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
    
        <div className={styles.topContainer}>
            <div className={styles.imgContainer}>
                <Image src='/post.jpg' fill className={styles.img} alt=''/>
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>


        <div className={styles.bottomContainer}>
              <h1 className={styles.title}> {post.title} </h1>
              <p className={styles.description}> {post.body} </p>
              <Link href={`/blog/${post.id}`} className={styles.link}>
                Read More
              </Link>          
        </div>

    </div>
  )
}

export default PostCard

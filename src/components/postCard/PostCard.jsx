import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
    
        <div className={styles.topContainer}>
            <div className={styles.imgContainer}>
                <Image src='/post.jpg' fill className={styles.img} alt=''/>
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>


        <div className={styles.bottomContainer}>
              <h1 className={styles.title}> Title </h1>
              <p className={styles.description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta officia autem molestias quia ut eveniet amet. Deleniti magni id ab. Unde, iusto eligendi ea impedit aspernatur, cupiditate incidunt sed voluptatibus distinctio, exercitationem quaerat enim! Suscipit et odio, odit itaque sunt aperiam illo nam voluptas deserunt iste distinctio? Dolorum, voluptatum. </p>
              <Link href='/blog/post' className={styles.link}>
                Read More
              </Link>          
        </div>

    </div>
  )
}

export default PostCard

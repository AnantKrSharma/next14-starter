import React from 'react'
import styles from './post.module.css'
import Image from 'next/image'

const SinglePostPage = () => {

  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/26584709/pexels-photo-26584709/free-photo-of-two-motorcyclists-riding-down-a-road-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                 alt='' 
                 className={styles.img}
                 fill
          />
      </div>

      <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          
          <div className={styles.detail}>
                <Image src='https://images.pexels.com/photos/26584709/pexels-photo-26584709/free-photo-of-two-motorcyclists-riding-down-a-road-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                      className={styles.avatar}
                      width={50}
                      height={50}
                />

                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Terry Jefferson</span>
                </div>

                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Publish</span>
                    <span className={styles.detailValue}>11-04-2024</span>
                </div>
          </div>
        
          <div className={styles.content}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia repellendus esse aliquam, officiis exercitationem natus accusamus blanditiis assumenda eos commodi velit labore amet molestiae voluptatum fuga dolores qui pariatur? Iure, dolor veritatis unde voluptatem laudantium est adipisci voluptatibus eius ea dignissimos laborum dicta perferendis nisi deleniti sint tempora modi voluptates?
          </div>
      </div>

    </div>
  )
}

export default SinglePostPage

'use client';

import PostUser from '@/components/postUser/PostUser';
import styles from './post.module.css'
import Image from 'next/image'
import { Suspense } from 'react';
import { getPost } from '@/library/data';

// Fetch Data with an API :

// const getPost = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//     if(!res.ok){
//       throw new Error("Error occured.")
//     }
//     const data = await res.json();

//     return data;
// }

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // Fetch Data with an API :
  // const postData = await getPost(slug)
  
  // Fetch Data without an API :
  const postData = await getPost(parseInt(slug))
  console.log(postData);

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
            <h1 className={styles.title}>{postData.title}</h1>
            
            <div className={styles.detail}>
                  <Image src='https://images.pexels.com/photos/26584709/pexels-photo-26584709/free-photo-of-two-motorcyclists-riding-down-a-road-in-the-woods.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className={styles.avatar}
                        width={50}
                        height={50}
                  />
                  <Suspense fallback={<div>Loading...</div>}>
                    <PostUser userId={postData.userId}/>
                  </Suspense>

                  <div className={styles.detailText}>
                      <span className={styles.detailTitle}>Publish</span>
                      <span className={styles.detailValue}>11-04-2024</span>
                  </div>
            </div>
          
            <div className={styles.content}>
                {postData.body}     
            </div>
        </div>

    </div>
  )
}

export default SinglePostPage

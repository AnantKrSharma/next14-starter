'use client'

import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/library/data'

// Fetch Data with an API :

// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-cache',  next: { revalidate: 0 } });
  
//   if(!res.ok){
//     throw new Error('Something is wrong.')
//   }
//   const data = await res.json();
  
//   return data;
// }


const BlogPage = async () => {
  // Fetch Data with an API :
  // const postData = await getData();

  // Fetch Data without an API : 
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      
      {posts.map((item) => (
        <div className={styles.post} key={item.id}>
          <PostCard post={item}/>
        </div>
      ))}

    </div>
  )
}

export default BlogPage

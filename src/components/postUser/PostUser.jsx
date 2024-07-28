import React from 'react'
import styles from './postUser.module.css'
import { getUser } from '@/library/data'

// Fetch Data with an API :

// const getUser = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' })
//     if(!res.ok){
//         throw new Error("An error occured.")
//     }
    
//     const data = await res.json();

//     return data;
// }

const PostUser = async ({ userId }) => {
    // Fetch Data with an API :
    // const user = await getUser(userId);
    
    // Fetch Data without an API :
    const user = await getUser(userId)

    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.name}</span>
        </div>
    )
}

export default PostUser

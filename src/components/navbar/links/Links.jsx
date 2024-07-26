'use client';

import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'
import Image from 'next/image';

const links = [{
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Blogs',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact'
    }]

    // temporary
    const session = true;
    const isAdmin = true;


const Links = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
                <div className={styles.links}>
                    { links.map( link => <NavLink item={link} key={link.title} /> ) }

                    
                    { session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }}/>}
                            <button className={styles.logout}>Logout</button>
                        </>
                        ) : ( 
                            <NavLink item={{ title: 'Login', path: '/login' }} />
                        ) }

                </div>

                <Image src='/menu.png' 
                       alt=''
                       className={styles.menuButton} 
                       height={30}
                       width={30}
                       onClick={() => setOpen(prev => !prev)}
                />

                { open && (
                            <div className={styles.mobileLinks}>
                                { links.map( link => <NavLink item={link} key={link.title}/> )}
                            </div>
                ) }

        </div>
    )
}

export default Links

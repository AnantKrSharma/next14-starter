import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imageContainer}>
          <Image src='/contact.png' fill className={styles.contactImage}/>
      </div>
      
      <div className={styles.formContainer}>
          <form action="" className={styles.form}>
                <input type="text" placeholder='Name and Surname'/>
                <input type="email" placeholder='Email address'/>
                <input type="number" placeholder='Phone Number (Optional)'/>

                <textarea name="" id="" cols='30' rows='10' placeholder='Message'></textarea>
               
                <div className={styles.buttonContainer}>
                  <button>Send</button>
                </div>
          </form>
      </div>

    </div>
  )
}

export default ContactPage

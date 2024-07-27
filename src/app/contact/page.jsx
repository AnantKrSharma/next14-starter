import styles from './contact.module.css'
import Image from 'next/image'
// import { useEffect, useState } from 'react'
// import dynamic from 'next/dynamic'
// const HydrationTestNoSSR = dynamic(() => import('@/components/HydrationTest.jsx'), { ssr: false })

const ContactPage = () => {
  // const a = Math.random();
  // const [rendered, setRendered] = useState(false);
  // useEffect(() => {
  //   setRendered(true);
  // }, [])

  return (
    <div className={styles.container}>
      {/* <HydrationTestNoSSR /> */}
      {/* <div suppressHydrationWarning>{a}</div> */}
      {/* {setRendered && a} */}

      <div className={styles.imageContainer}>
          <Image src='/contact.png' fill className={styles.contactImage} alt=''/>
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

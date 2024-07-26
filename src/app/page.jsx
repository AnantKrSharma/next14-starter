import Link from 'next/link';
import styles from './home.module.css'
import Image from 'next/image';

const HomePage = () => {
  return <div className={styles.container}>
    
      <div className={styles.textContainer}>
            <h1 className={styles.title}> Creative Thoughts Agency. </h1>
            <p className={styles.description}> Publish your passions your way. Whether you'd like to share your knowledge, experiences or the latest news, create a unique and beautiful blog. </p>
            
            <div className={styles.buttonContainer}>
              <Link href='/about' className={styles.button}>Learn More</Link>
              <Link href='/contact' className={styles.button}>Contact</Link>
            </div>

            <div className={styles.brandImgContainer}>
              <Image src='/brands.png' fill className={styles.brandImg} alt=''/>
            </div>
      </div>

      <div className={styles.heroImgContainer}>
            <Image src='/hero.gif' fill className={styles.heroImg} alt=''/>
      </div>

  </div>;
};

export default HomePage;

import React from 'react'
import styles from '../Styling/Footer.module.css'


const Footer = () => {
  return (

      <div className={styles.container}>
        <div className={styles.social}>
            <p className={styles.socialIcon}>Linkedin</p>
            <p className={styles.socialIcon}>Github</p>
            <p className={styles.socialIcon}>Personal</p>
          </div>
          <p className={styles.emailText}>Email: Iamartindizon@gmail.com</p>
          <p className={styles.trademarkText}>TM: AaronDizon</p>
      </div>


  )
}

export default Footer